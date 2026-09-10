import React from 'react';
import { Scissors, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, PELOS_ASSETS } from '../data/businessData';

export const AboutPelos: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F7F7F5] relative overflow-hidden transition-colors duration-400"
      aria-labelledby="about-pelos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic User Barbershop Imagery */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-sm overflow-hidden border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl bg-[#111111] dark:bg-[#111111] light:bg-white transition-colors duration-300">
              <img
                src={PELOS_ASSETS.img4_studioCraft}
                alt="Pelos Barbershop authentic studio grooming craft"
                className="w-full h-[450px] sm:h-[540px] object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Subtle Blue Rim Lighting Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] dark:from-[#050505] light:from-[#151515]/75 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-[#111111]/90 dark:bg-[#111111]/90 light:bg-white/95 backdrop-blur-md border border-[#00AEEF]/40 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                  LOS ANGELES STUDIO
                </p>
                <p className="text-sm font-heading font-semibold text-white dark:text-white light:text-[#151515] mt-1">
                  Dedicated to the Art of Masculine Grooming
                </p>
              </div>
            </div>

            {/* Electric Blue Geometric Accent Line */}
            <div className="absolute -bottom-3 -right-3 w-28 h-28 border-r-2 border-b-2 border-[#00AEEF] pointer-events-none opacity-80" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Heading with Thin Blue Divider */}
            <div className="space-y-3">
              <h2
                id="about-pelos-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] transition-colors duration-300"
              >
                ABOUT <span className="text-[#00AEEF]">PELOS</span>
              </h2>

              {/* Animated Thin Blue Divider Line */}
              <div className="w-24 h-[3px] bg-[#00AEEF] rounded-full shadow-[0_0_12px_rgba(0,174,239,0.8)]" />
            </div>

            {/* Body Copy Focusing on Craft, Precision & Experience */}
            <div className="mt-8 space-y-6 text-base sm:text-lg text-neutral-300 dark:text-neutral-300 light:text-[#4A4A4A] leading-relaxed font-normal transition-colors duration-300">
              <p>
                At <strong className="text-white dark:text-white light:text-[#151515] font-bold">Pelos Barbershop</strong>, 
                grooming is elevated to a bespoke craft of precision, proportion, and masculine style. 
                Based in <strong className="text-white dark:text-white light:text-[#151515] font-bold">{BUSINESS_INFO.location}</strong>, 
                our studio provides a high-end grooming sanctuary tailored to clients who value uncompromising quality.
              </p>

              <p>
                Every service begins with a thorough consultation, assessing facial geometry, hair texture, 
                and personal aesthetic to deliver a tailored finish. From razor-sharp skin fades to meticulous beard sculpting 
                and traditional hot towel shaves, we bring relentless attention to detail to every chair.
              </p>
            </div>

            {/* Three Core Tenet Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-8 border-t border-white/10 dark:border-white/10 light:border-black/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Scissors className="w-4 h-4 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold uppercase text-white dark:text-white light:text-[#151515] tracking-wider">
                    Precision
                  </h3>
                  <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-[#6B7280] mt-1">
                    Exact scissor & clipper architecture
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold uppercase text-white dark:text-white light:text-[#151515] tracking-wider">
                    Style
                  </h3>
                  <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-[#6B7280] mt-1">
                    Contemporary elevated aesthetic
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-bold uppercase text-white dark:text-white light:text-[#151515] tracking-wider">
                    Craft
                  </h3>
                  <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-[#6B7280] mt-1">
                    Hot towel & straight-razor skill
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
