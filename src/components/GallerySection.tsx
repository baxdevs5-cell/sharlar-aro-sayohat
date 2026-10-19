import React, { useState, useMemo } from 'react';
import { GalleryItem, Language } from '../types';
import { galleryItems } from '../data/gallery';
import { translations } from '../data/translations';
import { LightboxModal } from './LightboxModal';
import { Camera, Maximize2, Compass } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'architecture' | 'historical' | 'modern'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const t = translations.gallerySection;

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-3">
            <Camera className="w-4 h-4" />
            <span>{t.badge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            {t.description[lang]}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="reveal-item flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`btn-interactive px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === 'all'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.filterAll[lang]}
          </button>
          <button
            onClick={() => setSelectedCategory('architecture')}
            className={`btn-interactive px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === 'architecture'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.filterArch[lang]}
          </button>
          <button
            onClick={() => setSelectedCategory('historical')}
            className={`btn-interactive px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === 'historical'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.filterHist[lang]}
          </button>
          <button
            onClick={() => setSelectedCategory('modern')}
            className={`btn-interactive px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              selectedCategory === 'modern'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {t.filterModern[lang]}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => {
            const hasError = imgErrors[item.id];
            return (
              <div
                key={item.id}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
                onClick={() => setLightboxIndex(index)}
                className="reveal-item group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 bg-slate-900"
              >
                {!hasError ? (
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    onError={() => handleImgError(item.id)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-cyan-950 flex flex-col items-center justify-center text-white p-4 text-center">
                    <Compass className="w-10 h-10 text-cyan-400 mb-2 opacity-80" />
                    <span className="font-serif font-bold text-sm">{item.title[lang]}</span>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Zoom Icon badge */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform group-hover:-translate-y-1 transition-transform">
                  <span className="text-[11px] font-medium text-cyan-300 uppercase tracking-wider block mb-1">
                    {item.city[lang]}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    {item.title[lang]}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          lang={lang}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </section>
  );
};
