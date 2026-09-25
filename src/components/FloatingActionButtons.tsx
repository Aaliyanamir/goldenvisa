"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Calculator, MessageSquare, ArrowUp } from 'lucide-react';

interface FloatingActionProps {
  onOpenCalculator: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionProps> = ({ onOpenCalculator }) => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(Math.round(progress));
      }
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Circular gauge calculations
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>


      {/* Floating Scroll-to-Top Button with Circular Reading Progress / Scroll Percentage Gauge */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-24 lg:bottom-6 z-40 w-12 h-12 rounded-full bg-white dark:bg-[#0E1320] border border-slate-200 dark:border-white/15 shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center justify-center group"
          title={`Scroll to top (${scrollProgress}%)`}
          aria-label="Scroll to top with progress gauge"
        >
          {/* SVG Circular Progress Gauge */}
          <svg className="w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            {/* Background Ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="3"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Animated Golden Progress Ring */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#D4AF37"
              strokeWidth="3.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>

          {/* Center Indicator: Arrow by default, hover reveals exact percentage */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <ArrowUp className="w-4 h-4 text-slate-800 dark:text-slate-100 group-hover:hidden transition-transform duration-200" />
            <span className="hidden group-hover:inline text-[10px] font-black text-[#8C6D2D] dark:text-amber-400 tabular-nums">
              {scrollProgress}%
            </span>
          </div>
        </button>
      )}

      {/* Mobile Sticky Dual-Button Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0E1320]/95 backdrop-blur-md border-t border-slate-200 dark:border-white/10 px-3 py-2 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.2)] pb-[env(safe-area-inset-bottom,8px)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          
          {/* 1. Visa Calculator */}
          <button
            onClick={onOpenCalculator}
            className="flex-1 py-3 px-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <Calculator className="w-4 h-4 text-white shrink-0" />
            <span>{t.mobileSticky.calcBtn}</span>
          </button>

          {/* 2. Direct WhatsApp */}
          <a
            href="https://wa.me/971503853305"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all whitespace-nowrap text-center"
          >
            <MessageSquare className="w-4 h-4 text-white shrink-0" />
            <span>{t.mobileSticky.whatsappBtn}</span>
          </a>

        </div>
      </div>
    </>
  );
};
