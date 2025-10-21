'use client';

import { useEffect, useState, useRef } from 'react';

export default function Partners() {
  return null;
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    content: false
  });
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
            } else if (target === contentRef.current) {
              setIsVisible(prev => ({ ...prev, content: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const partners = [
    {
      name: "Partner 1",
      logo: "https://via.placeholder.com/200x100/3B82F6/FFFFFF?text=Partner+1",
      website: "#"
    },
    {
      name: "Partner 2",
      logo: "https://via.placeholder.com/200x100/F56565/FFFFFF?text=Partner+2",
      website: "#"
    },
    {
      name: "Partner 3",
      logo: "https://via.placeholder.com/200x100/10B981/FFFFFF?text=Partner+3",
      website: "#"
    },
    {
      name: "Partner 4",
      logo: "https://via.placeholder.com/200x100/8B5CF6/FFFFFF?text=Partner+4",
      website: "#"
    },
    {
      name: "Partner 5",
      logo: "https://via.placeholder.com/200x100/F59E0B/FFFFFF?text=Partner+5",
      website: "#"
    },
    {
      name: "Partner 6",
      logo: "https://via.placeholder.com/200x100/EF4444/FFFFFF?text=Partner+6",
      website: "#"
    },
    {
      name: "Partner 7",
      logo: "https://via.placeholder.com/200x100/06B6D4/FFFFFF?text=Partner+7",
      website: "#"
    },
    {
      name: "Partner 8",
      logo: "https://via.placeholder.com/200x100/84CC16/FFFFFF?text=Partner+8",
      website: "#"
    },
    {
      name: "Partner 9",
      logo: "https://via.placeholder.com/200x100/EC4899/FFFFFF?text=Partner+9",
      website: "#"
    },
    {
      name: "Partner 10",
      logo: "https://via.placeholder.com/200x100/6366F1/FFFFFF?text=Partner+10",
      website: "#"
    },
    {
      name: "Partner 11",
      logo: "https://via.placeholder.com/200x100/14B8A6/FFFFFF?text=Partner+11",
      website: "#"
    },
    {
      name: "Partner 12",
      logo: "https://via.placeholder.com/200x100/F97316/FFFFFF?text=Partner+12",
      website: "#"
    }
  ];


  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-bitconf-dark via-gray-900 to-bitconf-dark relative overflow-hidden">
      {/* Enhanced Parallax Background Abstractions */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with complex movement */}
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-gradient-to-br from-bitconf-secondary/20 via-bitconf-primary/15 to-transparent rounded-full blur-3xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.6}px) translateX(${scrollY * 0.3}px) rotate(${scrollY * 0.15}deg) scale(${1 + scrollY * 0.0015})`
             }}></div>
        <div className="absolute bottom-32 right-1/5 w-80 h-80 bg-gradient-to-tr from-bitconf-accent/25 via-bitconf-secondary/20 to-transparent rounded-full blur-2xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * 0.8}px) translateX(${scrollY * -0.2}px) rotate(${scrollY * -0.1}deg)`
             }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-bl from-bitconf-primary/30 to-transparent rounded-full blur-2xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * 0.3}deg) scale(${1.1 - scrollY * 0.0008})`
             }}></div>

        {/* Abstract geometric patterns */}
        <div className="absolute top-20 right-16 w-32 h-32 border border-bitconf-secondary/20 rotate-45 transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.2}px) rotate(${45 + scrollY * 0.12}deg)`
             }}></div>
        <div className="absolute bottom-24 left-20 w-24 h-24 border-2 border-bitconf-primary/30 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.25}px) translateX(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0002})`
             }}></div>

        {/* Floating particles */}
        <div className="absolute top-1/3 left-16 w-3 h-3 bg-bitconf-secondary/40 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * 0.12}px)`,
               boxShadow: `0 0 ${8 + scrollY * 0.015}px rgba(245, 101, 101, 0.3)`
             }}></div>
        <div className="absolute bottom-1/4 right-24 w-2 h-2 bg-bitconf-accent/50 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.06}px)`,
               boxShadow: `0 0 ${6 + scrollY * 0.012}px rgba(16, 185, 129, 0.4)`
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
          <h2 className="text-4xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are proud to partner with industry leaders who share our vision for innovation and blockchain advancement
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-1200 ease-out ${
            isVisible.content 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* All Partners */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 rounded-xl border-2 border-gray-600/30 bg-gray-800/10 hover:border-gray-500/50 hover:bg-gray-700/20 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center h-16">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-bitconf-primary/20 via-bitconf-secondary/20 to-bitconf-accent/20 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our community of forward-thinking organizations and help shape the future of blockchain technology
              </p>
              <a
                href="mailto:sponsors@bitconf.md"
                className="inline-flex items-center px-8 py-3 bg-bitconf-primary text-white font-semibold rounded-full transition-all duration-300 ease-out hover:bg-bitconf-primary/80 hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
