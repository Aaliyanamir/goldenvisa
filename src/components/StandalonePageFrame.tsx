"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { VisaCalculatorModal } from '@/components/VisaCalculatorModal';
import { MegaMenu } from '@/components/MegaMenu';
import { FloatingActionButtons } from '@/components/FloatingActionButtons';

interface StandalonePageFrameProps {
  children: React.ReactNode;
  currentView: 'contact' | 'career' | 'about' | 'service' | 'blog';
  showMobileStickyBar?: boolean;
  calculatorOpen?: boolean;
  onCalculatorOpenChange?: (open: boolean) => void;
}

export const StandalonePageFrame: React.FC<StandalonePageFrameProps> = ({
  children,
  currentView,
  showMobileStickyBar = true,
  calculatorOpen: controlledCalculatorOpen,
  onCalculatorOpenChange,
}) => {
  const router = useRouter();
  const [internalCalculatorOpen, setInternalCalculatorOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const calculatorOpen = controlledCalculatorOpen ?? internalCalculatorOpen;
  const setCalculatorOpen = (open: boolean) => {
    if (onCalculatorOpenChange) {
      onCalculatorOpenChange(open);
      return;
    }
    setInternalCalculatorOpen(open);
  };

  const handleNavigate = (view: 'home' | 'blog' | 'about') => {
    if (view === 'about') {
      router.push('/about');
      return;
    }

    if (view === 'home') {
      router.push('/');
      return;
    }

    if (view === 'blog') {
      router.push('/blog');
    }
  };

  return (
    <LanguageProvider>
      <div id="site-shell" className={`site-shell min-h-screen selection:bg-amber-500 selection:text-slate-950 font-sans relative overflow-x-hidden transition-colors duration-300 ${showMobileStickyBar ? '' : 'pb-20 md:pb-0'}`}>
        <Navbar
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenMegaMenu={() => setMegaMenuOpen(true)}
          currentView={currentView}
          onNavigate={handleNavigate}
        />
        <main className="site-page-main">{children}</main>
        <Footer
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenMegaMenu={() => setMegaMenuOpen(true)}
          onNavigateToBlog={() => router.push('/blog')}
        />
        <VisaCalculatorModal isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onOpenCalculator={() => setCalculatorOpen(true)}
          onNavigateToBlog={() => router.push('/blog')}
        />
        <FloatingActionButtons
          onOpenCalculator={() => setCalculatorOpen(true)}
          showMobileStickyBar={showMobileStickyBar}
        />
      </div>
    </LanguageProvider>
  );
};