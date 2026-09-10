import React, { useEffect, useState } from 'react';
import { Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, PELOS_ASSETS } from '../data/businessData';

interface HeroProps {
  onBookNowClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNowClick, onServicesClick }) => {
  const [scrollY, setScrollY] = useState(0);

  // Smooth, subtle parallax movement while scrolling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cap parallax offset for smooth, subtle motion without cutting off the subject
  const parallaxOffset = Math.min(scrollY * 0.15, 45);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#141414] transition-colors duration-400"
      aria-label="Pelos Barbershop Hero"
    >
      {/* 
        AUTHENTIC HERO BACKGROUND:
        Strictly uses the uploaded Pelos barbershop image preserving authentic composition:
        - Barbershop chair and salon station clearly visible on the LEFT
        - Authentic central Pelos geometric lion crest and 'Perfección en cada detalle'
        - Confident master barber in professional apron with crossed arms & shears visible on the RIGHT
      */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          willChange: 'transform',
        }}
      >
        <img
          id="hero-uploaded-banner"
          src={PELOS_ASSETS.heroBanner}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== PELOS_ASSETS.heroBannerCdn) {
              target.src = PELOS_ASSETS.heroBannerCdn;
            }
          }}
          alt="Pelos Barbershop authentic salon interior, barber chair, and master barber"
          className="w-full h-full object-cover object-[68%_center] sm:object-[60%_center] md:object-[55%_center] lg:object-center select-none filter contrast-[1.05] brightness-[1.01] saturate-[1.03] scale-100 hover:scale-[1.015] transition-transform duration-1000 ease-out [image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
          loading="eager"
          decoding="async"
        />

        {/* 
          SUBTLE HERO OVERLAY (20% opacity):
          Light, crystal-clear scrim so the barbershop photo, central lion crest,
          and typography remain sharp, vivid, and completely haze-free.
        */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/20 light:bg-black/10 transition-opacity duration-300" />

        {/* Subtle top vignette to guarantee navbar legibility */}
        <div className="absolute top-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none" />

        {/* Subtle bottom gradient to blend smoothly into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-[#0A0A0A]/85 via-[#0A0A0A]/20 to-transparent pointer-events-none" />
      </div>

      {/* 
        UPPER SAFE ZONE:
        Positioned in the upper salon ceiling/mirror negative space so the headline
        does NOT sit over the barber's face/body, the chair, or the central lion crest.
      */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Localized background wrapper: keeps text razor-sharp without darkening the rest of the image */}
        <div className="flex flex-col items-center bg-black/35 backdrop-blur-[2px] px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-white/10 shadow-2xl">
          {/* Location Badge */}
          <div className="mb-2.5 inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#00AEEF]/50 bg-black/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-white">
              {BUSINESS_INFO.location}
            </span>
          </div>

          {/* Website Headline with soft drop shadow */}
          <h1
            id="hero-main-heading"
            className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            UN CORTE <span className="text-[#00AEEF] drop-shadow-[0_0_20px_rgba(0,174,239,0.7)]">ÚNICO</span>
          </h1>

          {/* Supporting Tagline */}
          <p
            id="hero-supporting-text"
            className="mt-1 text-sm sm:text-lg md:text-xl font-heading font-semibold tracking-wider uppercase text-neutral-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            COMO TE LO MERECES
          </p>
        </div>
      </div>

      {/* 
        MIDDLE CLEARANCE GAP:
        Leaves the center frame open so the uploaded image's central lion crest,
        'Perfección en cada detalle', and the barber on the right are unobstructed.
      */}
      <div className="relative z-10 my-auto py-8 sm:py-12 md:py-16 pointer-events-none" aria-hidden="true" />

      {/* 
        LOWER SAFE ZONE:
        Anchored cleanly at the bottom, below the visual center of the image.
        Houses the action buttons and scroll indicator.
      */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Action Buttons */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none">
          {/* Primary CTA */}
          <button
            id="hero-primary-book-btn"
            type="button"
            onClick={onBookNowClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-extrabold text-sm tracking-widest uppercase rounded-sm electric-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK NOW</span>
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-secondary-services-btn"
            type="button"
            onClick={onServicesClick}
            className="w-full sm:w-auto px-8 py-3.5 bg-black/45 hover:bg-black/65 text-white border border-white/40 hover:border-[#00AEEF] backdrop-blur-sm font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            OUR SERVICES
          </button>
        </div>

        {/* Bottom Scroll Indicator */}
        <button
          id="hero-scroll-indicator"
          type="button"
          onClick={onServicesClick}
          aria-label="Scroll down to explore services"
          className="mt-5 sm:mt-7 inline-flex flex-col items-center text-neutral-300 hover:text-[#00AEEF] transition-colors group focus:outline-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase mb-0.5 font-semibold">EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#00AEEF]" />
        </button>
      </div>
    </section>
  );
};



