"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { Language } from '../lib/translations';
import { 
  Home, Briefcase, Map, BookOpen, 
  HelpCircle, Calculator, Globe, ChevronDown, 
  Menu as MenuIcon, PhoneCall, Sparkles, UserCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  currentView?: 'home' | 'blog';
  onNavigate?: (view: 'home' | 'blog') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCalculator, 
  onOpenMegaMenu,
  currentView = 'home',
  onNavigate 
}) => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languagesList: { code: Language; label: string; native: string }[] = [
    { code: 'EN', label: 'English', native: 'EN' },
    { code: 'AR', label: 'العربية', native: 'AR' },
    { code: 'RU', label: 'Русский', native: 'RU' },
    { code: 'DE', label: 'Deutsch', native: 'DE' },
    { code: 'ES', label: 'Español', native: 'ES' },
    { code: 'FR', label: 'Français', native: 'FR' },
    { code: 'TR', label: 'Türkçe', native: 'TR' },
    { code: 'ZH', label: '中文', native: 'ZH' },
  ];

  return (
    <>
      {/* Top Gov Authority Notification Bar */}
      <div className="bg-[#090D16] text-slate-400 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="hidden sm:inline font-medium text-slate-300 text-[11px]">Official UAE GDRFA & DLD Authorized VIP Facilitation Desk</span>
            <span className="sm:hidden font-medium text-slate-300 text-[11px]">UAE GDRFA Authorized Desk</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="tel:+971503853305" className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold">
              <PhoneCall className="w-3 h-3" />
              <span>+971 50 385 3305</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Pill Glassmorphic Navbar Container (Reference Screenshot Benchmark) */}
      <div className="sticky top-3 z-40 w-full px-3 sm:px-6 lg:px-8 pointer-events-none">
        <header className="max-w-[1360px] mx-auto pointer-events-auto rounded-full bg-white/90 hover:bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 px-3 sm:px-4 py-2">
          
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* 1. Left Corner Logo + Glowing Pill Emblem */}
            <div className="flex items-center shrink-0">
              <button 
                onClick={() => onNavigate && onNavigate('home')} 
                className="flex items-center gap-3 group text-left cursor-pointer"
              >
                {/* Glowing emblem container matching reference screenshot */}
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-amber-200/80 via-amber-100 to-amber-50 border border-amber-300/60 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image 
                    src="/assets/images/Golden Visa-icon.png" 
                    alt="Golden Visa Emblem" 
                    width={40} 
                    height={40}
                    className="object-contain w-full h-full drop-shadow-sm"
                    priority
                  />
                </div>
                
                {/* Brand Name Typography */}
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-tight font-serif">
                    Golden Visa <span className="text-[#C5A059] italic font-serif">Dubai</span>
                  </span>
                  <span className="text-[9px] text-slate-500 font-medium tracking-wide">
                    Sovereign Residency & Advisory
                  </span>
                </div>
              </button>
            </div>

            {/* 2. Center Icon-Over-Label Navigation Links (Exact Reference Screenshot Layout) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8 justify-center">
              
              {/* Home */}
              <button
                onClick={() => onNavigate && onNavigate('home')}
                className={`group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
                  currentView === 'home'
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <div className={`p-1 rounded-lg transition-transform group-hover:scale-110 ${currentView === 'home' ? 'text-[#C5A059]' : 'text-slate-700'}`}>
                  <Home className="w-4 h-4" />
                </div>
                <span className={`text-[11px] tracking-wide relative ${
                  currentView === 'home'
                    ? 'font-extrabold text-[#8C6D2D] after:content-[""] after:block after:w-full after:h-1 after:bg-amber-200/80 after:rounded-full after:-mt-0.5'
                    : 'font-semibold'
                }`}>
                  Home
                </span>
              </button>

              {/* Services (Directory) */}
              <button
                onClick={onOpenMegaMenu}
                className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-slate-600 hover:text-slate-950 transition-all cursor-pointer"
              >
                <div className="p-1 rounded-lg text-slate-700 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold tracking-wide flex items-center gap-0.5">
                  <span>Services</span>
                  <ChevronDown className="w-3 h-3 text-[#C5A059]" />
                </span>
              </button>

              {/* Roadmap */}
              <a
                href="#roadmap"
                onClick={() => onNavigate && onNavigate('home')}
                className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-slate-600 hover:text-slate-950 transition-all"
              >
                <div className="p-1 rounded-lg text-slate-700 group-hover:scale-110 transition-transform">
                  <Map className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold tracking-wide">
                  Roadmap
                </span>
              </a>

              {/* News & Blogs */}
              <button
                onClick={() => onNavigate && onNavigate('blog')}
                className={`group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
                  currentView === 'blog'
                    ? 'text-slate-950 font-bold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <div className={`p-1 rounded-lg transition-transform group-hover:scale-110 ${currentView === 'blog' ? 'text-[#C5A059]' : 'text-slate-700'}`}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className={`text-[11px] tracking-wide relative ${
                  currentView === 'blog'
                    ? 'font-extrabold text-[#8C6D2D] after:content-[""] after:block after:w-full after:h-1 after:bg-amber-200/80 after:rounded-full after:-mt-0.5'
                    : 'font-semibold'
                }`}>
                  News & Blogs
                </span>
              </button>

              {/* FAQ */}
              <a
                href="#faq"
                onClick={() => onNavigate && onNavigate('home')}
                className="group flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-slate-600 hover:text-slate-950 transition-all"
              >
                <div className="p-1 rounded-lg text-slate-700 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold tracking-wide">
                  FAQ
                </span>
              </a>

            </nav>

            {/* 3. Right Corner Curved Capsule Cluster (Matching Reference Screenshot: Icons + Sign In Button) */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="p-2 sm:px-3 sm:py-2 rounded-full bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200 text-xs font-bold text-slate-700 transition-all flex items-center gap-1 cursor-pointer"
                  title="Switch Language"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="hidden sm:inline text-[11px]">{language}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div 
                    className={`absolute top-full mt-2 w-44 rounded-2xl bg-white/95 backdrop-blur-xl p-2 shadow-2xl border border-slate-200 z-50 animate-fadeIn ${
                      isRTL ? 'left-0' : 'right-0'
                    }`}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1 border-b border-slate-100">
                      Select Language
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {languagesList.map((item) => (
                        <button
                          key={item.code}
                          onClick={() => {
                            setLanguage(item.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                            language === item.code
                              ? 'bg-amber-50 text-amber-900 font-bold border border-amber-200'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                            {item.native}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Calculator Quick Trigger (Icon Button) */}
              <button
                onClick={onOpenCalculator}
                className="p-2 sm:p-2.5 rounded-full bg-amber-50 hover:bg-amber-100/80 text-[#8C6D2D] border border-amber-200/80 transition-all cursor-pointer"
                title="Open Visa Calculator"
              >
                <Calculator className="w-4 h-4 text-[#C5A059]" />
              </button>

              {/* Mega Menu Directory Button */}
              <button
                onClick={onOpenMegaMenu}
                className="p-2 sm:p-2.5 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                title="Services Directory"
              >
                <MenuIcon className="w-4 h-4" />
              </button>

              {/* Capsule Action Button (Matching Reference "SIGN IN" pill shape in Gold/Dark Tone) */}
              <button
                onClick={onOpenCalculator}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>VIP PORTAL</span>
              </button>

            </div>

          </div>

        </header>
      </div>
    </>
  );
};
