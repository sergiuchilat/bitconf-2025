'use client';

import { useEffect, useState, useRef } from 'react';

// Counter animation hook
const useCountAnimation = (end: number, duration: number = 2000, isVisible: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return count;
};

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

  // Animated counters
  const editionCount = useCountAnimation(4, 1500, isVisible.stats);
  const attendeesCount = useCountAnimation(150, 2000, isVisible.stats);
  const speakersCount = useCountAnimation(15, 1800, isVisible.stats);
  const dayCount = useCountAnimation(1, 1000, isVisible.stats);

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
      {/* Simple Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bitconf-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bitconf-accent/5 rounded-full blur-2xl"></div>
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
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">
                {editionCount}{editionCount === 4 ? 'th' : ''}
              </div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Edition</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '200ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">
                {attendeesCount}{attendeesCount === 150 ? '+' : ''}
              </div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Attendees</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '300ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">
                {speakersCount}{speakersCount === 15 ? '+' : ''}
              </div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Speakers</div>
            </div>
            <div className={`transition-all duration-300 ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: isVisible.stats ? '400ms' : '0ms' }}>
              <div className="text-3xl font-bold text-bitconf-primary mb-2 transition-colors duration-300 group-hover:text-bitconf-turquoise">
                {dayCount}
              </div>
              <div className="text-gray-300 transition-colors duration-300 group-hover:text-white">Day</div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
