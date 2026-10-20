import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header, { NavItem } from '@/components/Header';
import Footer from '@/components/Footer';
import { CURRENT_EDITION } from '@/config/editions';
import { SPEAKERS_2026, speakerSlug } from '@/data/speakers';
import { SCHEDULE_2026, sessionsFor } from '@/data/schedule';

const edition = CURRENT_EDITION;

// The homepage's sections, reached from a speaker page.
const navItems: NavItem[] = [
  { href: '/#about', label: 'About' },
  { href: '/#speakers', label: 'Speakers' },
  { href: '/#schedule', label: 'Schedule' },
  { href: '/#past-editions', label: 'Past editions' },
  { href: '/#partners', label: 'Partners' },
  { href: '/#registration', label: 'Register' },
  { href: '/#contact', label: 'Contact' },
];

const SESSION_LABELS: Record<string, string> = {
  talk: 'Talk',
  workshop: 'Workshop',
  panel: 'Panel',
};

const confirmed = SPEAKERS_2026.filter((speaker) => speaker.name !== 'TBA');

const findSpeaker = (slug: string) => confirmed.find((speaker) => speakerSlug(speaker.name) === slug);

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return confirmed.map((speaker) => ({ slug: speakerSlug(speaker.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const speaker = findSpeaker((await params).slug);
  if (!speaker) return {};

  const title = `${speaker.name} — BitConf ${edition.year} Speaker`;
  const description =
    speaker.about?.[0] ??
    `${speaker.name}${speaker.role ? `, ${speaker.role}` : ''}, speaks at BitConf ${edition.year}.`;
  const url = `/speakers/${speakerSlug(speaker.name)}`;
  const images = speaker.image ? [encodeURI(speaker.image)] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'BitConf', type: 'profile', images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export default async function SpeakerPage({ params }: Props) {
  const speaker = findSpeaker((await params).slug);
  if (!speaker) notFound();

  const sessions = sessionsFor(speaker.name, SCHEDULE_2026);
  // A "_" company is the line-up's placeholder for "none given".
  const company = speaker.company && speaker.company !== '_' ? speaker.company : null;

  return (
    <div className="min-h-screen bg-bitconf-dark">
      <Header edition={edition} navItems={navItems} />

      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#speakers"
            className="inline-flex items-center gap-2 text-sm text-bitconf-text-secondary hover:text-white transition-colors mb-10"
          >
            <span aria-hidden="true">←</span> All speakers
          </Link>

          <div className="grid gap-10 md:grid-cols-[320px_1fr] items-start">
            <div className="aspect-square bc-speaker-frame rounded-lg overflow-hidden border border-bitconf-primary/20">
              {speaker.image ? (
                <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover object-top" />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-6xl font-semibold text-white/90">
                  {speaker.name
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')}
                </div>
              )}
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-bitconf-mint mb-3">
                BitConf {edition.year} Speaker
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">{speaker.name}</h1>
              {speaker.role && <p className="text-lg text-bitconf-primary font-medium mb-2">{speaker.role}</p>}

              <div className="flex flex-wrap items-center gap-4 text-bitconf-text-secondary mb-8">
                {company &&
                  (speaker.companyLink ? (
                    <a href={speaker.companyLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                      {company}
                    </a>
                  ) : (
                    <span>{company}</span>
                  ))}
                {speaker.linkedinUrl && (
                  <a
                    href={speaker.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-bitconf-primary transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>

              {speaker.about && (
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-10">
                  {speaker.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              <h2 className="text-xl font-semibold text-white mb-4">At BitConf {edition.year}</h2>
              {sessions.length > 0 ? (
                <ul className="space-y-3">
                  {sessions.map(({ start, event }) => (
                    <li key={`${start}-${event.title}`} className="bc-card rounded-lg p-5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-bitconf-text-secondary mb-2">
                        <span className="rounded-full bg-bitconf-primary/15 text-bitconf-primary-soft px-2.5 py-0.5 font-medium">
                          {SESSION_LABELS[event.type] ?? event.type}
                        </span>
                        <span>{edition.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{start}</span>
                        {event.duration && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{event.duration}</span>
                          </>
                        )}
                      </div>
                      <p className="text-lg text-white font-medium">{event.title}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-bitconf-text-secondary">Session details will be announced soon.</p>
              )}

              <div className="flex flex-wrap gap-4 mt-10">
                {edition.ticketUrl && (
                  <a
                    href={edition.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-bitconf-primary px-6 py-3 font-semibold text-white hover:bg-bitconf-primary-deep transition-colors"
                  >
                    Get your ticket
                  </a>
                )}
                <Link
                  href="/#schedule"
                  className="rounded-lg border border-bitconf-hairline-strong px-6 py-3 font-semibold text-white hover:bg-bitconf-surface-3 transition-colors"
                >
                  Full schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer edition={edition} navItems={navItems} />
    </div>
  );
}
