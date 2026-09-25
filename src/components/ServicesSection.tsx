"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Award, Shield, FileCheck2, Landmark, 
  ArrowUpRight, CheckCircle2, ChevronRight,
  Stamp, BookOpen, Scale, Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenCalculator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCalculator }) => {
  const { t } = useLanguage();
  // Category 2 (Corporate) removed per client instructions. Only residency & legal PRO remain.
  const [activeCategory, setActiveCategory] = useState<'residency' | 'legal'>('residency');

  const services = {
    residency: [
      {
        id: 'prop-inv',
        title: 'Real Estate Investor Golden Visa',
        validity: '10 Years Renewable',
        minVal: 'AED 2,000,000 Property Value',
        desc: 'Direct liaison with the Dubai Land Department (DLD). Off-plan and mortgaged properties eligible with bank NOC. Includes 100% ownership rights with no local sponsor required.',
        benefits: ['0% Personal Income Tax in UAE', 'Sponsor Family, Housemaid & Driver', 'Unrestricted Travel (No 6-month stay rule)'],
        badge: 'Top Investor Choice',
      },
      {
        id: 'exec-dir',
        title: 'Executive & C-Suite Leadership Visa',
        validity: '10 Years Renewable',
        minVal: 'AED 30,000+ Verified Monthly Salary',
        desc: 'Designed for Managing Directors, CEOs, and corporate executives with attested degrees and MOHRE employment contracts.',
        benefits: ['Direct ICP High-Priority Approval', 'Fast-Track Family Sponsoring Included', 'Priority UAE Bank Account Activation'],
        badge: 'Corporate Leaders',
      },
      {
        id: 'talents',
        title: 'Specialized Talents, Doctors & Scientists',
        validity: '10 Years Renewable',
        minVal: 'Ministry & Council Endorsement',
        desc: 'Accredited category for licensed medical doctors, AI innovators, data scientists, and creative cultural leaders recognized by UAE ministries.',
        benefits: ['Ministerial fast-lane nomination', 'Comprehensive family coverage', 'Subsidized premier health tier'],
        badge: 'Innovators & Doctors',
      },
      {
        id: 'family-dep',
        title: 'Family & Dependent Visa Sponsorship',
        validity: '10 Years (Synced to Principal)',
        minVal: 'Spouse, Children & Parents',
        desc: 'Ensure total long-term stability for your spouse, sons up to age 25, unmarried daughters of any age, and dependent parents.',
        benefits: ['Permanent residency status', 'Local school and university admission', 'Immediate Emirates ID issuance'],
        badge: 'Full Family Security',
      },
    ],
    legal: [
      {
        id: 'dld',
        title: 'Dubai Land Department (DLD) VIP Desk',
        validity: 'Express Clearance',
        minVal: 'Official Deeds & NOCs',
        desc: 'Full assistance with title deed attestations, electronic NOC issuances, mortgage registrations, and property valuation certificates.',
        benefits: ['Zero waiting in public queues', 'Instant official deed verification', 'Accredited land valuation submissions'],
        badge: 'Official DLD Direct',
      },
      {
        id: 'attestation',
        title: 'Embassy & MOFA Global Document Attestation',
        validity: 'Certified Sovereign Seal',
        minVal: 'Worldwide Coverage (120+ Countries)',
        desc: 'Complete legalization for degrees, marriage certificates, birth certificates, and board resolutions with the Ministry of Foreign Affairs.',
        benefits: ['Doorstep collection and delivery', 'Express 48-hour turnarounds', '100% acceptance by UAE authorities'],
        badge: 'MOFA Guaranteed',
      },
      {
        id: 'translation',
        title: 'Ministry-Certified Legal Translation',
        validity: 'Ministry of Justice Certified',
        minVal: 'Official Court Sworn Translators',
        desc: 'Certified translation from English, Russian, German, French, Turkish, and Chinese into legal Arabic recognized in all UAE courts and ministries.',
        benefits: ['Certified by UAE Ministry of Justice', 'Same-day turnaround for urgent requests', 'Flawless legal terminology'],
        badge: 'Court Approved',
      },
      {
        id: 'pro',
        title: 'Dedicated Corporate PRO & VIP Concierge',
        validity: 'Executive Retainer',
        minVal: 'Personal Government Officer',
        desc: 'Comprehensive representation across Amer, Tasheel, Tawjeeh, GDRFA, and Dubai Courts without you needing to visit government offices.',
        benefits: ['Private lounge medical escort', 'Biometric fast-track facilitation', 'Physical Emirates ID hand delivery'],
        badge: 'VIP Concierge',
      },
    ],
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-10 bg-[#F8F9FA] dark:bg-[#07090F] border-t border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-[1560px] 2xl:max-w-[1720px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[#8C6D2D] dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Official Government Facilitation Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            {t.servicesSection.title}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.servicesSection.subtitle}
          </p>

          {/* Clean Re-Aligned Segmented Control Tabs (Category 1 & Category 3 Only) */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#0E1320] border border-slate-200 dark:border-slate-800 shadow-sm">
            {[
              { id: 'residency', label: '1. Residency & Long-Term Visas' },
              { id: 'legal', label: '2. Government & Legal PRO' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-6 sm:px-10 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-amber-50 to-amber-100/60 dark:from-amber-950/80 dark:to-amber-900/60 text-[#8C6D2D] dark:text-amber-300 border border-amber-200 dark:border-amber-700 shadow-xs font-extrabold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Service Cards Grid: Seamlessly re-aligned across 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services[activeCategory].map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-9 rounded-3xl white-gold-card dark:bg-[#0E1320] dark:border-white/10 dark:text-white flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-[#8C6D2D] dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    {service.badge}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-400 font-semibold">
                    {service.validity}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-[1.65rem] font-bold text-slate-900 dark:text-white leading-tight mt-1 font-serif group-hover:text-[#8C6D2D] dark:group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                
                <div className="mt-2 text-xs font-extrabold text-[#C5A059] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{service.minVal}</span>
                </div>

                <p className="mt-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Key Benefits */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100 dark:border-white/10">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Triggers */}
              <div className="mt-8 pt-5 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={onOpenCalculator}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{t.servicesSection.calculateFees}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
                </button>

                <a
                  href={`https://wa.me/971503853305?text=${encodeURIComponent(`Hello, I would like to inquire about the ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-xs text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold flex items-center justify-center gap-1 transition-colors py-2"
                >
                  <span>Inquire via WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
