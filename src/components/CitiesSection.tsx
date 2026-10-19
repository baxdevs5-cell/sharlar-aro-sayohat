import React, { useState, useMemo } from 'react';
import { City, Language } from '../types';
import { translations } from '../data/translations';
import { Search, Heart, MapPin, Calendar, ArrowRight, Award, Compass, Sparkles } from 'lucide-react';

interface CitiesSectionProps {
  cities: City[];
  lang: Language;
  onSelectCity: (city: City) => void;
  favorites: string[];
  onToggleFavorite: (cityId: string) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({
  cities,
  lang,
  onSelectCity,
  favorites,
  onToggleFavorite,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'historical' | 'metropolis' | 'valley' | 'favorites'>('all');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const t = translations.citiesSection;

  const handleImgError = (cityId: string) => {
    setImgErrors((prev) => ({ ...prev, [cityId]: true }));
  };

  // Filter logic
  const filteredCities = useMemo(() => {
    return cities.filter((city) => {
      // Category filter
      if (selectedCategory === 'favorites') {
        if (!favorites.includes(city.id)) return false;
      } else if (selectedCategory !== 'all') {
        if (city.category !== selectedCategory) return false;
      }

      // Search query filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase().trim();
      const name = city.name[lang].toLowerCase();
      const region = city.region[lang].toLowerCase();
      const desc = city.shortDescription[lang].toLowerCase();
      const facts = city.facts[lang].join(' ').toLowerCase();

      return (
        name.includes(query) ||
        region.includes(query) ||
        desc.includes(query) ||
        facts.includes(query)
      );
    });
  }, [cities, lang, selectedCategory, searchQuery, favorites]);

  return (
    <section id="cities" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-3">
            <Compass className="w-4 h-4" />
            <span>{t.badge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            {t.description[lang]}
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="reveal-item flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 p-2 sm:p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-800">
          {/* Search Input Field */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder[lang]}
              className="w-full pl-10 pr-4 py-2 text-sm bg-transparent rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕
              </button>
            )}
          </div>

          {/* Interactive Filter Segment Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`btn-interactive px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.filterAll[lang]}
            </button>
            <button
              onClick={() => setSelectedCategory('historical')}
              className={`btn-interactive px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === 'historical'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.filterHistorical[lang]}
            </button>
            <button
              onClick={() => setSelectedCategory('metropolis')}
              className={`btn-interactive px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === 'metropolis'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.filterMetropolis[lang]}
            </button>
            <button
              onClick={() => setSelectedCategory('valley')}
              className={`btn-interactive px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                selectedCategory === 'valley'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {t.filterValley[lang]}
            </button>
            <button
              onClick={() => setSelectedCategory('favorites')}
              className={`btn-interactive px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedCategory === 'favorites'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${selectedCategory === 'favorites' ? 'fill-current' : 'text-rose-500'}`} />
              <span>{t.filterFavorites[lang]}</span>
              {favorites.length > 0 && (
                <span className="text-[10px] bg-white/20 dark:bg-white/20 px-1.5 py-0.2 rounded-full tabular-nums">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Cities Grid with Staggered Scroll Reveal */}
        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCities.map((city, index) => {
              const isFav = favorites.includes(city.id);
              const hasError = imgErrors[city.id];

              return (
                <article
                  key={city.id}
                  style={{ transitionDelay: `${(index % 3) * 120}ms` }}
                  className="reveal-item group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Card Image Container */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-800 shrink-0">
                    {!hasError ? (
                      <img
                        src={city.image}
                        alt={city.name[lang]}
                        onError={() => handleImgError(city.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-cyan-950 flex flex-col items-center justify-center text-white p-4 text-center">
                        <Compass className="w-12 h-12 text-cyan-400 mb-2 opacity-80" />
                        <span className="font-serif font-bold text-lg">{city.name[lang]}</span>
                      </div>
                    )}

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Favorite Heart Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(city.id);
                      }}
                      className="btn-interactive absolute top-3 right-3 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/20 z-10"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isFav ? 'fill-rose-500 text-rose-500' : 'text-white'
                        }`}
                      />
                    </button>

                    {/* UNESCO marker if applicable */}
                    {city.unesco && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500/90 text-slate-950 text-[11px] font-bold tracking-wide flex items-center gap-1 shadow-sm backdrop-blur-sm">
                        <Award className="w-3.5 h-3.5" />
                        <span>UNESCO</span>
                      </div>
                    )}

                    {/* City Name & Region on card image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-xs text-cyan-300 font-medium block">
                        {city.region[lang]}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white drop-shadow-sm">
                        {city.name[lang]}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    {/* Metadata line (Zero-pill discipline: unboxed text with dots) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>{city.founded}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{city.population}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {city.shortDescription[lang]}
                    </p>

                    {/* Card Action Button (Animation 1: 1.06x scale) */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        {city.landmarks.length} obida
                      </span>

                      <button
                        onClick={() => onSelectCity(city)}
                        className="btn-interactive inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-cyan-600 dark:bg-slate-800 dark:hover:bg-cyan-600 text-slate-900 hover:text-white dark:text-slate-100 dark:hover:text-white font-medium text-xs transition-colors cursor-pointer"
                      >
                        <span>{t.detailsBtn[lang]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-lg mx-auto">
            <Compass className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-1">
              Topilmadi
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {selectedCategory === 'favorites' ? t.emptyFavorites[lang] : t.emptySearch[lang]}
            </p>
            {selectedCategory === 'favorites' ? (
              <button
                onClick={() => setSelectedCategory('all')}
                className="btn-interactive px-4 py-2 text-xs font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500"
              >
                Barcha shaharlarni ko‘rish
              </button>
            ) : (
              <button
                onClick={() => setSearchQuery('')}
                className="btn-interactive px-4 py-2 text-xs font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500"
              >
                Qidiruvni tozalash
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
