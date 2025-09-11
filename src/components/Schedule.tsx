'use client';

import { useState, useEffect, useRef } from 'react';

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
  const [isVisible, setIsVisible] = useState({
    title: false,
    dateBlock: false,
    timeline: false
  });
  const titleRef = useRef<HTMLDivElement>(null);
  const dateBlockRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    return () => {
      observer.disconnect();
    };
  }, []);
  // Create a structured schedule with parallel sessions grouped together
  const scheduleSlots: ScheduleSlot[] = [
    { time: '10:15 - 10:30', events: [{ title: 'Opening Remarks', speaker: 'Conference Host', type: 'keynote' }] },
    {
      time: '10:30 - 11:00 / 10:30 - 12:00',
      events: [
        { title: 'Scaling Microservices for High-Traffic Systems', speaker: 'Alice Johnson (Cloud Architect, TechNova)', type: 'talk', track: 'presentations', duration: '30 min' },
        { title: 'Hands-On Kubernetes: Deploying and Scaling Apps', speaker: 'David Lee (DevOps Consultant)', type: 'workshop', track: 'workshops', duration: '1.5 hours' }
      ]
    },
    {
      time: '11:00 - 11:30',
      events: [
        { title: 'Zero-Trust Security in Modern Enterprises', speaker: 'Dr. Victor Chen (CISO, SecureNet)', type: 'talk', track: 'presentations', duration: '30 min' }
      ]
    },
    {
      time: '11:30 - 12:00',
      events: [
        { title: 'From Monolith to Serverless: Lessons Learned', speaker: 'Maria Popescu (Lead Engineer, SoftWorks)', type: 'talk', track: 'presentations', duration: '30 min' }
      ]
    },
    { time: '12:00 - 12:15', events: [{ title: 'Coffee Break', speaker: '', type: 'break' }] },
    {
      time: '12:15 - 12:45 / 12:15 - 13:45',
      events: [
        { title: 'AI-Driven Observability: Detecting Issues Before Users Do', speaker: 'Sofia Martinez (Data Engineer, InsightAI)', type: 'talk', track: 'presentations', duration: '30 min' },
        { title: 'Building Real-Time Dashboards with Grafana', speaker: 'Emma Brown (Monitoring Specialist)', type: 'workshop', track: 'workshops', duration: '1.5 hours' }
      ]
    },
    {
      time: '12:45 - 13:15',
      events: [
        { title: 'Designing APIs for Global Scale', speaker: 'Andrei Ivanov (Backend Engineer, ConnectHub)', type: 'talk', track: 'presentations', duration: '30 min' }
      ]
    },
    {
      time: '13:15 - 13:45',
      events: [
        { title: 'Breaking Silos: DevOps Culture in Practice', speaker: 'John Smith (Engineering Manager, FlowOps)', type: 'talk', track: 'presentations', duration: '30 min' }
      ]
    },
    { time: '13:45 - 14:45', events: [{ title: 'Lunch Break', speaker: '', type: 'break' }] },
    {
      time: '14:45 - 15:15 / 14:45 - 16:15',
      events: [
        { title: 'Event-Driven Architectures with Kafka', speaker: 'Ravi Patel (Systems Architect, Streamly)', type: 'talk', track: 'presentations', duration: '30 min' },
        { title: 'Practical Machine Learning Deployment with MLOps', speaker: 'Hiroshi Tanaka (ML Engineer)', type: 'workshop', track: 'workshops', duration: '1.5 hours' }
      ]
    },
    {
      time: '15:15 - 15:45',
      events: [
        { title: 'Securing APIs with OAuth2 and Beyond', speaker: 'Olga Kuznetsova (Security Engineer, AuthX)', type: 'talk', track: 'presentations', duration: '30 min' }
      ]
    },
    {
      time: '15:45 - 16:15',
      events: [
        { title: 'Next-Gen Databases: ClickHouse, Redis & Beyond', speaker: 'Michael Thompson (DBA, DataEdge)', type: 'talk', track: 'presentations', duration: '30 min' }
      ]
    },
    { time: '16:15 - 16:30', events: [{ title: 'Coffee Break', speaker: '', type: 'break' }] },
    {
      time: '16:30 - 17:00 / 16:30 - 18:00',
      events: [
        { title: 'Green IT: Building Sustainable Data Centers', speaker: 'Laura Becker (Infrastructure Lead, EcoCompute)', type: 'talk', track: 'presentations', duration: '30 min' },
        { title: 'Advanced Git Workflows for Teams', speaker: 'Carlos Mendes (Senior Developer, CodeCraft)', type: 'workshop', track: 'workshops', duration: '1.5 hours' }
      ]
    },
    { time: '17:00 - 17:30', events: [{ title: 'Closing Keynote / Panel Discussion', speaker: 'Industry Experts Roundtable', type: 'keynote' }] },
    { time: '18:00', events: [{ title: 'Conference Ends', speaker: '', type: 'networking' }] }
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
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-bitconf-primary/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-bitconf-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-bitconf-turquoise/6 rounded-full blur-2xl"></div>
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
                              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-bitconf-secondary/30">
                                <svg className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-bitconf-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
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
                              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-bitconf-accent/30">
                                <svg className="w-6 h-6 text-gray-400 transition-colors duration-300 group-hover:text-bitconf-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7-7h14a7 7 0 00-7 7z" />
                                </svg>
                              </div>
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
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getEventColor(event.type)} transition-all duration-300 ease-out`}>
                              <div className="transition-all duration-300">
                                {getEventIcon(event.type)}
                              </div>
                            </div>
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
