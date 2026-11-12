export interface ScheduleEvent {
  title: string;
  speaker: string;
  type: string;
  track?: string;
  duration?: string;
  /**
   * For a workshops-track event: how many main-track slots it runs parallel
   * to, starting from its own. The card is drawn spanning all of them.
   */
  spanSlots?: number;
  /**
   * Panel members, each shown with an avatar (from the avatar map, generic
   * icon otherwise) and name. "TBA" marks a seat not yet filled.
   */
  panelists?: { name: string; detail?: string }[];
  /** Session abstract for the speaker pages, one string per paragraph. */
  abstract?: string[];
}

export interface ScheduleSlot {
  time: string;
  events: ScheduleEvent[];
}

/**
 * Lowercase speaker name -> avatar shown next to their schedule entry.
 * A schedule event lists every matching avatar, so shared slots (panels,
 * co-presented talks) show all their speakers.
 */
export type ScheduleAvatars = Record<string, string>;

export const AVATARS_2025: ScheduleAvatars = {
  'adrian romanov': '/schedule/Schedule photo - Adrian Romanov.png',
  'diana lari': '/schedule/Schedule photo - Diana Lari.png',
  'eugen zagorcea': '/schedule/Schedule photo - Eugen Zagorcea.png',
  'petru maleru': '/schedule/Schedule photo - Petru Maleru.png',
  'radu dumbraveanu': '/schedule/Schedule photo - Radu Dumbraveanu.png',
  'radu tataru': '/schedule/Schedule photo - Radu Tataru.png',
  'roman fiodorov': '/schedule/Schedule photo - Roman Fiodorov.png',
  'sergiu chilat': '/schedule/Schedule photo - Sergiu Chilat.png',
  'veronica covali': '/schedule/Schedule photo - Veronica Covali.png',
  'cristina volontir': '/schedule/Schedule photo - Cristina Volontir.png',
  'marina zubcu': '/schedule/Schedule photo - Marina Zubcu.png',
  'pavel curcovici': '/schedule/Schedule photo - Pavel Curcovici.png',
};

