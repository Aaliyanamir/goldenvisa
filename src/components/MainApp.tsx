"use client";

import React, { useState } from 'react';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ResultsGallerySection } from '@/components/ResultsGallerySection';
import { ServicesSection } from '@/components/ServicesSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { FaqAndSocialProof } from '@/components/FaqAndSocialProof';
import { BlogMainView } from '@/components/BlogMainView';
import { Footer } from '@/components/Footer';
import { VisaCalculatorModal } from '@/components/VisaCalculatorModal';
import { MegaMenu } from '@/components/MegaMenu';
import { FloatingActionButtons } from '@/components/FloatingActionButtons';
import { EligibilityQuiz } from '@/components/EligibilityQuiz';

export const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-slate-950 font-sans relative overflow-x-hidden">
        {/* Navigation */}
        <Navbar 
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenMegaMenu={() => setMegaMenuOpen(true)}
          currentView={currentView}
          onNavigate={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {currentView === 'home' ? (
          <>
            {/* Hero Section */}
            <HeroSection 
              onOpenCalculator={() => setCalculatorOpen(true)}
              onOpenMegaMenu={() => setMegaMenuOpen(true)}
            />

            {/* Eligibility Quiz CTA Banner */}
            <div className="bg-[#090D16] border-b border-amber-500/15 py-5 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-[11px] font-bold tracking-widest text-amber-400 uppercase mb-0.5">Free Eligibility Assessment</p>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    Not sure which visa applies to you? Take our 2-minute quiz.
                  </p>
                </div>
                <button
                  onClick={() => setQuizOpen(true)}
                  className="shrink-0 px-6 py-3 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-widest cursor-pointer whitespace-nowrap"
                >
                  Check My Eligibility — Free
                </button>
              </div>
            </div>

            {/* Gallery Section */}
            <ResultsGallerySection />

            {/* Services */}
            <ServicesSection 
              onOpenCalculator={() => setCalculatorOpen(true)}
            />

            {/* Roadmap */}
            <RoadmapSection />

            {/* FAQ + Testimonials */}
            <FaqAndSocialProof 
              onOpenCalculator={() => setCalculatorOpen(true)}
            />

            {/* Blog Teaser */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-t border-slate-200">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D2D]">Editorial Media</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">Read the Latest UAE Golden Visa Insights</h3>
                  <p className="text-xs text-slate-500 mt-1">Regulatory breakdowns, DLD property rules, and corporate tax guides.</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentView('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-sm whitespace-nowrap"
                >
                  Explore All Articles
                </button>
              </div>
            </section>
          </>
        ) : (
          <BlogMainView 
            onOpenCalculator={() => setCalculatorOpen(true)}
          />
        )}

        {/* Footer */}
        <Footer 
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenMegaMenu={() => setMegaMenuOpen(true)}
          onNavigateToBlog={() => {
            setCurrentView('blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Modals */}
        <VisaCalculatorModal 
          isOpen={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
        />

        <MegaMenu 
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        <EligibilityQuiz
          isOpen={quizOpen}
          onClose={() => setQuizOpen(false)}
          onOpenCalculator={() => { setCalculatorOpen(true); setQuizOpen(false); }}
        />

        {/* Floating Triggers */}
        <FloatingActionButtons 
          onOpenCalculator={() => setCalculatorOpen(true)}
        />
      </div>
    </LanguageProvider>
  );
};
