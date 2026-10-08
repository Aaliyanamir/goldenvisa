'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClipboardCheck, faFileCircleCheck, faHeartPulse, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '../lib/contactInfo';

const steps = [
  {
    title: 'Eligibility audit',
    detail: 'Review your goals, background and likely residency routes before you prepare a file.',
    icon: faClipboardCheck,
  },
  {
    title: 'Document verification',
    detail: 'Organize and check the documents required for your selected application pathway.',
    icon: faFileCircleCheck,
  },
  {
    title: 'Medical & Emirates ID',
    detail: 'Coordinate the required medical fitness and Emirates ID steps when your route calls for them.',
    icon: faHeartPulse,
  },
  {
    title: 'Visa issuance & delivery',
    detail: 'Track the application through the relevant authority decision and follow-up steps.',
    icon: faShieldHalved,
  },
];

export const RoadmapSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="roadmap" data-scroll-reveal className="overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8A6A12]">
            <span className="h-px w-8 bg-[#B8860B]" /> Your application, in focus
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-[#1F1F1F] sm:text-4xl lg:text-5xl">
            The Sovereign 4-Step Journey
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#686868] sm:text-base">
            A considered, case-led process with clear guidance from the first eligibility conversation to the authority decision.
          </p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-[#B8860B]/20 via-[#D4AF37] to-[#B8860B]/20 lg:block" />
          {steps.map(({ title, detail, icon: Icon }, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={title}
                data-scroll-reveal
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveStep(index)}
                className={`group relative flex min-h-[250px] flex-col items-start rounded-2xl border p-6 text-left transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B] lg:mx-3 ${
                  isActive
                    ? 'border-[#D4AF37] bg-[#FCFAF4] shadow-[0_18px_48px_-32px_rgba(100,75,12,.45)]'
                    : 'border-[#E9E8E3] bg-white hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:shadow-[0_18px_42px_-34px_rgba(31,31,31,.4)]'
                }`}
              >
                <span className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white transition ${
                  isActive
                    ? 'bg-[#D4AF37] text-[#1F1F1F] shadow-[0_0_0_5px_rgba(212,175,55,.16)]'
                    : 'bg-[#F5F2E8] text-[#8A6A12] group-hover:bg-[#D4AF37] group-hover:text-[#1F1F1F]'
                }`}>
                  <FontAwesomeIcon icon={Icon} className="h-5 w-5" />
                </span>
                <span className="mt-6 text-[11px] font-bold uppercase tracking-[.15em] text-[#9A7918]">Step 0{index + 1}</span>
                <span className="mt-2 text-lg font-semibold text-[#1F1F1F]">{title}</span>
                <span className="mt-2 text-sm leading-6 text-[#686868]">{detail}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#EAE8E1] pt-7 sm:flex-row">
          <p className="max-w-2xl text-sm leading-6 text-[#686868]">
            Timelines and requirements vary by visa category and authority. We help you understand the steps relevant to your case.
          </p>
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1F1F1F] px-6 text-sm font-semibold text-white transition hover:bg-[#37342B] sm:w-auto"
          >
            Discuss your case <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-[#E4C86A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
