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
    switch (type) {
      case 'keynote':
        return '🎯';
      case 'talk':
        return '💬';
      case 'workshop':
        return '🛠️';
      case 'panel':
        return '👥';
      case 'break':
        return '☕';
      case 'networking':
        return '🤝';
      default:
        return '📋';
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
          <p className="text-lg text-bitconf-accent">
            📅 <strong>Schedule is tentative</strong> - Final agenda will be announced closer to the event date
          </p>
        </div>
      </div>
    </section>
  );
}