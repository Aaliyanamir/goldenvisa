"use client";

import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  X, ChevronRight, Award, Shield, FileCheck2, Globe2, 
  Briefcase, Landmark, Stamp, Scale, BookOpen, Layers, 
  Send
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onOpenCalculator }) => {
  const { isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<'visas' | 'corporate' | 'legal'>('visas');

  if (!isOpen) return null;

  const servicesData = {
    visas: [
      {
        title: "10-Year UAE Golden Visa",
        tag: "High Priority",
        desc: "For Real Estate Investors (AED 2M+), Senior Executives, Doctors, AI Specialists & Talents.",
        icon: Award,
        price: "From AED 3,864",
      },
      {
        title: "Family & Dependent Residency",
        tag: "Online Process",
        desc: "Sponsor spouse, children (unlimited age for daughters), and parents under official GDRFA files.",
        icon: Shield,
        price: "From AED 1,103",
      },
      {
        title: "Property Investor Visa",
        tag: "Instant DLD",
        desc: "Multi-year renewable residence permit directly integrated with Dubai Land Department deeds.",
        icon: Landmark,
        price: "From AED 6,311",
      },
      {
        title: "Green Visa & Freelance Permit",
        tag: "Self-Sponsored",
        desc: "5-year self-residency for skilled professionals, freelancers, and independent contractors.",
        icon: Briefcase,
        price: "From AED 2,280",
      },
      {
        title: "Newborn Child Residence",
        tag: "Fast Track",
        desc: "Complete birth registration, passport endorsement, and UAE Emirates ID within 30 days.",
        icon: FileCheck2,
        price: "From AED 1,029",
      },
    ],
    corporate: [
      {
        title: "Dubai Mainland Company Formation",
        tag: "100% Foreign Ownership",
        desc: "Establish commercial LLC with official DED licenses, instant bank account pre-clearance.",
        icon: Globe2,
        price: "From AED 12,500",
      },
      {
        title: "Free Zone Business Setup",
        tag: "0% Corporate Tax",
        desc: "IFZA, Meydan, DMCC & DAFZA turnkey packages with co-working desks and zero capital deposit.",
        icon: Layers,
        price: "From AED 9,900",
      },
      {
        title: "Corporate Bank Account Opening",
        tag: "Guaranteed Assistance",
        desc: "Direct liaison with Emirates NBD, Mashreq Neo, and Wio Bank for immediate activation.",
        icon: Landmark,
        price: "Concierge Assistance",
      },
      {
        title: "Trademark & Intellectual Property",
        tag: "Ministry of Economy",
        desc: "Complete brand registration, patent filing, and sovereign IP protection across GCC nations.",
        icon: Stamp,
        price: "From AED 4,500",
      },
    ],
    legal: [
      {
        title: "Dubai Land Department (DLD) Services",
        tag: "Official Partner",
        desc: "Title deed clearance, valuation certificates, and mortgage NOC registrations.",
        icon: Landmark,
        price: "VIP Direct Submission",
      },
      {
        title: "Embassy & MOFA Attestation",
        tag: "Global Network",
        desc: "Certificates, degrees, power of attorney, and commercial contracts attested within 48h.",
        icon: Stamp,
        price: "From AED 650",
      },
      {
        title: "Ministry-Certified Legal Translation",
        tag: "9+ Languages",
        desc: "MOJ certified translation for court documents, contracts, medical reports, and diplomas.",
        icon: BookOpen,
        price: "From AED 120/page",
      },
      {
        title: "Notary Public & Sovereign PRO",
        tag: "Dedicated Officer",
        desc: "Private notary liaison, biometric representation, and expedited VIP typing center services.",
        icon: Scale,
        price: "Executive Desk",
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-900 overflow-hidden"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-[#FAF9F6]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C5A059] animate-ping"></span>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900">Services Portfolio & Official Directory</h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Explore Dubai sovereign immigration, business formation, and legal services.</p>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 pt-3">
          {[
            { id: 'visas', label: '1. Residency & Visas' },
            { id: 'corporate', label: '2. Corporate & Business' },
            { id: 'legal', label: '3. Government & Legal PRO' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#C5A059] text-[#8C6D2D] bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Services Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicesData[activeTab].map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-white hover:bg-[#FAF9F6] border border-slate-200 hover:border-[#C5A059] transition-all duration-200 shadow-xs hover:shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059] border border-amber-100 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#8C6D2D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#8C6D2D]">{service.price}</span>
                    <button 
                      onClick={() => {
                        onClose();
                        onOpenCalculator();
                      }}
                      className="text-xs text-slate-600 hover:text-slate-900 flex items-center gap-1 font-bold group/btn"
                    >
                      <span>Calculate Fees</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Callout */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-[#FAF9F6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Need urgent assistance with GDRFA, ICP, or DLD? Connect with an Executive Case Manager.
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenCalculator();
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl gold-btn font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Instant Cost Calculator</span>
            </button>
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
