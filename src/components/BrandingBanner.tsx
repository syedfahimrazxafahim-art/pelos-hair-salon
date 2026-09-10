import React from 'react';
import { PelosLogo } from './PelosLogo';
import { PELOS_ASSETS } from '../data/businessData';

export const BrandingBanner: React.FC = () => {
  return (
    <section
      id="brand-statement"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#111111] relative overflow-hidden border-y border-white/10 dark:border-white/10 light:border-white/15 transition-colors duration-400"
      aria-label="Pelos Signature Statement"
    >
      {/* Background authentic wide banner image with soft dark cinematic gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={PELOS_ASSETS.img5_salonBanner}
          alt="Pelos Barbershop signature studio banner"
          className="w-full h-full object-cover object-center opacity-25 dark:opacity-20 light:opacity-20 filter contrast-125 brightness-75 scale-105 transition-transform duration-1000"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]" />
      </div>

      {/* Subtle Radial Blue Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00AEEF]/15 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Pelos Logo Centerpiece */}
        <div className="mb-8">
          <PelosLogo size="lg" showText={false} id="brand-banner-logo" />
        </div>

        {/* Thin Electric Blue Divider */}
        <div className="w-20 h-[3px] bg-[#00AEEF] mb-8 shadow-[0_0_16px_#00AEEF] rounded-full" />

        {/* Headline */}
        <h2
          id="branding-headline"
          className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight uppercase text-white leading-tight"
        >
          MORE THAN A <span className="text-[#00AEEF] drop-shadow-[0_0_24px_rgba(0,174,239,0.55)]">HAIRCUT.</span>
        </h2>

        {/* Supporting Message */}
        <p className="mt-6 text-lg sm:text-2xl text-neutral-300 font-light tracking-wide max-w-2xl leading-relaxed">
          A signature grooming experience built around precision, style, and confidence.
        </p>
      </div>
    </section>
  );
};

