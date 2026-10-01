"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';
import { 
  ChevronDown, MessageSquareQuote,
  HelpCircle, ArrowRight, ExternalLink
} from 'lucide-react';

interface FaqAndSocialProofProps {
  onOpenCalculator: () => void;
}

export const FaqAndSocialProof: React.FC<FaqAndSocialProofProps> = ({ onOpenCalculator }) => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        
        {/* Google Reviews */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-[#8C6D2D] dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Google Reviews</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Reviews from <span className="gold-gradient-text font-serif italic">Google</span>
            </h2>
            
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              View current customer feedback on our Google Business profile.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm dark:border-white/15 dark:bg-[#0E1320]">
            {process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL ? (
              <iframe
                title="Google customer reviews"
                src={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:px-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#1A73E8] dark:bg-blue-500/10">
                  <MessageSquareQuote className="h-6 w-6" />
                </div>
                <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Google reviews are shown on the business profile. Add a Google Reviews provider embed URL to display its live widget here.
                </p>
                <a href={contactInfo.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#1A73E8] px-5 text-sm font-bold text-white transition-colors hover:bg-[#155FC0]">
                  Open Google Reviews <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
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
                  className="rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#111827] overflow-hidden transition-all shadow-sm hover:border-[#C5A059]"
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
