"use client";

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
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
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#8C6D2D] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Frictionless 4-Stage Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.roadmap.title}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#C5A059] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#C5A059]/40 font-mono">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059] border border-amber-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D2D] block mb-2">
                    {step.turnaround}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400">
                  <span>Fast-Track Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Track Callout Box in Gold & Dark Navy */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0F172A] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-500/20 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="p-3.5 rounded-xl bg-amber-500/20 text-[#D4AF37] border border-amber-500/30">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Need an expedited case evaluation within 24 hours?</h4>
              <p className="text-xs text-slate-300 mt-1">Our accredited government liaison files nominations with zero wait time.</p>
            </div>
          </div>
          <a
            href="https://wa.me/971500000000"
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
