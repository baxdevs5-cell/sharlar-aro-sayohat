import React, { useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, CheckCircle2, X, Compass, Award, Moon, Globe, ArrowRight } from 'lucide-react';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onNavigateSection: (sectionId: string) => void;
}

export const PresentationModal: React.FC<PresentationModalProps> = ({
  isOpen,
  onClose,
  lang,
  onNavigateSection,
}) => {
  const t = translations.presentationModal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { id: 'cities', label: '10 ta shahar & Qidiruv' },
    { id: 'quiz', label: '10 ta savolli viktorina' },
    { id: 'history', label: 'Tarix va madaniyat' },
    { id: 'gallery', label: 'Fotogalereya & Lightbox' },
    { id: 'contact', label: 'Aloqa shakli' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-hero-entrance"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white">
                {t.title[lang]}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {t.subtitle[lang]}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-interactive p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* School Rubric Checklist */}
        <div className="space-y-3.5 mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.rubricChecked[lang]}</span>
          </div>

          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs sm:text-sm">
                <h4 className="font-semibold text-slate-900 dark:text-white font-serif">
                  {item.title[lang]}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {item.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation Jump Buttons */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            {t.quickJump[lang]} (1 daqiqalik demo):
          </h4>
          <div className="flex flex-wrap gap-2">
            {quickNav.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onClose();
                  onNavigateSection(link.id);
                }}
                className="btn-interactive inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3 h-3 opacity-60" />
              </button>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="btn-interactive px-6 py-2.5 rounded-xl bg-cyan-600 text-white font-semibold text-xs sm:text-sm hover:bg-cyan-500"
          >
            {t.close[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};
