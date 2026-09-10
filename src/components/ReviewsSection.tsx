import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SAMPLE_REVIEWS } from '../data/businessData';
import { ChevronLeft, ChevronRight, Play, Pause, Quote, Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef<number | null>(null);

  // Responsive cardsPerView calculation
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalReviews = SAMPLE_REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - cardsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay logic with pause on hover, focus, tab hidden, and reduced motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying || isHovered || isFocused) {
      return;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden, timer should not run
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const interval = setInterval(() => {
      if (!document.hidden) {
        handleNext();
      }
    }, 5500);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, isHovered, isFocused, handleNext]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F7F7F5] relative transition-colors duration-400"
      aria-labelledby="reviews-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="reviews-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] transition-colors duration-300"
          >
            CLIENT <span className="text-[#00AEEF]">REVIEWS</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-[#00AEEF] font-bold">
            SAMPLE REVIEW — PREVIEW CONTENT
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {SAMPLE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="px-3 flex-shrink-0"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="h-full bg-[#111111] dark:bg-[#111111] light:bg-white p-8 rounded-sm border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00AEEF]/60 transition-all duration-300 flex flex-col justify-between shadow-xl relative group">
                  
                  {/* Top Quote Icon & Stars */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-[#00AEEF] opacity-80" />
                      {/* Blue Star Accents */}
                      <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#00AEEF] text-[#00AEEF]" />
                        ))}
                      </div>
                    </div>

                    {/* Review Quote */}
                    <p className="text-sm sm:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 italic leading-relaxed">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* Bottom Metadata with Strict Preview Label */}
                  <div className="mt-8 pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10">
                    <p className="text-xs font-heading font-bold text-white dark:text-white light:text-black uppercase tracking-wider">
                      {review.highlight}
                    </p>
                    <div className="mt-1 inline-block px-2 py-0.5 rounded bg-[#00AEEF]/15 border border-[#00AEEF]/30 text-[10px] font-mono font-bold text-[#00AEEF] uppercase tracking-wider">
                      {review.clientBadge}
                    </div>
                  </div>

                  {/* Corner Glow Accent */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls: Previous / Next / Pause-Play / Dots */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          
          {/* Autoplay Pause / Play Control */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause review autoplay' : 'Play review autoplay'}
            className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-semibold uppercase text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-[#00AEEF] focus:outline-none"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Pause Autoplay</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Resume Autoplay</span>
              </>
            )}
          </button>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2" aria-label="Review pagination">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-[#00AEEF] shadow-[0_0_8px_#00AEEF]'
                    : 'w-2 bg-neutral-600 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Reviews"
              className="w-10 h-10 rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-black hover:border-[#00AEEF] hover:text-[#00AEEF] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Reviews"
              className="w-10 h-10 rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-black hover:border-[#00AEEF] hover:text-[#00AEEF] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
