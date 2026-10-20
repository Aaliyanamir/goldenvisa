'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { homepageContent } from '@/lib/homepageContent';
import { siteText } from '@/lib/siteCopy';
import { localizedPath } from '@/lib/locales';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCheck, faChevronDown, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

interface ServicesSectionProps {
  onOpenCalculator: () => void;
}

export const ServicesSection = ({ onOpenCalculator }: ServicesSectionProps) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'residency' | 'legal'>('residency');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const localizedServices = (homepageContent[language] || homepageContent.EN).services;

  return (
    <section id="services" data-scroll-reveal className="bg-[#F9F9F8] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8A6A12]">
              <span className="h-px w-8 bg-[#B8860B]" /> {siteText(language, 'servicesSectionSupport')}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-[#1F1F1F] sm:text-4xl lg:text-5xl">
              {t.servicesSection.title || 'Comprehensive UAE Corporate & Visa Services'}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#686868] sm:text-base">
              {t.servicesSection.subtitle}
            </p>
          </div>
          <div className="inline-flex w-fit rounded-full border border-[#E2E0D9] bg-white p-1" role="tablist" aria-label={siteText(language, 'a11yServiceCategories')}>
            {([
              { id: 'residency', label: siteText(language, 'servicesTabResidency') },
              { id: 'legal', label: siteText(language, 'servicesTabLegal') },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setExpandedService(null);
                }}
                className={`min-h-10 rounded-full px-4 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                  activeCategory === tab.id
                    ? 'bg-[#1F1F1F] text-white'
                    : 'text-[#66645F] hover:text-[#1F1F1F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {localizedServices[activeCategory].map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <article key={service.id} data-scroll-reveal className="group overflow-hidden rounded-[22px] border border-[#E5E3DD] bg-white transition duration-300 hover:border-[#D4AF37]/70 hover:shadow-[0_24px_60px_-38px_rgba(31,31,31,.45)]">
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.14em] text-white backdrop-blur">
                    {service.badge}
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 text-xs font-medium text-white/80">{service.validity}</span>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#1F1F1F] sm:text-2xl">{service.title}</h3>
                      <p className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-[#8A6A12] sm:text-sm">
                        <FontAwesomeIcon icon={faWandMagicSparkles} className="h-4 w-4" /> {service.minVal}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`${service.id}-details`}
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7E4DC] text-[#4E4C46] transition hover:border-[#D4AF37] hover:text-[#8A6A12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B]"
                      aria-label={`${isExpanded ? 'Hide' : 'Show'} more about ${service.title}`}
                    >
                      <FontAwesomeIcon icon={faChevronDown} className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#686868]">{service.desc}</p>

                  <div
                    id={`${service.id}-details`}
                    aria-hidden={!isExpanded}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-4 space-y-2 border-t border-[#EEEBE3] pt-4">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2.5 text-sm leading-5 text-[#4E4C46]">
                            <FontAwesomeIcon icon={faCheck} className="mt-0.5 h-4 w-4 shrink-0 text-[#9B7810]" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#EEEBE3] pt-4">
                    <a href={localizedPath(service.href, language)} className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-[#1F1F1F] transition hover:text-[#8A6A12]">
                      {siteText(language, 'servicesExplorePathway')} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={onOpenCalculator}
                      className="ml-auto inline-flex min-h-10 items-center justify-center rounded-full bg-[#D4AF37] px-4 text-xs font-bold text-[#1F1F1F] transition hover:bg-[#E3C55A]"
                    >
                      {t.servicesSection.calculateFees || siteText(language, 'servicesFeeEstimate')}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
