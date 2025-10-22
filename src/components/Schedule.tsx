'use client';

import { useEffect, useRef, useState } from 'react';

interface ScheduleEvent {
  title: string;
  speaker: string;
  type: string;
  track?: string;
  duration?: string;
}

interface ScheduleSlot {
  time: string;
  events: ScheduleEvent[];
}

export default function Schedule() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    dateBlock: false,
    timeline: false
  });
  const titleRef = useRef<HTMLDivElement>(null);
  const dateBlockRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Function to get speaker avatars based on speaker name(s)
  const getSpeakerAvatars = (speaker: string): string[] => {
    const speakerName = speaker.toLowerCase();
    const avatars: string[] = [];
    
    // Map speaker names to their avatar files
    if (speakerName.includes('adrian romanov')) {
      avatars.push('/schedule/Schedule photo - Adrian Romanov.png');
    }
    if (speakerName.includes('diana lari')) {
      avatars.push('/schedule/Schedule photo - Diana Lari.png');
    }
    if (speakerName.includes('eugen zagorcea')) {
      avatars.push('/schedule/Schedule photo - Eugen Zagorcea.png');
    }
    if (speakerName.includes('petru maleru')) {
      avatars.push('/schedule/Schedule photo - Petru Maleru.png');
    }
    if (speakerName.includes('radu dumbraveanu')) {
      avatars.push('/schedule/Schedule photo - Radu Dumbraveanu.png');
    }
    if (speakerName.includes('radu tataru')) {
      avatars.push('/schedule/Schedule photo - Radu Tataru.png');
    }
    if (speakerName.includes('roman fiodorov')) {
      avatars.push('/schedule/Schedule photo - Roman Fiodorov.png');
    }
    if (speakerName.includes('sergiu chilat')) {
      avatars.push('/schedule/Schedule photo - Sergiu Chilat.png');
    }
    if (speakerName.includes('veronica covali')) {
      avatars.push('/schedule/Schedule photo - Veronica Covali.png');
    }
    
    return avatars;
  };

  // Function to render speaker avatars (single or multiple)
  const renderSpeakerAvatars = (speaker: string, hoverColor: string = 'bitconf-secondary') => {
    const avatars = getSpeakerAvatars(speaker);
    
    if (avatars.length === 0) {
      // Fallback to generic icon
      return (
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-bitconf-secondary/30">
          <svg className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-bitconf-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      );
    }
    
    if (avatars.length === 1) {
      // Single avatar
      return (
        <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 transition-all duration-300 ease-out group-hover:border-${hoverColor}/50`}>
          <img 
            src={avatars[0]} 
            alt={speaker}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      );
    }
    
    // Multiple avatars - display them side by side with slight overlap
    return (
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <div 
            key={index}
            className={`w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600 transition-all duration-300 ease-out group-hover:border-${hoverColor}/50`}
            style={{ zIndex: avatars.length - index }}
          >
            <img 
              src={avatar} 
              alt={`Speaker ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target === titleRef.current) {
              setIsVisible(prev => ({ ...prev, title: true }));
            } else if (target === dateBlockRef.current) {
              setIsVisible(prev => ({ ...prev, dateBlock: true }));
            } else if (target === timelineRef.current) {
              setIsVisible(prev => ({ ...prev, timeline: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (dateBlockRef.current) observer.observe(dateBlockRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  // Create a structured schedule with parallel sessions grouped together
  const scheduleSlots: ScheduleSlot[] = [
    { time: '10:15 - 10:30', events: [{ title: 'Opening Remarks', speaker: 'Natalia Gaşiţoi, Alecu Russo Balti State University, Rector', type: 'keynote' }] },
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
          speaker: 'Cristina Sucner, Cristina Volontir, Marina Zubcu, Cristina Grosu(Orange Systems)',
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
          title: 'Delivery Director SER Region, Amdaris, Entrepreneur, Commercial mentor and Ironman athlete',
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
          title: 'How to test an API in the era of AI',
          speaker: 'Eugen Zagorcea (Principal QA Engineer, flow48.com)',
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
          title: 'Collected Insights (2024–2025): Docker, Java, Vim, Linux, etc.',
          speaker: 'Radu Dumbraveanu (Tech Leader at AmSoft)',
          type: 'talk',
          track: 'presentations',
          duration: '30 min'
        }
      ]
    },
    { time: '12:30 - 13:15', events: [{ title: 'Coffee Break', speaker: '', type: 'break' }] },
    {
      time: '13:15 - 14:30 / 13:15 - 15:15',
      events: [
        {
          title: 'Tech Movers: From Ideas to Startups',
          speaker: 'Petru Maleru (General Manager at ARA), Veronica Covali (Co-Founder at stilio.md)',
          type: 'talk',
          track: 'presentations',
          duration: '30 min'
        }
      ]
    },
    {
      time: '14:30 - 15:00 / 14:30 - 15:30',
      events: [
        {
          title: 'I Logged Out: What Happens After You Leave IT?',
          speaker: 'Diana Lari (Former Product Owner)',
          type: 'talk',
          track: 'presentations',
          duration: '30 min'
        },
        {
          title: 'TBA',
          speaker: 'TBA',
          type: 'workshop',
          track: 'workshops',
          duration: '2 hours'
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
          type: 'presentation'
        }
      ]
    },
    {
      time: '16:00 - 16:15',
      events: [{ title: 'Closing Keynote / Panel Discussion', speaker: '', type: 'keynote' }]
    },
    { time: '16:15 - 17:00', events: [{ title: 'Conference Ends', speaker: 'Networking', type: 'networking' }] }
  ];


  const getEventIcon = (type: string) => {
    const iconClass = "w-5 h-5 text-bitconf-accent";

    switch (type) {
      case 'keynote':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'talk':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4a2 2 0 012 2v2z" />
          </svg>
        );
      case 'workshop':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        );
      case 'panel':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'break':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'networking':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'border-l-bitconf-primary bg-bitconf-primary/10';
      case 'talk':
        return 'border-l-bitconf-secondary bg-bitconf-secondary/10';
      case 'workshop':
        return 'border-l-bitconf-accent bg-bitconf-accent/10';
      case 'panel':
        return 'border-l-bitconf-accent bg-bitconf-accent/10';
      case 'break':
        return 'border-l-gray-500 bg-gray-700/50';
      case 'networking':
        return 'border-l-bitconf-secondary bg-bitconf-secondary/10';
      default:
        return 'border-l-gray-500 bg-gray-700/50';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Enhanced Parallax Background Abstractions */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with complex movement */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-bitconf-primary/20 via-bitconf-secondary/15 to-transparent rounded-full blur-3xl transition-transform duration-700 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.5}px) translateX(${scrollY * 0.3}px) rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.001})`
             }}></div>
        <div className="absolute bottom-20 left-1/5 w-80 h-80 bg-gradient-to-tr from-bitconf-turquoise/25 via-bitconf-accent/20 to-transparent rounded-full blur-2xl transition-transform duration-700 ease-out"
             style={{
               transform: `translateY(${scrollY * 0.6}px) translateX(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)`
             }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from-bitconf-secondary/30 to-transparent rounded-full blur-2xl transition-transform duration-700 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * 0.3}deg) scale(${1.2 - scrollY * 0.0005})`
             }}></div>

        {/* Abstract geometric patterns */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-bitconf-primary/50 rotate-45 transition-transform duration-700 ease-out"
             style={{
               transform: `translateY(${scrollY * 0.8}px) rotate(${45 + scrollY * 0.5}deg)`
             }}></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-3 border-bitconf-accent/60 rounded-full transition-transform duration-700 ease-out"
             style={{
               transform: `translateY(${scrollY * -1.0}px) translateX(${scrollY * 0.4}px) scale(${1 + scrollY * 0.001})`
             }}></div>

        {/* Floating lines and paths */}
        <svg className="absolute top-16 left-1/4 w-48 h-48 text-bitconf-turquoise/15 transition-transform duration-1000"
             style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.1}deg)` }}
             viewBox="0 0 100 100">
          <path d="M20,20 Q50,5 80,20 T80,50 Q65,80 35,65 T20,20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="20" cy="20" r="2" fill="currentColor"/>
          <circle cx="80" cy="50" r="1.5" fill="currentColor"/>
        </svg>

        {/* Animated mesh pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="scheduleMesh" width="80" height="80" patternUnits="userSpaceOnUse"
                       patternTransform={`rotate(${scrollY * 0.05}) scale(${1 + scrollY * 0.0001})`}>
                <path d="M 80 0 L 40 40 L 0 0 M 40 40 L 80 80 M 40 40 L 0 80" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#scheduleMesh)" />
          </svg>
        </div>

        {/* Dynamic particles */}
        <div className="absolute top-1/4 right-16 w-3 h-3 bg-bitconf-primary/40 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.35}px) translateX(${scrollY * 0.15}px)`,
               boxShadow: `0 0 ${8 + scrollY * 0.02}px rgba(59, 130, 246, 0.3)`
             }}></div>
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-bitconf-accent/50 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.28}px) translateX(${scrollY * -0.08}px)`,
               boxShadow: `0 0 ${6 + scrollY * 0.015}px rgba(16, 185, 129, 0.4)`
             }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible.title 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Conference Schedule</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One day packed with inspiring talks, hands-on workshops, and networking opportunities
          </p>
        </div>

        <div
          ref={dateBlockRef}
          className={`mb-12 transition-all duration-1000 ease-out ${
            isVisible.dateBlock 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/30 border border-gray-700/50 p-8 text-center backdrop-blur-sm">
            <div className="inline-flex items-center gap-3 mb-3">
              <svg className="w-6 h-6 text-bitconf-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-3xl font-bold text-white">November 8, 2025</h3>
              <svg className="w-6 h-6 text-bitconf-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-gray-300 text-lg">
              <span className="text-bitconf-turquoise font-semibold">Nortek Center, Bălți</span> • Full Day Event
            </p>
          </div>
        </div>

        {/* Unified Schedule Timeline */}
        <div
          ref={timelineRef}
          className={`mb-16 transition-all duration-1200 ease-out ${
            isVisible.timeline 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            {scheduleSlots.map((slot, timeIndex) => (
              <div key={slot.time} className="mb-8">
                {/* Time marker */}
                <div className="flex items-center mb-4">
                  <div className="text-bitconf-primary font-bold text-xl mr-4">
                    {slot.time}
                  </div>
                  <div className="flex-grow h-px bg-gradient-to-r from-bitconf-primary/40 to-transparent"></div>
                </div>

                {/* Events at this time */}
                {slot.events.some(e => e.track === 'presentations') && slot.events.some(e => e.track === 'workshops') ? (
                  /* Parallel sessions - always 2 columns for presentations and workshops */
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Presentations column */}
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-bitconf-secondary flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8V4a2 2 0 012 2v2z" />
                          </svg>
                          Presentations Track
                        </h4>
                      </div>
                      {slot.events.filter(e => e.track === 'presentations').map((event, eventIndex) => (
                        <div key={eventIndex} className={`group rounded-xl p-4 border backdrop-blur-sm bg-gray-800/20 ${getEventColor(event.type)} cursor-pointer transition-all duration-300 ease-out hover:bg-gray-700/30 hover:border-bitconf-secondary/50 h-40 flex flex-col justify-between`}>
                          <div className="flex items-start gap-4 h-full">
                            <div className="flex-shrink-0">
                              {renderSpeakerAvatars(event.speaker, 'bitconf-secondary')}
                            </div>
                            <div className="flex-grow flex flex-col justify-between h-full">
                              <div>
                                <h4 className="text-lg font-semibold text-white leading-tight mb-2 transition-colors duration-300 group-hover:text-bitconf-secondary">{event.title}</h4>
                                {event.speaker && (
                                  <p className="text-bitconf-accent text-sm mb-2 transition-colors duration-300 group-hover:text-white group-hover:font-medium">{event.speaker}</p>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-auto">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-bitconf-secondary/20 text-bitconf-secondary transition-all duration-300 group-hover:bg-bitconf-secondary/30 group-hover:text-white">
                                  {event.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Workshops column */}
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-bitconf-accent flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                          Workshops Track
                        </h4>
                      </div>
                      {slot.events.filter(e => e.track === 'workshops').map((event, eventIndex) => (
                        <div key={eventIndex} className={`group rounded-xl p-4 border backdrop-blur-sm bg-gray-800/20 ${getEventColor(event.type)} cursor-pointer transition-all duration-300 ease-out hover:bg-gray-700/30 hover:border-bitconf-accent/50 h-40 flex flex-col justify-between`}>
                          <div className="flex items-start gap-4 h-full">
                            <div className="flex-shrink-0">
                              {renderSpeakerAvatars(event.speaker, 'bitconf-accent')}
                            </div>
                            <div className="flex-grow flex flex-col justify-between h-full">
                              <div>
                                <h4 className="text-lg font-semibold text-white leading-tight mb-2 transition-colors duration-300 group-hover:text-bitconf-accent">{event.title}</h4>
                                {event.speaker && (
                                  <p className="text-bitconf-accent text-sm mb-2 transition-colors duration-300 group-hover:text-white group-hover:font-medium">{event.speaker}</p>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-auto">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-bitconf-accent/20 text-bitconf-accent transition-all duration-300 group-hover:bg-bitconf-accent/30 group-hover:text-white">
                                  {event.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Single events - full width */
                  <div className="grid grid-cols-1">
                    {slot.events.map((event, eventIndex) => (
                      <div key={eventIndex} className={`group rounded-xl p-4 border backdrop-blur-sm bg-gray-800/30 border-gray-700/30 cursor-pointer transition-all duration-300 ease-out hover:bg-gray-700/40 hover:border-bitconf-primary/50 h-32 flex items-center`}>
                        <div className="flex items-start gap-4">
                          {/* Icon or Speaker Photo */}
                          <div className="flex-shrink-0">
                            {getSpeakerAvatars(event.speaker).length > 0 ? (
                              renderSpeakerAvatars(event.speaker, 'bitconf-primary')
                            ) : (
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getEventColor(event.type)} transition-all duration-300 ease-out`}>
                                <div className="transition-all duration-300">
                                  {getEventIcon(event.type)}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="flex-grow">
                            <h4 className="text-lg font-semibold text-white leading-tight mb-2 transition-colors duration-300 group-hover:text-bitconf-primary">{event.title}</h4>
                            {event.speaker && (
                              <p className="text-bitconf-accent text-sm transition-colors duration-300 group-hover:text-white group-hover:font-medium">{event.speaker}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 p-6 bg-gradient-to-r from-bitconf-accent/10 to-bitconf-primary/10 rounded-xl border border-bitconf-accent/20">
          <p className="text-lg text-bitconf-accent flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <strong>Schedule is tentative</strong> - Final agenda will be announced closer to the event date
          </p>
        </div>
      </div>
    </section>
  );
}
