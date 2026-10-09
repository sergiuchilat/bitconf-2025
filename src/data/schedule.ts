export interface ScheduleEvent {
  title: string;
  speaker: string;
  type: string;
  track?: string;
  duration?: string;
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
    time: '10:30 - 11:00 / 10:30 - 12:30',
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
        duration: '2 hours'
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
};

/**
 * BitConf 2026 programme (tentative).
 * Mirrors the 2025 shape: one main presentations track, with Inesa Maidanik's
 * workshop running in parallel to it, like the 2025 QA workshop did.
 * Ecaterina Niculcea and Roman Voinitchi co-present and share one 30-minute
 * slot. The business panel is confirmed but its speakers are not yet.
 */
export const SCHEDULE_2026: ScheduleSlot[] = [
  { time: '9:45 - 10:15', events: [{ title: 'Registration & Coffee', speaker: '', type: 'break', duration: '30 min' }] },
  { time: '10:15 - 10:30', events: [{ title: 'Opening Remarks', speaker: 'Natalia Gaşiţoi, Alecu Russo Balti State University, Rector. Ina Ciobanu, SREM Faculty Dean', type: 'keynote', duration: '15 min' }] },
  {
    time: '10:30 - 11:00 / 10:30 - 12:30',
    events: [
      {
        title: 'Chasing the AI Hype: A Senior Developer’s Perspective',
        speaker: 'Roman Fiodorov (Founder Filosoft Company, Tech-Lead at Aiomed.com)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      },
      {
        title: 'Inside the Recruiter’s Mind: How to Ace Your Interview',
        speaker: 'Inesa Maidanik (Recruiter / Researcher at Adtelligent)',
        type: 'workshop',
        track: 'workshops',
        duration: '2 hours'
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
        duration: '30 min'
      }
    ]
  },
  {
    time: '11:30 - 12:00',
    events: [
      {
        title: 'Talk to be announced',
        speaker: 'Radu Dumbraveanu (Tech Leader at AmSoft Group)',
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
        title: 'Making an Educational App Feel Native on Mobile',
        speaker: 'Ecaterina Niculcea (Alecu Russo Balti State University), Roman Voinitchi (Freelancer)',
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
        title: 'Talk to be announced',
        speaker: 'Radu Tataru (Delivery Director SER Region, Amdaris)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  { time: '13:00 - 13:45', events: [{ title: 'Lunch', speaker: '', type: 'break', duration: '45 min' }] },
  {
    time: '13:45 - 14:45',
    events: [
      {
        title: 'Business Panel',
        speaker: 'Moderated by Corina Negara (Nortek Administrator). Panelists to be announced',
        type: 'panel',
        duration: '1 hour'
      }
    ]
  },
  {
    time: '14:45 - 15:15',
    events: [
      {
        title: 'Talk to be announced',
        speaker: 'Roman Gluck (Senior Product Manager at Globant)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  {
    time: '15:15 - 15:45',
    events: [
      {
        title: 'Talk to be announced',
        speaker: 'Speaker to be announced',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  // Open slots — kept on the timeline so the day's capacity is visible; filled as speakers confirm.
  {
    time: '15:45 - 16:15',
    events: [
      {
        title: 'Talk to be announced',
        speaker: 'Speaker to be announced',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  // Sergiu closes out the speaker line-up, right before the closing remarks.
  {
    time: '16:15 - 16:45',
    events: [
      {
        title: 'Talk to be announced',
        speaker: 'Sergiu Chilat (DevOps Engineer & NOC Team Lead at Adtelligent)',
        type: 'talk',
        track: 'presentations',
        duration: '30 min'
      }
    ]
  },
  { time: '16:45 - 17:00', events: [{ title: 'Closing Remarks', speaker: '', type: 'keynote', duration: '15 min' }] },
  { time: '17:00 - 17:45', events: [{ title: 'Conference Ends', speaker: 'Networking', type: 'networking', duration: '45 min' }] }
];
