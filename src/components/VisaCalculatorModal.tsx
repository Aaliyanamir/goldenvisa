"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { contactInfo } from '@/lib/contactInfo';
import {
  ArrowLeft, ArrowRight, Award, Building2, Check, CheckCircle2,
  Clock3, HeartHandshake, UserCheck, X, Zap
} from 'lucide-react';

interface VisaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Currency = 'AED' | 'USD' | 'EUR' | 'GBP';
type CategoryKey = 'investor' | 'executive' | 'talent' | 'family';

const rates: Record<Currency, number> = { AED: 1, USD: 0.272, EUR: 0.252, GBP: 0.215 };
const symbols: Record<Currency, string> = { AED: 'AED', USD: '$', EUR: '€', GBP: '£' };

const pathways = [
  { key: 'investor' as const, icon: Building2, title: 'Property investor', subtitle: 'Real estate residency pathway', baseAED: 3864 },
  { key: 'executive' as const, icon: UserCheck, title: 'Executive or director', subtitle: 'Employment and leadership pathway', baseAED: 4250 },
  { key: 'talent' as const, icon: Award, title: 'Specialized talent', subtitle: 'Professional or nominated pathway', baseAED: 3500 },
  { key: 'family' as const, icon: HeartHandshake, title: 'Family sponsorship', subtitle: 'Dependents and family applications', baseAED: 2850 },
];

const pathwayQuestions: Record<CategoryKey, { title: string; options: string[] }> = {
  investor: {
    title: 'Which best describes your property?',
    options: ['Ready property valued at AED 2M or more', 'Mortgaged property', 'Off-plan property', 'Still comparing properties'],
  },
  executive: {
    title: 'What is your current monthly salary range?',
    options: ['AED 30,000 or more', 'Below AED 30,000', 'Prefer to discuss with an advisor'],
  },
  talent: {
    title: 'Which professional category best fits you?',
    options: ['Medical or healthcare professional', 'Technology, science, or research', 'Arts, culture, or another specialty'],
  },
  family: {
    title: 'Who are you planning to include?',
    options: ['Spouse or children', 'Parents', 'Multiple family members'],
  },
};

