"use client";

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionProps {
  onOpenCalculator: () => void;
  showMobileStickyBar?: boolean;
}

export const FloatingActionButtons: React.FC<FloatingActionProps> = ({
  onOpenCalculator,
  showMobileStickyBar = true,
}) => {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 500;
      setShowScrollTop((currentlyVisible) => (
        currentlyVisible === shouldShow ? currentlyVisible : shouldShow
      ));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed right-3 bottom-20 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition hover:scale-105 active:scale-95 lg:bottom-6 dark:border-white/15 dark:bg-[#0E1320]"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="h-4 w-4 text-slate-800 dark:text-slate-100" />
        </button>
      )}

      {showMobileStickyBar && (
        <div className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 mx-auto flex max-w-sm items-center gap-2 rounded-full border border-[#E7E4DC] bg-white/95 p-1.5 shadow-[0_8px_28px_-12px_rgba(15,23,42,0.38)] backdrop-blur-xl lg:hidden dark:border-white/15 dark:bg-[#0E1320]/95">
          <button
            type="button"
            onClick={onOpenCalculator}
            className="gold-btn flex min-h-11 min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-3 text-xs font-bold text-slate-950 transition active:scale-[0.98]"
          >
            <FontAwesomeIcon icon={faCalculator} className="h-4 w-4 shrink-0 text-slate-950" />
            <span className="truncate">{t.mobileSticky.calcBtn}</span>
          </button>

          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#1F1F1F] px-3 text-xs font-bold text-white transition hover:bg-[#38352D] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
            <span className="truncate">{t.mobileSticky.whatsappBtn}</span>
          </a>
        </div>
      )}
    </>
  );
};
