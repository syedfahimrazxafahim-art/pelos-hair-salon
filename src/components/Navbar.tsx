import React, { useState, useEffect } from 'react';
import { PelosLogo } from './PelosLogo';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onBookNowClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Barbers', href: '#barbers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 dark:bg-[#050505]/95 light:bg-[#F8F9FA]/95 backdrop-blur-md border-b border-[#00AEEF]/20 shadow-lg'
          : 'bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] border-b border-white/5 dark:border-white/5 light:border-black/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-brand-link"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] rounded-lg p-1"
        >
          <PelosLogo size="md" id="navbar-logo" />
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-2 text-sm font-medium tracking-wider uppercase transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] rounded ${
                  isActive
                    ? 'text-[#00AEEF] font-semibold'
                    : 'text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-[#00AEEF]'
                }`}
              >
                {link.label}
                {/* Active Indicator Underline */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#00AEEF] transition-transform duration-200 origin-center ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Light / Dark Mode Toggle */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 dark:border-white/10 light:border-black/15 bg-[#111111] dark:bg-[#111111] light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-800 hover:text-[#00AEEF] hover:border-[#00AEEF]/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            title={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#18C8FF] transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#00AEEF] transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Strong BOOK NOW CTA */}
          <button
            id="navbar-book-cta-btn"
            type="button"
            onClick={onBookNowClick}
            className="px-6 py-2.5 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-bold text-sm tracking-wider uppercase transition-all duration-200 electric-glow-sm hover:electric-glow hover:scale-[1.02] active:scale-[0.98] rounded-sm flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK NOW</span>
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            id="mobile-theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 dark:border-white/10 light:border-black/15 bg-[#111111] dark:bg-[#111111] light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-800"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#18C8FF]" />
            ) : (
              <Moon className="w-4 h-4 text-[#00AEEF]" />
            )}
          </button>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="w-11 h-11 flex items-center justify-center rounded border border-white/10 dark:border-white/10 light:border-black/15 bg-[#111111] dark:bg-[#111111] light:bg-white text-white dark:text-white light:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00AEEF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#050505]/98 dark:bg-[#050505]/98 light:bg-[#F8F9FA]/98 backdrop-blur-xl border-t border-[#00AEEF]/20 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="space-y-3 pt-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`block px-4 py-3 text-lg font-heading uppercase tracking-wider rounded border transition-all ${
                    isActive
                      ? 'bg-[#00AEEF]/10 text-[#00AEEF] border-[#00AEEF]/40 font-bold'
                      : 'text-white dark:text-white light:text-black border-transparent hover:border-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="space-y-4 pt-6 pb-4 border-t border-white/10 dark:border-white/10 light:border-black/10">
            <button
              id="mobile-drawer-book-cta"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookNowClick();
              }}
              className="w-full py-3.5 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-bold text-base tracking-widest uppercase rounded electric-glow flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>BOOK APPOINTMENT NOW</span>
            </button>

            <a
              id="mobile-drawer-call-cta"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 bg-[#111111] dark:bg-[#111111] light:bg-white text-white dark:text-white light:text-black border border-[#00AEEF]/30 hover:border-[#00AEEF] text-center font-semibold text-sm tracking-wider uppercase rounded flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00AEEF]" />
              <span>CALL: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
