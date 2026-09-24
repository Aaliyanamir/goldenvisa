"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Award, Shield, FileCheck2, Landmark, 
  Briefcase, ArrowUpRight, CheckCircle2, ChevronRight,
  TrendingUp, Building2
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenCalculator: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCalculator }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'residency' | 'corporate' | 'legal'>('residency');

  const services = {
    residency: [
      {
        id: 'prop-inv',
        title: 'Real Estate Investor Golden Visa',
        validity: '10 Years Renewable',
        minVal: 'AED 2,000,000 Property Value',
        desc: 'Direct liaison with the Dubai Land Department (DLD). Off-plan and mortgaged properties eligible with bank NOC. Includes 100% ownership rights with no sponsor required.',
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
    corporate: [
      {
        id: 'mainland',
        title: 'Dubai Mainland LLC Incorporation',
        validity: 'Commercial License',
        minVal: '100% Foreign Ownership Permitted',
        desc: 'Form your enterprise directly under the Dubai Department of Economy and Tourism (DET) without requiring a local Emirati partner.',
        benefits: ['Trade anywhere in UAE and internationally', 'Bid for government contracts', 'Unlimited commercial office locations'],
        badge: '100% Foreign Owned',
      },
      {
        id: 'freezone',
        title: 'Dubai Free Zone Company Setup',
        validity: 'Freezone License',
        minVal: '0% Corporate & Personal Tax Hubs',
        desc: 'Cost-effective incorporation in IFZA, Meydan, DMCC, or DAFZA with flexi-desk facilities, virtual offices, and multi-year options.',
        benefits: ['100% capital and profit repatriation', 'No customs duties on imports/exports', 'Digital license issued within 48-72 hours'],
        badge: 'Tax Free Hub',
      },
      {
        id: 'corp-bank',
        title: 'VIP Corporate Bank Account Assistance',
        validity: 'Multi-Currency',
        minVal: 'Leading UAE Tier-1 Banks',
        desc: 'Guaranteed compliance file preparation and executive presentation to Emirates NBD, Mashreq, and First Abu Dhabi Bank (FAB).',
        benefits: ['Dedicated VIP Relationship Manager', 'Multi-currency accounts (AED, USD, EUR, GBP)', 'Swift international wire clearance'],
        badge: 'Tier-1 Banking',
      },
      {
        id: 'trademark',
        title: 'Trademark & Sovereign IP Registration',
        validity: '10 Years Legal Protection',
        minVal: 'Ministry of Economy Clearance',
        desc: 'Register and secure your brand logos, trademarks, and intellectual property across the UAE and GCC legal jurisdictions.',
        benefits: ['Legal enforcement against infringement', 'Official government gazette registration', 'GCC expansion coverage'],
        badge: 'Asset Protection',
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#8C6D2D] text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Comprehensive Solutions Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.servicesSection.title}
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.servicesSection.subtitle}
          </p>

          {/* Clean Segmented Control Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            {[
              { id: 'residency', label: t.servicesSection.residencyTab },
              { id: 'corporate', label: t.servicesSection.corporateTab },
              { id: 'legal', label: t.servicesSection.legalTab },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-extrabold text-[#8C6D2D]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services[activeCategory].map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl white-gold-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-[#8C6D2D] border border-amber-200">
                    {service.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    {service.validity}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                
                <div className="mt-1.5 text-xs font-bold text-[#C5A059]">
                  {service.minVal}
                </div>

                <p className="mt-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Key Benefits */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-100">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenCalculator}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>{t.servicesSection.calculateFees}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>

                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-600 hover:text-emerald-700 font-semibold flex items-center gap-1 transition-colors"
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
