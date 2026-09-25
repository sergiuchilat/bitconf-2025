import type { Metadata } from 'next';
import Header, { NavItem } from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import ComingSoon from '@/components/ComingSoon';
import PastEditions from '@/components/PastEditions';
import Partners from '@/components/Partners';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { CURRENT_EDITION, editionLabel } from '@/config/editions';
import { SPEAKERS_2026 } from '@/data/speakers';

const edition = CURRENT_EDITION;

const navItems: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#coming-soon', label: "What's coming" },
  { href: '#past-editions', label: 'Past editions' },
  { href: '#partners', label: 'Partners' },
  { href: '#registration', label: 'Register' },
  { href: '#contact', label: 'Contact' },
];

const title = `BitConf ${edition.year} — Moldova's Premier Technology Conference`;
const when = edition.date ? `${edition.date}.` : 'Date to be announced.';
const where = edition.venue ? ` ${edition.venue.name}.` : ' Venue to be announced.';
const description = `BitConf ${edition.year}, the ${editionLabel(edition).toLowerCase()} of Moldova's leading technology conference. ${when}${where} Talks, workshops and networking — free to attend.`;

export const metadata: Metadata = {
  // Absolute: the title already names the brand, so skip the layout's "| BitConf" suffix.
  title: { absolute: title },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'BitConf',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header edition={edition} navItems={navItems} />
      <Hero edition={edition} secondary={{ label: "What's coming", targetId: 'coming-soon' }} />
      <About edition={edition} />
      <Speakers
        speakers={SPEAKERS_2026}
        frame="portrait"
        subtitle={`First names confirmed for BitConf ${edition.year} — more to come`}
        emptyMessage="The rest of the line-up is being finalised. Want to join it? Submit a proposal below."
      />
      <ComingSoon edition={edition} />
      <PastEditions />
      <Partners />
      <Registration edition={edition} />
      <Contact edition={edition} />
      <Footer edition={edition} navItems={navItems} />
    </div>
  );
}
