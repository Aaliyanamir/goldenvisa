"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../lib/LanguageContext';
import { Language } from '../lib/translations';
import { contactInfo } from '../lib/contactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBookOpen,
  faBriefcase,
  faCalculator,
  faChevronDown,
  faCircleInfo,
  faGlobe,
  faHeadset,
  faHouse,
  faPhone,
  faUsers,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  currentView?: 'home' | 'blog' | 'about' | 'contact' | 'career' | 'service';
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
        router.push('/blog');
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
    { label: 'Home', icon: faHouse, action: () => navigateView('home'), isActive: currentView === 'home' },
    { label: 'Services', icon: faBriefcase, action: () => { onOpenMegaMenu(); setMobileMenuOpen(false); }, isActive: false, hasBadge: true },
    { label: 'Articles', icon: faBookOpen, action: () => navigateView('blog'), isActive: currentView === 'blog' },
    { label: 'About Us', icon: faCircleInfo, action: () => navigateView('about'), isActive: currentView === 'about' },
    { label: 'Career', icon: faUsers, action: () => { router.push('/career'); setMobileMenuOpen(false); }, isActive: currentView === 'career' },
    { label: 'Contact Us', icon: faHeadset, action: () => { router.push('/contact-us'); setMobileMenuOpen(false); }, isActive: currentView === 'contact' },
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-35"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A059]"></span>
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
              <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 shrink-0 text-[#8C6D2D] dark:text-amber-300" />
              <span className="hidden md:inline">{contactInfo.phone}</span>
              <span className="md:hidden">Call</span>
            </a>

          </div>
        </div>

        {/* ─── Floating Pill Glassmorphic Header (Fluid & Large Display Scaled) ─── */}
        <div className="site-nav-frame w-full px-3 sm:px-6 lg:px-10 pt-2 sm:pt-3">
          <header className={`site-nav-header max-w-[1720px] mx-auto pointer-events-auto rounded-full bg-white/60 dark:bg-[#0E1320]/70 backdrop-blur-3xl backdrop-saturate-150 border border-amber-300/40 dark:border-[#C5A059]/20 shadow-[0_8px_32px_-4px_rgba(197,160,89,0.12),0_2px_8px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(197,160,89,0.08)] transition-all duration-300 px-3.5 sm:px-6 2xl:px-8 py-2.5 ${navCollapsed ? 'is-collapsed' : ''}`}>
            
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
                    <Image src="/assets/images/Golden Visa-icon.webp" alt="Golden Visa Dubai" width={42} height={42} sizes="42px" className="object-contain w-full h-full drop-shadow-sm" />
                  </div>
                ) : (
                  <Image
                    src="/assets/images/Golden Visa Dubai.webp"
                    alt="Golden Visa Dubai"
                    width={1812}
                    height={477}
                    sizes="(min-width: 1280px) 175px, 165px"
                    className="site-nav-brand-copy h-auto w-[145px] sm:w-[165px] xl:w-[175px] object-contain"
                    preload
                  />
                )}
              </button>

              {/* 2. Desktop Navigation Links (Includes Articles, About Us, Career, Contact Us) */}
              <nav className="site-nav-links hidden lg:flex items-center gap-1 xl:gap-2.5 2xl:gap-3.5 justify-center flex-1 max-w-4xl">
                {navLinks.map((link) => {
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
                        <FontAwesomeIcon icon={link.icon} className="h-4 w-4 xl:h-[18px] xl:w-[18px]" />
                      </div>
                      <span className={`text-[11px] xl:text-xs 2xl:text-[13px] tracking-wide whitespace-nowrap ${
                        link.isActive ? 'font-extrabold text-[#8C6D2D] dark:text-amber-400' : 'font-semibold'
                      }`}>
                        {link.label}
                        {link.label === 'Services' && (
                          <FontAwesomeIcon icon={faChevronDown} className="ml-0.5 inline h-3 w-3 text-[#C5A059]" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* 3. Right Toolbar: Language, WhatsApp & Visa Calculator CTA */}
              <div className="site-nav-actions flex items-center gap-2 sm:gap-2.5 shrink-0">

                {/* WhatsApp Icon-Only Button */}
                <a
                  href={`${contactInfo.whatsappHref}?text=Hello%20Golden%20Visa%20Dubai%20Team%2C%20I%20would%20like%20to%20request%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xl:flex items-center justify-center w-9 h-9 rounded-full bg-[#8C6D2D] hover:bg-[#735820] text-white transition-colors shadow-sm"
                  title="Chat on WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
                </a>

                {/* Language Switcher Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-100 transition-all flex items-center gap-2 cursor-pointer"
                    title="Switch Language"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 text-[#C5A059]" />
                    <span className="hidden sm:inline text-sm font-bold">{language}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="h-3.5 w-3.5 text-slate-500" />
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

                {/* Header Visa Calculator CTA Button */}
                <button
                  onClick={onOpenCalculator}
                  className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-full gold-btn text-slate-950 font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-md transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap shrink-0 group"
                >
                  <FontAwesomeIcon icon={faCalculator} className="h-3.5 w-3.5 shrink-0 text-slate-950 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Visa Calculator</span>
                </button>

                {/* Mobile Hamburger Drawer Trigger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
                  aria-label="Open menu"
                >
                  <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                </button>

              </div>
            </div>
          </header>
        </div>
      </div>

      {/* ─── Mobile Slide-In Navigation Drawer ─── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileMenuOpen
            ? 'pointer-events-auto'
            : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel — slides left→right on open, right→left on close */}
        <div
          className={`absolute top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white/95 dark:bg-[#0E1320]/98 backdrop-blur-2xl shadow-[4px_0_40px_rgba(0,0,0,0.25)] flex flex-col text-slate-900 dark:text-white transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <Image src="/assets/images/Golden Visa Dubai.webp" alt="Golden Visa Dubai" width={1812} height={477} sizes="155px" className="h-auto w-[155px] object-contain" />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>
          </div>

          {/* Nav Links in Drawer */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <div className="space-y-1">
              {navLinks.map((link) => {
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
                    <FontAwesomeIcon icon={link.icon} className={`h-4 w-4 shrink-0 ${link.isActive ? 'text-[#C5A059]' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span>{link.label}</span>
                    {link.label === 'Services' && (
                      <FontAwesomeIcon icon={faChevronDown} className="ml-auto h-4 w-4 text-slate-400" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Language selector */}
            <div className="mt-6 px-1 pt-4 border-t border-slate-100 dark:border-slate-800">
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
              <FontAwesomeIcon icon={faCalculator} className="h-4 w-4 shrink-0 text-slate-950" />
              <span>Visa Fee Calculator</span>
            </button>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#8C6D2D] hover:bg-[#735820] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" className="h-4 w-4 shrink-0" />
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
