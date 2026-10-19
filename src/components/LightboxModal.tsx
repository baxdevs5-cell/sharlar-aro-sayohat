import React, { useEffect, useState } from 'react';
import { GalleryItem, Language } from '../types';
import { translations } from '../data/translations';
import { X, ChevronLeft, ChevronRight, Compass } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  lang: Language;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  lang,
  onClose,
  onNavigate,
}) => {
  const [imgError, setImgError] = useState(false);
  const currentItem = items[currentIndex];
  const t = translations.gallerySection;

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-hero-entrance select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Close Button & Counter */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-mono tracking-wider bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="hidden sm:inline-block text-xs text-slate-400">
            {t.lightboxHint[lang]}
          </span>
        </div>

        <button
          onClick={onClose}
          className="btn-interactive p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Affordances (Left/Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="btn-interactive absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 z-20"
        aria-label="Oldingi rasm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="btn-interactive absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 z-20"
        aria-label="Keyingi rasm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Frame */}
        <div className="relative w-full max-h-[70vh] flex items-center justify-center rounded-xl overflow-hidden bg-black/30">
          {!imgError ? (
            <img
              src={currentItem.image}
              alt={currentItem.title[lang]}
              onError={() => setImgError(true)}
              className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-80 flex flex-col items-center justify-center text-white bg-slate-900 rounded-lg p-6">
              <Compass className="w-16 h-16 text-cyan-400 mb-2 opacity-80" />
              <span className="font-serif text-2xl font-bold">{currentItem.title[lang]}</span>
              <span className="text-cyan-300 text-sm mt-1">{currentItem.city[lang]}</span>
            </div>
          )}
        </div>

        {/* Captions beneath Image */}
        <div className="w-full mt-4 text-center text-white space-y-1 max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-cyan-400">
            <span>{currentItem.city[lang]}</span>
            {currentItem.yearOrCentury && (
              <>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>{currentItem.yearOrCentury}</span>
              </>
            )}
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
            {currentItem.title[lang]}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
            {currentItem.description[lang]}
          </p>
        </div>
      </div>
    </div>
  );
};
