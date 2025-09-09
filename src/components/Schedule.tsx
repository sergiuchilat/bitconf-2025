'use client';

import { useState } from 'react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');

  const schedule = {
    day1: [
      { time: '09:00', title: 'Registration & Welcome Coffee', speaker: 'BitConf Team', type: 'networking' },
      { time: '10:00', title: 'Opening Keynote', speaker: 'TBA', type: 'keynote' },
      { time: '11:00', title: 'The Future of AI in Software Development', speaker: 'TBA', type: 'talk' },
      { time: '11:45', title: 'Coffee Break', speaker: '', type: 'break' },
      { time: '12:15', title: 'Cloud Native Architecture Patterns', speaker: 'TBA', type: 'talk' },
      { time: '13:00', title: 'Lunch Break', speaker: '', type: 'break' },
      { time: '14:30', title: 'Workshop: Modern DevOps Practices', speaker: 'TBA', type: 'workshop' },
      { time: '16:00', title: 'Coffee Break', speaker: '', type: 'break' },
      { time: '16:30', title: 'Cybersecurity in the Modern Era', speaker: 'TBA', type: 'talk' },
      { time: '17:15', title: 'Day 1 Closing & Networking', speaker: '', type: 'networking' }
    ],
    day2: [
      { time: '09:00', title: 'Morning Coffee & Networking', speaker: '', type: 'networking' },
      { time: '10:00', title: 'Blockchain & Web3 Revolution', speaker: 'TBA', type: 'keynote' },
      { time: '11:00', title: 'Mobile Development Trends 2025', speaker: 'TBA', type: 'talk' },
      { time: '11:45', title: 'Coffee Break', speaker: '', type: 'break' },
      { time: '12:15', title: 'Data Science & Machine Learning', speaker: 'TBA', type: 'talk' },
      { time: '13:00', title: 'Lunch Break', speaker: '', type: 'break' },
      { time: '14:30', title: 'Workshop: React & Next.js Best Practices', speaker: 'TBA', type: 'workshop' },
      { time: '16:00', title: 'Coffee Break', speaker: '', type: 'break' },
      { time: '16:30', title: 'Panel: The Future of Tech in Moldova', speaker: 'Industry Leaders', type: 'panel' },
      { time: '17:30', title: 'Closing Ceremony & After Party', speaker: 'BitConf Team', type: 'networking' }
    ]
  };

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
    <section id="schedule" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Conference Schedule</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One day packed with inspiring talks, hands-on workshops, and networking opportunities
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveDay('day1')}
              className="px-6 py-3 rounded-md font-semibold transition-colors bg-bitconf-primary text-white"
            >
              November 9, 2025
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule[activeDay as keyof typeof schedule].map((event, index) => (
            <div
              key={index}
              className={`border-l-4 pl-6 pb-6 mb-6 ${getEventColor(event.type)}`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <span className="text-2xl">{getEventIcon(event.type)}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {event.title}
                      </h3>
                      {event.speaker && (
                        <p className="text-bitconf-primary font-medium text-sm">
                          {event.speaker}
                        </p>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-200 border border-bitconf-primary/20">
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-bitconf-accent/10 rounded-lg border-l-4 border-bitconf-accent">
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