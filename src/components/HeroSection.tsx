"use client";

import React from 'react';
import { Calculator, ArrowRight, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onOpenMegaMenu }) => {
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
          <div className="hero-copy-enter lg:col-span-7 flex flex-col items-start text-left relative">

            {/* Subtle Golden/Amber Radial Background Glow behind Typography */}
            <div className="absolute -top-14 -left-14 w-[360px] sm:w-[540px] xl:w-[680px] h-[360px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/22 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-amber-400/30 backdrop-blur-md mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-amber-300 uppercase">
                Dubai, United Arab Emirates — Authorised Legal Facilitation
              </p>
            </div>

            <h1 className="font-display text-[2.4rem] sm:text-[3.2rem] md:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] 2xl:text-[4.6rem] text-white tracking-tight leading-[1.08] font-bold drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              UAE Long-Term Residency
              <br />
              <span className="gold-gradient-text italic font-display font-extrabold drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
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
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#E0BF77] tabular-nums drop-shadow-md">48–72h</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Fast-Track Available</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Guided cost estimator entry point */}
          <div className="hero-panel-enter lg:col-span-5 w-full">
            <aside className="overflow-hidden rounded-2xl border border-amber-200/30 bg-slate-950/80 shadow-[0_28px_80px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="h-1 w-full bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600" />
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                  <Sparkles className="h-4 w-4" /> Cost planning
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Build your visa estimate</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Answer a few questions about your service and applicant profile to see a planning estimate.
                </p>
                <ol className="mt-7 space-y-4">
                  {[
                    'Choose a residency or family pathway',
                    'Share the details relevant to your case',
                    'Review your estimated total and fee breakdown',
                  ].map((item, index) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-100">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10 text-xs font-black text-amber-200">0{index + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg gold-btn px-5 text-sm font-extrabold text-slate-950 shadow-lg"
                >
                  <Calculator className="h-4 w-4" /> Start cost estimate <ArrowRight className="h-4 w-4" />
                </button>
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#E0BF77]" />
                  <span>Planning estimate only. Final fees depend on your case.</span>
                  <UserCheck className="ml-auto h-4 w-4 shrink-0 text-amber-300" />
                </div>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </section>
  );
};
