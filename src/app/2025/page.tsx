import type { Metadata } from 'next';
import Header, { NavItem } from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Registration from '@/components/Registration';
import Gallery2024 from '@/components/Gallery2024';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PastEditionBanner from '@/components/PastEditionBanner';
import { EDITION_2025, editionLabel } from '@/config/editions';
import { SPEAKERS_2025 } from '@/data/speakers';

const edition = EDITION_2025;

const navItems: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#gallery2024', label: 'Gallery' },
  { href: '#partners', label: 'Partners' },
  { href: '#contact', label: 'Contact' },
];

const title = `BitConf ${edition.year} — ${editionLabel(edition)} | Archive`;
const description = `The archive of BitConf ${edition.year}, Moldova's technology conference held on ${edition.date} at ${edition.venue?.name}. Browse the speakers, the full schedule and photos from the day.`;

export const metadata: Metadata = {
  // Absolute: the title already names the brand, so skip the layout's "| BitConf" suffix.
  title: { absolute: title },
  description,
  alternates: { canonical: edition.href },
  openGraph: {
    title,
    description,
    url: edition.href,
    siteName: 'BitConf',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function Edition2025Page() {
  return (
    <div className="min-h-screen">
      <PastEditionBanner edition={edition} />
      <Header edition={edition} navItems={navItems} />
      <Hero edition={edition} secondary={{ label: 'View Schedule', targetId: 'schedule' }} />
      <About edition={edition} />
      <Speakers speakers={SPEAKERS_2025} />
      <Schedule />
      <Gallery2024 />
      <Partners />
      <Registration edition={edition} />
      <Contact edition={edition} />
      <Footer edition={edition} navItems={navItems} />
    </div>
  );
}
