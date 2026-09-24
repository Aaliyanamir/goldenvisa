"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Calculator, ShieldCheck, ArrowRight, 
  Sparkles, CheckCircle2, Building, Award, Clock,
  Send, User, Phone, Globe, HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onOpenMegaMenu }) => {
  const { t } = useLanguage();

  const [formName, setFormName] = useState('');
  const [formWhatsapp, setFormWhatsapp] = useState('');
  const [formNationality, setFormNationality] = useState('');
  const [formPurpose, setFormPurpose] = useState('Real Estate Investor (2M+ AED)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C5A059', '#10B981']
    });

    const msg = `Hello VIP Concierge Team, I would like to request an executive consultation for UAE Golden Visa.
Client Details:
- Name: ${formName || 'VIP Applicant'}
- WhatsApp: ${formWhatsapp || 'Provided via form'}
- Nationality: ${formNationality || 'International'}
- Purpose: ${formPurpose}
Please connect me with a Senior Case Officer.`;

    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(`https://wa.me/971503853305?text=${encoded}`, '_blank');
    }, 400);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20">
      
      {/* 1. High-Resolution Dubai Luxury Skyline Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=90"
          alt="Dubai Skyline Waterfront Twilight"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        
        {/* 2. Sophisticated Dark Gradients Overlay (Exact Meridian Reference Style) */}
        {/* Deep Slate/Midnight backdrop with vignette and opacity for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16]/95 via-[#090D16]/85 to-[#0F172A]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/80"></div>
        
        {/* Subtle gold ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      </div>

      {/* 3. Main Hero Content Layout: 2 Columns Matching User's Reference Screenshot */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Editorial Authority Headline, Badges, and Trust Points */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow Label (Matching reference style) */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-lg shadow-black/40 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-extrabold text-[#D4AF37]">SOVEREIGN RESIDENCY</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-medium">PRIVATE ADVISORY</span>
          </div>

          {/* Majestic Hero Headline with Serif Accents */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.08] font-bold">
            Residency Beyond <br />
            <span className="gold-gradient-text italic font-serif font-extrabold">
              Borders & Limitations
            </span>
          </h1>

          {/* Refined Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
            Helping international investors, entrepreneurs, senior corporate leaders, and high-net-worth families secure sovereign long-term 10-year opportunities in the United Arab Emirates.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenCalculator}
              className="px-8 py-4 rounded-xl gold-btn text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-amber-500/20 group"
            >
              <Calculator className="w-4 h-4 text-slate-950" />
              <span>Launch Visa Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenMegaMenu}
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md"
            >
              <span>Explore Services Portfolio</span>
            </button>
          </div>

          {/* Trust Metrics Strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-xl">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Government Compliance</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">9,800+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Golden Visas Issued</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">48-72h</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">VIP Fast-Track Approval</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: "REQUEST CONSULTATION" Lead Form Card (Exact Reference Screenshot Layout) */}
        <div className="lg:col-span-5 relative w-full">
          
          <div className="relative rounded-3xl bg-[#090D16]/90 p-7 sm:p-8 border border-amber-500/30 shadow-2xl backdrop-blur-xl">
            
            {/* Top Card Label */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37] block">
                  REQUEST CONSULTATION
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight mt-0.5">
                  Direct VIP Government Desk
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                PRIORITY ACTIVE
              </span>
            </div>

            {/* Consultation Form Fields */}
            <form onSubmit={handleConsultationSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#C5A059] text-white text-xs placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  WhatsApp Number (with country code)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formWhatsapp}
                    onChange={(e) => setFormWhatsapp(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#C5A059] text-white text-xs placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Nationality */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nationality / Passport Country
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. United Kingdom / European Union"
                    value={formNationality}
                    onChange={(e) => setFormNationality(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 focus:bg-white/15 border border-white/15 focus:border-[#C5A059] text-white text-xs placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Purpose Selection */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Application Pathway / Purpose
                </label>
                <div className="relative">
                  <select
                    value={formPurpose}
                    onChange={(e) => setFormPurpose(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0F172A] border border-white/15 focus:border-[#C5A059] text-white text-xs focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Real Estate Investor (2M+ AED)">Real Estate Investor (AED 2,000,000+)</option>
                    <option value="Senior Executive (30K+ AED Salary)">Senior Executive (AED 30,000+ Salary)</option>
                    <option value="Specialized Talent / Doctor / AI">Specialized Talent / Doctor / AI Innovator</option>
                    <option value="Family Sponsorship Complete">Family & Dependent Sponsoring</option>
                    <option value="Mainland / Freezone Company Setup">Company Formation (Mainland / Freezone)</option>
                  </select>
                </div>
              </div>

              {/* Submit Consultation Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-amber-500/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Connecting...' : 'Request Consultation'}</span>
                </button>
              </div>

            </form>

            {/* Privacy & Fast Response Assurance */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Confidential VIP Liaison • Responds within 15 mins</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
