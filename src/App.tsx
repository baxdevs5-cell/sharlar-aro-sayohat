import React, { useState, useEffect } from 'react';
import { Language, City } from './types';
import { citiesData } from './data/cities';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CitiesSection } from './components/CitiesSection';
import { CityModal } from './components/CityModal';
import { HistorySection } from './components/HistorySection';
import { GallerySection } from './components/GallerySection';
import { QuizSection } from './components/QuizSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PresentationModal } from './components/PresentationModal';
import { BackToTop } from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  // 1. Language State (Uzbek by default, saved in localStorage)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ozbekiston_lang');
      if (saved === 'uz' || saved === 'ru' || saved === 'en') return saved;
    } catch (e) {
      // fallback
    }
    return 'uz';
  });

  // 2. Dark / Light Mode State (saved in localStorage)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('ozbekiston_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  // 3. Favorites State (saved in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const savedFavs = localStorage.getItem('ozbekiston_favorites');
      if (savedFavs) return JSON.parse(savedFavs);
    } catch (e) {
      // fallback
    }
    return ['samarkand', 'bukhara', 'khiva'];
  });

  // 4. Modal and Presentation State
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [presentationGuideOpen, setPresentationGuideOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Activate Scroll Reveal (Animation 3)
  useScrollReveal();

  // Sync Dark Mode class with <html> element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ozbekiston_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ozbekiston_theme', 'light');
    }
  }, [isDark]);

  // Sync Language with localStorage & html lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('ozbekiston_lang', lang);
    } catch (e) {
      // safe fallback
    }
  }, [lang]);

  // Sync Favorites with localStorage
  const handleToggleFavorite = (cityId: string) => {
    setFavorites((prev) => {
      let updated: string[];
      if (prev.includes(cityId)) {
        updated = prev.filter((id) => id !== cityId);
      } else {
        updated = [...prev, cityId];
      }
      try {
        localStorage.setItem('ozbekiston_favorites', JSON.stringify(updated));
      } catch (e) {
        // safe fallback
      }
      return updated;
    });
  };

  // Section Observer for Active Nav link
  useEffect(() => {
    const sectionIds = ['home', 'cities', 'history', 'gallery', 'quiz', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* 1. Top Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        onOpenPresentationGuide={() => setPresentationGuideOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          lang={lang}
          onExploreCities={() => scrollToSection('cities')}
          onGoToQuiz={() => scrollToSection('quiz')}
        />

        {/* 3. Cities Section (10 cities with search, filter tabs, modal trigger) */}
        <CitiesSection
          cities={citiesData}
          lang={lang}
          onSelectCity={(city) => setSelectedCity(city)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 4. History and Culture Section */}
        <HistorySection lang={lang} />

        {/* 5. Gallery Section with Lightbox */}
        <GallerySection lang={lang} />

        {/* 6. Interactive Quiz Section (10 questions, feedback, retry) */}
        <QuizSection lang={lang} />

        {/* 7. Contact Section with Form Validation */}
        <ContactSection lang={lang} />
      </main>

      {/* 8. Footer */}
      <Footer
        lang={lang}
        cities={citiesData}
        onSelectCity={(city) => setSelectedCity(city)}
        onOpenPresentationGuide={() => setPresentationGuideOpen(true)}
      />

      {/* 9. City Details Modal */}
      <CityModal
        city={selectedCity}
        lang={lang}
        onClose={() => setSelectedCity(null)}
        isFavorite={selectedCity ? favorites.includes(selectedCity.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />

      {/* 10. School Presentation Guide Modal */}
      <PresentationModal
        isOpen={presentationGuideOpen}
        onClose={() => setPresentationGuideOpen(false)}
        lang={lang}
        onNavigateSection={scrollToSection}
      />

      {/* 11. Back To Top Floating Action Button */}
      <BackToTop />
    </div>
  );
}
