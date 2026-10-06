"use client";

import React from 'react';
import { Calculator, ArrowRight, ClipboardCheck, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  onOpenEligibility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onOpenMegaMenu, onOpenEligibility }) => {
  return (
    <section
      data-light-theme-exempt
      className="relative w-full flex items-center justify-center overflow-hidden border-b border-[#E8D5B5] bg-[#F8F6F0] text-slate-900 transition-all"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_78%_28%,rgba(197,160,89,0.18),transparent_36%),linear-gradient(120deg,#fffdf8_0%,#f7f3e9_56%,#eeeadf_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-30 [background-image:linear-gradient(rgba(140,109,45,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(140,109,45,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(110deg,transparent,black)]"
      />

      {/* ─── Hero Main Content Grid ─── */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'calc(var(--site-header-offset, 80px) + 1.25rem) 1.25rem 1.75rem',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* LEFT: Typography & Strategic Headline */}
          <div className="hero-copy-enter lg:col-span-7 flex flex-col items-start text-left relative">

            {/* Subtle Golden/Amber Radial Background Glow behind Typography */}
            <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-[300px] w-[300px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/12 via-amber-500/5 to-transparent blur-3xl sm:h-[420px] sm:w-[480px]" />

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-white/85 px-3 py-1 backdrop-blur-md shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#8C6D2D]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#765719] sm:text-xs">
                Licensed UAE Document Clearing & Private Visa Facilitation
              </p>
            </div>

            <h1 className="font-display text-2xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-4xl xl:text-[3.2rem] 2xl:text-[3.6rem]">
              UAE Long-Term Residency
              <br />
              <span className="gold-gradient-text font-display font-black">
                10-Year Golden Visa
              </span>
            </h1>

            <p className="mt-3.5 max-w-xl text-xs font-normal leading-relaxed text-slate-600 sm:text-sm lg:text-[0.95rem]">
              We assist property investors, senior executives, entrepreneurs, and families with UAE residency applications. Get transparent government fee estimates, pre-approval eligibility checks, and step-by-step guidance through official GDRFA & DLD channels.
            </p>

            {/* Direct Paired CTAs */}
            <div className="mt-5 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOpenCalculator}
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl gold-btn px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider shadow-md shadow-amber-500/20 transition-all hover:scale-[1.01] sm:w-auto"
              >
                <Calculator className="h-4 w-4 shrink-0 text-slate-950" />
                <span>Calculate Fee Estimate</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-950 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onOpenEligibility}
                className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-amber-600/40 bg-amber-500/10 hover:bg-amber-500/20 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#765719] transition-all sm:w-auto shadow-2xs"
              >
                <ClipboardCheck className="h-4 w-4 shrink-0 text-[#765719]" />
                <span>Check Eligibility</span>
              </button>

              <button
                type="button"
                onClick={onOpenMegaMenu}
                className="flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-[#C5A059]/60 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:bg-white sm:w-auto"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#765719]" />
              </button>
            </div>

            {/* Key Trust Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-4 pt-4 border-t border-slate-300/60 w-full max-w-sm sm:max-w-lg">
              <div>
                <div className="text-base font-black text-slate-950 sm:text-lg lg:text-xl">100% Upfront</div>
                <div className="mt-0.5 text-[10px] font-medium leading-tight text-slate-600 sm:text-xs">Clear government & fee breakdown</div>
              </div>
              <div>
                <div className="text-base font-black text-[#8C6D2D] sm:text-lg lg:text-xl">Official</div>
                <div className="mt-0.5 text-[10px] font-medium leading-tight text-slate-600 sm:text-xs">GDRFA, ICP & DLD channels</div>
              </div>
              <div>
                <div className="text-base font-black text-[#8C6D2D] sm:text-lg lg:text-xl">Guided</div>
                <div className="mt-0.5 text-[10px] font-medium leading-tight text-slate-600 sm:text-xs">Case officer to Emirates ID</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Compact guided cost estimator entry point */}
          <div className="hero-panel-enter lg:col-span-5 w-full">
            <aside className="overflow-hidden rounded-2xl border border-amber-200/90 bg-white/95 shadow-[0_20px_60px_-25px_rgba(80,61,25,0.18)] backdrop-blur-xl">
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600" />
              <div className="p-4 sm:p-5 lg:p-6">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#8C6D2D]">
                  <Sparkles className="h-3.5 w-3.5 text-amber-600" /> Instant Cost Estimator
                </span>
                <h2 className="mt-2 text-xl font-extrabold text-slate-950 sm:text-2xl">Build your visa estimate</h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-snug text-slate-600">
                  Select your residency pathway and family profile to calculate an instant fee breakdown.
                </p>
                <ol className="mt-4 space-y-2.5">
                  {[
                    'Select a residency or family pathway',
                    'Enter your property value or monthly salary',
                    'Review your itemized total and government fee breakdown',
                  ].map((item, index) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-300 bg-amber-50 text-[10px] font-black text-[#765719]">0{index + 1}</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ol>
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-xl gold-btn px-4 text-xs font-extrabold text-slate-950 shadow-md cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Calculator className="h-4 w-4" /> Calculate Fee Estimate <ArrowRight className="h-4 w-4" />
                </button>
                <div className="mt-3.5 flex items-center gap-1.5 border-t border-slate-200 pt-3 text-[11px] text-slate-600">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#8C6D2D]" />
                  <span className="truncate">Independent facilitation. Official fees itemized before filing.</span>
                  <UserCheck className="ml-auto h-3.5 w-3.5 shrink-0 text-[#8C6D2D]" />
                </div>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </section>
  );
};


