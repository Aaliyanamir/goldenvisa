"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { 
  X, ChevronRight, Calculator, MessageSquare,
  Users, Award, Building2, Heart, UserCheck, CreditCard,
  Briefcase, Landmark, FileCheck2, Globe2, FileText, Scale,
  HeartPulse, ShieldCheck, Umbrella, BookOpen, Info, Headphones
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
  onNavigateToBlog?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ 
  isOpen, 
  onClose, 
  onOpenCalculator,
  onNavigateToBlog 
}) => {
  const { isRTL } = useLanguage();

  if (!isOpen) return null;

  // 1. Top Row Featured Service Cards (Matching Reference Grid of 6)
  const featuredServices = [
    {
      title: "Family Visa",
      icon: Users,
      bgColor: "bg-rose-50",
      textColor: "text-rose-500",
      borderColor: "border-rose-100",
      action: () => { onClose(); onOpenCalculator(); },
    },
    {
      title: "Golden Visa",
      icon: Award,
      bgColor: "bg-amber-50",
      textColor: "text-[#C5A059]",
      borderColor: "border-amber-100",
      action: () => { onClose(); onOpenCalculator(); },
    },
    {
      title: "Property Visa",
      icon: Building2,
      bgColor: "bg-sky-50",
      textColor: "text-sky-600",
      borderColor: "border-sky-100",
      action: () => { onClose(); onOpenCalculator(); },
    },
    {
      title: "Newborn Visa",
      icon: Heart,
      bgColor: "bg-pink-50",
      textColor: "text-pink-500",
      borderColor: "border-pink-100",
      action: () => { onClose(); onOpenCalculator(); },
    },
    {
      title: "Maid Visa",
      icon: UserCheck,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-100",
      action: () => { onClose(); onOpenCalculator(); },
    },
    {
      title: "Emirates ID",
      icon: CreditCard,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-100",
      action: () => { onClose(); onOpenCalculator(); },
    },
  ];

  // 2. Middle Column: Other Services
  const otherServices = [
    { title: "PRO Services", icon: Briefcase, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Amer Center", icon: Landmark, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Attestation", icon: FileCheck2, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Translation", icon: Globe2, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Power of Attorney", icon: FileText, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Wills & Testament", icon: Scale, action: () => { onClose(); onOpenCalculator(); } },
  ];

  // 3. Middle Column: Property & Support
  const propertySupportServices = [
    { title: "DLD Trustee Services", icon: Building2, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Revaluation", icon: Scale, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Medical & EID", icon: HeartPulse, action: () => { onClose(); onOpenCalculator(); } },
    { title: "Visa Validity Checker", icon: ShieldCheck, action: () => { onClose(); onOpenCalculator(); } },
    { title: "ILOE Insurance", icon: Umbrella, action: () => { onClose(); onOpenCalculator(); } },
  ];

  // 4. Company Links
  const companyLinks = [
    {
      title: "Articles",
      icon: BookOpen,
      action: () => {
        onClose();
        if (onNavigateToBlog) onNavigateToBlog();
      },
    },
    {
      title: "About Us",
      icon: Info,
      action: () => {
        onClose();
        const el = document.getElementById('roadmap');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: "Career",
      icon: Briefcase,
      action: () => {
        onClose();
        window.open('https://wa.me/971503853305?text=Hello%2C%20I%20am%20inquiring%20about%20career%20opportunities%20at%20Golden%20Visa%20Dubai.', '_blank');
      },
    },
    {
      title: "Contact Us",
      icon: Headphones,
      action: () => {
        onClose();
        window.open('https://wa.me/971503853305?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20an%20advisory%20consultant.', '_blank');
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div 
        className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-2xl text-slate-900 overflow-hidden"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        
        {/* Header */}
        <div className="px-6 py-4 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-amber-200/80 to-amber-50 border border-amber-300/60 shadow-xs flex items-center justify-center shrink-0">
              <Image 
                src="/assets/images/Golden Visa-icon.png" 
                alt="Golden Visa Emblem" 
                width={32} 
                height={32}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-serif">
                  Golden Visa <span className="text-[#C5A059] italic font-serif">Dubai</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                All services in one place
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-6">

          {/* 1. TOP ROW GRID: Featured Service Cards (Reference 6 Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
            {featuredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <button
                  key={idx}
                  onClick={service.action}
                  className="group flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-200 cursor-pointer text-center"
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${service.bgColor} ${service.textColor} ${service.borderColor} border flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform shadow-xs`}>
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-slate-950 leading-tight">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2. TWO-COLUMN CATEGORIZED SERVICES (Reference Matched) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-2">
            
            {/* Left Column: Other Services */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Other Services</h3>
              </div>
              <div className="space-y-2">
                {otherServices.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200/70 hover:border-amber-300 hover:bg-amber-50/30 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-amber-100/70 group-hover:text-[#8C6D2D] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950">
                          {item.title}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Property & Support */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 inline-block shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Property &amp; Support</h3>
              </div>
              <div className="space-y-2">
                {propertySupportServices.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200/70 hover:border-amber-300 hover:bg-amber-50/30 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-amber-100/70 group-hover:text-[#8C6D2D] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950">
                          {item.title}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* 3. COMPANY SECTION (Reference Matched) */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block shrink-0" />
              <h3 className="text-sm font-bold text-slate-900 tracking-tight">Company</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {companyLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200/70 hover:border-amber-300 hover:bg-amber-50/30 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-amber-100/70 group-hover:text-[#8C6D2D] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950">
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4. STICKY MODAL FOOTER: Dual Action Buttons (Reference Matched) */}
        <div className="p-3 sm:p-4 border-t border-slate-200 bg-white/95 backdrop-blur-md shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            
            {/* Left Button: Red / Rose Visa Calculator */}
            <button
              onClick={() => {
                onClose();
                onOpenCalculator();
              }}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Calculator className="w-4 h-4 shrink-0 text-white" />
              <span>Visa Calculator</span>
            </button>

            {/* Right Button: Green WhatsApp Direct Contact */}
            <a
              href="https://wa.me/971503853305?text=Hello%20Golden%20Visa%20Dubai%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-white" />
              <span>WhatsApp</span>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};
