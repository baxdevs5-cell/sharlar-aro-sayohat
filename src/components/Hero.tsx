import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Compass, Sparkles, ArrowRight, Award, History, Landmark, MapPin } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreCities: () => void;
  onGoToQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreCities, onGoToQuiz }) => {
  const t = translations.hero;

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with High-Fidelity Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/registan_samarkand_hero_1792386325308.jpg"
          alt="Samarkand Registan Square at Twilight"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlay to guarantee 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/75 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Kicker (Clean unboxed text, no static pill) */}
        <div className="animate-hero-entrance flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-300/90 mb-4">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{t.kicker[lang]}</span>
          <span aria-hidden="true" className="text-amber-400/50">·</span>
          <span>Registon, Samarqand</span>
        </div>

        {/* Heading (Animation 2 - Page Entrance 700-900ms) */}
        <h1 className="animate-hero-entrance-delay-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15] text-balance max-w-4xl mb-6 drop-shadow-sm">
          {t.heading[lang]}
        </h1>

        {/* Subtitle */}
        <p className="animate-hero-entrance-delay-2 text-base sm:text-lg md:text-xl text-slate-200/90 font-light leading-relaxed max-w-2xl text-balance mb-8">
          {t.subtitle[lang]}
        </p>

        {/* Interactive CTA Buttons (Animation 1: btn-interactive with 1.06x scale & shadow) */}
        <div className="animate-hero-entrance-delay-3 flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onExploreCities}
            className="btn-interactive inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-900/40 cursor-pointer whitespace-nowrap"
          >
            <Compass className="w-5 h-5 text-cyan-200" />
            <span>{t.ctaExplore[lang]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onGoToQuiz}
            className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/25 backdrop-blur-md font-semibold text-sm sm:text-base shadow-md cursor-pointer whitespace-nowrap"
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span>{t.ctaQuiz[lang]}</span>
          </button>
        </div>

        {/* Operational Statistics Strip */}
        <div className="animate-hero-entrance-delay-3 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white">
          <div className="text-center p-2">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-cyan-400 tabular-nums">
              {t.stats.citiesCount.val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t.stats.citiesCount.label[lang]}
            </div>
          </div>

          <div className="text-center p-2 border-l border-white/10">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-400 tabular-nums">
              {t.stats.unescoCount.val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t.stats.unescoCount.label[lang]}
            </div>
          </div>

          <div className="text-center p-2 border-t md:border-t-0 md:border-l border-white/10">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-sky-400 tabular-nums">
              {t.stats.historyYears.val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t.stats.historyYears.label[lang]}
            </div>
          </div>

          <div className="text-center p-2 border-t md:border-t-0 border-l border-white/10">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums">
              {t.stats.monuments.val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {t.stats.monuments.label[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
