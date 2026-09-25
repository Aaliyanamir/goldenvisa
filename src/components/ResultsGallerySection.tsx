"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Award, ShieldCheck, ChevronLeft, ChevronRight, 
  Sparkles, CheckCircle2, UserCheck
} from 'lucide-react';

export const ResultsGallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/gallery/gallery1.png',
      caption: 'Federal Authority for Identity & Citizenship (ICP) Official Handover',
      badge: 'GDRFA Dubai & ICP Certified',
      description: 'Accredited long-term 10-year residency handed over by senior immigration officers.',
    },
    {
      image: '/assets/gallery/gallery2.png',
      caption: 'Direct Sovereign Recognition & Golden Visa Handover Ceremony',
      badge: 'Ministerial Protocol Clearances',
      description: 'VIP clients receiving 10-year Golden Visa passport endorsement and biometric status.',
    },
  ];

  // Auto-play slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FDFBF7] to-white dark:from-[#07090F] dark:via-[#0B0F19] dark:to-[#07090F] relative overflow-hidden border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-[#8C6D2D] dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Documented Success & Government Facilitation</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            REAL PEOPLE — <span className="gold-gradient-text font-serif italic">REAL RESULTS</span>
          </h2>
          
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Join thousands of global entrepreneurs, investors, specialized physicians, and C-Suite leaders who have successfully secured sovereign 10-year UAE residency through our facilitation.
          </p>
        </div>

        {/* Interactive Image Showcase Card with Aevora Orbit Geometry Animation */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Aevora-style Rotating Wireframe Squares behind/around image */}
          <div className="absolute -inset-6 sm:-inset-10 pointer-events-none flex items-center justify-center">
            {/* Outer Slow Clockwise Rotating Square */}
            <div className="w-[106%] h-[108%] rounded-3xl border border-[#C5A059]/40 border-dashed animate-spin-slow"></div>
            {/* Inner Counter-Clockwise Rotating Rounded Diamond/Square */}
            <div className="w-[102%] h-[104%] rounded-[40px] border border-amber-400/30 animate-spin-slow-reverse"></div>
          </div>

          {/* Floating Aevora Metadata Badges */}
          <div className="hidden md:flex absolute -top-5 -left-6 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-xl border border-amber-500/30 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-amber-300">Official Protocol</div>
              <div className="text-xs font-semibold">100% Legal Handover</div>
            </div>
          </div>

          <div className="hidden md:flex absolute -bottom-5 -right-6 z-20 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-xl border border-amber-500/30 backdrop-blur-md">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-amber-300">Experience</div>
              <div className="text-xs font-semibold">10+ Years Diplomatic Liaison</div>
            </div>
          </div>

          {/* Main Visual Frame */}
          <div className="relative rounded-3xl bg-white dark:bg-[#0E1320] p-3 sm:p-5 border-2 border-[#E8D5B5] dark:border-amber-500/30 shadow-2xl overflow-hidden z-10">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <Image
                src={slides[currentSlide].image}
                alt="UAE Golden Visa Official Handover"
                fill
                className="object-contain transition-all duration-700 hover:scale-105"
                priority
              />

              {/* Gradient Bottom Overlay for Text */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 sm:p-8 flex flex-col justify-end text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold uppercase tracking-wider w-fit mb-2">
                  {slides[currentSlide].badge}
                </span>
                <h3 className="text-base sm:text-xl font-bold tracking-tight text-white">
                  {slides[currentSlide].caption}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-light">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-4 flex items-center justify-between px-2 pt-1">
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? 'w-8 bg-[#C5A059]' : 'w-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                  title="Previous Case"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                  title="Next Case"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
