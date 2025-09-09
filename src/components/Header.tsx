'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-bitconf-primary transition-colors">About</Link>
            <Link href="#speakers" className="text-gray-300 hover:text-bitconf-primary transition-colors">Speakers</Link>
            <Link href="#schedule" className="text-gray-300 hover:text-bitconf-primary transition-colors">Schedule</Link>
            <Link href="#registration" className="text-gray-300 hover:text-bitconf-primary transition-colors">Register</Link>
            <Link href="#sponsors" className="text-gray-300 hover:text-bitconf-primary transition-colors">Sponsors</Link>
            <Link href="#contact" className="text-gray-300 hover:text-bitconf-primary transition-colors">Contact</Link>
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
              <Link href="#about" className="py-2 text-gray-300 hover:text-bitconf-primary transition-colors">About</Link>
              <Link href="#speakers" className="py-2 text-gray-300 hover:text-bitconf-primary transition-colors">Speakers</Link>
              <Link href="#schedule" className="py-2 text-gray-300 hover:text-bitconf-primary transition-colors">Schedule</Link>
              <Link href="#registration" className="py-2 text-gray-300 hover:text-bitconf-primary transition-colors">Register</Link>
              <Link href="#sponsors" className="py-2 text-gray-300 hover:text-bitconf-primary transition-colors">Sponsors</Link>
              <Link href="#contact" className="py-2 text-gray-300 hover:text-bitconf-primary transition-colors">Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}