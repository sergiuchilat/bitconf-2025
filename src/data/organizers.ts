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

/** The people who organise BitConf 2026, shown in the "Organizing Team" section. */
export const ORGANIZERS_2026: Organizer[] = [
  {
    name: "Sergiu Chilat",
    role: "Organizer",
    company: "Adtelligent",
    companyLink: "https://adtelligent.com",
    image: "/speakers/portraits/Sergiu Chilat.png",
    linkedinUrl: "https://www.linkedin.com/in/sergiu-chilat/"
  },
  { name: "Anastasia Gaideic" },
  { name: "Adela Gorea" },
  {
    name: "Corina Negara",
    role: "Administrator",
    company: "Nortek"
  },
  { name: "Dmitrii Socur" }
];
