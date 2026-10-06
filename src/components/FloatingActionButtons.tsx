"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';
import { Calculator, ArrowUp, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionProps {
  onOpenCalculator: () => void;
  onOpenEligibility?: () => void;
  showMobileStickyBar?: boolean;
}

export const FloatingActionButtons: React.FC<FloatingActionProps> = ({
  onOpenCalculator,
  onOpenEligibility,
  showMobileStickyBar = true,
}) => {
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

      {/* Mobile Sticky Bottom Bar */}
      {showMobileStickyBar && (
        <div className="fixed inset-x-2.5 bottom-[max(0.6rem,env(safe-area-inset-bottom))] z-50 mx-auto max-w-lg rounded-2xl border border-amber-500/20 bg-white/95 p-2 shadow-[0_12px_36px_-10px_rgba(15,23,42,0.3)] backdrop-blur-xl lg:hidden dark:border-white/15 dark:bg-[#0E1320]/95">
          {/* Micro Trust Bar */}
          <div className="mb-1.5 flex items-center justify-between px-2 text-[10px] font-bold text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-white/10 pb-1">
            <span className="flex items-center gap-1 text-[#8C6D2D] dark:text-amber-400">
              <ShieldCheck className="h-3 w-3 shrink-0" /> Licensed Facilitation
            </span>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-amber-700 dark:text-amber-300">
              Upfront Fee Guarantee
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenCalculator}
              className="flex min-h-11 min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-extrabold text-slate-950 shadow-sm transition-all active:scale-[0.98] gold-btn"
            >
              <Calculator className="h-4 w-4 shrink-0 text-slate-950" />
              <span className="truncate">{t.mobileSticky.calcBtn}</span>
            </button>

            {onOpenEligibility && (
              <button
                onClick={onOpenEligibility}
                className="flex min-h-11 min-w-0 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-amber-600/30 bg-amber-50 dark:bg-amber-950/40 px-2 py-2 text-xs font-extrabold text-[#765719] dark:text-amber-300 shadow-2xs transition-all active:scale-[0.98]"
              >
                <ClipboardCheck className="h-4 w-4 shrink-0 text-[#765719] dark:text-amber-300" />
                <span className="truncate">Eligibility</span>
              </button>
            )}

            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#8C6D2D] px-2 py-2 text-xs font-extrabold text-white shadow-sm transition-all active:scale-[0.98] hover:bg-[#735820]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
              <span className="truncate">{t.mobileSticky.whatsappBtn}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

