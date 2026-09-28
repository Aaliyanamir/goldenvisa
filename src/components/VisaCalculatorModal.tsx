"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { contactInfo } from '@/lib/contactInfo';
import {
  X, CheckCircle2, ArrowRight, ShieldCheck,
  Sparkles, Building2, UserCheck, HeartHandshake, Award,
  Minus, Plus, Zap, Clock, MessageSquare, FileText
} from 'lucide-react';

interface VisaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Currency = 'AED' | 'USD' | 'EUR' | 'GBP';
type CategoryKey = 'investor' | 'executive' | 'talent' | 'family';

const pathways: { key: CategoryKey; icon: React.ElementType; title: string; subtitle: string; baseAED: number; color: string }[] = [
  { key: 'investor',  icon: Building2,      title: 'Real Estate Investor (AED 2M+)', subtitle: 'Direct DLD Route',      baseAED: 3864, color: 'amber' },
  { key: 'executive', icon: UserCheck,       title: 'Senior Executive & Director',   subtitle: 'MOHRE Fast-Lane',        baseAED: 4250, color: 'blue'  },
  { key: 'talent',    icon: Award,           title: 'Specialized Talent / Doctor / AI', subtitle: 'Ministry Nominated', baseAED: 3500, color: 'purple'},
  { key: 'family',    icon: HeartHandshake,  title: 'Family & Dependent Package',    subtitle: 'Full Coverage',          baseAED: 2850, color: 'green' },
];

const iconColorMap = {
  amber:  { bg: 'bg-amber-500/10',  text: 'text-amber-700 dark:text-amber-400',  border: 'border-amber-500/30'  },
  blue:   { bg: 'bg-blue-500/10',   text: 'text-blue-700 dark:text-blue-400',   border: 'border-blue-500/30'   },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-700 dark:text-purple-400', border: 'border-purple-500/30' },
  green:  { bg: 'bg-emerald-500/10',text: 'text-emerald-700 dark:text-emerald-400',border: 'border-emerald-500/30'},
};

