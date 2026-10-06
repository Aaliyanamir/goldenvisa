"use client";

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';
import { 
  FileCheck, ShieldCheck, HeartPulse, 
  CreditCard, ArrowRight, Sparkles 
} from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: '01',
      title: t.roadmap.step1,
      desc: t.roadmap.step1Desc,
      icon: FileCheck,
      turnaround: 'Day 1: Pre-Approval Audit',
    },
    {
      num: '02',
      title: t.roadmap.step2,
      desc: t.roadmap.step2Desc,
      icon: ShieldCheck,
      turnaround: 'Day 2: ICP / GDRFA Nomination',
    },
    {
      num: '03',
      title: t.roadmap.step3,
      desc: t.roadmap.step3Desc,
      icon: HeartPulse,
      turnaround: 'Day 3: VIP Medical Screening',
    },
    {
      num: '04',
      title: t.roadmap.step4,
      desc: t.roadmap.step4Desc,
      icon: CreditCard,
      turnaround: 'Day 4-5: 10-Yr Emirates ID Delivery',
    },
  ];

  return (
    <section id="roadmap" className="border-y border-slate-200/80 bg-[#FAF9F6] px-4 py-16 transition-colors dark:border-white/10 dark:bg-[#0E1320] sm:px-6 lg:px-10">
      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto">
        
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[#8C6D2D] dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Frictionless 4-Stage Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            {t.roadmap.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Steps Cards */}
        <div className="roadmap-timeline">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <article
                key={index}
                className="roadmap-step group flex flex-col justify-between rounded-xl border border-slate-300 bg-white p-5 shadow-sm transition-all hover:border-[#C5A059] hover:shadow-lg dark:border-white/15 dark:bg-[#131A2A]"
              >
                <div>
                  <div className="roadmap-step-marker">
                    <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-4 border-[#FAF9F6] bg-[#8C6D2D] text-sm font-black text-white shadow-sm dark:border-[#0E1320] dark:bg-[#DFC47E] dark:text-[#171611]">
                      {step.num}
                    </span>
                  </div>

                  <div className="mb-3 inline-flex rounded-lg border border-amber-200 bg-amber-50 p-2 text-[#8C6D2D] transition-transform group-hover:scale-105 dark:border-amber-700/60 dark:bg-amber-950/70 dark:text-amber-300">
                    <IconComp className="h-4 w-4" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D2D] dark:text-amber-400 block mb-2">
                    {step.turnaround}
                  </span>

                  <h3 className="font-serif text-base font-bold leading-snug text-slate-900 dark:text-white">
                    {step.title.replace(/^\d+[.)]\s*/, '')}
                  </h3>

                  <p className="mt-2 text-xs font-normal leading-relaxed text-[#1E293B] dark:text-slate-300 sm:text-sm">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] font-semibold text-slate-500 dark:border-white/10 dark:text-slate-400">
                  <span>Guidance at every step</span>
                  <span className="text-[#8C6D2D] font-bold">Clear next steps</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Fast Track Callout */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-xl border border-[#E8D5B5] bg-white p-5 text-slate-900 shadow-md dark:border-amber-500/20 dark:bg-[#0F172A] dark:text-white sm:p-6 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-[#8C6D2D] dark:border-amber-500/30 dark:bg-amber-500/20 dark:text-[#D4AF37]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Need an expedited case evaluation within 24 hours?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">Our accredited government liaison files nominations with zero wait time.</p>
            </div>
          </div>
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Consult Senior Case Officer</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>

      </div>
    </section>
  );
};
