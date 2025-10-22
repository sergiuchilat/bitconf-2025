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

export default function Registration() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    card: false,
    stats: false
  });
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const attendeesCount = useCountAnimation(150, 2000, isVisible.stats);
  const speakersCount = useCountAnimation(20, 1800, isVisible.stats);
  const hoursCount = useCountAnimation(6, 1500, isVisible.stats);
  const freeCount = useCountAnimation(100, 1600, isVisible.stats);

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
            } else if (target === cardRef.current) {
              setIsVisible(prev => ({ ...prev, card: true }));
            } else if (target === statsRef.current) {
              setIsVisible(prev => ({ ...prev, stats: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardRef.current) observer.observe(cardRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Expert Speakers",
      description: "Learn from industry leaders and blockchain pioneers"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "All Sessions",
      description: "Full access to workshops, talks, and panels"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: "Networking",
      description: "Connect with developers, founders, and investors"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Premium Food",
      description: "Delicious meals and coffee breaks included"
    },
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-bitconf-dark via-gray-900 to-bitconf-dark relative overflow-hidden">
      {/* Enhanced Parallax Background Abstractions */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with complex movement */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-bitconf-accent/20 via-bitconf-primary/15 to-transparent rounded-full blur-3xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.5}px) translateX(${scrollY * 0.25}px) rotate(${scrollY * 0.1}deg) scale(${1 + scrollY * 0.001})`
             }}></div>
        <div className="absolute bottom-20 right-1/5 w-80 h-80 bg-gradient-to-tr from-bitconf-secondary/25 via-bitconf-accent/20 to-transparent rounded-full blur-2xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * 0.7}px) translateX(${scrollY * -0.15}px) rotate(${scrollY * -0.08}deg)`
             }}></div>

        {/* Abstract geometric patterns */}
        <div className="absolute top-32 right-20 w-32 h-32 border border-bitconf-accent/20 rotate-45 transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.15}px) rotate(${45 + scrollY * 0.1}deg)`
             }}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-bitconf-primary/30 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.05}px) scale(${1 + scrollY * 0.0001})`
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
          <div className="inline-flex items-center px-4 py-2 bg-bitconf-primary/10 border border-bitconf-primary/20 rounded-full mb-6">
            <span className="text-bitconf-primary text-sm font-semibold">LIMITED SEATS AVAILABLE</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Join BitConf 2025
            <span className="block text-transparent bg-gradient-to-r from-bitconf-primary to-bitconf-accent bg-clip-text">
              Completely Free
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience Moldova&apos;s premier blockchain conference. Network with industry leaders, learn from experts, and shape the future of decentralized technology.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`transition-all duration-1200 ease-out ${
            isVisible.card 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main Registration Card */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-bitconf-primary/20 shadow-2xl">
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-bitconf-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bitconf-accent/10 rounded-full blur-xl"></div>

              {/* Premium Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-bitconf-primary to-bitconf-secondary px-6 py-2 rounded-full">
                <span className="text-white text-sm font-bold">🎟️ FREE ADMISSION</span>
              </div>

              <div className="relative p-8 md:p-12">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Value Proposition */}
                  <div className="mb-12">
                    <h3 className="text-4xl font-bold text-white mb-6">
                      Everything Included
                    </h3>
                    <div className="flex items-center justify-center mb-6">
                      <span className="text-6xl font-black text-transparent bg-gradient-to-r from-bitconf-primary to-bitconf-accent bg-clip-text">
                        FREE
                      </span>
                      <div className="ml-6 text-left">
                        <div className="text-gray-400 text-lg line-through">€50 Value</div>
                        <div className="text-bitconf-accent font-semibold">100% Sponsored</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                      Thanks to our amazing sponsors, we&apos;re making this world-class blockchain conference accessible to everyone.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="space-y-4 mb-12">
                    <a
                      href="https://www.eventbrite.com/e/bit-conference-2025-tickets-1680101241039?aff=oddtdtcreator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-block bg-gradient-to-r from-bitconf-primary to-bitconf-secondary text-white py-4 px-12 rounded-2xl font-bold text-xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-bitconf-primary/25 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      <span className="relative flex items-center justify-center">
                        🚀 Reserve Your Spot Now
                        <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </a>
                    <p className="text-gray-400 text-sm">
                      No hidden fees • Instant confirmation • Limited to 150 attendees
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center space-y-2 p-4 bg-gray-800/20 rounded-xl border border-gray-700/30"
                      >
                        <div className="text-bitconf-primary text-2xl">
                          {feature.icon}
                        </div>
                        <div className="text-center">
                          <div className="text-white font-semibold text-sm mb-1">{feature.title}</div>
                          <div className="text-gray-400 text-xs">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className={`transition-all duration-1200 ease-out delay-300 ${
            isVisible.stats 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-bitconf-primary to-bitconf-accent bg-clip-text mb-1">
                {attendeesCount}{attendeesCount === 150 ? '+' : ''}
              </div>
              <div className="text-gray-400 text-sm font-medium">Attendees</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl mb-2">🎤</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-bitconf-primary to-bitconf-accent bg-clip-text mb-1">
                {speakersCount}{speakersCount === 20 ? '+' : ''}
              </div>
              <div className="text-gray-400 text-sm font-medium">Speakers</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl mb-2">⏰</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-bitconf-primary to-bitconf-accent bg-clip-text mb-1">
                {hoursCount}
              </div>
              <div className="text-gray-400 text-sm font-medium">Hours</div>
            </div>
            <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <div className="text-3xl mb-2">🎁</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-bitconf-primary to-bitconf-accent bg-clip-text mb-1">
                {freeCount}{freeCount === 100 ? '%' : ''}
              </div>
              <div className="text-gray-400 text-sm font-medium">Free</div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-2">Questions about registration?</p>
            <a href="mailto:info@bitconf.md" className="text-bitconf-primary hover:text-bitconf-accent transition-colors duration-300 font-semibold">
              📧 info@bitconf.md
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
