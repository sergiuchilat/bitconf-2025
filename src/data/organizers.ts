export interface Organizer {
  name: string;
  /** What they do for BitConf, e.g. "Logistics" or "Speaker relations". */
  role?: string;
  company?: string;
  companyLink?: string;
  /** Bare head-and-shoulders portrait under /organizers (or /speakers/portraits). */
  image?: string;
  linkedinUrl?: string;
}

/**
 * The people who organise BitConf 2026, shown in the "Organizing Team" section.
 * Organizers who also speak are flagged `organizer` in speakers.ts instead.
 */
export const ORGANIZERS_2026: Organizer[] = [
  { name: "Anastasia Gaideic", image: "/organizers/Anastasia Gaideic.png" },
  { name: "Adela Gorea", image: "/organizers/Adela Gorea.png" },
  {
    name: "Corina Negara",
    role: "Administrator",
    company: "Nortek"
  },
  { name: "Dmitrii Socur", image: "/organizers/Dmitrii Socur.png" }
];
