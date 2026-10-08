'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronDown, faArrowUpRightFromSquare, faMessage, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../lib/LanguageContext';
import { contactInfo } from '../lib/contactInfo';

interface FaqAndSocialProofProps {
  onOpenCalculator: () => void;
}

const faqs = [
  {
    q: 'What property value is generally required for the UAE Golden Visa investor route?',
    a: 'The property-investor route is commonly associated with a minimum property value of AED 2,000,000. Ownership structure, property status, financing and supporting documents can affect eligibility, so confirm current requirements with the relevant authority before applying.',
  },
  {
    q: 'Can Golden Visa holders sponsor family members?',
    a: 'Family sponsorship may be available to Golden Visa holders. The documents and conditions depend on the relationship, applicant and current authority requirements; we can help you identify the relevant application route.',
  },
  {
    q: 'Can I stay outside the UAE for more than six months?',
    a: 'Golden Visa holders are generally not subject to the standard six-month absence rule that applies to many UAE residence visas. Confirm the rules for your specific visa status with the issuing authority.',
  },
  {
    q: 'How long does a UAE residency application take?',
    a: 'Processing time varies by application category, document readiness, medical and Emirates ID steps, and authority workload. We can outline the expected sequence for your case, but only the relevant authority can confirm its processing timeline.',
  },
  {
    q: 'Are the fees shown by the calculator final government fees?',
    a: 'The calculator is an estimate for supported services. Government charges and service costs may change or vary by case. Review an itemized current quote before authorizing any application or payment.',
  },
];

const metrics = [
  { value: 'Up to 10 years', label: 'Golden Visa validity, by route' },
  { value: 'Case-specific', label: 'Eligibility and fee guidance' },
  { value: 'Authority-led', label: 'Final application decisions' },
];

export const FaqAndSocialProof = ({ onOpenCalculator }: FaqAndSocialProofProps) => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" data-scroll-reveal className="bg-[#F9F9F8] px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8A6A12]">
              <span className="h-px w-8 bg-[#B8860B]" /> From people we support
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-[#1F1F1F] sm:text-4xl">
              Reviews from Google
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#686868]">
              Read current customer feedback on our Google Business profile. Reviews are hosted by Google and are not reproduced here as unverified quotes.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2" aria-label="Relevant UAE authority processes">
              {['GDRFA', 'ICP', 'Dubai Land Department'].map((authority) => (
                <span key={authority} className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#DDD9CD] bg-white px-3.5 text-xs font-semibold text-[#494741]">
                  <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4 text-[#9B7810]" /> {authority} processes
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-[#77746C]">Independent consultancy; not affiliated with or endorsed by these authorities.</p>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-[#E1DED5] bg-white p-6 shadow-[0_24px_70px_-50px_rgba(31,31,31,.38)] sm:p-8">
            <div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5F2E8] text-[#8A6A12]">
                  <FontAwesomeIcon icon={faMessage} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold text-[#686868]">
                    Customer reviews hosted by Google
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-[#1F1F1F]">Hear directly from our clients</h3>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-[#686868]">Open the original source to see the latest ratings and customer comments.</p>
                </div>
              </div>
              <a
                href={contactInfo.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#1F1F1F] px-5 text-sm font-semibold text-white transition hover:bg-[#35332C] sm:w-auto"
              >
                View Google reviews <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 text-[#E4C86A]" />
              </a>
            </div>
            {process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL && (
              <iframe
                title="Live Google customer reviews"
                src={process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_EMBED_URL}
                className="relative mt-6 h-[360px] w-full rounded-2xl border border-[#EAE8E1]"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            )}
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#E7E4DC] bg-white sm:grid-cols-3">
          {metrics.map(({ value, label }, index) => (
            <div key={label} className={`px-6 py-5 text-center ${index ? 'border-t border-[#EAE8E1] sm:border-l sm:border-t-0' : ''}`}>
              <p className="text-2xl font-semibold tracking-tight text-[#8A6A12]">{value}</p>
              <p className="mt-1 text-xs font-medium text-[#686868] sm:text-sm">{label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <div className="mb-9 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8A6A12]">
              <span className="h-px w-8 bg-[#B8860B]" /> Helpful answers
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-[#1F1F1F] sm:text-4xl">
              {t.faq.title || 'Frequently asked questions'}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#686868]">{t.faq.subtitle}</p>
          </div>

          <div className="divide-y divide-[#EAE8E1] border-y border-[#EAE8E1]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const panelId = `homepage-faq-${index}`;
              return (
                <article key={faq.q} data-scroll-reveal className={`border-l-2 transition-colors ${isOpen ? 'border-[#B8860B]' : 'border-transparent'}`}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex min-h-[68px] w-full items-center justify-between gap-5 px-4 py-4 text-left text-sm font-semibold text-[#1F1F1F] transition hover:bg-white sm:px-6 sm:text-base"
                    >
                      {faq.q}
                      <FontAwesomeIcon icon={faChevronDown} className={`h-5 w-5 shrink-0 text-[#9B7810] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 text-sm leading-7 text-[#686868] sm:px-6">{faq.a}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 text-sm font-bold text-[#1F1F1F] transition hover:bg-[#E3C55A] sm:w-auto"
            >
              Explore the fee estimator <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
