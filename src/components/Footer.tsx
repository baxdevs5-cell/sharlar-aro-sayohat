import React from 'react';
import { City, Language } from '../types';
import { translations } from '../data/translations';
import { Compass, ArrowUp, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  cities: City[];
  onSelectCity: (city: City) => void;
  onOpenPresentationGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  cities,
  onSelectCity,
  onOpenPresentationGuide,
}) => {
  const t = translations.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: translations.nav.home[lang], href: '#home' },
    { label: translations.nav.cities[lang], href: '#cities' },
    { label: translations.nav.history[lang], href: '#history' },
    { label: translations.nav.gallery[lang], href: '#gallery' },
    { label: translations.nav.quiz[lang], href: '#quiz' },
    { label: translations.nav.contact[lang], href: '#contact' },
  ];

  const handleCityClick = (city: City) => {
    const el = document.getElementById('cities');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      onSelectCity(city);
    }, 400);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-amber-400 p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-900 rounded-[6px] flex items-center justify-center text-cyan-400">
                  <span className="font-serif font-bold text-xs tracking-wider">O‘Z</span>
                </div>
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                O‘zbekiston <span className="text-cyan-400 font-sans font-normal text-sm">Shaharlari</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.description[lang]}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenPresentationGuide}
                className="btn-interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-400/30 text-xs font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{translations.nav.presentation[lang]}</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.quickLinksTitle[lang]}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Directory (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.citiesListTitle[lang]}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCityClick(city)}
                  className="text-left text-slate-400 hover:text-cyan-400 transition-colors truncate"
                >
                  {city.name[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>© 2026 O‘zbekiston Shaharlari. {t.rights[lang]}</span>
            <span className="block sm:inline sm:ml-2 text-slate-400">{t.schoolProjectNotice[lang]}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>{t.backToTop[lang]}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
