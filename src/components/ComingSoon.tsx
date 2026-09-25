'use client';

import { useEffect, useRef, useState } from 'react';
import { Edition } from '@/config/editions';

interface ComingSoonProps {
  edition: Edition;
}

const cards = [
  {
    id: 'speakers',
    title: 'Speakers',
    description:
      'The speaker line-up is being put together. Expect engineers, founders and researchers from across the region.',
    accent: 'text-bitconf-primary',
    ring: 'border-bitconf-primary/20 hover:border-bitconf-primary/40',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
      </svg>
    ),
  },
  {
    id: 'schedule',
    title: 'Schedule',
    description:
      'A full day of talks and hands-on workshops across parallel tracks. The programme lands once speakers are confirmed.',
    accent: 'text-bitconf-secondary',
    ring: 'border-bitconf-secondary/20 hover:border-bitconf-secondary/40',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 'tickets',
    title: 'Tickets',
    description:
      'Admission stays free, sponsored end to end. Registration opens here and seats go fast — leave us a note to be first in line.',
    accent: 'text-bitconf-accent',
    ring: 'border-bitconf-accent/20 hover:border-bitconf-accent/40',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 100 4v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a2 2 0 100-4V6z" />
      </svg>
    ),
  },
];

export default function ComingSoon({ edition }: ComingSoonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="coming-soon" className="py-20 bg-bitconf-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-bitconf-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-bitconf-secondary/5 rounded-full blur-2xl"></div>
      </div>

      <div ref={sectionRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-bitconf-primary/10 border border-bitconf-primary/20 rounded-full mb-6">
            <span className="text-bitconf-primary text-sm font-semibold">IN THE WORKS</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">BitConf {edition.year} is taking shape</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Date, venue and programme are being locked in. Here&apos;s what&apos;s coming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-bitconf-surface-2/80 border rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 ease-out ${card.ring} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${150 * (index + 1)}ms` : '0ms' }}
            >
              <div className={`mb-5 ${card.accent}`}>{card.icon}</div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <span className="text-xs uppercase tracking-wide text-bitconf-text-tertiary border border-bitconf-hairline rounded-full px-2 py-0.5">
                  Soon
                </span>
              </div>
              <p className="text-gray-300">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Call for speakers */}
        <div
          className={`max-w-4xl mx-auto bg-bitconf-surface-2/80 border border-bitconf-primary/20 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Want to speak at BitConf {edition.year}?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re collecting talk and workshop proposals. Tell us what you&apos;d like to present and we&apos;ll
            get back to you when the call for papers formally opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:info@bitconf.md?subject=Speaker%20proposal%20for%20BitConf%20${edition.year}`}
              className="group bg-gradient-to-r from-bitconf-primary-deep to-bitconf-secondary text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-bitconf-primary/25"
            >
              🎤 Submit a proposal
            </a>
            <a
              href={`mailto:sponsors@bitconf.md?subject=Sponsoring%20BitConf%20${edition.year}`}
              className="border-2 border-bitconf-accent text-bitconf-accent px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:bg-bitconf-accent hover:text-white"
            >
              🤝 Become a sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
