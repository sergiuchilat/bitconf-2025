'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = document.querySelector('#hero-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: mouseEvent.clientX - rect.left,
          y: mouseEvent.clientY - rect.top
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const heroSection = document.querySelector('#hero-section');
    heroSection?.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      heroSection?.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen bg-gradient-to-br from-bitconf-dark via-gray-900 to-bitconf-dark text-white overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-bitconf-turquoise rounded-full blur-3xl opacity-12 transition-all duration-1000 ease-in-out"
             style={{
               animation: 'smoothPulse 12s ease-in-out infinite',
               animationDelay: '4s',
               transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * -0.05}px) rotate(${scrollY * 0.1}deg)`
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
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-bitconf-turquoise rounded-full opacity-50 transition-all duration-1000"
             style={{
               animation: 'gentleFloat 18s ease-in-out infinite',
               animationDelay: '6s',
               transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.1}px)`
             }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-bitconf-accent rotate-45 opacity-35 transition-all duration-1000"
             style={{
               animation: 'gentlePulse 14s ease-in-out infinite',
               animationDelay: '2s',
               transform: `translateY(${scrollY * -0.35}px) translateX(${scrollY * 0.15}px) rotate(${45 + scrollY * -0.15}deg)`
             }}></div>

        {/* Subtle Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-bitconf-primary/15 to-transparent transform rotate-12 transition-all duration-1000"
               style={{animation: 'lineShimmer 25s ease-in-out infinite'}}></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-bitconf-secondary/10 to-transparent transform -rotate-6 transition-all duration-1000"
               style={{animation: 'lineShimmer 30s ease-in-out infinite', animationDelay: '10s'}}></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-bitconf-turquoise/12 to-transparent transform rotate-3 transition-all duration-1000"
               style={{animation: 'lineShimmer 28s ease-in-out infinite', animationDelay: '15s'}}></div>
        </div>

        {/* Mouse-Following Animated Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary follower - close to cursor */}
          <div
            className="absolute w-8 h-8 bg-bitconf-primary/20 rounded-full blur-sm transition-all duration-700 ease-out"
            style={{
              left: mousePosition.x - 16,
              top: mousePosition.y - 16,
              transform: `scale(${mousePosition.x || mousePosition.y ? 1 : 0})`
            }}
          ></div>

          {/* Secondary follower - slower, larger */}
          <div
            className="absolute w-16 h-16 bg-bitconf-secondary/15 rounded-full blur-md transition-all duration-1200 ease-out"
            style={{
              left: mousePosition.x * 0.8 - 32,
              top: mousePosition.y * 0.8 - 32,
              transform: `scale(${mousePosition.x || mousePosition.y ? 1 : 0})`
            }}
          ></div>

          {/* Tertiary follower - slowest, largest */}
          <div
            className="absolute w-24 h-24 bg-bitconf-turquoise/10 rounded-full blur-lg transition-all duration-1800 ease-out"
            style={{
              left: mousePosition.x * 0.6 - 48,
              top: mousePosition.y * 0.6 - 48,
              transform: `scale(${mousePosition.x || mousePosition.y ? 1 : 0})`
            }}
          ></div>

          {/* Accent particles */}
          <div
            className="absolute w-2 h-2 bg-bitconf-accent rounded-full transition-all duration-500 ease-out"
            style={{
              left: mousePosition.x * 1.1 - 4,
              top: mousePosition.y * 1.1 - 4,
              opacity: mousePosition.x || mousePosition.y ? 0.6 : 0
            }}
          ></div>

          <div
            className="absolute w-3 h-3 bg-bitconf-primary/40 rounded-full transition-all duration-900 ease-out"
            style={{
              left: mousePosition.x * 0.9 - 6,
              top: mousePosition.y * 0.9 - 6,
              opacity: mousePosition.x || mousePosition.y ? 0.4 : 0
            }}
          ></div>
        </div>
      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex items-center min-h-screen">
        <div className="w-full">
          {/* Main content */}
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <div className="mb-8">
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  BitConf <span className="text-yellow-400">2025</span>
                </span>
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-bitconf-turquoise mb-4">
                4th Edition
              </div>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-300 max-w-3xl">
              Moldova&apos;s Premier Technology Conference
            </p>

            {/* Event details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/40 hover:backdrop-blur-md cursor-pointer">
                <div className="text-bitconf-turquoise font-semibold text-sm uppercase tracking-wide mb-2">Date</div>
                <div className="text-white font-semibold">November 8, 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/40 hover:backdrop-blur-md cursor-pointer">
                <div className="text-bitconf-turquoise font-semibold text-sm uppercase tracking-wide mb-2">Location</div>
                <a href="https://nortek.md/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-bitconf-turquoise transition-colors">
                  Nortek Center, Bălți
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-500 ease-out hover:bg-white/20 hover:border-white/40 hover:backdrop-blur-md cursor-pointer">
                <div className="text-bitconf-turquoise font-semibold text-sm uppercase tracking-wide mb-2">Format</div>
                <div className="text-white font-semibold">1-Day Event</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.eventbrite.com/e/bit-conference-2025-tickets-1680101241039?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-bitconf-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-400 ease-out hover:bg-bitconf-primary/80 hover:shadow-lg cursor-pointer text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Register Now
                  <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <button
                onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-bitconf-accent text-bitconf-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-400 ease-out hover:bg-bitconf-accent hover:text-white hover:shadow-lg cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  View Schedule
                  <svg className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
