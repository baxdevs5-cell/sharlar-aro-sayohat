import React, { useState } from 'react';
import { CultureTopic, Language } from '../types';
import { cultureTopics } from '../data/culture';
import { translations } from '../data/translations';
import { BookOpen, Compass, Sparkles, Quote, Landmark, Check } from 'lucide-react';

interface HistorySectionProps {
  lang: Language;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ lang }) => {
  const [activeTopicId, setActiveTopicId] = useState<string>(cultureTopics[0].id);
  const t = translations.historySection;

  const currentTopic = cultureTopics.find((t) => t.id === activeTopicId) || cultureTopics[0];

  return (
    <section id="history" className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-3">
            <BookOpen className="w-4 h-4" />
            <span>{t.badge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            {t.description[lang]}
          </p>
        </div>

        {/* Topic Selector Tabs (Interactive Buttons) */}
        <div className="reveal-item flex flex-wrap items-center justify-center gap-2 mb-10">
          {cultureTopics.map((topic) => {
            const isActive = topic.id === activeTopicId;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`btn-interactive px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{topic.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Showcase (Editorial Style) */}
        <div className="reveal-item bg-slate-50 dark:bg-slate-950/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Topic Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Subtitle */}
              <div className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                {currentTopic.tag[lang]}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                {currentTopic.title[lang]}
              </h3>

              <p className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 italic">
                {currentTopic.subtitle[lang]}
              </p>

              <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentTopic.summary[lang]}
              </p>

              {/* Key Bullet Insights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Asosiy faktlar va meros:
                </h4>
                <ul className="space-y-2.5">
                  {currentTopic.details[lang].map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 5 Columns: Curatorial Quote & Decorative Cultural Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8">
              {/* Antique Ceramic Tile Motif Pattern Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900 via-sky-950 to-slate-950 text-white relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-amber-300">
                    O‘zbekiston tamadduni
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Moviy koshinlar, naqshinkor yog‘och ustunlar va buyuk allomalar asarlari orqali avloddan avlodga o‘tib kelayotgan umuminsoniy madaniy xazina.
                  </p>
                </div>
              </div>

              {/* Curatorial Quote Box */}
              {currentTopic.quote && (
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm relative">
                  <Quote className="w-6 h-6 text-cyan-500/30 mb-2" />
                  <p className="font-serif italic text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                    {currentTopic.quote[lang]}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
