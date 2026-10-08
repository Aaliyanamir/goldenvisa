"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ResultsGallerySection } from '@/components/ResultsGallerySection';
import { ServicesSection } from '@/components/ServicesSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { FaqAndSocialProof } from '@/components/FaqAndSocialProof';
import { BlogMainView } from '@/components/BlogMainView';
import { HomeInsightsSection } from '@/components/HomeInsightsSection';
import { AboutPage } from '@/components/AboutPage';
import { Footer } from '@/components/Footer';
import { VisaCalculatorModal } from '@/components/VisaCalculatorModal';
import { MegaMenu } from '@/components/MegaMenu';
import { FloatingActionButtons } from '@/components/FloatingActionButtons';
import { EligibilityQuiz } from '@/components/EligibilityQuiz';
import type { ServiceId } from '@/components/service-pages/FamilyVisaCalculator';

export const MainApp: React.FC = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'about'>('home');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calculatorService, setCalculatorService] = useState<ServiceId | undefined>();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  const navigate = (view: 'home' | 'blog' | 'about') => {
    if (view === 'blog') {
      router.push('/blog');
      return;
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCalculator = (initialService?: ServiceId) => {
    setCalculatorService(initialService);
    setCalculatorOpen(true);
  };

  return (
    <LanguageProvider>
        <div id="site-shell" className="site-shell min-h-screen selection:bg-amber-500 selection:text-slate-950 font-sans relative overflow-x-hidden transition-colors duration-300">
          {/* Navigation */}
          <Navbar
            onOpenCalculator={() => setCalculatorOpen(true)}
            onOpenMegaMenu={() => setMegaMenuOpen(true)}
            currentView={currentView}
            onNavigate={navigate}
          />

          {currentView === 'home' ? (
            <>
              {/* Hero Section */}
              <HeroSection
                onOpenCalculator={openCalculator}
                onOpenMegaMenu={() => setMegaMenuOpen(true)}
                onOpenEligibility={() => setQuizOpen(true)}
              />

              {/* Gallery Section */}
              <ResultsGallerySection />

              {/* Services */}
              <ServicesSection
                onOpenCalculator={() => openCalculator()}
              />

              {/* Roadmap */}
              <RoadmapSection />

              {/* FAQ + Testimonials */}
              <FaqAndSocialProof
                onOpenCalculator={() => openCalculator()}
              />

              <HomeInsightsSection />
            </>
          ) : currentView === 'about' ? (
            <AboutPage onOpenCalculator={() => setCalculatorOpen(true)} />
          ) : (
            <BlogMainView
              onOpenCalculator={() => setCalculatorOpen(true)}
            />
          )}

          {/* Footer */}
          <Footer 
            onOpenCalculator={() => setCalculatorOpen(true)}
            onOpenMegaMenu={() => setMegaMenuOpen(true)}
            onNavigateToBlog={() => router.push('/blog')}
          />

          {/* Modals */}
          <VisaCalculatorModal
            isOpen={calculatorOpen}
            initialService={calculatorService}
            onClose={() => setCalculatorOpen(false)}
          />

          <MegaMenu 
            isOpen={megaMenuOpen}
            onClose={() => setMegaMenuOpen(false)}
            onOpenCalculator={() => setCalculatorOpen(true)}
            onNavigateToBlog={() => router.push('/blog')}
          />

          <EligibilityQuiz
            isOpen={quizOpen}
            onClose={() => setQuizOpen(false)}
            onOpenCalculator={() => { setCalculatorOpen(true); setQuizOpen(false); }}
          />

          {/* Floating Triggers */}
          <FloatingActionButtons 
            onOpenCalculator={() => setCalculatorOpen(true)}
            onOpenEligibility={() => setQuizOpen(true)}
          />
        </div>
    </LanguageProvider>
  );
};
