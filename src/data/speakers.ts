export interface Speaker {
  name: string;
  /** Job title; omitted when we only have the affiliation. */
  role?: string;
  company: string;
  companyLink?: string;
  /** Talk or workshop title; omitted while the programme is still being built. */
  bio?: string;
  /** Portrait in /public/speakers; a card without one falls back to initials. */
  image?: string;
  linkedinUrl?: string;
  /** Longer bio for the speaker's own page, one string per paragraph. */
  about?: string[];
}

/** "Cristian Brînză" -> "cristian-brinza"; the speaker page's URL segment. */
export const speakerSlug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

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
 * Roman Fiodorov, Radu Dumbraveanu, Radu Tataru, Sergiu Chilat and Diana Lari
 * carry over from 2025; Roman Gluck, Inesa Maidanik, Ecaterina Niculcea,
 * Roman Voinitchi, Anton Perkin, Vitalie Jicol and Cristian Brînză are new
 * for 2026.
 *
 * 2026 uses bare portraits under /speakers/portraits — the 2025 assets are
 * composed cards with the name, role and a "Conference 2025" badge baked in.
 */
export const SPEAKERS_2026: Speaker[] = [
  {
    name: "Roman Fiodorov",
    role: "Founder Filosoft Company, Tech-Lead",
    company: "Aiomed.com",
    companyLink: "https://aiomed.com/",
    bio: "What to Learn in the Era of AI",
    image: "/speakers/portraits/Roman Fiodorov.png",
    linkedinUrl: "https://www.linkedin.com/in/roman-fiodorov-49994057/",
    about: [
      "Roman has spoken at every BitConf since the very first edition, which makes 2026 Roman's fifth time on our stage.",
      "Roman is the founder of Filosoft and a tech lead at Aiomed. This year's talk, \"What to Learn in the Era of AI\", takes on the question almost everyone in IT is asking right now."
    ]
  },
  {
    name: "Radu Dumbraveanu",
    role: "Former Tech Leader",
    company: "AmSoft Group",
    companyLink: "https://amsoft-group.com",
    // 2025 talk was "Collected Insights (2024–2025)" — year-specific, so not carried over.
    image: "/speakers/portraits/Radu Dumbraveanu.png",
    linkedinUrl: "https://www.linkedin.com/in/radudumbraveanu",
    about: [
      "This is Radu's third BitConf. Radu is a former Tech Leader at AmSoft Group and holds a PhD in mathematics.",
      "Few people can explain complex things as clearly as Radu, which is exactly why we keep inviting Radu back. The talk topic will be announced soon."
    ]
  },
  {
    name: "Radu Tataru",
    role: "Delivery Director SER Region, Amdaris, Entrepreneur, Commercial mentor and Ironman athlete",
    company: "Amdaris",
    companyLink: "https://amdaris.com",
    image: "/speakers/portraits/Radu Tataru.png",
    linkedinUrl: "https://www.linkedin.com/in/radu-tataru/",
    about: [
      "This is Radu's third BitConf. Radu is Delivery Director for the SER Region at Amdaris and, on top of that, an entrepreneur, a commercial mentor and an Ironman athlete.",
      "So if you need tips on managing projects or on surviving a 180 km bike ride, Radu is the person to ask. The talk topic will be announced soon."
    ]
  },
  {
    name: "Sergiu Chilat",
    role: "DevOps Engineer & NOC Team Lead",
    company: "Adtelligent",
    companyLink: "https://adtelligent.com",
    image: "/speakers/portraits/Sergiu Chilat.png",
    linkedinUrl: "https://www.linkedin.com/in/sergiu-chilat/",
    about: [
      "Sergiu is a DevOps Engineer and NOC Team Lead at Adtelligent, and part of the team that organizes BitConf.",
      "Sergiu closes the 2026 speaker line-up, right before the closing remarks. The talk topic will be announced soon."
    ]
  },
  {
    name: "Roman Gluck",
    role: "Senior Product Manager / Public Speaking and Startup Mentor",
    company: "Globant",
    companyLink: "https://www.globant.com",
    image: "/speakers/portraits/Roman Gluck.png",
    linkedinUrl: "https://www.linkedin.com/in/roman-gluck/",
    about: [
      "Roman is a Senior Product Manager at Globant and a mentor for public speaking and startups. Roman is also part of the team behind MDC.md.",
      "2026 is Roman's first BitConf. The talk topic will be announced soon."
    ]
  },
  {
    name: "Inesa Maidanik",
    role: "Recruiter / Researcher",
    company: "Adtelligent",
    companyLink: "https://adtelligent.com",
    bio: "Inside the Recruiter's Mind: How to Ace Your Interview",
    image: "/speakers/portraits/Inesa Maidanik.png",
    linkedinUrl: "https://www.linkedin.com/in/inesa-maidanik-3084531a3/",
    about: [
      "Inesa is a Recruiter and Researcher at Adtelligent, so Inesa knows exactly what happens on the other side of the interview table.",
      "Inesa's 1.5-hour workshop, \"Inside the Recruiter's Mind: How to Ace Your Interview\", is for anyone who has ever left an interview wondering what they were actually looking for."
    ]
  },
  // Ecaterina and Roman present this talk together, so they share a bio.
  {
    name: "Ecaterina Niculcea",
    company: "Alecu Russo Balti State University",
    companyLink: "https://usarb.md",
    bio: "Making an Educational App Feel Native on Mobile",
    image: "/speakers/portraits/Ecaterina Niculcea.png",
    about: [
      "Ecaterina teaches at Alecu Russo Balti State University and presents together with Roman Voinitchi, a freelance software engineer.",
      "Their talk, \"Making an Educational App Feel Native on Mobile\", brings the classroom and real engineering together on one stage. It's the first BitConf for both of them."
    ]
  },
  {
    name: "Roman Voinitchi",
    company: "Freelancer",
    bio: "Making an Educational App Feel Native on Mobile",
    image: "/speakers/portraits/Roman Voinitchi.png",
    linkedinUrl: "https://www.linkedin.com/in/roman-voinitchi/",
    about: [
      "Roman is a freelance software engineer (ask about volleyball and you may get a longer answer than the talk itself) and presents together with Ecaterina Niculcea from Alecu Russo Balti State University.",
      "Their talk, \"Making an Educational App Feel Native on Mobile\", brings the classroom and real engineering together on one stage. It's the first BitConf for both of them."
    ]
  },
  {
    name: "Diana Lari",
    role: "Technical Product Owner",
    company: "_",
    bio: "The Grass Is Greener? Notes from the Other Side of IT",
    image: "/speakers/portraits/Diana Lari.png",
    linkedinUrl: "https://www.linkedin.com/in/lari-diana-05972315a/",
    about: [
      "Diana is a BitConf regular. Diana worked in IT as a Technical Product Owner, then stepped away to see what life looks like outside the industry, and is now planning a comeback.",
      "That's exactly what this year's talk is about: \"The Grass Is Greener? Notes from the Other Side of IT\". Lots of people think about leaving IT, but very few come back to tell everyone what they actually found out there."
    ]
  },
  {
    name: "Anton Perkin",
    role: "CEO, MDC.md Organizer",
    company: "FusionWorks",
    companyLink: "https://fusion.works",
    image: "/speakers/portraits/Anton Perkin.png",
    about: [
      "Anton is the CEO of FusionWorks and the organizer of MDC.md, the biggest IT conference in Moldova. Few people know better what it takes to put on a great conference.",
      "2026 is Anton's first BitConf, and Anton joins this year's business panel."
    ]
  },
  {
    name: "Vitalie Jicol",
    role: "DevOps Engineer",
    company: "Cegeka",
    companyLink: "https://www.cegeka.com/",
    bio: "The Road to Your First Job Starts with a Well-Crafted CV",
    image: "/speakers/portraits/Vitalie Jicol.png",
    linkedinUrl: "https://www.linkedin.com/in/vitalie-jicol/",
    about: [
      "Vitalie is a DevOps Engineer at Cegeka, the kind of engineer who keeps systems running so the rest of the team can sleep at night.",
      "For a first BitConf, Vitalie brings a talk every student will want to hear: \"The Road to Your First Job Starts with a Well-Crafted CV\"."
    ]
  },
  {
    name: "Cristian Brînză",
    role: "UX/UI Designer",
    company: "Cegeka",
    companyLink: "https://www.cegeka.com/",
    bio: "Creative Confidence Exercise",
    image: "/speakers/portraits/Cristian Brinza.png",
    linkedinUrl: "https://www.linkedin.com/in/cristi-br%C3%AEnz%C4%83-59029722b/",
    about: [
      "Cristian is a UX/UI Designer at Cegeka.",
      "For a first BitConf, Cristian brings a 1.5-hour hands-on workshop, \"Creative Confidence Exercise\". Come ready to try things out and leave a little braver about your ideas."
    ]
  },
  {
    name: "Natalia Janu",
    role: "Founder, Business Panel Speaker",
    company: "Janu Education",
    bio: "Business Panel",
    image: "/speakers/portraits/Natalia Janu.png",
    linkedinUrl: "https://www.linkedin.com/in/natalia-janu-01b658446/"
  },
  // Role to follow.
  {
    name: "Mihail Pecari",
    company: "_",
    bio: "SDLC Is Dead, Long Live the New SDLC",
    image: "/speakers/portraits/Mihail Pecari.png",
    linkedinUrl: "https://www.linkedin.com/in/mihail-pecari/",
    about: [
      "Mihail is back! After speaking at BitConf in 2022 and 2023, Mihail returns for a third time in 2026.",
      "This year's talk, \"SDLC Is Dead, Long Live the New SDLC\", looks at how the way we build software is changing."
    ]
  }
];
