'use client';

import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    cards: false,
    stats: false
  });
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
            } else if (target === cardsRef.current) {
              setIsVisible(prev => ({ ...prev, cards: true }));
            } else if (target === statsRef.current) {
              setIsVisible(prev => ({ ...prev, stats: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Enhanced Parallax Background Abstractions */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with complex movement */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-bitconf-primary/8 via-bitconf-secondary/6 to-transparent rounded-full blur-3xl transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg) scale(${1 + scrollY * 0.0002})`
             }}></div>
        <div className="absolute bottom-20 left-1/5 w-80 h-80 bg-gradient-to-tr from-bitconf-turquoise/10 via-bitconf-accent/8 to-transparent rounded-full blur-2xl transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * -0.05}px) rotate(${scrollY * -0.03}deg)`
             }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from-bitconf-secondary/12 to-transparent rounded-full blur-2xl transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.08}deg) scale(${1.2 - scrollY * 0.0001})`
             }}></div>

        {/* Abstract geometric patterns */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-bitconf-primary/20 rotate-45 transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.25}px) rotate(${45 + scrollY * 0.15}deg)`
             }}></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-2 border-bitconf-accent/30 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0003})`
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
              <pattern id="aboutMesh" width="80" height="80" patternUnits="userSpaceOnUse"
                       patternTransform={`rotate(${scrollY * 0.05}) scale(${1 + scrollY * 0.0001})`}>
                <path d="M 80 0 L 40 40 L 0 0 M 40 40 L 80 80 M 40 40 L 0 80" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutMesh)" />
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
          <h2 className="text-4xl font-bold text-white mb-4">About BitConf</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Moldova&apos;s leading technology conference bringing together innovators, developers, and tech enthusiasts
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1200 ease-out ${
            isVisible.cards 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className={`group text-center transition-all duration-300 ease-out cursor-pointer ${
            isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: isVisible.cards ? '200ms' : '0ms' }}>
            <div className="bg-bitconf-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-bitconf-primary/20">
              <svg className="w-8 h-8 text-bitconf-primary transition-colors duration-300 group-hover:text-bitconf-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-bitconf-primary">Innovation</h3>
            <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Explore cutting-edge technologies and innovative solutions shaping the future of IT</p>
          </div>

          <div className={`group text-center transition-all duration-300 ease-out cursor-pointer ${
            isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: isVisible.cards ? '400ms' : '0ms' }}>
            <div className="bg-bitconf-accent/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-bitconf-accent/20">
              <svg className="w-8 h-8 text-bitconf-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-bitconf-accent">Community</h3>
            <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Connect with like-minded professionals and build lasting relationships in the tech community</p>
          </div>

          <div className={`group text-center transition-all duration-300 ease-out cursor-pointer ${
            isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: isVisible.cards ? '600ms' : '0ms' }}>
            <div className="bg-bitconf-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-all duration-300 ease-out group-hover:bg-bitconf-secondary/20">
              <svg className="w-8 h-8 text-bitconf-secondary transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-bitconf-secondary">Learning</h3>
            <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">Gain insights from industry experts and expand your knowledge through workshops and talks</p>
          </div>
        </div>

        <div 
          ref={statsRef}
          className={`group bg-bitconf-dark/50 rounded-lg p-8 border border-bitconf-primary/20 transition-all duration-300 ease-out cursor-pointer hover:bg-bitconf-dark/70 hover:border-bitconf-primary/30 ${
            isVisible.stats 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '100ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">4th</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Edition</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '200ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">150+</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Attendees</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '300ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">15+</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Speakers</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '400ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">1</div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