export const VisaCalculatorModal: React.FC<VisaCalculatorModalProps> = ({ isOpen, onClose }) => {
  const { isRTL } = useLanguage();

  const [category, setCategory]     = useState<CategoryKey>('investor');
  const [dependents, setDependents] = useState<number>(1);
  const [isVip, setIsVip]           = useState<boolean>(true);
  const [currency, setCurrency]     = useState<Currency>('AED');

  const rates: Record<Currency, number> = { AED: 1, USD: 0.272, EUR: 0.252, GBP: 0.215 };
  const syms:  Record<Currency, string> = { AED: 'AED', USD: '$', EUR: '€', GBP: '£' };

  const fees = useMemo(() => {
    const p = pathways.find(x => x.key === category)!;
    let total = p.baseAED;
    // dependents add-on (each +850 AED)
    if (dependents > 0) total += dependents * 850;
    // VIP fast-track surcharge
    if (isVip) total += 1850;
    const rate = rates[currency];
    return {
      base:   Math.round(p.baseAED * rate),
      deps:   Math.round(dependents * 850 * rate),
      vip:    isVip ? Math.round(1850 * rate) : 0,
      total:  Math.round(total * rate),
    };
  }, [category, dependents, isVip, currency]);

  const handleWhatsApp = () => {
    const p = pathways.find(x => x.key === category)!;
    const msg = `Hello Golden Visa Dubai VIP Team,\n\nI would like to get a detailed quote for:\n• Pathway: ${p.title}\n• Dependents: ${dependents}\n• Processing: ${isVip ? 'VIP Express (48-72h)' : 'Standard (7-10 days)'}\n• Estimated Total: ${syms[currency]} ${fees.total.toLocaleString()} ${currency}\n\nPlease assign a Case Officer. Thank you.`;
    window.open(`${contactInfo.whatsappHref}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (!isOpen) return null;

  const sym = syms[currency];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <div className="relative w-full max-w-2xl max-h-[96vh] flex flex-col rounded-2xl bg-white text-slate-900 shadow-2xl border border-[#E8D5B5] dark:bg-[#0D1117] dark:text-white dark:border-white/10 overflow-hidden">

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-white/10 bg-[#fffaf0] dark:bg-[#0D1117]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#8C6D2D] dark:text-amber-400">Live Cost Estimator</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">Visa Fee Calculator</span>
          </div>
          {/* Currency switcher */}
          <div className="flex items-center gap-1">
            {(['AED','USD','EUR','GBP'] as Currency[]).map(cur => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  currency === cur
                    ? 'bg-[#C5A059] text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10'
                }`}
              >{cur}</button>
            ))}
            <button onClick={onClose} className="ml-2 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer" aria-label="Close calculator">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto">

          {/* 1. Residency Pathway Selection */}
          <div className="px-5 pt-5 pb-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">1. Select Residency Pathway</p>
            <div className="space-y-2">
              {pathways.map(p => {
                const colors = iconColorMap[p.color as keyof typeof iconColorMap];
                const IconComp = p.icon;
                const isSelected = category === p.key;
                const displayAmt = Math.round(p.baseAED * rates[currency]);
                return (
                  <button
                    key={p.key}
                    onClick={() => setCategory(p.key)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-[#FDFBF7] border-[#C5A059]/70 shadow-[0_0_20px_rgba(197,160,89,0.12)] dark:bg-[#C5A059]/10 dark:border-[#C5A059]/60'
                        : 'bg-white border-slate-200 hover:bg-[#FAF9F6] hover:border-[#D8C28C] dark:bg-white/3 dark:border-white/8 dark:hover:bg-white/6 dark:hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                        <IconComp className={`w-4.5 h-4.5 ${colors.text}`} />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isSelected ? 'text-[#8C6D2D] dark:text-[#C5A059]' : 'text-slate-900 dark:text-white'}`}>{p.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{p.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className={`text-sm font-extrabold ${isSelected ? 'text-[#8C6D2D] dark:text-[#C5A059]' : 'text-slate-700 dark:text-slate-300'}`}>
                        {sym} {displayAmt.toLocaleString()}
                      </div>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mt-0.5 ml-auto" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Dependents & Speed */}
          <div className="px-5 pt-3 pb-3 grid grid-cols-2 gap-3">
            {/* Dependents */}
            <div className="bg-white border border-slate-200 dark:bg-white/3 dark:border-white/8 rounded-xl p-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">Dependents</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setDependents(Math.max(0, dependents - 1))}
                  className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white">{dependents}</span>
                <button
                  onClick={() => setDependents(Math.min(8, dependents + 1))}
                  className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 hover:bg-slate-200 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {dependents > 0 && (
                <p className="text-center text-[10px] text-slate-500 dark:text-slate-400 mt-2">+{sym} {Math.round(dependents * 850 * rates[currency]).toLocaleString()} added</p>
              )}
            </div>

            {/* Processing Speed */}
            <div className="bg-white border border-slate-200 dark:bg-white/3 dark:border-white/8 rounded-xl p-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">Fast-Track</p>
              <div className="space-y-2">
                <button
                  onClick={() => setIsVip(false)}
                  className={`w-full py-2 px-3 rounded-lg border text-left transition-all cursor-pointer ${
                    !isVip
                      ? 'bg-slate-100 border-slate-300 text-slate-900 dark:bg-white/10 dark:border-white/30 dark:text-white'
                      : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-300 dark:border-white/5 dark:text-slate-400 dark:hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">Standard</span>
                  </div>
                  <div className="text-[10px] opacity-70 mt-0.5">7–10 Days</div>
                </button>
                <button
                  onClick={() => setIsVip(true)}
                  className={`w-full py-2 px-3 rounded-lg border text-left transition-all cursor-pointer ${
                    isVip
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/40 dark:text-emerald-400'
                      : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-300 dark:border-white/5 dark:text-slate-400 dark:hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">VIP (48–72h)</span>
                  </div>
                  <div className="text-[10px] opacity-70 mt-0.5">Priority Express</div>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Fee Breakdown */}
          <div className="px-5 pb-5">
            <div className="bg-white border border-slate-200 dark:bg-white/3 dark:border-white/8 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200 dark:border-white/8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Estimated Total Investment</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Govt. All-Inclusive</span>
                </div>
              </div>

              <div className="space-y-2 text-xs mb-3">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Base Government Fees</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{sym} {fees.base.toLocaleString()}</span>
                </div>
                {fees.deps > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Dependents ({dependents}×)</span>
                    <span className="text-slate-800 dark:text-slate-200 font-semibold">{sym} {fees.deps.toLocaleString()}</span>
                  </div>
                )}
                {fees.vip > 0 && (
                  <div className="flex justify-between text-emerald-700 dark:text-emerald-400">
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" />VIP Fast-Track</span>
                    <span className="font-semibold">{sym} {fees.vip.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-white/10">
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Total Estimate</div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {sym} <span className="text-[#8C6D2D] dark:text-[#C5A059]">{fees.total.toLocaleString()}</span>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">{currency}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                    <Sparkles className="w-3 h-3" />
                    Fixed Price
                  </div>
                  <div className="text-[10px] text-slate-600 dark:text-slate-400 mt-1">No hidden charges</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Actions ── */}
        <div className="px-5 pb-5 pt-3 border-t border-slate-200 dark:border-white/10 bg-[#fffaf0] dark:bg-[#0D1117] space-y-2.5">
          <button
            onClick={handleWhatsApp}
            className="w-full py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-emerald-900/30"
          >
            <MessageSquare className="w-4.5 h-4.5 shrink-0" />
            <span>Get Instant WhatsApp Quote</span>
            <ArrowRight className="w-4 h-4 ml-auto shrink-0" />
          </button>
          <button
            onClick={() => alert(`Quote #GV-${Math.floor(100000 + Math.random() * 900000)} — Total: ${sym} ${fees.total.toLocaleString()} — Our team will contact you within 2 hours.`)}
            className="w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-slate-300 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Download Official Quote PDF</span>
          </button>
          <p className="text-center text-[10px] text-slate-600 dark:text-slate-500">
            Estimates include GDRFA/ICP government fees, Emirates ID, medical screening & VIP concierge. Final fees confirmed by your case officer.
          </p>
        </div>
      </div>
    </div>
  );
};
