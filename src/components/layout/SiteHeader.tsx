import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Container } from './Container';
import logo from '../../assets/sparrowbridge-logo.svg';

export const SiteHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (!isMenuOpen) return;
      const target = e.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) setIsMenuOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) firstNavLinkRef.current?.focus();
    else hamburgerButtonRef.current?.focus();
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-P focus:font-b focus:text-[14px] focus:px-4 focus:py-2 focus:rounded-btn focus:shadow-sm focus:border focus:border-P/20"
      >
        Skip to content
      </a>
      <header ref={headerRef} className="sticky top-0 z-50 w-full bg-white border-b border-P/15 h-20">
        <Container className="h-full flex items-center justify-between">
          <Link to="/" className="flex items-center no-underline min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2">
          <img src={logo} alt="SparrowBridge" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden min-[760px]:flex gap-4 lg:gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => 
                `font-h text-[14px] font-semibold no-underline whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2 ${
                  isActive 
                    ? 'text-A1' 
                    : 'text-P opacity-90 hover:opacity-100 hover:text-A1'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button href="/contact" variant="primary" className="whitespace-nowrap text-[13px] lg:text-[14px]">
            Start the Conversation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          ref={hamburgerButtonRef}
          className="min-[760px]:hidden p-2 text-P min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div id="mobile-nav" className="min-[760px]:hidden absolute top-20 left-0 w-full bg-white border-b border-P/15 p-7 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.href}
              ref={index === 0 ? firstNavLinkRef : null}
              to={link.href}
              className={({ isActive }) =>
                `min-h-[44px] flex items-center font-h text-[16px] font-semibold no-underline transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-A1 focus-visible:ring-offset-2 ${
                  isActive 
                    ? 'text-A1' 
                    : 'text-P hover:text-A1'
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Button href="/contact" variant="primary" className="w-full">
            Start the Conversation
          </Button>
        </div>
      )}
      </header>
    </>
  );
};
