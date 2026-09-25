"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { Language } from '../lib/translations';
import { 
  Home, Briefcase, Map, BookOpen, 
  HelpCircle, Calculator, Globe, ChevronDown, 
  X, Menu as MenuIcon, PhoneCall, UserCheck
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentView]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

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

  const navLinks = [
    { label: 'Home', icon: Home, action: () => { onNavigate?.('home'); setMobileMenuOpen(false); }, isActive: currentView === 'home' },
    { label: 'Services', icon: Briefcase, action: () => { onOpenMegaMenu(); setMobileMenuOpen(false); }, isActive: false },
    { label: 'Roadmap', icon: Map, action: () => { onNavigate?.('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' }), 100); }, isActive: false },
    { label: 'News & Blogs', icon: BookOpen, action: () => { onNavigate?.('blog'); setMobileMenuOpen(false); }, isActive: currentView === 'blog' },
    { label: 'FAQ', icon: HelpCircle, action: () => { onNavigate?.('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }, isActive: false },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 w-full pointer-events-none">
      {/* Top Authority Bar */}
      <div className="pointer-events-auto bg-[#090D16] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 shadow-sm">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0 ring-4 ring-emerald-400/20" />
            <span className="hidden sm:inline font-semibold text-white text-xs tracking-wide">Official UAE GDRFA &amp; DLD Authorized VIP Facilitation Desk</span>
            <span className="sm:hidden font-semibold text-white text-xs tracking-wide">UAE GDRFA Authorized Desk</span>
          </div>
          <a href="tel:+971503853305" className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold text-xs tracking-wide transition-colors">
            <PhoneCall className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span>+971 50 385 3305</span>
          </a>
        </div>
      </div>

      {/* Floating Pill Navbar */}
      <div className="w-full px-3 sm:px-6 lg:px-8 pt-2">
        <header className="max-w-[1360px] mx-auto pointer-events-auto rounded-full bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 px-3 sm:px-5 py-2">
          
          <div className="flex items-center justify-between gap-2">

            {/* Logo */}
            <button 
              onClick={() => { onNavigate?.('home'); }}
              className="flex items-center gap-2.5 group text-left cursor-pointer shrink-0"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-amber-200/80 via-amber-100 to-amber-50 border border-amber-300/60 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Image 
                  src="/assets/images/Golden Visa-icon.png" 
                  alt="Golden Visa Emblem" 
                  width={36} 
                  height={36}
                  className="object-contain w-full h-full drop-shadow-sm"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 leading-tight font-serif whitespace-nowrap">
                  Golden Visa <span className="text-[#C5A059] italic font-serif">Dubai</span>
                </span>
                <span className="hidden md:inline text-[9px] text-slate-500 font-medium tracking-wide">
                  UAE Residency &amp; Legal Consultancy
                </span>
              </div>
            </button>

            {/* Desktop Center Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className={`group flex flex-col items-center gap-0.5 px-3 xl:px-4 py-1.5 rounded-xl transition-all cursor-pointer ${
                      link.isActive ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <div className={`p-1 rounded-lg transition-transform group-hover:scale-110 ${link.isActive ? 'text-[#C5A059]' : 'text-slate-700'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[11px] tracking-wide whitespace-nowrap ${
                      link.isActive ? 'font-extrabold text-[#8C6D2D]' : 'font-semibold'
                    }`}>
                      {link.label}
                      {link.label === 'Services' && (
                        <ChevronDown className="inline w-3 h-3 text-[#C5A059] ml-0.5" />
                      )}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

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
                    className={`absolute top-full mt-2 w-44 rounded-2xl bg-white/98 backdrop-blur-xl p-2 shadow-2xl border border-slate-200 z-50 ${
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

              {/* Calculator icon — desktop only */}
              <button
                onClick={onOpenCalculator}
                className="hidden sm:flex p-2.5 rounded-full bg-amber-50 hover:bg-amber-100/80 text-[#8C6D2D] border border-amber-200/80 transition-all cursor-pointer"
                title="Open Visa Calculator"
              >
                <Calculator className="w-4 h-4 text-[#C5A059]" />
              </button>

              {/* VIP Portal — desktop only */}
              <button
                onClick={onOpenCalculator}
                className="hidden lg:flex items-center gap-1.5 px-4 xl:px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>VIP Portal</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-all cursor-pointer"
                aria-label="Open menu"
              >
                <MenuIcon className="w-5 h-5" />
              </button>

            </div>
          </div>
        </header>
      </div>
    </div>

    {/* Mobile Slide-In Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl flex flex-col">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-amber-200/80 to-amber-50 border border-amber-300/60 flex items-center justify-center">
                  <Image 
                    src="/assets/images/Golden Visa-icon.png" 
                    alt="Logo" 
                    width={28} 
                    height={28}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900 font-serif">Golden Visa <span className="text-[#C5A059] italic">Dubai</span></div>
                  <div className="text-[10px] text-slate-400">UAE Residency &amp; Legal Consultancy</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={link.action}
                      className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        link.isActive 
                          ? 'bg-amber-50 text-[#8C6D2D] border border-amber-200 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${link.isActive ? 'text-[#C5A059]' : 'text-slate-500'}`} />
                      <span>{link.label}</span>
                      {link.label === 'Services' && (
                        <ChevronDown className="w-4 h-4 text-slate-400 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Language switcher in drawer */}
              <div className="mt-6 px-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-3">Language</div>
                <div className="grid grid-cols-4 gap-2">
                  {languagesList.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => setLanguage(item.code)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        language === item.code
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {item.native}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer CTA Footer */}
            <div className="p-4 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
                className="w-full py-3.5 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Visa Fee Calculator</span>
              </button>
              <a
                href="https://wa.me/971503853305"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>WhatsApp Consultation</span>
              </a>
              <div className="text-center text-[11px] text-slate-400 pt-1">
                <a href="tel:+971503853305" className="text-amber-600 font-semibold">+971 50 385 3305</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
