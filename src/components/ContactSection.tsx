import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations.contactSection;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t.errors.nameRequired[lang];
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = t.errors.emailRequired[lang];
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t.errors.messageRequired[lang];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate safe local persistence and processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Store in localStorage for demonstration persistence
      try {
        const existingMessages = JSON.parse(localStorage.getItem('ozbekiston_contact_messages') || '[]');
        existingMessages.push({
          ...formData,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('ozbekiston_contact_messages', JSON.stringify(existingMessages));
      } catch (e) {
        // Safe fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      topic: 'general',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>{t.badge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-balance">
            {t.description[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Columns: Form */}
          <div className="reveal-item lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t.nameLabel[lang]} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder={t.namePlaceholder[lang]}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-sm text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t.emailLabel[lang]} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder={t.emailPlaceholder[lang]}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-sm text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Topic Selector */}
                <div>
                  <label
                    htmlFor="contact-topic"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t.topicLabel[lang]}
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white transition-all focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    <option value="general">{t.topicOptions.general[lang]}</option>
                    <option value="school">{t.topicOptions.school[lang]}</option>
                    <option value="tourism">{t.topicOptions.tourism[lang]}</option>
                    <option value="quiz">{t.topicOptions.quiz[lang]}</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t.messageLabel[lang]} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder={t.messagePlaceholder[lang]}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border text-sm text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-200 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-interactive w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Yuborilmoqda...' : t.sendBtn[lang]}</span>
                </button>
              </form>
            ) : (
              /* Success Banner */
              <div className="py-8 text-center space-y-4 animate-hero-entrance">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  {t.successTitle[lang]}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.successMessage[lang]}
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="btn-interactive px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    {t.sendAnother[lang]}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Columns: Institutional Contact Details Card */}
          <div className="reveal-item lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                O‘quv va Sayyohlik Markazi
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {t.contactCard.addressTitle[lang]}
                    </span>
                    <span>{t.contactCard.addressValue[lang]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {t.contactCard.phoneTitle[lang]}
                    </span>
                    <span className="font-mono">{t.contactCard.phoneValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {t.contactCard.emailTitle[lang]}
                    </span>
                    <span className="font-mono">{t.contactCard.emailValue}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                      {t.contactCard.hoursTitle[lang]}
                    </span>
                    <span>{t.contactCard.hoursValue[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Note on School Presentation */}
              <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
                <p>
                  <strong>Eslatma:</strong> Ushbu sahifa maktab taqdimoti va o‘quv loyihasi uchun to‘liq ishchi holatda tayyorlangan. Yuborilgan xabarlar brauzerda xavfsiz saqlanadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
