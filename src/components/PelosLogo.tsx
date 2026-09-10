import React from 'react';
import { PELOS_ASSETS } from '../data/businessData';

interface PelosLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  variant?: 'full' | 'mark-only';
  id?: string;
}

export const PelosLogo: React.FC<PelosLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor,
  variant = 'full',
  id = 'pelos-brand-logo',
}) => {
  const sizeDimensions = {
    sm: { img: 'w-8 h-8', textTitle: 'text-base', textSub: 'text-[9px]' },
    md: { img: 'w-11 h-11', textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { img: 'w-16 h-16', textTitle: 'text-3xl', textSub: 'text-xs' },
    xl: { img: 'w-24 h-24', textTitle: 'text-5xl', textSub: 'text-sm' },
  };

  const currentSize = sizeDimensions[size];

  return (
    <div
      id={id}
      className={`inline-flex items-center gap-3 select-none group ${className}`}
      aria-label="Pelos Barbershop Logo"
    >
      {/* Official Pelos Logo Mark - Preserved without cropping, stretching, distortion or recoloring */}
      <div className={`relative flex-shrink-0 ${currentSize.img} flex items-center justify-center`}>
        <img
          src={PELOS_ASSETS.logo}
          alt="Pelos Barbershop Official Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(0,174,239,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_18px_rgba(0,174,239,0.6)]"
          loading="eager"
        />
      </div>

      {showText && variant === 'full' && (
        <div className="flex flex-col text-left justify-center leading-none">
          <span
            className={`font-heading font-black tracking-tight uppercase transition-colors duration-200 ${currentSize.textTitle} ${
              textColor || 'text-white dark:text-white light:text-[#151515]'
            }`}
          >
            PELOS
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`font-semibold tracking-[0.22em] uppercase text-[#00AEEF] ${currentSize.textSub}`}>
              BARBERSHOP
            </span>
            <span className="w-1 h-1 rounded-full bg-[#00AEEF] opacity-70"></span>
            <span className={`tracking-widest uppercase text-neutral-400 dark:text-neutral-400 light:text-neutral-600 ${currentSize.textSub}`}>
              LA
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

