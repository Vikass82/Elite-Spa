import React, { useState, useEffect, useCallback } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { SPA_CONFIG } from '../config/spaConfig';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Interior' },
    { id: 'environment', label: 'Spa Environment' },
    { id: 'wellness', label: 'Wellness & Massage' },
    { id: 'atmosphere', label: 'Atmosphere' },
  ];

  const filteredImages = SPA_CONFIG.gallery.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, filteredImages.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextImage(); // Swiped left -> next
    } else if (diff < -50) {
      prevImage(); // Swiped right -> prev
    }
    setTouchStart(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#0e1013] border-t border-[#1d222a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#29303c] text-xs text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Spa Ambiance & Environment
          </h2>
          <p className="text-base text-[#b0a89a] mt-4 font-light leading-relaxed">
            Experience our serene treatment settings, hygienic suites, and peaceful wellness ambiance in Sanpada, Vashi.
          </p>
        </div>

        {/* Transparent Placeholder Notice Banner per guidelines */}
        <div className="max-w-3xl mx-auto mb-8 p-3.5 rounded-xl bg-[#14171d] border border-[#252b36] flex items-center gap-3 text-xs text-[#a49d90]">
          <Info className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
          <span>
            The Google Business listing contains approximately 24 official venue photos. The gallery below showcases
            representative tranquil spa atmospheres until the business owner imports direct verified gallery captures.
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0c0d0e] font-semibold shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#15181e] text-[#b8b0a2] border border-[#252a34] hover:bg-[#1c2027] hover:text-[#f4efe6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img: GalleryImage, index: number) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#14171c] border border-[#242933] aspect-[4/3] cursor-pointer shadow-lg hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/90 via-[#0c0d0e]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-medium block">
                    {img.category}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-[#f4efe6] font-semibold mt-0.5">
                    {img.title}
                  </h4>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#0c0d0e]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0c0d0e]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            id="lightbox-close-button"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#181a20] text-[#f4efe6] border border-[#2c323f] hover:text-[#d4af37] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            id="lightbox-prev-button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181a20]/90 text-[#f4efe6] border border-[#2c323f] hover:text-[#d4af37] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            id="lightbox-next-button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#181a20]/90 text-[#f4efe6] border border-[#2c323f] hover:text-[#d4af37] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-[#252a34]"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#f4efe6] font-semibold">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#a29b8e] mt-1 font-light">
                {filteredImages[lightboxIndex].alt} • Photo {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
