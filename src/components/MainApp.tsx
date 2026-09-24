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

export const MainApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-slate-950 font-sans relative">
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

            {/* Real People - Real Results Gallery with Aevora Rotating Animations */}
            <ResultsGallerySection />

            {/* Services Showcase Portfolio */}
            <ServicesSection 
              onOpenCalculator={() => setCalculatorOpen(true)}
            />

            {/* 4-Step Sovereign Roadmap */}
            <RoadmapSection />

            {/* Verified Client Testimonials & Authority FAQ */}
            <FaqAndSocialProof 
              onOpenCalculator={() => setCalculatorOpen(true)}
            />

            {/* Blog Teaser Strip on Homepage with one-click view */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-t border-slate-200">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D2D]">Editorial Media</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">Read the Latest UAE Golden Visa Insights & Articles</h3>
                  <p className="text-xs text-slate-500 mt-1">In-depth regulatory breakdowns, DLD property rules, and corporate tax guides.</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentView('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-sm"
                >
                  Explore All Articles & News
                </button>
              </div>
            </section>
          </>
        ) : (
          /* Full Dedicated Blog Page View */
          <BlogMainView 
            onOpenCalculator={() => setCalculatorOpen(true)}
          />
        )}

        {/* Footer with exact screenshot details */}
        <Footer 
          onOpenCalculator={() => setCalculatorOpen(true)}
          onOpenMegaMenu={() => setMegaMenuOpen(true)}
          onNavigateToBlog={() => {
            setCurrentView('blog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Modals & Overlays */}
        <VisaCalculatorModal 
          isOpen={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
        />

        <MegaMenu 
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* Floating Triggers */}
        <FloatingActionButtons 
          onOpenCalculator={() => setCalculatorOpen(true)}
        />
      </div>
    </LanguageProvider>
  );
};
