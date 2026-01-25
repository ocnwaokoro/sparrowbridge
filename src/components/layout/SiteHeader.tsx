import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Container } from './Container';
import logo from '../../assets/sparrowbridge-logo.svg';

interface SiteHeaderProps {
  activeLink?: string;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-P/15 h-20">
      <Container className="h-full flex items-center justify-between">
        <Link to="/" className="flex items-center no-underline">
          <img src={logo} alt="SparrowBridge" className="h-9 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => 
                `font-h text-[14px] font-semibold no-underline transition-colors duration-300 ${
                  isActive 
                    ? 'text-A1' 
                    : 'text-P opacity-90 hover:opacity-100 hover:text-A1'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button href="/contact" variant="primary">
            Start the Conversation
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-P"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-P/15 p-7 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `font-h text-[16px] font-semibold no-underline transition-colors duration-300 ${
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
  );
};
