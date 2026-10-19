import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn-interactive fixed bottom-6 right-6 z-40 p-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-900/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      aria-label="Yuqoriga qaytish"
      title="Yuqoriga qaytish"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
