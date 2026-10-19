import React, { useState } from 'react';
import { QuizQuestion, Language } from '../types';
import { quizQuestions } from '../data/quiz';
import { translations } from '../data/translations';
import { Award, CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Sparkles, Check, X } from 'lucide-react';

interface QuizSectionProps {
  lang: Language;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const t = translations.quizSection;
  const currentQuestion = quizQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  // Performance tier feedback
  const getGradeFeedback = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return t.gradeExcellent[lang];
    if (percentage >= 50) return t.gradeGood[lang];
    return t.gradeNeedsStudy[lang];
  };

  return (
    <section id="quiz" className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-600 dark:text-amber-400 mb-3">
            <Award className="w-4 h-4" />
            <span>{t.badge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            {t.description[lang]}
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="reveal-item bg-slate-50 dark:bg-slate-950/70 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          {!isCompleted ? (
            <div className="space-y-6 sm:space-y-8">
              {/* Progress Bar & Counter */}
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-2.5">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-200">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>
                      {t.questionProgress[lang]} {currentIndex + 1} {t.of[lang]} {quizQuestions.length}
                    </span>
                  </span>
                  <span className="tabular-nums font-mono">
                    {Math.round(((currentIndex + 1) / quizQuestions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white leading-snug">
                  {currentQuestion.question[lang]}
                </h3>
              </div>

              {/* Options List */}
              <div className="space-y-3">
                {currentQuestion.options[lang].map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;

                  let optionStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-cyan-500 dark:hover:border-cyan-500';

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-semibold';
                    } else if (isSelected) {
                      optionStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-semibold';
                    } else {
                      optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800 text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`btn-interactive w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-sm sm:text-base cursor-pointer ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 font-mono shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">{option}</span>
                      </div>

                      {isAnswered && (
                        <div>
                          {isCorrect && (
                            <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          )}
                          {isSelected && !isCorrect && (
                            <X className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Banner with Explanation */}
              {isAnswered && (
                <div
                  className={`p-4 sm:p-5 rounded-2xl border animate-hero-entrance space-y-2 ${
                    selectedOption === currentQuestion.correctIndex
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-950 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800/60 text-rose-950 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm sm:text-base font-serif">
                    {selectedOption === currentQuestion.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <span>{t.correctFeedback[lang]}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                        <span>{t.incorrectFeedback[lang]}</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-90 pl-7">
                    {currentQuestion.explanation[lang]}
                  </p>
                </div>
              )}

              {/* Next Button */}
              {isAnswered && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNext}
                    className="btn-interactive inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-md cursor-pointer"
                  >
                    <span>
                      {currentIndex + 1 < quizQuestions.length ? t.nextQuestion[lang] : t.finishQuiz[lang]}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-8 sm:py-12 space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-amber-400 p-[2px] mx-auto shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-amber-500" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                  {t.resultTitle[lang]}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.scoreLabel[lang]}
                </p>
              </div>

              <div className="flex items-center justify-center gap-1 font-serif text-5xl sm:text-6xl font-bold text-cyan-600 dark:text-cyan-400 tabular-nums">
                <span>{score}</span>
                <span className="text-slate-300 dark:text-slate-700 text-3xl font-light">/</span>
                <span className="text-3xl text-slate-500 dark:text-slate-400">{quizQuestions.length}</span>
              </div>

              <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 max-w-md mx-auto text-balance leading-relaxed">
                {getGradeFeedback()}
              </p>

              <div className="pt-4">
                <button
                  onClick={handleRetry}
                  className="btn-interactive inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-sm shadow-md cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{t.retryBtn[lang]}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
