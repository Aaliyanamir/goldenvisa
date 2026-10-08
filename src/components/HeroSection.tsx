'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faCheck,
  faChevronRight,
  faShieldHalved,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import type { ServiceId } from '@/components/service-pages/FamilyVisaCalculator';

interface HeroSectionProps {
  onOpenCalculator: (initialService?: ServiceId) => void;
  onOpenMegaMenu: () => void;
  onOpenEligibility: () => void;
}

const pathways = [
  {
    id: 'property',
    label: 'Property investor',
    title: 'Invest in Dubai property',
    detail: 'Explore the property-investor residency route and the documents used to assess your case.',
    criteria: 'Property value and ownership documents',
    service: 'property',
  },
  {
    id: 'executive',
    label: 'Executive',
    title: 'Build your career in the UAE',
    detail: 'Review the executive pathway and the employment and qualification evidence it may require.',
    criteria: 'Role, qualifications and salary evidence',
    service: 'golden',
  },
  {
    id: 'specialist',
    label: 'Specialist talent',
    title: 'Bring your expertise to Dubai',
    detail: 'Explore specialist categories and the endorsements or credentials relevant to your field.',
    criteria: 'Profession-specific credentials or nomination',
    service: 'golden',
  },
] as const;

export const HeroSection = ({
  onOpenCalculator,
  onOpenMegaMenu,
  onOpenEligibility,
}: HeroSectionProps) => {
  const [selectedPathway, setSelectedPathway] = useState<(typeof pathways)[number]['id']>('property');
  const activePathway = pathways.find(({ id }) => id === selectedPathway) ?? pathways[0];

  return (
    <section data-scroll-reveal className="relative isolate overflow-hidden bg-[#121212] text-white">
      <Image
        src="/assets/golden-visa/dubai-residency.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,15,.96)_0%,rgba(15,15,15,.83)_45%,rgba(15,15,15,.52)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_46%,rgba(212,175,55,.2),transparent_40%)]" />
      <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-12 px-5 pb-14 pt-[calc(var(--site-header-offset,112px)+2rem)] sm:px-8 lg:grid-cols-[1.05fr_.8fr] lg:gap-16 lg:px-12 lg:pb-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/90 backdrop-blur-md">
            <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4 text-[#D4AF37]" />
            UAE residency &amp; government services
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-6xl xl:text-7xl">
            A more considered
            <span className="mt-2 block text-[#E4C86A]">way to make Dubai home.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            Clear guidance for UAE Golden Visa, family residency and corporate services—from choosing a route to preparing your application.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onOpenEligibility}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 text-sm font-bold text-[#171611] shadow-[0_10px_32px_rgba(212,175,55,.2)] transition hover:bg-[#e5c85f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Check your eligibility <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onOpenMegaMenu}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
            >
              Explore services <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/65">
            <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-[#D4AF37]" /> Independent case guidance</span>
            <span className="inline-flex items-center gap-2"><FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-[#D4AF37]" /> Transparent next steps</span>
          </div>
        </div>

        <aside className="w-full max-w-xl justify-self-center rounded-[28px] border border-white/20 bg-[#161616]/80 p-5 shadow-[0_30px_100px_rgba(0,0,0,.42)] backdrop-blur-xl sm:p-7 lg:justify-self-end">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-[#E4C86A]">
            <FontAwesomeIcon icon={faWandMagicSparkles} className="h-4 w-4" /> Residency pathway guide
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Start with your goals.</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Choose a starting point to see the kind of information your case review may cover.</p>
          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {pathways.map((pathway) => (
              <button
                key={pathway.id}
                type="button"
                aria-pressed={selectedPathway === pathway.id}
                onClick={() => {
                  setSelectedPathway(pathway.id);
                  onOpenCalculator(pathway.service);
                }}
                className={`min-h-11 rounded-xl border px-3 py-2 text-left text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4C86A] ${
                  selectedPathway === pathway.id
                    ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F2D875]'
                    : 'border-white/15 bg-white/[.04] text-white/70 hover:border-white/35 hover:text-white'
                }`}
              >
                {pathway.label}
              </button>
            ))}
          </div>
          <div aria-live="polite" className="mt-5 min-h-[142px] rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-white/50">Your selected pathway</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{activePathway.title}</h3>
            <p className="mt-1 text-sm leading-6 text-white/65">{activePathway.detail}</p>
            <p className="mt-3 text-xs font-semibold text-[#E4C86A]">{activePathway.criteria}</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenCalculator()}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-[#1F1F1F] transition hover:bg-[#F9F9F8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            Open fee &amp; service estimator <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-[11px] leading-5 text-white/45">
            Fees and eligibility depend on your case and the relevant UAE authority.
          </p>
        </aside>
      </div>
    </section>
  );
};
