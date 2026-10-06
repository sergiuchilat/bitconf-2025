export interface EditionVenue {
  name: string;
  url?: string;
  /** Street address lines, shown on the contact card. */
  address?: string[];
  /** Google Maps embed URL for the contact map. */
  mapEmbedUrl?: string;
}

/** Headline figures for an edition, shown in the animated stat blocks. */
export interface EditionStats {
  attendees: number;
  /**
   * Omitted for an upcoming edition, where the count comes live from the
   * line-up instead of being restated here every time a speaker is added.
   */
  speakers?: number;
  hours: number;
  days: number;
  /** Figures are targets, not results: the edition has not happened yet. */
  projected?: boolean;
}

export interface Edition {
  /** Calendar year of the edition. */
  year: number;
  /** 4 -> "4th Edition". */
  editionNumber: number;
  /** Route to this edition's page. */
  href: string;
  /** Human readable date, or null while it is still to be announced. */
  date: string | null;
  /** Machine readable date (YYYY-MM-DD), used for structured data. */
  dateISO: string | null;
  venue: EditionVenue | null;
  format: string;
  /** Ticketing page, or null while registration has not opened. */
  ticketUrl: string | null;
  status: 'past' | 'upcoming';
  /** Only set once the edition has happened. */
  stats: EditionStats | null;
}

const ORDINALS = ['th', 'st', 'nd', 'rd'];

/** 1 -> "1st", 2 -> "2nd", 4 -> "4th", 11 -> "11th". */
export function ordinal(n: number): string {
  const rem100 = n % 100;
  const rem10 = n % 10;
  const suffix = rem100 >= 11 && rem100 <= 13 ? 'th' : ORDINALS[rem10] ?? 'th';
  return `${n}${suffix}`;
}

/** 4 -> "4th Edition". */
export function editionLabel(edition: Edition): string {
  return `${ordinal(edition.editionNumber)} Edition`;
}

export const EDITION_2025: Edition = {
  year: 2025,
  editionNumber: 4,
  href: '/2025',
  date: 'November 8, 2025',
  dateISO: '2025-11-08',
  venue: {
    name: 'Nortek Center, Bălți',
    url: 'https://nortek.md/',
    address: ['Strada Pușkin 38', 'Balti, Moldova'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8267891829755!2d27.928666576871344!3d47.765306471978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb1d2e8e3e3e3e%3A0x1e2e3e4e5e6e7e8e!2sStrada%20Pu%C8%99kin%2038%2C%20Balti%2C%20Moldova!5e0!3m2!1sen!2sus!4v1635456789012!5m2!1sen!2sus',
  },
  format: '1-Day Event',
  ticketUrl:
    'https://www.eventbrite.com/e/bit-conference-2025-tickets-1680101241039?aff=oddtdtcreator',
  status: 'past',
  stats: {
    attendees: 150,
    speakers: 12, // matches SPEAKERS_2025
    hours: 6,
    days: 1,
  },
};

export const EDITION_2026: Edition = {
  year: 2026,
  editionNumber: 5,
  href: '/',
  date: 'November 14, 2026',
  dateISO: '2026-11-14',
  venue: {
    name: 'Nortek Center, Bălți',
    url: 'https://nortek.md/',
    address: ['Strada Pușkin 38', 'Balti, Moldova'],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8267891829755!2d27.928666576871344!3d47.765306471978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb1d2e8e3e3e3e%3A0x1e2e3e4e5e6e7e8e!2sStrada%20Pu%C8%99kin%2038%2C%20Balti%2C%20Moldova!5e0!3m2!1sen!2sus!4v1635456789012!5m2!1sen!2sus',
  },
  format: '1-Day Event',
  ticketUrl: null,
  status: 'upcoming',
  // Targets, not results. `speakers` is left out on purpose — the homepage
  // counts the confirmed line-up so the tile never goes stale.
  stats: {
    attendees: 150,
    hours: 6,
    days: 1,
    projected: true,
  },
};

/** The edition the homepage promotes. */
export const CURRENT_EDITION = EDITION_2026;

/** Archived editions, newest first. */
export const PAST_EDITIONS: Edition[] = [EDITION_2025];

export const ALL_EDITIONS: Edition[] = [CURRENT_EDITION, ...PAST_EDITIONS];

/**
 * The edition whose figures a stat block should show: its own once it has
 * figures of its own, otherwise the most recent edition that does.
 */
export function statsSource(edition: Edition): Edition | null {
  if (edition.stats) return edition;
  return PAST_EDITIONS.find((past) => past.stats) ?? null;
}
