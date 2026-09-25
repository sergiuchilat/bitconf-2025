'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Edition, editionLabel, PAST_EDITIONS, CURRENT_EDITION } from '@/config/editions';

export interface NavItem {
  href: string;
  label: string;
}

interface HeaderProps {
  edition: Edition;
  navItems: NavItem[];
}

const isAnchor = (href: string) => href.startsWith('#');

export default function Header({ edition, navItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const isArchive = edition.status === 'past';

  /** Cross-edition links: from an archive, point home; otherwise list the archives. */
  const editionLinks = useMemo<NavItem[]>(
    () =>
      isArchive
        ? [{ href: CURRENT_EDITION.href, label: `BitConf ${CURRENT_EDITION.year}` }]
        : PAST_EDITIONS.map((past) => ({ href: past.href, label: `${past.year} Edition` })),
    [isArchive]
  );

  const sectionIds = useMemo(
    () => navItems.filter((item) => isAnchor(item.href)).map((item) => item.href.substring(1)),
    [navItems]
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll(); // Set initial active section
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  const getLinkClassName = (href: string) => {
    const isActive = isAnchor(href) && activeSection === href.substring(1);
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

  const editionLinkClassName =
    'flex items-center gap-1.5 whitespace-nowrap text-bitconf-text-secondary hover:text-bitconf-mint transition-colors duration-300';

  const ctaClassName =
    'bg-gradient-to-r from-bitconf-primary-deep to-bitconf-secondary text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-bitconf-primary/25 relative overflow-hidden group';

  const arrowIcon = (
    <svg
      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  /** Ticket link when registration is open, otherwise a pointer to the live edition. */
  const renderCta = (extraClassName: string, onNavigate?: () => void) => {
    if (edition.ticketUrl && !isArchive) {
      return (
        <a
          href={edition.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaClassName} ${extraClassName}`}
          onClick={onNavigate}
        >
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
          <span className="relative flex items-center justify-center">
            🎟️ Get free ticket
            {arrowIcon}
          </span>
        </a>
      );
    }

    if (isArchive) {
      return (
        <Link
          href={CURRENT_EDITION.href}
          className={`${ctaClassName} ${extraClassName}`}
          onClick={onNavigate}
        >
          <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
          <span className="relative flex items-center justify-center">
            BitConf {CURRENT_EDITION.year}
            {arrowIcon}
          </span>
        </Link>
      );
    }

    return (
      <span className="inline-flex items-center justify-center border border-bitconf-accent/50 text-bitconf-accent px-6 py-2 rounded-full font-semibold">
        🔔 Tickets soon
      </span>
    );
  };

  return (
    <header className="bg-bitconf-surface-0/80 backdrop-blur-xl border-b border-bitconf-hairline sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href={edition.href} className="flex items-center">
              <Image
                src="/logo_bit_conference.svg"
                alt="BitConf Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <div className="ml-3 flex flex-col text-sm text-bitconf-text-secondary leading-tight">
                <span className="text-bitconf-accent font-bold">{editionLabel(edition)}</span>
                <span className="text-bitconf-text-secondary font-bold">
                  {edition.year}
                  {isArchive && <span className="ml-1 font-normal text-bitconf-text-tertiary">· archive</span>}
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-7 text-[0.9375rem]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`whitespace-nowrap ${getLinkClassName(item.href)}`}>
                {item.label}
              </Link>
            ))}

            {editionLinks.length > 0 && (
              <span className="flex items-center gap-5 border-l border-bitconf-hairline pl-6">
                {editionLinks.map((item) => (
                  <Link key={item.href} href={item.href} className={editionLinkClassName}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {item.label}
                  </Link>
                ))}
              </span>
            )}

            <span className="ml-1">{renderCta('whitespace-nowrap')}</span>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-bitconf-hairline">
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

              {editionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 ${editionLinkClassName}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item.label}
                </Link>
              ))}

              <div className="pt-4">{renderCta('w-full inline-block text-center', () => setIsMenuOpen(false))}</div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
