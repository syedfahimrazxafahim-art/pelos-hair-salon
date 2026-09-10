import React from 'react';
import { SERVICES_LIST } from '../data/businessData';
import { Scissors, Crown, Sparkles, Wind, Flame, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    const iconClass = 'w-7 h-7 text-[#00AEEF] group-hover:text-[#18C8FF] transition-colors duration-300';
    switch (iconName) {
      case 'scissors':
        return <Scissors className={iconClass} />;
      case 'crown':
        return <Crown className={iconClass} />;
      case 'sparkles':
        return <Sparkles className={iconClass} />;
      case 'wind':
        return <Wind className={iconClass} />;
      case 'flame':
        return <Flame className={iconClass} />;
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      default:
        return <Scissors className={iconClass} />;
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F7F7F5] relative transition-colors duration-400"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] transition-colors duration-300"
          >
            OUR <span className="text-[#00AEEF]">SERVICES</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-5 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-[#4A4A4A] transition-colors duration-300">
            Tailored grooming services engineered for confidence, precision, and enduring style.
          </p>
        </div>

        {/* 6 Services Grid (Desktop 3 col, Tablet 2 col, Mobile 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-[#111111] dark:bg-[#111111] light:bg-white p-8 rounded-sm border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00AEEF] transition-all duration-400 flex flex-col justify-between hover:electric-glow-sm hover:-translate-y-1.5 shadow-lg"
            >
              {/* Top Row: Icon and Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-sm bg-[#181818] dark:bg-[#181818] light:bg-[#F7F7F5] border border-[#00AEEF]/30 flex items-center justify-center group-hover:border-[#00AEEF] group-hover:shadow-[0_0_15px_rgba(0,174,239,0.35)] transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold tracking-widest text-neutral-500 dark:text-neutral-500 light:text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] group-hover:text-[#00AEEF] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm text-neutral-400 dark:text-neutral-400 light:text-[#4A4A4A] leading-relaxed font-normal">
                  {service.shortDescription}
                </p>
              </div>

              {/* BOOK THIS SERVICE CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10">
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  aria-label={`Book ${service.title} service`}
                  className="w-full py-3 px-4 rounded-sm bg-[#161616] dark:bg-[#161616] light:bg-[#F7F7F5] hover:bg-[#00AEEF] light:hover:bg-[#00AEEF] text-neutral-200 dark:text-neutral-200 light:text-[#151515] hover:text-[#050505] light:hover:text-[#050505] font-extrabold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-between group/btn border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00AEEF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subtle Blue Corner Accent on Hover */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
