import React from 'react';
import { WHY_PELOS_THEMES } from '../data/businessData';

export const WhyPelos: React.FC = () => {
  return (
    <section
      id="why-pelos"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] relative border-t border-white/5 dark:border-white/5 light:border-black/5 transition-colors duration-300"
      aria-labelledby="why-pelos-heading"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#00AEEF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            id="why-pelos-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#0A0A0A]"
          >
            WHY <span className="text-[#00AEEF]">PELOS</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-4 text-sm sm:text-base uppercase tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-600 font-medium">
            Four Pillars of Signature Grooming
          </p>
        </div>

        {/* Large Typography Theme Rows with Blue Dividers */}
        <div className="space-y-12 sm:space-y-16">
          {WHY_PELOS_THEMES.map((theme) => (
            <div
              key={theme.number}
              className="group py-6 border-b border-white/10 dark:border-white/10 light:border-black/10 transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                {/* Number Indicator */}
                <div className="lg:col-span-2">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#00AEEF] tracking-widest flex items-center gap-2">
                    <span className="w-6 h-[1.5px] bg-[#00AEEF]/60" />
                    {theme.number}
                  </span>
                </div>

                {/* Main Theme Word - Large Typography */}
                <div className="lg:col-span-4">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase tracking-tight text-white dark:text-white light:text-[#0A0A0A] group-hover:text-[#00AEEF] transition-colors duration-200">
                    {theme.title}
                  </h3>
                </div>

                {/* Theme Description & Detail */}
                <div className="lg:col-span-6 space-y-2">
                  <p className="text-lg sm:text-xl font-heading font-medium text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                    {theme.description}
                  </p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed font-normal">
                    {theme.detail}
                  </p>
                </div>
              </div>

              {/* Glowing Thin Accent Bar on Hover */}
              <div className="w-0 group-hover:w-full h-[2px] bg-[#00AEEF] mt-6 transition-all duration-500 shadow-[0_0_10px_#00AEEF]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
