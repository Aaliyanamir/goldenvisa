"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Calculator, MessageSquare, Sparkles, ArrowUp } from 'lucide-react';

interface FloatingActionProps {
  onOpenCalculator: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionProps> = ({ onOpenCalculator }) => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Vertical Edge Floating Trigger */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={onOpenCalculator}
          className="group flex items-center gap-2.5 py-4 px-3.5 gold-btn text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-l-2xl shadow-xl cursor-pointer transition-all hover:-translate-x-1"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 -rotate-90 text-slate-950" />
            <span>{t.mobileSticky.calcBtn}</span>
            <Sparkles className="w-3.5 h-3.5 -rotate-90 text-slate-950 group-hover:scale-125 transition-transform" />
          </div>
        </button>
      </div>

      {/* Bottom to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-5 bottom-20 lg:bottom-6 z-40 p-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-[#C5A059] shadow-lg transition-all cursor-pointer hover:-translate-y-1"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Mobile Sticky Dual-Button Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2.5 max-w-lg mx-auto">
          
          {/* 1. Visa Calculator */}
          <button
            onClick={onOpenCalculator}
            className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-white" />
            <span>{t.mobileSticky.calcBtn}</span>
          </button>

          {/* 2. Direct WhatsApp */}
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>{t.mobileSticky.whatsappBtn}</span>
          </a>

        </div>
      </div>
    </>
  );
};
