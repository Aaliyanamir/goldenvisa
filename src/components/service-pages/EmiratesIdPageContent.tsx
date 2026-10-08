'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CreditCard,
  FileCheck2,
  Fingerprint,
  MapPin,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  UserPlus,
  Zap,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

/* ─── data ──────────────────────────────────────────────────────── */

const serviceCards = [
  { icon: UserPlus, title: 'New Emirates ID', detail: 'First-time application linked to your new residence visa.' },
  { icon: RefreshCw, title: 'Renewal', detail: 'Renew your Emirates ID before or after expiry.' },
  { icon: CreditCard, title: 'Lost or damaged', detail: 'Replace a lost, stolen or damaged Emirates ID card.' },
  { icon: Fingerprint, title: 'Child Emirates ID', detail: 'Apply for your child\u2019s Emirates ID with guardian documents.' },
  { icon: Search, title: 'Track application', detail: 'Check your application status on the official ICP portal.' },
  { icon: Zap, title: 'Urgent / Fawri', detail: 'Fast-track processing at selected ICP service centres.' },
];

const steps = [
  { title: 'Confirm your visa status', detail: 'Your Emirates ID application is linked to a new or renewed residence visa. Check your visa validity and type before starting.' },
  { title: 'Prepare your documents', detail: 'Passport copy, residence visa copy, a recent personal photo meeting ICP requirements, and your application or PRAN number.' },
  { title: 'Submit and attend biometrics', detail: 'Complete the application on ICP, pay the fees, and attend the designated biometrics centre with your original passport.' },
  { title: 'Track and receive your card', detail: 'Use your PRAN on the ICP portal or app. Cards are delivered by courier \u2014 usually within 3\u20135 working days after biometrics.' },
];

const essentials = [
  'Application linked to your residence visa status',
  'Biometrics at an approved ICP centre',
  'PRAN tracking on the official ICP portal',
  'Card delivered by courier to your address',
  'Fawri fast-track at selected centres (AED 150)',
  'Grace period: 30 days after expiry before fines begin',
];

const feeRows = [
  { item: 'New application (2-year)', amount: 'AED 370' },
  { item: 'New application (3-year)', amount: 'AED 570' },
  { item: 'Renewal (2-year)', amount: 'AED 370' },
  { item: 'Renewal (3-year)', amount: 'AED 570' },
  { item: 'Lost / damaged replacement', amount: 'AED 370' },
  { item: 'Fawri urgent service', amount: 'AED 150 (additional)' },
];

const ourServices = [
  { title: 'New application support', detail: 'We prepare your documents, guide you through biometrics and handle the application from start to card delivery.' },
  { title: 'Renewal coordination', detail: 'Whether your ID has expired or is about to, we check your visa status and file the renewal with ICP.' },
  { title: 'Lost or damaged replacement', detail: 'Report, replace and track \u2014 we manage the replacement application so you get a new card quickly.' },
];

const faqs = [
  { question: 'How do I check my Emirates ID application status?', answer: 'Use the official ICP website or UAE ICP app and enter your PRAN / application number. Status tracking is free.' },
  { question: 'Can children get an Emirates ID without fingerprints?', answer: 'Children under 15 generally do not provide fingerprints; the authority may require a photograph and guardian documents.' },
  { question: 'What happens if my Emirates ID expires?', answer: 'A 30-day grace period commonly applies after expiry. After that, a fine of AED 20 per day may be charged, capped at AED 1,000. Check current ICP rules.' },
  { question: 'Can I apply while outside the UAE?', answer: 'Some renewals can be prepared remotely, but first-time applicants typically need to be in the UAE for biometrics.' },
  { question: 'How long does it take to get an Emirates ID?', answer: 'Cards are usually printed and dispatched within 3\u20135 working days after biometrics. Fawri service may be faster at selected centres.' },
];

const relatedServices = [
  { label: 'Family Visa', href: '/family-visa' },
  { label: 'Golden Visa', href: '/golden-visa' },
  { label: 'Medical Fitness & EID Locations', href: '/near-me/visa-medical-emirates-id-location' },
  { label: 'PRO Services', href: '/pro-services' },
];

/* ─── helpers ───────────────────────────────────────────────────── */

function EidEyebrow({ children }: { children: React.ReactNode }) {
  return <span className="gv-eid-eyebrow"><span aria-hidden="true" />{children}</span>;
}

/* ─── main component ────────────────────────────────────────────── */

function EmiratesIdPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="gv-eid-page">
      <div className="gv-eid-shell">
        {/* breadcrumb */}
        <nav className="gv-eid-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Emirates ID</span>
        </nav>

        {/* ── 1. HERO ────────────────────────────────────────── */}
        <header className="gv-eid-hero">
          <div className="gv-eid-hero-copy">
            <EidEyebrow>Emirates ID · federal identity services</EidEyebrow>
            <h1>Your Emirates ID &mdash; <span>every service, 100% online.</span></h1>
            <p><strong>Apply, renew or replace</strong> your Emirates ID card with clear guidance, biometrics support and real-time tracking &mdash; handled by Brightlink Consulting.</p>
            <a className="gv-eid-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help with my Emirates ID application. Please send me the checklist.')}`} target="_blank" rel="noreferrer">
              Start on WhatsApp <ArrowRight size={16} />
            </a>
            <a className="gv-eid-button gv-eid-button--dark" href="https://smartservices.icp.gov.ae/echannels/web/client/default.html#/login" target="_blank" rel="noreferrer">
              Check my Emirates ID status <ArrowUpRight size={16} />
            </a>
            <div className="gv-eid-proof">
              <span><ShieldCheck size={14} />Independent documentation support</span>
              <span><FileCheck2 size={14} />One clear checklist, one file at a time</span>
            </div>
          </div>
          <aside className="gv-eid-hero-card">
            <div className="gv-eid-hero-card-badge">
              <span>NEW FAMILY VISA</span>
            </div>
            <Image src="/assets/images/emirates-id-documents.webp" alt="Happy family with new UAE visa" width={420} height={280} className="gv-eid-hero-card-img" preload />
            <div className="gv-eid-hero-stat">
              <strong>3–5 DAYS</strong>
              <span>typical processing after application</span>
            </div>
          </aside>
        </header>

        {/* ── 2. WHAT DO YOU NEED TO DO TODAY? ────────────────── */}
        <section className="gv-eid-section" id="services">
          <div className="gv-eid-heading">
            <EidEyebrow>Choose your service</EidEyebrow>
            <h2>What do you need to do <strong>today?</strong></h2>
          </div>
          <div className="gv-eid-service-grid">
            {serviceCards.map(({ icon: Icon, title, detail }) => (
              <article className="gv-eid-service-card" key={title}>
                <span className="gv-eid-service-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. WHAT IS THE EMIRATES ID? ─────────────────────── */}
        <section className="gv-eid-section gv-eid-about" id="what-is-eid">
          <div className="gv-eid-heading">
            <EidEyebrow>Understanding the card</EidEyebrow>
            <h2>What is the <strong>Emirates ID?</strong></h2>
          </div>
          <div className="gv-eid-about-body">
            <p>The Emirates ID is the UAE&rsquo;s official national identity card, issued by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). Every UAE resident &mdash; adult and child &mdash; must hold a valid Emirates ID. It is linked to your residence visa and is required for government services, banking, telecom, healthcare, school enrolment and most everyday transactions.</p>
            <p>The card contains biometric data (fingerprints and a digital photo) and is valid for the same period as the holder&rsquo;s residence visa &mdash; typically two or three years, or ten years for Golden Visa holders.</p>
          </div>
        </section>

        {/* ── 4. HOW TO GET AN EMIRATES ID, STEP BY STEP ───────── */}
        <section className="gv-eid-section" id="steps">
          <div className="gv-eid-heading">
            <EidEyebrow>Process</EidEyebrow>
            <h2>How to get an Emirates ID, <strong>step by step.</strong></h2>
            <p>A clear sequence from visa check to card delivery.</p>
          </div>
          <ol className="gv-eid-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="gv-eid-step-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 5. PROMO BANNER ────────────────────────────────── */}
        <section className="gv-eid-banner" aria-label="Related service promotion">
          <div className="gv-eid-banner-content">
            <div className="gv-eid-banner-text">
              <span className="gv-eid-banner-tag">NEW FAMILY VISA</span>
              <h2>Bring your family to the UAE &mdash; we run the whole file.</h2>
              <p>Sponsorship, attestation, entry permits and residence formalities handled by Brightlink Consulting.</p>
              <Link href="/family-visa" className="gv-eid-button">Learn more <ArrowRight size={16} /></Link>
            </div>
            <div className="gv-eid-banner-visual">
              <Image src="/assets/images/emirates-id-documents.webp" alt="Family visa promotion" width={500} height={320} className="gv-eid-banner-img" />
              <div className="gv-eid-banner-badge">100%</div>
            </div>
          </div>
        </section>

        {/* ── 6. ALL THE EMIRATES ID ESSENTIALS ────────────────── */}
        <section className="gv-eid-section gv-eid-essentials-section" id="essentials">
          <div className="gv-eid-heading">
            <EidEyebrow>At a glance</EidEyebrow>
            <h2>All the Emirates ID <strong>essentials.</strong></h2>
          </div>
          <ul className="gv-eid-essentials">
            {essentials.map((item) => (
              <li key={item}><Check size={16} /><span>{item}</span></li>
            ))}
          </ul>
          <div className="gv-eid-essentials-actions">
            <a className="gv-eid-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help with my Emirates ID. Please assist.')}`} target="_blank" rel="noreferrer">
              Get help now <ArrowRight size={16} />
            </a>
            <a className="gv-eid-button gv-eid-button--dark" href="https://smartservices.icp.gov.ae/echannels/web/client/default.html#/login" target="_blank" rel="noreferrer">
              Check ICP status <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* ── 7. EMIRATES ID FEES AT A GLANCE ──────────────────── */}
        <section className="gv-eid-section gv-eid-fees-section" id="fees">
          <div className="gv-eid-heading">
            <EidEyebrow>Government fees</EidEyebrow>
            <h2>Emirates ID fees at a <strong>glance.</strong></h2>
          </div>
          <div className="gv-eid-fee-table-wrap">
            <table className="gv-eid-fee-table">
              <thead>
                <tr><th>Service</th><th>Fee</th></tr>
              </thead>
              <tbody>
                {feeRows.map((row) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>
                    <td><strong>{row.amount}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="gv-eid-fee-note"><ShieldCheck size={14} /> Fees are approximate and may vary. Government charges confirmed at point of application.</p>
        </section>

        {/* ── 8. OUR EMIRATES ID SERVICES ──────────────────────── */}
        <section className="gv-eid-section" id="our-services">
          <div className="gv-eid-heading">
            <EidEyebrow>How we help</EidEyebrow>
            <h2>Our Emirates ID <strong>services.</strong></h2>
          </div>
          <div className="gv-eid-our-services">
            {ourServices.map((service, index) => (
              <article className="gv-eid-our-service-card" key={service.title}>
                <span className="gv-eid-our-service-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 9. WRITTEN BY PEOPLE WHO DO THIS DAILY ──────────── */}
        <section className="gv-eid-section gv-eid-review" aria-labelledby="eid-review-title">
          <div className="gv-eid-heading">
            <EidEyebrow>Our reviews</EidEyebrow>
            <h2 id="eid-review-title">Written by people who do <strong>this daily.</strong></h2>
          </div>
          <div className="gv-eid-review-card">
            <strong className="gv-eid-review-score">4.9</strong>
            <div>
              <span className="gv-eid-stars" aria-label="Five stars">★★★★★</span>
              <p>Based on Google customer reviews</p>
            </div>
            <a href={contactInfo.googleReviewsUrl} target="_blank" rel="noreferrer">Read reviews on Google <ArrowUpRight size={14} /></a>
          </div>
        </section>

        {/* ── 10. EMIRATES ID FAQ ──────────────────────────────── */}
        <section className="gv-eid-section gv-eid-faq-section" id="faq">
          <div className="gv-eid-heading">
            <EidEyebrow>Questions</EidEyebrow>
            <h2>Emirates ID <strong>FAQ.</strong></h2>
          </div>
          <div className="gv-eid-faqs">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={openFaq === index}>
                <summary onClick={(event) => { event.preventDefault(); setOpenFaq(openFaq === index ? null : index); }}>
                  {faq.question}<ChevronDown size={16} />
                </summary>
                {openFaq === index && <p>{faq.answer}</p>}
              </details>
            ))}
          </div>
        </section>

        {/* ── 11. MORE EMIRATES ID SERVICES ────────────────────── */}
        <nav className="gv-eid-related" aria-label="Related services">
          <div className="gv-eid-heading">
            <EidEyebrow>Related</EidEyebrow>
            <h2>More Emirates ID <strong>services.</strong></h2>
          </div>
          <div className="gv-eid-related-links">
            {relatedServices.map((service) => (
              <Link href={service.href} key={service.label} className="gv-eid-related-link">
                <span>{service.label}</span><ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </nav>

        {/* ── 12. CLOSING CTA ─────────────────────────────────── */}
        <section className="gv-eid-closing">
          <EidEyebrow>Ready when you are</EidEyebrow>
          <h2>Ready to sort your Emirates ID?</h2>
          <p>Share your documents on WhatsApp for a checklist and an itemized quote. You stay in control.</p>
          <div className="gv-eid-closing-actions">
            <a className="gv-eid-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help with my Emirates ID. Please send me the document checklist and a current itemized quote.')}`} target="_blank" rel="noreferrer">
              Chat on WhatsApp <ArrowRight size={15} />
            </a>
            <a className="gv-eid-closing-secondary" href={contactInfo.phoneHref}>Call our team</a>
          </div>
          <small>Private service provider · Visa decisions are made by the relevant UAE authority.</small>
        </section>
      </div>
    </div>
  );
}

export function EmiratesIdPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <EmiratesIdPageContent />
    </StandalonePageFrame>
  );
}
