"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';
import { 
  X, ChevronRight, Calculator, MessageSquare,
  Users, Award, Building2, Heart, UserCheck, CreditCard,
  Briefcase, Landmark, FileCheck2, Globe2, FileText, Scale,
  HeartPulse, ShieldCheck, Umbrella, BookOpen, Info, Headphones
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
  onNavigateToBlog?: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ 
  isOpen, 
  onClose, 
  onOpenCalculator,
  onNavigateToBlog 
}) => {
  const { isRTL } = useLanguage();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('residency');

  if (!isOpen) return null;

  const serviceCategories = [
    {
      id: 'residency',
      title: 'Residency & Visas',
      icon: Users,
      services: [
        { title: 'Golden Visa', href: '/golden-visa', icon: Award },
        { title: 'Family Visa', href: '/family-visa', icon: Users },
        { title: 'Newborn Visa', href: '/newborn-visa', icon: Heart },
        { title: 'Maid Visa', href: '/maid-visa', icon: UserCheck },
        { title: 'Emirates ID', href: '/emirates-id', icon: CreditCard },
      ],
    },
    {
      id: 'property',
      title: 'Property Services',
      icon: Building2,
      services: [
        { title: 'Property Visa', href: '/property-visa', icon: Building2 },
        { title: 'DLD Trustee Services', href: '/dld-trustee-services', icon: Landmark },
        { title: 'Property Revaluation', href: '/property-revaluation', icon: Scale },
      ],
    },
    {
      id: 'documents',
      title: 'Documents & PRO',
      icon: FileText,
      services: [
        { title: 'PRO Services', href: '/pro-services', icon: Briefcase },
        { title: 'Amer Center', href: '/amer-center', icon: Landmark },
        { title: 'Attestation', href: '/attestation', icon: FileCheck2 },
        { title: 'Translation', href: '/translation', icon: Globe2 },
        { title: 'Power of Attorney', href: '/power-of-attorney', icon: FileText },
        { title: 'Wills & Last Testament', href: '/wills-last-testament', icon: Scale },
      ],
    },
    {
      id: 'compliance',
      title: 'Checks & Protection',
      icon: ShieldCheck,
      services: [
        { title: 'Medical & EID', href: '/medical-eid', icon: HeartPulse },
        { title: 'Visa Validity Checker', href: '/visa-validity-checker', icon: ShieldCheck },
        { title: 'ILOE Insurance', href: '/iloe-insurance', icon: Umbrella },
      ],
    },
  ];

  const selectedCategory = serviceCategories.find((category) => category.id === activeCategory) ?? serviceCategories[0];

  // 4. Company Links
  const companyLinks = [
    {
      title: "Articles",
      icon: BookOpen,
      action: () => {
        onClose();
        if (onNavigateToBlog) onNavigateToBlog();
      },
    },
    {
      title: "About Us",
      icon: Info,
      action: () => {
        onClose();
        router.push('/about');
      },
    },
    {
      title: "Career",
      icon: Briefcase,
      action: () => {
        onClose();
        router.push('/career');
      },
    },
    {
      title: "Contact Us",
      icon: Headphones,
      action: () => {
        onClose();
        router.push('/contact-us');
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div 
        className="mega-menu-dialog relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-white/10 shadow-2xl text-slate-900 dark:text-white overflow-hidden"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        
        {/* Header */}
        <div className="px-6 py-4 sm:py-5 border-b border-slate-100 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#111827] shrink-0">
          <div className="flex items-center gap-3">
            <Image src="/assets/images/Golden Visa Dubai.png" alt="Golden Visa Dubai" width={1812} height={477} sizes="(min-width: 640px) 175px, 155px" className="h-auto w-[155px] sm:w-[175px] object-contain" />
            <div>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                All services in one place
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-6">

          {/* Service categories */}
          <section aria-label="Browse services by category">
            <div className="flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Service categories">
              {serviceCategories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    id={`service-category-${category.id}`}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-colors ${isActive ? 'border-amber-400 bg-amber-50 text-[#765719] dark:border-amber-400/50 dark:bg-amber-500/10 dark:text-amber-300' : 'border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:text-slate-900 dark:border-white/10 dark:bg-[#0E1320] dark:text-slate-300 dark:hover:text-white'}`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.title}
                  </button>
                );
              })}
            </div>

            <div
              id="service-category-panel"
              role="tabpanel"
              aria-labelledby={`service-category-${selectedCategory.id}`}
              className="mt-4"
            >
              <h3 className="mb-3 text-sm font-bold text-slate-900 dark:text-white">{selectedCategory.title}</h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {selectedCategory.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={onClose}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200/70 dark:border-white/10 p-3 text-left transition-colors hover:border-amber-300 hover:bg-amber-50/40 dark:hover:bg-amber-500/5"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors group-hover:bg-amber-100 group-hover:text-[#8C6D2D]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white sm:text-sm">{service.title}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-amber-600" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 3. COMPANY SECTION (Reference Matched) */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block shrink-0" />
              <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">Company</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {companyLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-200/70 dark:border-white/10 hover:border-amber-300 hover:bg-amber-50/30 dark:hover:bg-amber-500/5 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-amber-100/70 group-hover:text-[#8C6D2D] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white">
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4. STICKY MODAL FOOTER: Dual Action Buttons (Reference Matched) */}
        <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md shrink-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            
            {/* Visa Calculator */}
            <button
              onClick={() => {
                onClose();
                onOpenCalculator();
              }}
              className="w-full py-3.5 px-5 rounded-xl gold-btn text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Calculator className="w-4 h-4 shrink-0 text-white" />
              <span>Visa Calculator</span>
            </button>

            {/* Right Button: Green WhatsApp Direct Contact */}
            <a
              href={`${contactInfo.whatsappHref}?text=Hello%20Golden%20Visa%20Dubai%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-center"
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-white" />
              <span>WhatsApp</span>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};
