import React from 'react';
import { PelosLogo } from './PelosLogo';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Barbers', href: '#barbers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
    { label: 'Booking', href: '#booking' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#050505] dark:bg-[#050505] light:bg-[#0A0A0A] text-white border-t border-white/10 pt-16 pb-12 transition-colors duration-300"
      aria-label="Pelos Barbershop Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Location */}
          <div className="md:col-span-5 space-y-4">
            <PelosLogo size="md" id="footer-pelos-logo" />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Luxury modern barbershop in Los Angeles, California. Precision haircuts, 
              beard sculpting, and signature grooming tailored for confidence.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#00AEEF] font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-[#00AEEF]">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.href);
                    }}
                    className="text-neutral-400 hover:text-[#00AEEF] transition-colors uppercase tracking-wider block py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Inquiries & Social */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-[#00AEEF]">
              Direct Contact
            </h3>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#00AEEF] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-[#00AEEF]" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#00AEEF] transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mb-2 font-semibold">
                Social Channels
              </span>
              <div className="flex gap-4 text-xs font-semibold uppercase tracking-wider">
                <a
                  id="footer-facebook-link"
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#00AEEF] transition-colors flex items-center gap-1"
                >
                  Facebook
                </a>
                <span className="text-neutral-600">•</span>
                <a
                  id="footer-instagram-link"
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#00AEEF] transition-colors flex items-center gap-1"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. {BUSINESS_INFO.location}.
          </p>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#00AEEF] transition-colors uppercase tracking-widest text-[11px] font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00AEEF]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
