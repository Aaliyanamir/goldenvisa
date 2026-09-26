"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Star, ChevronDown, MessageSquareQuote, 
  HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';

interface FaqAndSocialProofProps {
  onOpenCalculator: () => void;
}

export const FaqAndSocialProof: React.FC<FaqAndSocialProofProps> = ({ onOpenCalculator }) => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Managing Director, Global FinTech Group",
      location: "London & Dubai",
      visaType: "Executive Leadership 10-Yr Visa",
      verified: true,
      text: "Flawless concierge execution. From title deed verification at Dubai Land Department to holding our physical 10-year Emirates IDs took exactly 4 business days.",
      rating: 5,
      date: "February 2026",
    },
    {
      name: "Elena Rostova",
      role: "Angel Investor & Technology Founder",
      location: "Dubai Marina",
      visaType: "Real Estate Investor 10-Yr Visa",
      verified: true,
      text: "Secured 10-Year Golden Visas for myself and my entire family including elderly parents. The VIP medical screening was completed in a private lounge with zero waiting.",
      rating: 5,
      date: "January 2026",
    },
    {
      name: "Dr. Tariq Al-Mansoor",
      role: "Chief Medical Specialist & Surgeon",
      location: "Abu Dhabi / Dubai",
      visaType: "Specialized Talent & Health 10-Yr Visa",
      verified: true,
      text: "As a specialized consultant, ministerial council endorsement was obtained seamlessly through their verified sovereign portal. True professionalism.",
      rating: 5,
      date: "March 2026",
    },
    {
      name: "Jean-Philippe Moreau",
      role: "Founder, Capital Advisory Europe",
      location: "Zurich & Dubai DIFC",
      visaType: "Real Estate Investor (AED 5M+)",
      verified: true,
      text: "The speed and discretion were unmatched. They coordinated with the developer and Dubai Land Department without me having to stand in a single queue.",
      rating: 5,
      date: "March 2026",
    },
    {
      name: "Amina Al-Husseini",
      role: "Group Strategy Director",
      location: "Downtown Dubai",
      visaType: "Executive C-Suite Pathway",
      verified: true,
      text: "Their team managed my MOHRE contract approval, priority VIP biometrics, and home delivery of our Emirates IDs within 72 hours. Outstanding service.",
      rating: 5,
      date: "January 2026",
    },
    {
      name: "Kenji Sato",
      role: "AI Research Scientist & Fellow",
      location: "Dubai Silicon Oasis",
      visaType: "AI & Innovation Scientist Visa",
      verified: true,
      text: "Secured council recommendation and full 10-year residency in record time. Highly competent team with deep knowledge of UAE government protocols.",
      rating: 5,
      date: "February 2026",
    },
  ];

  const faqs = [
    {
      q: "What is the exact property investment requirement for the 10-Year Golden Visa in 2026?",
      a: "The property value recorded on your official Dubai Land Department (DLD) Title Deed or initial sales registration (Oqood) must be at least AED 2,000,000. Mortgaged properties and off-plan properties are fully accepted, provided an official NOC letter is obtained from the financing institution.",
    },
    {
      q: "Can I sponsor my spouse, children, and parents under the Golden Visa?",
      a: "Yes. Golden Visa holders enjoy unlimited sponsorship rights for their spouse, sons up to age 25, unmarried daughters of any age, and dependent parents with verified family registry paperwork.",
    },
    {
      q: "Is there a requirement to visit or reside in the UAE every 6 months?",
      a: "No. The 10-Year UAE Golden Visa has no stay requirement. Unlike conventional 2-year residence visas that lapse if you stay abroad for more than 180 consecutive days, the Golden Visa remains active throughout its entire 10-year term.",
    },
    {
      q: "How does the executive salary criteria work for C-Suite executives?",
      a: "Senior executives holding an accredited bachelor's degree and an active MOHRE employment contract showing a monthly verified salary of AED 30,000 or above qualify directly for the Executive Leadership Golden Visa.",
    },
    {
      q: "What is the difference between Standard Government processing and VIP Fast-Track?",
      a: "Standard government processing typically takes 7 to 10 working days. With our VIP Fast-Track service, nomination submission, private lounge medical screening, priority biometric entry, and physical Emirates ID delivery are concluded within 48 to 72 hours.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#07090F] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Verified Reviews Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-[#8C6D2D] dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Verified Client Testimonials & Endorsements</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Our Elite <span className="gold-gradient-text font-serif italic">Clients Say</span>
            </h2>
            
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Read authentic feedback from high-net-worth investors, multinational executives, and families who completed their UAE sovereign transition with our VIP desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#FAF9F6] dark:bg-[#0E1320] border border-slate-200 dark:border-white/10 hover:border-[#C5A059] dark:hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-[#C5A059]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">{item.date}</span>
                  </div>

                  <p className="text-sm text-[#1E293B] dark:text-slate-300 leading-relaxed italic mb-6">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span>{item.name}</span>
                        {item.verified && (
                          <span title="Verified Client">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          </span>
                        )}
                      </h4>
                      <div className="text-xs text-amber-900 dark:text-amber-400 font-extrabold">{item.role}</div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">{item.location}</div>
                    </div>
                    <span className="px-2 py-1 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-700/30 text-[10px] font-extrabold text-right max-w-[110px] leading-tight">
                      {item.visaType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-[#8C6D2D] dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Official Regulatory Guidance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.faq.title}
            </h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1320] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#1E293B] dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/10 pt-3 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Calculator Callout Banner - with mobile bottom clearance */}
          <div className="mt-12 mb-10 lg:mb-0 text-center">
            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl gold-btn text-xs font-extrabold uppercase tracking-wider cursor-pointer shadow-md"
            >
              <span>Calculate Government Fees For Your Case</span>
              <ArrowRight className="w-4 h-4 text-slate-950 shrink-0" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
