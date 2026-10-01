"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../lib/LanguageContext';
import { useTheme } from '../lib/ThemeContext';
import { Language } from '../lib/translations';
import { contactInfo } from '../lib/contactInfo';
import {
  Home, Briefcase, BookOpen,
  Calculator, Globe, ChevronDown,
  X, Menu as MenuIcon, PhoneCall, Sun, Moon,
  Info, Users, Headphones
} from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  currentView?: 'home' | 'blog' | 'about' | 'contact' | 'career';
  onNavigate?: (view: 'home' | 'blog' | 'about') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCalculator, 
  onOpenMegaMenu,
  currentView = 'home',
  onNavigate 
}) => {
  const { language, setLanguage, isRTL } = useLanguage();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navigateView = (view: 'home' | 'blog' | 'about') => {
    if (view === 'about') {
      router.push('/about');
      setMobileMenuOpen(false);
      return;
    }

    if (view === 'home') {
      if (onNavigate) {
        onNavigate(view);
      } else {
        router.push('/');
      }
    } else if (view === 'blog') {
      if (onNavigate) {
        onNavigate(view);
      } else {
        router.push('/');
      }
    }
    setMobileMenuOpen(false);
  };

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
    "Golden Visa eligibility depends on your category and supporting documents",
    "Dubai office: Crystal Tower, Business Bay",
    "Visa inquiries: visa@brightlinkconsulting.ae",
    "Office hours: Monday to Friday, 9 AM to 6 PM; Saturday, 10 AM to 5 PM",
    "WhatsApp our team at +971 56 655 6645",
  ];

  // Header Navigation: Includes Articles, About Us, Career, Contact Us.
  const navLinks = [
    { label: 'Home', icon: Home, action: () => navigateView('home'), isActive: currentView === 'home' },
    { label: 'Services', icon: Briefcase, action: () => { onOpenMegaMenu(); setMobileMenuOpen(false); }, isActive: false, hasBadge: true },
    { label: 'Articles', icon: BookOpen, action: () => navigateView('blog'), isActive: currentView === 'blog' },
    { label: 'About Us', icon: Info, action: () => navigateView('about'), isActive: currentView === 'about' },
    { label: 'Career', icon: Users, action: () => { router.push('/career'); setMobileMenuOpen(false); }, isActive: currentView === 'career' },
    { label: 'Contact Us', icon: Headphones, action: () => { router.push('/contact-us'); setMobileMenuOpen(false); }, isActive: currentView === 'contact' },
  ];


  return (
    <>
      <div className={`site-header-shell fixed top-0 left-0 right-0 z-40 w-full pointer-events-none ${navCollapsed ? 'is-collapsed' : ''}`}>
        
        {/* ─── Top Bar with Animated Horizontal Live Ticker / News Bar ─── */}
        <div className="site-nav-topbar pointer-events-auto bg-[#E8D5AE] text-[#201A0D] dark:bg-[#17140D] dark:text-[#F7E9C2] text-xs py-1.5 px-3 sm:px-6 lg:px-10 border-b border-[#C9AE70] dark:border-[#C5A059]/35 shadow-sm overflow-hidden">
          <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4">
            
            {/* Left: Authority Badge */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="hidden sm:inline font-bold text-[#765719] dark:text-[#F0D784] uppercase tracking-widest text-[11px]">
                Golden Visa Dubai Updates
              </span>
            </div>

            {/* Center: Smooth Horizontal Scrolling News Ticker */}
            <div className="flex-1 overflow-hidden relative mx-2 sm:mx-6 py-0.5">
              <div className="animate-ticker flex items-center gap-8 whitespace-nowrap">
                {tickerAlerts.concat(tickerAlerts).map((alert, i) => (
                  <div key={i} className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-[#302A1A] dark:text-[#F5F0E5] font-medium">
                    <span>{alert}</span>
                    <span className="text-[#8C6D2D] dark:text-amber-400 font-bold">•</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Direct Phone Hotline */}
            <a 
              href={contactInfo.phoneHref}
              className="flex items-center gap-1.5 text-[#765719] hover:text-black dark:text-amber-200 dark:hover:text-white font-bold text-xs tracking-wide transition-colors shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 shrink-0 text-[#8C6D2D] dark:text-amber-300" />
              <span className="hidden md:inline">{contactInfo.phone}</span>
              <span className="md:hidden">Call</span>
            </a>

          </div>
        </div>

        {/* ─── Floating Pill Glassmorphic Header (Fluid & Large Display Scaled) ─── */}
        <div className="site-nav-frame w-full px-3 sm:px-6 lg:px-10 pt-2 sm:pt-3">
          <header className={`site-nav-header max-w-[1720px] mx-auto pointer-events-auto rounded-full bg-white/95 dark:bg-[#0E1320]/95 backdrop-blur-2xl border border-amber-200/70 dark:border-white/10 shadow-[0_12px_40px_-5px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_-5px_rgba(0,0,0,0.7)] transition-all duration-300 px-3.5 sm:px-6 2xl:px-8 py-2.5 ${navCollapsed ? 'is-collapsed' : ''}`}>
            
            <div className="site-nav-layout flex items-center justify-between gap-2 lg:gap-4 xl:gap-6">

              {/* 1. Official Branding Emblem & Logo */}
              <button
                onClick={() => {
                  setNavCollapsed((collapsed) => !collapsed);
                  setLangDropdownOpen(false);
                  setMobileMenuOpen(false);
                }}
                aria-label={navCollapsed ? 'Expand navigation' : 'Collapse navigation'}
                aria-expanded={!navCollapsed}
                title={navCollapsed ? 'Expand navigation' : 'Collapse navigation'}
                className="site-nav-brand flex items-center gap-3 group text-left cursor-pointer shrink-0"
              >
                {navCollapsed ? (
                  <div className="site-nav-brand-mark relative w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-amber-200/80 via-amber-100 to-amber-50 dark:from-amber-900/60 dark:to-amber-950/60 border border-amber-300/60 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Image src="/assets/images/Golden Visa-icon.png" alt="Golden Visa Dubai" width={42} height={42} sizes="42px" className="object-contain w-full h-full drop-shadow-sm" priority />
                  </div>
                ) : (
                  <Image
                    src="/assets/images/Golden Visa Dubai.png"
                    alt="Golden Visa Dubai"
                    width={1812}
                    height={477}
                    sizes="(min-width: 1280px) 175px, 165px"
                    className="site-nav-brand-copy h-auto w-[145px] sm:w-[165px] xl:w-[175px] object-contain"
                    priority
                  />
                )}
              </button>

              {/* 2. Desktop Navigation Links (Includes Articles, About Us, Career, Contact Us) */}
              <nav className="site-nav-links hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5 justify-center flex-1 max-w-4xl">
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
              <div className="site-nav-actions flex items-center gap-2 sm:gap-2.5 shrink-0">

                {/* WhatsApp Icon-Only Button */}
                <a
                  href={`${contactInfo.whatsappHref}?text=Hello%20Golden%20Visa%20Dubai%20Team%2C%20I%20would%20like%20to%20request%20a%20consultation.`}
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
                    className="p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-100 transition-all flex items-center gap-2 cursor-pointer"
                    title="Switch Language"
                  >
                    <Globe className="w-4 h-4 text-[#C5A059]" />
                    <span className="hidden sm:inline text-sm font-bold">{language}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
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

                {/* Header Visa Calculator CTA Button */}
                <button
                  onClick={onOpenCalculator}
                  className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-full gold-btn text-slate-950 font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <Calculator className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                  <span>Visa Calculator</span>
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
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileMenuOpen
            ? 'pointer-events-auto opacity-100 visible'
            : 'pointer-events-none opacity-0 invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white dark:bg-[#0E1320] shadow-2xl flex flex-col text-slate-900 dark:text-white origin-left transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <Image src="/assets/images/Golden Visa Dubai.png" alt="Golden Visa Dubai" width={1812} height={477} sizes="155px" className="h-auto w-[155px] object-contain" />
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
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
                <svg aria-hidden="true" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.42-8.43ZM12.05 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.89-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.19.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.28.3-1.04 1.02-1.04 2.48 0 1.47 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" />
                </svg>
              <span>WhatsApp Consultation</span>
            </a>
            <div className="text-center text-[11px] text-slate-400 pt-1">
              <a href={contactInfo.phoneHref} className="text-amber-500 font-semibold">{contactInfo.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
