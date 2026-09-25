'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CURRENT_EDITION, Edition, editionLabel } from '@/config/editions';

interface HeroProps {
  edition: Edition;
  /** Section the secondary button scrolls to. */
  secondary: { label: string; targetId: string };
}

const TBA = 'To be announced';

export default function Hero({ edition, secondary }: HeroProps) {
  const isArchive = edition.status === 'past';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen bg-bitconf-surface-0 text-white overflow-hidden">
      {/* Smooth Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Smooth Pulsing Gradient Orbs with Parallax */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bitconf-primary rounded-full blur-3xl opacity-10 transition-all duration-1000 ease-in-out"
             style={{
               animation: 'smoothPulse 8s ease-in-out infinite',
               animationDelay: '0s',
               transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
             }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bitconf-secondary rounded-full blur-3xl opacity-8 transition-all duration-1000 ease-in-out"
             style={{
               animation: 'smoothPulse 10s ease-in-out infinite',
               animationDelay: '2s',
               transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * -0.1}px)`
             }}></div>

        {/* Subtle Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Gentle Floating Geometric Shapes with Parallax */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-bitconf-primary rounded-full opacity-40 transition-all duration-1000"
             style={{
               animation: 'gentleFloat 15s ease-in-out infinite',
               animationDelay: '1s',
               transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.2}px)`
             }}></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-bitconf-secondary rotate-45 opacity-30 transition-all duration-1000"
             style={{
               animation: 'gentleRotate 20s linear infinite',
               animationDelay: '3s',
               transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * -0.15}px) rotate(${45 + scrollY * 0.2}deg)`
             }}></div>

        {/* Subtle Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-bitconf-primary/15 to-transparent transform rotate-12 transition-all duration-1000"
               style={{animation: 'lineShimmer 25s ease-in-out infinite'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-bitconf-secondary/10 to-transparent transform -rotate-6 transition-all duration-1000"
               style={{animation: 'lineShimmer 30s ease-in-out infinite', animationDelay: '10s'}}></div>

        </div>

      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
        <div className="w-full">
          {/* Main content */}
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <div className="mb-8">
              {isArchive ? (
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-sm text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  Past edition · this event has concluded
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-bitconf-primary/10 border border-bitconf-primary/30 text-sm text-bitconf-turquoise">
                  <span className="w-2 h-2 rounded-full bg-bitconf-turquoise animate-pulse"></span>
                  Coming in {edition.year}
                </div>
              )}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.03em] mb-4">
                <span className="text-white">
                  BitConf <span className="text-bitconf-accent">{edition.year}</span>
                </span>
              </h1>
              <div className="text-xl sm:text-2xl font-medium text-bitconf-mint mb-4">
                {editionLabel(edition)}
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl font-normal mb-12 text-gray-300 max-w-2xl leading-relaxed">
              Moldova&apos;s Premier Technology Conference
            </p>

            {/* Event details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-bc-md p-5 border border-bitconf-hairline transition-colors duration-300 ease-out hover:bg-white/[0.07]">
                <div className="bc-eyebrow mb-2">Date</div>
                <div className={`font-semibold ${edition.date ? 'text-white' : 'text-bitconf-text-secondary'}`}>
                  {edition.date ?? TBA}
                </div>
              </div>
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-bc-md p-5 border border-bitconf-hairline transition-colors duration-300 ease-out hover:bg-white/[0.07]">
                <div className="bc-eyebrow mb-2">Location</div>
                {edition.venue ? (
                  edition.venue.url ? (
                    <a href={edition.venue.url} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-bitconf-turquoise transition-colors">
                      {edition.venue.name}
                    </a>
                  ) : (
                    <div className="text-white font-semibold">{edition.venue.name}</div>
                  )
                ) : (
                  <div className="text-bitconf-text-secondary font-semibold">{TBA}</div>
                )}
              </div>
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-bc-md p-5 border border-bitconf-hairline transition-colors duration-300 ease-out hover:bg-white/[0.07]">
                <div className="bc-eyebrow mb-2">Format</div>
                <div className="text-white font-semibold">{edition.format}</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {edition.ticketUrl && !isArchive ? (
                <a
                  href={edition.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-bitconf-primary-deep text-white px-8 py-4 rounded-bc-md font-semibold text-base transition-all duration-300 ease-out hover:bg-bitconf-primary-deep/85 hover:shadow-lg hover:shadow-bitconf-primary/20 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Register Now
                    <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              ) : isArchive ? (
                <Link
                  href={CURRENT_EDITION.href}
                  className="group bg-bitconf-primary-deep text-white px-8 py-4 rounded-bc-md font-semibold text-base transition-all duration-300 ease-out hover:bg-bitconf-primary-deep/85 hover:shadow-lg hover:shadow-bitconf-primary/20 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    See BitConf {CURRENT_EDITION.year}
                    <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              ) : (
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-bitconf-primary-deep text-white px-8 py-4 rounded-bc-md font-semibold text-base transition-all duration-300 ease-out hover:bg-bitconf-primary-deep/85 hover:shadow-lg hover:shadow-bitconf-primary/20 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get notified
                    <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              )}
              <button
                onClick={() => document.getElementById(secondary.targetId)?.scrollIntoView({ behavior: 'smooth' })}
                className="group border border-bitconf-hairline bg-white/[0.03] text-white px-8 py-4 rounded-bc-md font-semibold text-base transition-all duration-300 ease-out hover:bg-white/[0.08] hover:border-bitconf-hairline-strong"
              >
                <span className="flex items-center justify-center gap-2">
                  {secondary.label}
                  <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
