import React from 'react';
import { Calendar } from 'lucide-react';
import { PelosLogo } from './PelosLogo';
import { PELOS_ASSETS } from '../data/businessData';

interface FinalCTAProps {
  onBookNowClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookNowClick }) => {
  return (
    <section
      id="final-cta"
      className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden text-center flex items-center justify-center border-t border-white/10"
      aria-label="Book Your Next Cut at Pelos Barbershop"
    >
      {/* Cinematic Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={PELOS_ASSETS.img8_sculptedBeardCut}
          alt="Pelos Barbershop signature grooming transformation"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-50 opacity-30 scale-105 transition-transform duration-1000"
          loading="lazy"
        />
        {/* Subtle Radial Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#00AEEF]/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Pelos Logo Icon */}
        <div className="mb-6">
          <PelosLogo size="lg" showText={false} id="final-cta-logo" />
        </div>

        {/* Headline */}
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight uppercase text-white leading-tight"
        >
          READY FOR YOUR <span className="text-[#00AEEF] drop-shadow-[0_0_25px_rgba(0,174,239,0.55)]">NEXT LOOK?</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-xl text-neutral-300 font-light tracking-wide max-w-2xl leading-relaxed">
          Step into Pelos Barbershop and experience grooming with style, precision, and confidence.
        </p>

        {/* Primary Action Button */}
        <div className="mt-10">
          <button
            id="final-cta-book-btn"
            type="button"
            onClick={onBookNowClick}
            className="px-10 py-4 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-extrabold text-sm sm:text-base tracking-widest uppercase rounded-sm electric-glow transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Calendar className="w-5 h-5" />
            <span>BOOK NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
};