/** BitConf 2025 programme (archived, as it ran on November 8, 2025). */
export const SCHEDULE_2025: ScheduleSlot[] = [
  { time: '9:45 - 10:15', events: [{ title: 'Registration & Coffee', speaker: '', type: 'break', duration: '30 min' }] },
  { time: '10:15 - 10:30', events: [{ title: 'Opening Remarks', speaker: 'Natalia Gaşiţoi, Alecu Russo Balti State University, Rector. Ina Ciobanu, SREM Faculty Dean', type: 'keynote', duration: '15 min' }] },
  {
    time: '10:30 - 11:00',
    events: [
      {
        title: 'Chasing the AI Hype: A Senior Developer’s Perspective.',
        speaker: 'Roman Fiodorov(Founder Filosoft Company, Tech-Lead at Aiomed.com)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      },
      {
        title: 'Bug Hunting – how a QA thinks',
        speaker: 'Cristina Volontir, Marina Zubcu(Orange Systems)',
        type: 'workshop',
        track: 'workshops',
        duration: '2 hours',
        spanSlots: 4
      }
    ]
  },
  {
    time: '11:00 - 11:30',
    events: [
      {
        title: 'Pitch It. Scope It. Deliver It. How to sell ambitiously and deliver delight by design',
        speaker: 'Radu Tataru (Delivery Director SER Region, Amdaris)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '11:30 - 12:00',
    events: [
      {
        title: 'Collected Insights (2024–2025): Docker, Java, Vim, Linux, etc.',
        speaker: 'Radu Dumbraveanu (Tech Leader at AmSoft)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '12:00 - 12:30',
    events: [
      {
        title: 'I Logged Out: What Happens After You Leave IT?',
        speaker: 'Diana Lari (Former Product Owner)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '12:30 - 13:00',
    events: [
      {
        title: 'How to test an API in the era of AI',
        speaker: 'Eugen Zagorcea (Principal QA Engineer, flow48.com)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  { time: '13:00 - 13:45', events: [{ title: 'Lunch', speaker: '', type: 'break', duration: '45 min' }] },
  {
    time: '13:45 - 15:00',
    events: [
      {
        title: 'Tech Movers: From Ideas to Startups',
        speaker: 'Petru Maleru (General Manager at ARA), Veronica Covali (Co-Founder at stilio.md), Pavel Curcovici(Tekwill Balti Administrator)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '15:00 - 15:30',
    events: [
      {
        title: 'From Code to Impact: How to Bring Value Beyond Code',
        speaker: 'Adrian Romanov (Full-stack Software Engineer at Cegeka)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '15:30 - 16:00',
    events: [
      {
        title: 'Balancing AI and Traditional Methods in IT: From Academia to Industry',
        speaker: 'Sergiu Chilat(DevOps at Adteligent)',
        type: 'presentation',
        duration: '30 min'
      }
    ]
  },
  {
    time: '16:00 - 16:15',
    events: [{
      title: 'Closing Keynote / Panel Discussion.', speaker: 'Negara Corina, Nortek Administrator. Vitalie Ticau, Head of Math and Computer Science department', type: 'keynote', duration: '15 min' }]
  },
  { time: '16:15 - 17:00', events: [{ title: 'Conference Ends', speaker: 'Networking', type: 'networking', duration: '45 min' }] }
];

export const AVATARS_2026: ScheduleAvatars = {
  'roman fiodorov': '/speakers/portraits/Roman Fiodorov.png',
  'radu dumbraveanu': '/speakers/portraits/Radu Dumbraveanu.png',
  'radu tataru': '/speakers/portraits/Radu Tataru.png',
  'sergiu chilat': '/speakers/portraits/Sergiu Chilat.png',
  'roman gluck': '/speakers/portraits/Roman Gluck.png',
  'inesa maidanik': '/speakers/portraits/Inesa Maidanik.png',
  'ecaterina niculcea': '/speakers/portraits/Ecaterina Niculcea.png',
  'roman voinitchi': '/speakers/portraits/Roman Voinitchi.png',
  'diana lari': '/speakers/portraits/Diana Lari.png',
  'anton perkin': '/speakers/portraits/Anton Perkin.png',
  'vitalie jicol': '/speakers/portraits/Vitalie Jicol.png',
  'cristian brînză': '/speakers/portraits/Cristian Brinza.png',
  'natalia janu': '/speakers/portraits/Natalia Janu.png',
  'mihail pecari': '/speakers/portraits/Mihail Pecari.png',
  'pavel curcovici': '/speakers/portraits/Pavel Curcovici.png',
  'artiom burlaca': '/speakers/portraits/Artiom Burlaca.png',
};

/**
 * BitConf 2026 programme (tentative).
 * Mirrors the 2025 shape: one main presentations track, with Inesa Maidanik's
 * morning workshop and Cristian Brînză's afternoon workshop running in
 * parallel to it, like the 2025 QA workshop did.
 * Ecaterina Niculcea and Roman Voinitchi co-present and share one 30-minute
 * slot.
 */
export const SCHEDULE_2026: ScheduleSlot[] = [
  { time: '9:45 - 10:15', events: [{ title: 'Registration & Coffee', speaker: '', type: 'break', duration: '30 min' }] },
  { time: '10:15 - 10:30', events: [{ title: 'Opening Remarks', speaker: 'Natalia Gaşiţoi, Alecu Russo Balti State University, Rector. Ina Ciobanu, SREM Faculty Dean', type: 'keynote', duration: '15 min' }] },
  {
    time: '10:30 - 11:00',
    events: [
      {
        title: 'Navigating Complexity with GenAI',
        speaker: 'Radu Dumbraveanu (Lead Backend Engineer at Wellgrid)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'Generative AI makes it easy to produce code, and just as easy to produce complexity. Radu shows how a backend team can use GenAI to understand systems rather than just type faster: exploring unfamiliar code, reasoning about design decisions and breaking big changes into safe steps. You’ll hear where these tools genuinely help, where they quietly mislead, and the habits that keep a human firmly in charge of the system.'
        ]
      }
    ]
  },
  {
    time: '11:00 - 11:30',
    events: [
      {
        title: 'The Grass Is Greener? Notes from the Other Side of IT',
        speaker: 'Diana Lari (Technical Product Owner)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'Many people in IT dream of leaving it at some point, and Diana actually did. After stepping away from a role as a Technical Product Owner to see what life looks like outside the industry, Diana is now on the way back. This is an honest talk about that journey: the expectations, the surprises, and what IT looks like when you see it from the outside.'
        ]
      },
      {
        title: 'Inside the Recruiter’s Mind: How to Ace Your Interview',
        speaker: 'Inesa Maidanik (Recruiter / Researcher at Adtelligent), Artiom Burlaca (DevOps Engineer at Adtelligent)',
        type: 'workshop',
        track: 'workshops',
        duration: '1.5 hours',
        spanSlots: 3,
        abstract: [
          'A 1.5-hour hands-on workshop on job interviews, seen from both sides of the table. Inesa, a recruiter, and Artiom, a DevOps engineer, walk through the whole process, from the first call to the technical round. You’ll learn how candidates are really evaluated, which questions trip people up most often, and how to talk about your projects even when you don’t have much experience yet. Ideal for students and juniors preparing for their first IT interviews.'
        ]
      }
    ]
  },
  {
    time: '11:30 - 12:00',
    events: [
      {
        title: 'The Road to Your First Job Starts with a Well-Crafted CV',
        speaker: 'Vitalie Jicol (DevOps Engineer at Cegeka)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'Before the interview comes the CV, and for many students that is where the road to the first job stops. Vitalie shows what makes a junior CV stand out: how to structure it, what to write without work experience, and how to present university and personal projects so they speak for you. You’ll also see the most common mistakes that send a CV straight to the “no” pile, and leave with a checklist you can apply the same evening.'
        ]
      }
    ]
  },
  {
    time: '12:00 - 12:30',
    events: [
      {
        title: 'In My Unbiased Opinion, I’m Right',
        speaker: 'Radu Tataru (Delivery Director SER Region, Amdaris)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'We all believe our own judgement is objective, and that is exactly the problem. Confirmation bias, optimistic estimates and the urge to defend our first idea quietly shape every project plan and negotiation. Drawing on project delivery, client work and mentoring, Radu looks at the biases that most often steer decisions in IT and shares practical ways to catch them in yourself and others.'
        ]
      }
    ]
  },
  { time: '12:30 - 13:15', events: [{ title: 'Lunch', speaker: '', type: 'break', duration: '45 min' }] },
  {
    time: '13:15 - 13:45',
    events: [
      {
        title: 'All Stress, No Routine: A Guide for IT Professionals on How Not to End Up on a Farm',
        speaker: 'Roman Gluck (Senior Product Manager at Globant)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'Deadlines, constant context switching and chats that never go quiet: IT is full of stress, and many people in it start dreaming of a quiet farm. Roman, a product manager and mentor, shares a practical guide to spotting the early signs of burnout, handling pressure and setting boundaries without hurting your career. Light in tone but serious in substance, the talk aims to keep your career in tech sustainable, so the farm stays a choice, not an escape.'
        ]
      }
    ]
  },
  {
    time: '13:45 - 14:45',
    events: [
      {
        title: 'Business Panel',
        speaker: 'Moderated by Corina Negara (Nortek Administrator)',
        type: 'panel',
        duration: '1 hour',
        panelists: [
          { name: 'Anton Perkin', detail: 'CEO at FusionWorks, MDC.md Organizer' },
          { name: 'Natalia Janu', detail: 'Founder of Janu Education' },
          { name: 'Pavel Curcovici', detail: 'Tekwill Balti Administrator' }
        ],
        abstract: [
          'How do you turn an idea into a business, an event or a community in Moldova? Anton Perkin (FusionWorks, MDC.md), Natalia Janu (Janu Education) and Pavel Curcovici (Tekwill Bălți) talk openly about first steps, funding and grants, the legal side of starting out, and the mistakes they would avoid. The discussion is moderated by Corina Negara, and there is time at the end for your questions.'
        ]
      }
    ]
  },
  {
    time: '14:45 - 15:15',
    events: [
      {
        title: 'Making an Educational App Feel Native on Mobile',
        speaker: 'Ecaterina Niculcea (Alecu Russo Balti State University), Roman Voinitchi (Freelancer)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'An app built for learning has to compete with the polished apps students use every day, and if it feels slow or clumsy, students stop opening it. Ecaterina, who teaches at Alecu Russo Balti State University, and Roman, a freelance software engineer, share what it takes to make an educational app feel truly native on a phone. They cover the design and engineering choices behind it, the trade-offs between building fast and building well, and the details that matter most to users.'
        ]
      },
      {
        title: 'Creative Confidence Exercise',
        speaker: 'Cristian Brînză (UX/UI Designer at Cegeka)',
        type: 'workshop',
        track: 'workshops',
        duration: '1.5 hours',
        spanSlots: 3,
        abstract: [
          'Creativity isn’t a talent reserved for designers; it’s a skill you can practise. In this 1.5-hour hands-on workshop, Cristian, a UX/UI designer, guides you through short exercises from design practice to generate ideas quickly, share them without fear and build on other people’s ideas. You’ll work individually and in small groups, and leave with techniques for projects, studies and team meetings. No design experience needed, just curiosity and a pen.'
        ]
      }
    ]
  },
  {
    time: '15:15 - 15:45',
    events: [
      {
        title: 'SDLC Is Dead, Long Live the New SDLC',
        speaker: 'Mihail Pecari (Software Architect at Grid Dynamics)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'The software development life cycle has looked roughly the same for decades, but now that AI agents can write code, review changes and generate tests, every stage is changing at once. Mihail, a software architect at Grid Dynamics, looks at what the new SDLC looks like in practice: which steps get faster, which become more important, and where the bottlenecks move. The talk also covers how teams keep quality and accountability when part of the work is done by AI.'
        ]
      }
    ]
  },
  {
    time: '15:45 - 16:15',
    events: [
      {
        title: 'Architecture at Scale: A Sovereign Multi-Hypervisor Cloud for 1000+ Servers',
        speaker: 'Sergiu Chilat (DevOps Engineer & NOC Team Lead at Adtelligent)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'Step inside the ongoing work of building a sovereign multi-hypervisor cloud platform for more than 1,000 servers at Adtelligent. Sergiu walks through the architectural strategies, cost-optimization blueprints and technical trade-offs behind scaling private IaaS infrastructure. You’ll see how bare-metal automation makes a platform of this size manageable, and what the team learned along the way.'
        ]
      }
    ]
  },
  // Roman Fiodorov closes out the speaker line-up, right before the closing remarks.
  {
    time: '16:15 - 16:45',
    events: [
      {
        title: 'What to Learn in the Era of AI',
        speaker: 'Roman Fiodorov (Founder Filosoft Company, Tech-Lead at Aiomed.com)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min',
        abstract: [
          'With AI writing more and more of the code, what should you actually learn today? Roman, who has spoken at every BitConf since the first edition, draws on years of building software and leading teams to answer that question honestly. You’ll hear which skills are losing value, which are becoming more important, and how to plan your learning so that AI makes you stronger rather than replaceable.'
        ]
      }
    ]
  },
  { time: '16:45 - 17:00', events: [{ title: 'Closing Remarks', speaker: 'Vitalie Ticau, Head of Math and Computer Science department', type: 'keynote', duration: '15 min' }] },
  { time: '17:00 - 17:45', events: [{ title: 'Conference Ends', speaker: 'Networking', type: 'networking', duration: '45 min' }] }
];

/** A speaker's session, as shown on their own page. */
export interface SpeakerSession {
  /** Start time of the slot, e.g. "14:45". */
  start: string;
  event: ScheduleEvent;
}

/** Every session in `slots` a speaker presents or sits on the panel of. */
export function sessionsFor(name: string, slots: ScheduleSlot[]): SpeakerSession[] {
  const key = name.toLowerCase();
  return slots.flatMap((slot) =>
    slot.events
      .filter(
        (event) =>
          event.speaker.toLowerCase().includes(key) ||
          event.panelists?.some((p) => p.name.toLowerCase() === key)
      )
      .map((event) => ({ start: slot.time.split(' - ')[0], event }))
  );
}