export const VisaCalculatorModal: React.FC<VisaCalculatorModalProps> = ({ isOpen, onClose }) => {
  const { isRTL } = useLanguage();
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<CategoryKey>('investor');
  const [answer, setAnswer] = useState('');
  const [dependents, setDependents] = useState(1);
  const [isExpress, setIsExpress] = useState(false);
  const [currency, setCurrency] = useState<Currency>('AED');

  if (!isOpen) return null;

  const pathway = pathways.find((item) => item.key === category) ?? pathways[0];
  const totalAED = pathway.baseAED + dependents * 850 + (isExpress ? 1850 : 0);
  const total = Math.round(totalAED * rates[currency]);
  const symbol = symbols[currency];

  const requestQuote = () => {
    const message = [
      'Hello Golden Visa Dubai, I would like a detailed estimate.',
      `Pathway: ${pathway.title}`,
      `Applicant details: ${answer || 'Not provided'}`,
      `Dependents: ${dependents}`,
      `Processing: ${isExpress ? 'Priority' : 'Standard'}`,
      `Estimated total: ${symbol} ${total.toLocaleString()} ${currency}`,
    ].join('\n');
    window.open(`${contactInfo.whatsappHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const chooseCategory = (nextCategory: CategoryKey) => {
    setCategory(nextCategory);
    setAnswer('');
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      style={{ direction: isRTL ? 'rtl' : 'ltr' }}
    >
      <section role="dialog" aria-modal="true" aria-labelledby="calculator-title" className="flex max-h-[94dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#E8D5B5] bg-white text-slate-900 shadow-2xl dark:border-white/10 dark:bg-[#0D1117] dark:text-white">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-[#F6F4EE] px-5 py-4 dark:border-white/10 dark:bg-[#111827] sm:px-6">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#8C6D2D] dark:text-amber-400">Cost estimator</p>
            <h2 id="calculator-title" className="mt-1 text-lg font-extrabold sm:text-xl">Visa fee calculator</h2>
          </div>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="estimate-currency">Estimate currency</label>
            <select id="estimate-currency" value={currency} onChange={(event) => setCurrency(event.target.value as Currency)} className="h-10 rounded-lg border border-slate-300 bg-white px-2 text-xs font-bold dark:border-white/15 dark:bg-[#0D1117]">
              {(['AED', 'USD', 'EUR', 'GBP'] as Currency[]).map((value) => <option key={value}>{value}</option>)}
            </select>
            <button onClick={onClose} aria-label="Close calculator" className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-white/10"><X className="h-5 w-5" /></button>
          </div>
        </header>

        <div className="border-b border-slate-200 px-5 py-4 dark:border-white/10 sm:px-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className={step === 0 ? 'text-[#8C6D2D] dark:text-amber-300' : ''}>1. Pathway</span>
            <span className={step === 1 ? 'text-[#8C6D2D] dark:text-amber-300' : ''}>2. Applicant details</span>
            <span className={step === 2 ? 'text-[#8C6D2D] dark:text-amber-300' : ''}>3. Estimate</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <div className="h-full rounded-full bg-[#C5A059] transition-all duration-300" style={{ width: `${((step + 1) / 3) * 100}%` }} />
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {step === 0 && (
            <div>
              <h3 className="text-base font-bold">Which service are you interested in?</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Choose the pathway that is closest to your situation.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pathways.map(({ key, icon: Icon, title, subtitle }) => {
                  const selected = category === key;
                  return (
                    <button key={key} type="button" aria-pressed={selected} onClick={() => chooseCategory(key)} className={`flex min-h-28 items-start gap-3 rounded-xl border p-4 text-left transition-colors ${selected ? 'border-amber-500 bg-amber-50 ring-1 ring-amber-500 dark:bg-amber-500/10' : 'border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.07]'}`}>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${selected ? 'bg-amber-200 text-amber-950 dark:bg-amber-500/20 dark:text-amber-200' : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'}`}><Icon className="h-5 w-5" /></span>
                      <span className="min-w-0"><span className="block font-bold">{title}</span><span className="mt-1 block text-xs leading-5 text-slate-600 dark:text-slate-400">{subtitle}</span></span>
                      {selected && <Check className="ml-auto h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="text-base font-bold">A few details about your application</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">This helps us tailor the estimate to your selected pathway.</p>
              <fieldset className="mt-5">
                <legend className="text-sm font-semibold">{pathwayQuestions[category].title}</legend>
                <div className="mt-3 grid gap-2">
                  {pathwayQuestions[category].options.map((option) => (
                    <button key={option} type="button" aria-pressed={answer === option} onClick={() => setAnswer(option)} className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${answer === option ? 'border-amber-500 bg-amber-50 text-amber-950 dark:bg-amber-500/10 dark:text-amber-100' : 'border-slate-200 hover:border-amber-400 dark:border-white/10 dark:hover:border-amber-400/60'}`}>
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold" htmlFor="dependents-count">Number of dependents</label>
                  <div className="mt-2 flex items-center gap-3">
                    <input id="dependents-count" type="number" min="0" max="8" value={dependents} onChange={(event) => setDependents(Math.min(8, Math.max(0, Number(event.target.value))))} className="h-11 w-24 rounded-lg border border-slate-300 bg-white px-3 text-sm dark:border-white/15 dark:bg-white/5" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">Up to 8, estimate only</span>
                  </div>
                </div>
                <fieldset>
                  <legend className="text-sm font-semibold">Processing preference</legend>
                  <div className="mt-2 flex gap-2">
                    <button type="button" aria-pressed={!isExpress} onClick={() => setIsExpress(false)} className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold ${!isExpress ? 'border-slate-500 bg-slate-100 dark:bg-white/10' : 'border-slate-200 dark:border-white/10'}`}><Clock3 className="h-4 w-4" /> Standard</button>
                    <button type="button" aria-pressed={isExpress} onClick={() => setIsExpress(true)} className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-semibold ${isExpress ? 'border-[#C5A059] bg-[#F5F0E3] text-[#695324] dark:border-[#C5A059] dark:bg-[#C5A059]/10 dark:text-[#DFC47E]' : 'border-slate-200 dark:border-white/10'}`}><Zap className="h-4 w-4" /> Priority</button>
                  </div>
                </fieldset>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mx-auto max-w-lg">
              <div className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F0E3] text-[#8C6D2D] dark:bg-[#C5A059]/15 dark:text-[#DFC47E]"><CheckCircle2 className="h-6 w-6" /></span>
                <h3 className="mt-4 text-xl font-extrabold">Your estimated total</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Based on the answers you provided.</p>
              </div>
              <div className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 px-5 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex justify-between gap-4 py-4 text-sm"><span className="text-slate-600 dark:text-slate-300">{pathway.title}</span><span className="font-bold">{symbol} {Math.round(pathway.baseAED * rates[currency]).toLocaleString()}</span></div>
                <div className="flex justify-between gap-4 py-4 text-sm"><span className="text-slate-600 dark:text-slate-300">Dependents ({dependents})</span><span className="font-bold">{symbol} {Math.round(dependents * 850 * rates[currency]).toLocaleString()}</span></div>
                {isExpress && <div className="flex justify-between gap-4 py-4 text-sm"><span className="text-slate-600 dark:text-slate-300">Priority processing estimate</span><span className="font-bold">{symbol} {Math.round(1850 * rates[currency]).toLocaleString()}</span></div>}
                <div className="flex items-end justify-between gap-4 py-5"><span className="font-bold">Estimated total</span><span className="text-3xl font-black text-[#8C6D2D] dark:text-amber-300">{symbol} {total.toLocaleString()} <span className="text-sm">{currency}</span></span></div>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">This is a planning estimate, not an official fee quote. Final costs depend on eligibility, government fees, and your case requirements.</p>
            </div>
          )}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-[#F6F4EE] px-5 py-4 dark:border-white/10 dark:bg-[#111827] sm:px-6">
          <button type="button" disabled={step === 0} onClick={() => setStep((current) => Math.max(0, current - 1))} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-bold transition-colors hover:bg-white disabled:invisible dark:border-white/15 dark:hover:bg-white/5"><ArrowLeft className="h-4 w-4" /> Back</button>
          {step < 2 ? (
            <button type="button" onClick={() => setStep((current) => current + 1)} disabled={step === 1 && !answer} className="gold-btn inline-flex min-h-11 items-center gap-2 rounded-lg px-5 text-sm font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50">Continue <ArrowRight className="h-4 w-4" /></button>
          ) : (
            <a href={contactInfo.phoneHref} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-bold transition-colors hover:bg-white dark:border-white/15 dark:hover:bg-white/5">Call an advisor</a>
          )}
          {step === 2 && <button type="button" onClick={requestQuote} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#8C6D2D] px-4 text-sm font-bold text-white transition-colors hover:bg-[#735820]">Get WhatsApp quote <ArrowRight className="h-4 w-4" /></button>}
        </footer>
      </section>
    </div>
  );
};