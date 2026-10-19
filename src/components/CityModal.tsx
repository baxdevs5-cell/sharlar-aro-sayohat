import React, { useEffect, useState } from 'react';
import { City, Language } from '../types';
import { translations } from '../data/translations';
import { X, Heart, MapPin, Calendar, Users, Award, Compass, Sparkles, Check } from 'lucide-react';

interface CityModalProps {
  city: City | null;
  lang: Language;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (cityId: string) => void;
}

export const CityModal: React.FC<CityModalProps> = ({
  city,
  lang,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [imgError, setImgError] = useState(false);
  const t = translations.modal;

  useEffect(() => {
    setImgError(false);
  }, [city?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (city) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [city, onClose]);

  if (!city) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-hero-entrance"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="city-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Media Banner */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-slate-900">
          {!imgError ? (
            <img
              src={city.image}
              alt={city.name[lang]}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-indigo-950 flex flex-col items-center justify-center text-white p-6 text-center">
              <Compass className="w-16 h-16 text-cyan-400 mb-3 opacity-80" />
              <span className="font-serif text-3xl font-bold">{city.name[lang]}</span>
              <span className="text-sm text-cyan-200 mt-1">{city.region[lang]}</span>
            </div>
          )}

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Action buttons (Close + Favorite) */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => onToggleFavorite(city.id)}
              className="btn-interactive p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20"
              aria-label={isFavorite ? t.removeFromFavorites[lang] : t.addToFavorites[lang]}
              title={isFavorite ? t.removeFromFavorites[lang] : t.addToFavorites[lang]}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? 'fill-rose-500 text-rose-500' : 'text-white'
                }`}
              />
            </button>

            <button
              onClick={onClose}
              className="btn-interactive p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20"
              aria-label={t.closeBtn[lang]}
              title={t.closeBtn[lang]}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* City Title and Metadata in Scrim */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-cyan-300 mb-1.5">
              <span>{city.region[lang]}</span>
              {city.unesco && (
                <>
                  <span aria-hidden="true" className="text-white/40">·</span>
                  <span className="inline-flex items-center gap-1 text-amber-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{t.unescoBadge[lang]}</span>
                  </span>
                </>
              )}
            </div>

            <h2
              id="city-modal-title"
              className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-white drop-shadow-sm"
            >
              {city.name[lang]}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/70 text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-400 dark:text-slate-400 block text-[11px] uppercase tracking-wider">
                  {translations.citiesSection.foundedLabel[lang]}
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">{city.founded}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-400 dark:text-slate-400 block text-[11px] uppercase tracking-wider">
                  {translations.citiesSection.populationLabel[lang]}
                </span>
                <span className="font-semibold text-slate-900 dark:text-white tabular-nums">{city.population}</span>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <div>
                <span className="text-slate-400 dark:text-slate-400 block text-[11px] uppercase tracking-wider">
                  Koordinatalar
                </span>
                <span className="font-semibold text-slate-900 dark:text-white font-mono text-xs">{city.coordinates}</span>
              </div>
            </div>
          </div>

          {/* Section: History */}
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{t.historyTitle[lang]}</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {city.history[lang]}
            </p>
          </div>

          {/* Section: Cultural Significance */}
          <div className="p-4 sm:p-5 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/40">
            <h3 className="text-base font-serif font-bold text-cyan-900 dark:text-cyan-300 mb-2">
              {t.culturalTitle[lang]}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {city.culturalSignificance[lang]}
            </p>
          </div>

          {/* Section: Famous Landmarks */}
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-4">
              {t.landmarksTitle[lang]}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {city.landmarks.map((lm, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between"
                >
                  <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1.5 font-serif">
                    {lm.name[lang]}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {lm.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Interesting Facts */}
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-3">
              {t.factsTitle[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              {city.facts[lang].map((fact, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                  <span className="leading-relaxed">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between gap-4">
          <button
            onClick={() => onToggleFavorite(city.id)}
            className="btn-interactive inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <Heart
              className={`w-4 h-4 ${
                isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
              }`}
            />
            <span>{isFavorite ? t.removeFromFavorites[lang] : t.addToFavorites[lang]}</span>
          </button>

          <button
            onClick={onClose}
            className="btn-interactive px-5 py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100"
          >
            {t.closeBtn[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};
