"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';
import { 
  Calculator, ArrowRight, ShieldCheck, 
  Send, User, Phone, Globe, ChevronDown, 
  Users, CheckCircle2, Zap, Clock, Sparkles, Plus, Minus
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
}

type Currency = 'AED' | 'USD' | 'EUR' | 'GBP';

interface PathwayOption {
  id: string;
  name: string;
  badge: string;
  baseAed: number;
}

const PATHWAYS: PathwayOption[] = [
  { id: 'investor', name: 'Real Estate Investor (AED 2M+)', badge: 'Direct DLD Route', baseAed: 3864 },
  { id: 'executive', name: 'Senior Executive & Director', badge: 'MOHRE Fast-Lane', baseAed: 4250 },
  { id: 'talent', name: 'Specialized Talent / Doctor / AI', badge: 'Ministry Nominated', baseAed: 3500 },
  { id: 'family', name: 'Family & Dependent Package', badge: 'Full Coverage', baseAed: 2850 },
];

const CURRENCIES: Record<Currency, { symbol: string; rate: number }> = {
  AED: { symbol: 'AED', rate: 1 },
  USD: { symbol: '$', rate: 0.272 },
  EUR: { symbol: '€', rate: 0.252 },
  GBP: { symbol: '£', rate: 0.218 },
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onOpenMegaMenu }) => {
  const { t } = useLanguage();

  // Live Visa Calculator Widget State
  const [selectedPathway, setSelectedPathway] = useState<string>(PATHWAYS[0].id);
  const [dependents, setDependents] = useState<number>(1);
  const [isFastTrack, setIsFastTrack] = useState<boolean>(true);
  const [currency, setCurrency] = useState<Currency>('AED');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Compute live estimated cost breakdown
  const currentPathway = PATHWAYS.find(p => p.id === selectedPathway) || PATHWAYS[0];
  const baseCost = currentPathway.baseAed;
  const dependentsCost = dependents * 1150;
  const fastTrackCost = isFastTrack ? 1200 : 0;
  const totalAed = baseCost + dependentsCost + fastTrackCost;
  
  const currencyInfo = CURRENCIES[currency];
  const convertedTotal = Math.round(totalAed * currencyInfo.rate);
  const convertedBase = Math.round(baseCost * currencyInfo.rate);
  const convertedDependents = Math.round(dependentsCost * currencyInfo.rate);

  const handleClaimQuote = () => {
    setIsGenerating(true);
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#C5A059', '#FFFFFF', '#10B981'],
    });

    const msg = `Good day,\n\nI just calculated my UAE 10-Year Golden Visa quotation on your website:\n\n• Pathway: ${currentPathway.name}\n• Dependents: ${dependents} family member(s)\n• Priority Tier: ${isFastTrack ? 'VIP Fast-Track (48–72h)' : 'Standard Filing (7–10 days)'}\n• Estimated Total: ${currencyInfo.symbol} ${convertedTotal.toLocaleString()} (${currency})\n\nKindly assign a Senior Legal Officer to review my documents and lock in this quotation. Thank you.`;

    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      setIsGenerating(false);
      window.open(`${contactInfo.whatsappHref}?text=${encoded}`, '_blank');
    }, 450);
  };

  return (
    <section
      data-light-theme-exempt
      className="relative w-full flex items-center justify-center border-b border-amber-500/15 overflow-hidden bg-[#090D16]"
      style={{ minHeight: '100svh' }}
    >
      {/* ─── Skyline Background Video (User Selected) ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="https://cdn.pixabay.com/video/2025/08/27/300130_small.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/blog/article-1.jpg"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_45%] pointer-events-none"
        />

        {/* Balanced Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.76) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.30) 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 45%, rgba(0,0,0,0.40) 100%)'
          }}
        />
      </div>

      {/* ─── Hero Main Content Grid ─── */}
      <div
        className="relative z-10 w-full"
        style={{ maxWidth: '1720px', margin: '0 auto', padding: 'calc(var(--site-header-offset) + 2rem) 1.25rem 2.5rem' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* LEFT: Typography & Strategic Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative">

            {/* Subtle Golden/Amber Radial Background Glow behind Typography */}
            <div className="absolute -top-14 -left-14 w-[360px] sm:w-[540px] xl:w-[680px] h-[360px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/22 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-amber-400/30 backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-300 uppercase">
                Dubai, United Arab Emirates — Authorised Legal Facilitation
              </p>
            </div>

            <h1 className="text-[2.4rem] sm:text-[3.2rem] md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] 2xl:text-[4.6rem] font-serif text-white tracking-tight leading-[1.08] font-bold drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              UAE Long-Term Residency
              <br />
              <span className="gold-gradient-text italic font-serif font-extrabold drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
                10-Year Golden Visa
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-[1.1rem] xl:text-[1.15rem] text-slate-200 leading-relaxed max-w-2xl font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Private legal facilitation for property investors, senior executives,
              entrepreneurs and global families seeking full UAE residency — 100% compliant
              with GDRFA and Dubai Land Department directives.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenMegaMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl gold-btn text-xs sm:text-sm font-extrabold uppercase tracking-widest flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-amber-500/25 group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            </div>

            {/* Key Trust Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/15 w-full max-w-sm sm:max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tabular-nums drop-shadow-md">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Government Direct</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 tabular-nums drop-shadow-md">9,800+</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Visas Approved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 tabular-nums drop-shadow-md">48–72h</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Fast-Track Available</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Interactive Visa Calculator Widget (Replacing Static Contact Form) */}
          <div className="lg:col-span-5 w-full">
            <div
              className="relative rounded-2xl overflow-hidden border border-amber-200/30 ring-1 ring-white/10 shadow-[0_28px_80px_-35px_rgba(0,0,0,0.9)] transition-all"
              style={{
                background: 'rgba(11,15,26,0.82)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Subtle top gold accent glow */}
              <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />

              <div className="p-4 sm:p-5">
                
                {/* Header with Currency Switcher */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      Live Cost Estimator
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                      Visa Fee Calculator
                    </h3>
                  </div>

                  {/* Currency Picker */}
                  <div className="flex bg-white/10 rounded-xl p-1 border border-white/15">
                    {(['AED', 'USD', 'EUR', 'GBP'] as Currency[]).map((cur) => (
                      <button
                        key={cur}
                        type="button"
                        onClick={() => setCurrency(cur)}
                        className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          currency === cur
                            ? 'bg-[#C5A059] text-slate-950 shadow-xs'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 1. Pathway Selector */}
                <div className="space-y-1.5 mb-3">
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                    1. Select Residency Pathway
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {PATHWAYS.map((p) => {
                      const isSelected = selectedPathway === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPathway(p.id)}
                          className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-500/20 border-amber-400 text-white shadow-xs'
                              : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <div>
                            <div className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                              {p.name}
                            </div>
                            <div className="text-[10px] text-amber-300/80 font-medium">
                              {p.badge}
                            </div>
                          </div>
                          <span className="text-xs font-black text-amber-400 tabular-nums">
                            {currencyInfo.symbol} {Math.round(p.baseAed * currencyInfo.rate).toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Dependents & Speed Controls */}
                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  
                  {/* Dependents Counter */}
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                    <span className="text-[11px] font-semibold text-slate-300 block mb-1.5">
                      Dependents
                    </span>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setDependents(Math.max(0, dependents - 1))}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-base font-black text-white tabular-nums">
                        {dependents}
                      </span>
                      <button
                        type="button"
                        onClick={() => setDependents(Math.min(10, dependents + 1))}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center cursor-pointer transition-colors active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Processing Tier Toggle */}
                  <div 
                    onClick={() => setIsFastTrack(!isFastTrack)}
                    className={`p-2.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isFastTrack
                        ? 'bg-emerald-500/15 border-emerald-400/60'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-300">Fast-Track</span>
                      <Zap className={`w-3.5 h-3.5 ${isFastTrack ? 'text-emerald-400' : 'text-slate-500'}`} />
                    </div>
                    <div className="text-xs font-bold text-white mt-1">
                      {isFastTrack ? 'VIP (48–72h)' : 'Standard (7d)'}
                    </div>
                  </div>

                </div>

                {/* 3. Live Total Price Card */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-400/40 mb-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1">
                    <span>Estimated Total Investment</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Govt All-Inclusive
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-black text-white tabular-nums tracking-tight">
                      {currencyInfo.symbol} {convertedTotal.toLocaleString()}{' '}
                      <span className="text-xs text-amber-300 font-bold">{currency}</span>
                    </span>
                    <button
                      type="button"
                      onClick={onOpenCalculator}
                      className="text-[11px] text-amber-300 hover:text-white underline font-semibold cursor-pointer"
                    >
                      Detailed View
                    </button>
                  </div>
                </div>

                {/* 4. Action Button */}
                <button
                  type="button"
                  onClick={handleClaimQuote}
                  disabled={isGenerating}
                  className="w-full py-3 rounded-xl gold-btn font-extrabold text-[12px] uppercase tracking-widest text-slate-950 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg hover:shadow-amber-500/30 active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  <span>Lock In Quote on WhatsApp</span>
                </button>

                {/* Trust Footer */}
                <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-start justify-between gap-3 text-[10px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Official GDRFA Direct File</span>
                  </span>
                  <span>Zero Hidden Government Surcharges</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
