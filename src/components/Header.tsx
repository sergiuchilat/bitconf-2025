'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#registration', label: 'Register' },
    { href: '#gallery2024', label: 'Gallery' },
    { href: '#partners', label: 'Partners' },
    { href: '#contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1)); // Remove '#' from href
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // Set initial active section
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClassName = (href: string) => {
    const sectionId = href.substring(1); // Remove '#'
    const isActive = activeSection === sectionId;
    return `relative transition-all duration-300 ${
      isActive 
        ? 'text-bitconf-primary' 
        : 'text-gray-300 hover:text-bitconf-primary'
    } ${
      isActive 
        ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-bitconf-primary after:to-bitconf-secondary after:rounded-full after:animate-pulse' 
        : ''
    }`;
  };

  return (
    <header className="bg-bitconf-dark/95 backdrop-blur-sm border-b border-bitconf-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_bit_conference.svg"
                alt="BitConf Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <div className="ml-3 flex flex-col text-sm text-gray-400 leading-tight">
                <span className="text-bitconf-accent font-bold">4th Edition</span>
                <span className="text-gray-400 font-bold">2025</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getLinkClassName(item.href)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.eventbrite.com/e/bit-conference-2025-tickets-1680101241039?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-bitconf-primary to-bitconf-secondary text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-bitconf-primary/25 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              <span className="relative flex items-center">
                🎟️ Get free ticket
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-bitconf-primary/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 ${getLinkClassName(item.href)}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <a
                  href="https://www.eventbrite.com/e/bit-conference-2025-tickets-1680101241039?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-bitconf-primary to-bitconf-secondary text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-bitconf-primary/25 relative overflow-hidden group inline-block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  <span className="relative flex items-center justify-center">
                    🎟️ Get free ticket
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}