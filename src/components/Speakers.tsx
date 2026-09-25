'use client';

import { useState, useEffect, useMemo } from 'react';
import { Speaker } from '@/data/speakers';

interface SpeakersProps {
  speakers: Speaker[];
  /** Copy under the section heading. */
  subtitle?: string;
  /** Shown instead of the grid when no speaker is confirmed yet. */
  emptyMessage?: string;
}

const DEFAULT_SUBTITLE =
  'Learn from industry leaders and experts who are shaping the future of technology';

export default function Speakers({ speakers, subtitle = DEFAULT_SUBTITLE, emptyMessage }: SpeakersProps) {

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Separate confirmed speakers from TBA speakers
  const confirmedSpeakers = useMemo(() => speakers.filter(speaker => speaker.name !== "TBA"), [speakers]);
  const tbaSpeakers = useMemo(() => speakers.filter(speaker => speaker.name === "TBA"), [speakers]);

  // Use original order initially to prevent hydration mismatch
  const [finalSpeakers, setFinalSpeakers] = useState<Speaker[]>([...confirmedSpeakers, ...tbaSpeakers]);

  // Shuffle only on client after mount
  useEffect(() => {
    setFinalSpeakers([...shuffleArray(confirmedSpeakers), ...tbaSpeakers]);
  }, [confirmedSpeakers, tbaSpeakers]);


  return (
    <section id="speakers" className="py-20 bg-bitconf-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Speakers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {finalSpeakers.map((speaker, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-bitconf-surface-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-bitconf-primary/20">
              <div className="h-64 bg-gradient-to-br from-bitconf-secondary to-bitconf-primary flex items-center justify-center">
                {speaker.name === "TBA" ? (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎤</div>
                    <div className="text-xl font-bold">TBA</div>
                    <div className="text-sm opacity-75">Coming Soon</div>
                  </div>
                ) : (
                  <img src={speaker.image} alt={speaker.name}/>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
                  {speaker.linkedinUrl && (
                    <a
                      href={speaker.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bitconf-text-secondary hover:text-bitconf-primary transition-colors"
                      aria-label={`${speaker.name}'s LinkedIn profile`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-bitconf-primary font-medium mb-2">{speaker.role}</p>
                <p className="text-bitconf-text-secondary text-sm mb-3">
                  {speaker.companyLink ? (
                    <a href={speaker.companyLink} target="_blank" rel="noopener noreferrer" className="underline">
                      {speaker.company}
                    </a>
                  ) : (
                    speaker.company
                  )}
                </p>
                <p className={`text-sm ${speaker.bio ? 'text-gray-300' : 'text-bitconf-text-tertiary italic'}`}>
                  {speaker.bio ?? 'Talk to be announced'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {emptyMessage && (
          <p className="text-center text-bitconf-text-secondary mt-12 max-w-2xl mx-auto">{emptyMessage}</p>
        )}
      </div>
    </section>
  );
}
