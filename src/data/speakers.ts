export interface Speaker {
  name: string;
  role: string;
  company: string;
  companyLink?: string;
  /** Talk or workshop title; omitted while the programme is still being built. */
  bio?: string;
  image: string;
  linkedinUrl?: string;
}

/** BitConf 2025 line-up (archived). */
export const SPEAKERS_2025: Speaker[] = [
  {
    name: "Veronica Covali",
    role: "Entrepreneur, angel investor, and Co-Founder",
    company: "Stilio.md",
    companyLink: "https://stilio.md/",
    bio: "Tech Movers: From Ideas to Startups",
    image: "/speakers/Website speaker - Veronica Covali.png",
    linkedinUrl: "https://www.linkedin.com/in/veronicacovali"
  },
  {
    name: "Radu Dumbraveanu",
    role: "Tech Leader",
    company: "AmSoft Group",
    companyLink: "https://amsoft-group.com",
    bio: "Collected Insights (2024–2025): Docker, Java, Vim, Linux, etc.",
    image: "/speakers/Website speaker - Radu Dumbraveanu.png",
    linkedinUrl: "https://www.linkedin.com/in/radudumbraveanu"
  },
  {
    name: "Adrian Romanov",
    role: "Full-stack Software Engineer",
    company: "Cegeka",
    companyLink: "https://cegeka.com/",
    bio: "From Code to Impact: How to Bring Value Beyond Code",
    image: "/speakers/Website speaker - Adrian Romanov.png",
    linkedinUrl: "https://www.linkedin.com/in/romanovadrian/"
  },
  {
    name: "Roman Fiodorov",
    role: "Founder Filosoft Company, Tech-Lead",
    company: "Aiomed.com",
    companyLink: "https://aiomed.com/",
    bio: "Chasing the AI Hype: A Senior Developer's Perspective",
    image: "/speakers/Website speaker - Roman Fiodorov.png",
    linkedinUrl: "https://www.linkedin.com/in/roman-fiodorov-49994057/"
  },
  {
    name: "Diana Lari",
    role: "Former Product Owner",
    company: "_",
    bio: "I Logged Out: What Happens After You Leave IT?",
    image: "/speakers/Website speaker - Diana Lari.png",
    linkedinUrl: "https://www.linkedin.com/in/lari-diana-05972315a/"
  },
  {
    name: "Eugen Zagorcea",
    role: "Principal QA Engineer",
    company: "flow48.com",
    companyLink: "https://flow48.com",
    bio: "How to test an API in the era of AI",
    image: "/speakers/Website speaker - Eugen Zagorcea.png",
    linkedinUrl: "https://www.linkedin.com/in/eugeniu-zagorcea/"
  },
  {
    name: "Petru Maleru",
    role: "General Manager",
    company: "Association of Recruitment Agencies (ARA)",
    companyLink: "https://ara.md",
    bio: "The Recruiter's Playbook: Turning Teams into Innovation Engines",
    image: "/speakers/Website speaker - Petru Maleru.png",
    linkedinUrl: "https://www.linkedin.com/in/peter-maler/"
  },
  {
    name: "Radu Tataru",
    role: "Delivery Director SER Region, Amdaris, Entrepreneur, Commercial mentor and Ironman athlete",
    company: "Amdaris",
    companyLink: "https://amdaris.com",
    bio: "Pitch It. Scope It. Deliver It. How to sell ambitiously and deliver delight by design",
    image: "/speakers/Website speaker - Radu Tataru.png",
    linkedinUrl: "https://www.linkedin.com/in/radu-tataru/"
  },
  {
    name: "Sergiu Chilat",
    role: "DevOps Engineer & NOC Team Lead",
    company: "Adtelligent",
    companyLink: "https://adtelligent.com",
    bio: "Balancing AI and Traditional Methods in IT: From Academia to Industry",
    image: "/speakers/Website speaker - Sergiu Chilat.png",
    linkedinUrl: "https://www.linkedin.com/in/sergiu-chilat/"
  },
  {
    name: "Cristina Volontir",
    role: "Test manager",
    company: "Orange Systems",
    companyLink: "https://systems.orange.md/",
    bio: "Bug Hunting. How a QA thinks",
    image: "/speakers/Website speaker - Cristina Volontir.png",
    linkedinUrl: "https://www.linkedin.com/in/cristina-volontir-03335b212"
  },
  {
    name: "Marina Zubcu",
    role: "QA Analyst",
    company: "Orange Systems",
    companyLink: "https://systems.orange.md/",
    bio: "Bug Hunting. How a QA thinks",
    image: "/speakers/Website speaker - Marina Zubcu.png",
    linkedinUrl: "https://www.linkedin.com/in/zubcu-marina-973a561a0"
  },
  {
    name: "Pavel Curcovici",
    role: "Tekwill Balti Administrator",
    company: "Tekwill",
    companyLink: "https://tekwill.md/",
    bio: "Tech Movers: From Ideas to Startups",
    image: "/speakers/Website speaker - Pavel Curcovici.png",
    linkedinUrl: "https://www.linkedin.com/in/curcovici-pavel-461590101"
  }

];

/**
 * BitConf 2026 line-up — confirmed speakers only.
 * Roman Fiodorov, Radu Dumbraveanu and Radu Tataru carry over from 2025.
 */
export const SPEAKERS_2026: Speaker[] = [
  {
    name: "Roman Fiodorov",
    role: "Founder Filosoft Company, Tech-Lead",
    company: "Aiomed.com",
    companyLink: "https://aiomed.com/",
    bio: "Chasing the AI Hype: A Senior Developer's Perspective",
    image: "/speakers/Website speaker - Roman Fiodorov.png",
    linkedinUrl: "https://www.linkedin.com/in/roman-fiodorov-49994057/"
  },
  {
    name: "Radu Dumbraveanu",
    role: "Tech Leader",
    company: "AmSoft Group",
    companyLink: "https://amsoft-group.com",
    // 2025 talk was "Collected Insights (2024–2025)" — year-specific, so not carried over.
    image: "/speakers/Website speaker - Radu Dumbraveanu.png",
    linkedinUrl: "https://www.linkedin.com/in/radudumbraveanu"
  },
  {
    name: "Radu Tataru",
    role: "Delivery Director SER Region, Amdaris, Entrepreneur, Commercial mentor and Ironman athlete",
    company: "Amdaris",
    companyLink: "https://amdaris.com",
    image: "/speakers/Website speaker - Radu Tataru.png",
    linkedinUrl: "https://www.linkedin.com/in/radu-tataru/"
  }
];
