"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { useTheme } from '../lib/ThemeContext';
import { Language } from '../lib/translations';
import { 
  Home, Briefcase, Map, BookOpen, 
  HelpCircle, Calculator, Globe, ChevronDown, 
  X, Menu as MenuIcon, PhoneCall, Sun, Moon,
  MessageSquare, Info, Users, Headphones, Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  currentView?: 'home' | 'blog' | 'about';
  onNavigate?: (view: 'home' | 'blog' | 'about') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCalculator, 
  onOpenMegaMenu,
  currentView = 'home',
  onNavigate 
}) => {
  const { language, setLanguage, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentView]);

  // Lock body scroll when mobile menu is open
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

  // Real-time live alerts for the smooth ticker
  const tickerAlerts = [
    "⭐ Sarah Jenkins (UK) granted 10-Year Golden Visa 2 hours ago",
    "🏢 DLD Title Deed Approved for Luxury Villa in Palm Jumeirah (AED 3.8M)",
    "👨‍👩‍👧 Family of 4 received Emirates IDs via GDRFA VIP Fast-Track",
    "🇦🇪 Dr. Alexander Meyer nominated for Specialized Talent Directive",
    "📜 100% Tax-Free UAE Residence Visa issued in Dubai",
    "⚡ 48-Hour Priority Fast-Track Processing Active today",
  ];

  // Header Navigation: Includes Articles, About Us, Career, Contact Us as requested
  const navLinks = [
    { label: 'Home', icon: Home, action: () => { onNavigate?.('home'); setMobileMenuOpen(false); }, isActive: currentView === 'home' },
    { label: 'Services', icon: Briefcase, action: () => { onOpenMegaMenu(); setMobileMenuOpen(false); }, isActive: false, hasBadge: true },
    { label: 'Roadmap', icon: Map, action: () => { onNavigate?.('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' }), 100); }, isActive: false },
    { label: 'Articles', icon: BookOpen, action: () => { onNavigate?.('blog'); setMobileMenuOpen(false); }, isActive: currentView === 'blog' },
    { label: 'About Us', icon: Info, action: () => { onNavigate?.('about'); setMobileMenuOpen(false); }, isActive: currentView === 'about' },
    { label: 'Career', icon: Users, action: () => { window.open('https://wa.me/971503853305?text=Hello%2C%20I%20am%20inquiring%20about%20career%20opportunities%20at%20Golden%20Visa%20Dubai.', '_blank'); }, isActive: false },
    { label: 'Contact Us', icon: Headphones, action: () => { window.open('https://wa.me/971503853305?text=Hello%2C%20I%20would%20like%20to%20request%20an%20advisory%20consultation.', '_blank'); }, isActive: false },
    { label: 'FAQ', icon: HelpCircle, action: () => { onNavigate?.('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }), 100); }, isActive: false },
  ];


  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 w-full pointer-events-none">
        
        {/* ─── Top Bar with Animated Horizontal Live Ticker / News Bar ─── */}
        <div className="pointer-events-auto bg-[#090D16] text-white text-xs py-1.5 px-3 sm:px-6 lg:px-10 border-b border-white/10 shadow-sm overflow-hidden">
          <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
            
            {/* Left: Authority Badge */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline font-bold text-amber-400 uppercase tracking-widest text-[11px]">
                GDRFA &amp; DLD Desk
              </span>
            </div>

            {/* Center: Smooth Horizontal Scrolling News Ticker */}
            <div className="flex-1 overflow-hidden relative mx-2 sm:mx-6 py-0.5">
              <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
                {tickerAlerts.concat(tickerAlerts).map((alert, i) => (
                  <div key={i} className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-slate-200 font-medium">
                    <span>{alert}</span>
                    <span className="text-amber-500/60 font-bold">•</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Direct Phone Hotline */}
            <a 
              href="tel:+971503853305" 
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold text-xs tracking-wide transition-colors shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0 text-amber-400" />
              <span className="hidden md:inline">+971 50 385 3305</span>
              <span className="md:hidden">Call</span>
            </a>

          </div>
        </div>

        {/* ─── Floating Pill Glassmorphic Header (Fluid & Large Display Scaled) ─── */}
        <div className="w-full px-3 sm:px-6 lg:px-10 pt-2 sm:pt-3">
          <header className="max-w-[1720px] mx-auto pointer-events-auto rounded-full bg-white/95 dark:bg-[#0E1320]/95 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_12px_40px_-5px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_40px_-5px_rgba(0,0,0,0.7)] transition-all duration-300 px-3.5 sm:px-6 2xl:px-8 py-2.5">
            
            <div className="flex items-center justify-between gap-2 lg:gap-4 xl:gap-6">

              {/* 1. Official Branding Emblem & Logo */}
              <button 
                onClick={() => { onNavigate?.('home'); }}
                className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
              >
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-amber-200/80 via-amber-100 to-amber-50 dark:from-amber-900/60 dark:to-amber-950/60 border border-amber-300/60 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Image 
                    src="/assets/images/Golden Visa-icon.png" 
                    alt="Golden Visa Emblem" 
                    width={42} 
                    height={42}
                    className="object-contain w-full h-full drop-shadow-sm"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg xl:text-xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-serif whitespace-nowrap">
                    Golden Visa <span className="text-[#C5A059] italic font-serif">Dubai</span>
                  </span>
                  <span className="hidden md:inline text-[10px] xl:text-[11px] text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
                    UAE Residency &amp; Legal Consultancy
                  </span>
                </div>
              </button>

              {/* 2. Desktop Navigation Links (Includes Articles, About Us, Career, Contact Us) */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5 justify-center flex-1 max-w-4xl">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={link.action}
                      className={`group flex flex-col items-center gap-0.5 px-2.5 xl:px-3.5 py-1 rounded-xl transition-all cursor-pointer ${
                        link.isActive 
                          ? 'text-slate-950 dark:text-white font-extrabold' 
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                      }`}
                    >
                      <div className={`p-1 rounded-lg transition-transform group-hover:scale-110 ${
                        link.isActive ? 'text-[#C5A059]' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}>
                        <Icon className="w-4 h-4 xl:w-[18px] xl:h-[18px]" />
                      </div>
                      <span className={`text-[11px] xl:text-xs 2xl:text-[13px] tracking-wide whitespace-nowrap ${
                        link.isActive ? 'font-extrabold text-[#8C6D2D] dark:text-amber-400' : 'font-semibold'
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

              {/* 3. Right Toolbar: Language, Theme Toggle, WhatsApp & Visa Calculator CTA */}
              <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

                {/* WhatsApp Icon-Only Button */}
                <a
                  href="https://wa.me/971503853305?text=Hello%20Golden%20Visa%20Dubai%20Team%2C%20I%20would%20like%20to%20request%20an%20instant%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xl:flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
                  title="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                </a>

                {/* Language Switcher Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="p-2 sm:px-3 sm:py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
                    title="Switch Language"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="hidden sm:inline text-xs font-semibold">{language}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </button>

                  {langDropdownOpen && (
                    <div 
                      className={`absolute top-full mt-2 w-48 rounded-2xl bg-white dark:bg-[#111827] backdrop-blur-xl p-2 shadow-2xl border border-slate-200 dark:border-slate-700 z-50 ${
                        isRTL ? 'left-0' : 'right-0'
                      }`}
                    >
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1 border-b border-slate-100 dark:border-slate-800">
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
                                ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-700'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                          >
                            <span>{item.label}</span>
                            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                              {item.native}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Theme Mode Switcher (Active Light / Dark Toggle) */}
                <button
                  onClick={toggleTheme}
                  className="p-2 sm:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400 transition-all flex items-center justify-center cursor-pointer group shadow-2xs"
                  title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  aria-label="Toggle theme mode"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
                  )}
                </button>

                {/* Compact VISA Calculator Button (matches reference) */}
                <button
                  onClick={onOpenCalculator}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0F172A] dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-slate-700 text-white font-bold text-[11px] uppercase tracking-widest cursor-pointer shadow-sm transition-all active:scale-95 whitespace-nowrap border border-white/10"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>VISA</span>
                </button>

                {/* Mobile Hamburger Drawer Trigger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                  aria-label="Open menu"
                >
                  <MenuIcon className="w-5 h-5" />
                </button>

              </div>
            </div>
          </header>
        </div>
      </div>

      {/* ─── Mobile Slide-In Navigation Drawer ─── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 h-full w-[320px] max-w-[85vw] bg-white dark:bg-[#0E1320] shadow-2xl flex flex-col text-slate-900 dark:text-white">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-amber-200/80 to-amber-50 dark:from-amber-900/60 dark:to-amber-950 border border-amber-300/60 flex items-center justify-center">
                  <Image 
                    src="/assets/images/Golden Visa-icon.png" 
                    alt="Logo" 
                    width={28} 
                    height={28}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-slate-900 dark:text-white font-serif">
                    Golden Visa <span className="text-[#C5A059] italic">Dubai</span>
                  </div>
                  <div className="text-[10px] text-slate-400">UAE Residency &amp; Legal Consultancy</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links in Drawer */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.label}
                      onClick={link.action}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        link.isActive 
                          ? 'bg-amber-50 dark:bg-amber-950/50 text-[#8C6D2D] dark:text-amber-400 border border-amber-200 dark:border-amber-800 font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${link.isActive ? 'text-[#C5A059]' : 'text-slate-500 dark:text-slate-400'}`} />
                      <span>{link.label}</span>
                      {link.label === 'Services' && (
                        <ChevronDown className="w-4 h-4 text-slate-400 ml-auto" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Theme & Language Switcher in Drawer */}
              <div className="mt-6 px-1 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-3 px-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Theme</span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700 cursor-pointer"
                  >
                    {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
                    <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
                  </button>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-3">Language</div>
                <div className="grid grid-cols-4 gap-2">
                  {languagesList.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => setLanguage(item.code)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        language === item.code
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {item.native}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <button
                onClick={() => { onOpenCalculator(); setMobileMenuOpen(false); }}
                className="w-full py-3.5 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calculator className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Visa Fee Calculator</span>
              </button>
              <a
                href="https://wa.me/971503853305"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp Consultation</span>
              </a>
              <div className="text-center text-[11px] text-slate-400 pt-1">
                <a href="tel:+971503853305" className="text-amber-500 font-semibold">+971 50 385 3305</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
