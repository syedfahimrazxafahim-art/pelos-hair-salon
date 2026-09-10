import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  // Body scroll lock during lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F7F7F5] relative transition-colors duration-400"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] transition-colors duration-300"
          >
            OUR <span className="text-[#00AEEF]">GALLERY</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-[#4A4A4A] transition-colors duration-300">
            A visual showcase of precision hair architecture, sculpted beard profiles, and studio craft.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'fades', label: 'Fades & Cuts' },
              { id: 'beards', label: 'Beard Grooming' },
              { id: 'studio', label: 'Barber Work & Studio' },
            ].map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`gallery-filter-${tab.id}`}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] ${
                    isActive
                      ? 'bg-[#00AEEF] text-[#050505] electric-glow-sm shadow-[0_0_15px_rgba(0,174,239,0.4)]'
                      : 'bg-[#111111] dark:bg-[#111111] light:bg-white text-neutral-300 dark:text-neutral-300 light:text-[#151515] hover:text-white dark:hover:text-white light:hover:text-black hover:bg-neutral-800 dark:hover:bg-neutral-800 light:hover:bg-neutral-100 border border-white/10 dark:border-white/10 light:border-black/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleOpenLightbox(index)}
              className="group relative overflow-hidden rounded-sm bg-[#111111] dark:bg-[#111111] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00AEEF] cursor-pointer transition-all duration-400 shadow-xl hover:electric-glow-sm"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#0a0a0a]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Dark Overlay with Electric Blue Accents */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00AEEF] mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-base font-heading font-bold uppercase text-white tracking-wide">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Click to expand full preview</span>
                </div>
              </div>

              {/* Bottom Edge Blue Accent */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_#00AEEF]" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && currentItem && (
          <div
            id="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox Viewer"
            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          >
            {/* Top Bar with Counter and Close */}
            <div className="w-full max-w-5xl flex items-center justify-between py-4 text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#00AEEF] font-bold uppercase tracking-widest">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <span className="text-sm font-heading uppercase text-neutral-300 hidden sm:inline">
                  {currentItem.title}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCloseLightbox}
                aria-label="Close Lightbox"
                className="p-2 rounded-full bg-white/10 hover:bg-[#00AEEF] hover:text-black text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative max-w-4xl max-h-[75vh] w-full flex items-center justify-center overflow-hidden my-auto">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[75vh] w-auto object-contain rounded-sm border border-white/15 shadow-2xl"
              />

              {/* Prev Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-[#00AEEF] text-white hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Image"
                className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-[#00AEEF] text-white hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption */}
            <div className="w-full max-w-5xl text-center py-3">
              <p className="text-xs text-neutral-400 font-normal">
                {currentItem.alt}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
