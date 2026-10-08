'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Baby,
  Check,
  FileCheck2,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { NewbornVisaCalculator } from './NewbornVisaCalculator';

const phases = [
  { title: 'Pre-documentation', detail: 'Check both parents’ passports, Emirates IDs and UAE residence details. Confirm the marriage certificate and required attestation route before the birth file is opened.', icon: Heart },
  { title: 'Birth certificate', detail: 'Register the birth through the relevant UAE health authority and obtain the official birth certificate. Confirm name spellings before it is issued.', icon: FileCheck2 },
  { title: 'MOFA attestation', detail: 'Complete the required attestation of the UAE birth certificate through MOFA UAE when required for the passport / residence file.', icon: BadgeCheck },
  { title: 'Passport issuance', detail: 'Apply for the baby’s passport or travel document through the relevant embassy or consulate using the certificate and parents’ identity records.', icon: Baby },
  { title: 'Visa issuance', detail: 'Submit the newborn residence and Emirates ID steps with the sponsor records and complete any authority-required formalities before the grace period ends.', icon: ShieldCheck },
];

const checklists = [
  { title: 'Stage 1 — Birth certificate', items: ['Parents’ passports, UAE residence details and Emirates IDs', 'Marriage certificate and translations / attestations requested by the hospital or authority', 'Hospital birth notification and discharge record', 'Correct baby name and parent details for certificate issuance'] },
  { title: 'Stage 2 — Baby’s passport', items: ['UAE birth certificate and MOFA attestation where required', 'Parents’ passports and Emirates IDs', 'Embassy or consulate application and photographs in its required format', 'Any nationality-specific consent or parent-presence forms'] },
  { title: 'Stage 3 — Residence issuance', items: ['Baby’s passport and recent photograph', 'Sponsor passport, UAE residence visa and Emirates ID', 'Attested birth certificate and family-file details', 'Application reference and the baby’s date of birth for deadline tracking'] },
];

const faqs = [
  ['How long do I have to arrange my newborn’s UAE residence?', 'The commonly cited grace period is 120 days from the date of birth. Start the birth certificate and passport steps immediately, and confirm the live deadline and requirements with the relevant immigration authority.'],
  ['What happens if the 120-day period is missed?', 'Late completion may lead to immigration fines or other action under the applicable rules. Contact the relevant authority promptly to confirm the current amount and resolve the case; do not rely on a general estimate.'],
  ['What is the correct order for a baby born in Dubai?', 'Usually: parents’ records and birth notification, UAE birth certificate, required MOFA attestation, baby’s passport or travel document, then newborn residence and Emirates ID application. Embassy requirements can affect the sequence.'],
  ['Does a newborn need a medical fitness test?', 'Medical fitness screening is generally for adult applicants, not newborns. The baby still needs the required residence and Emirates ID application steps. Confirm any case-specific instructions with the authority.'],
  ['Can I calculate the fees before the passport is ready?', 'Yes. The estimate uses the sponsor visa duration and birth-certificate language. Passport fees depend on nationality and consulate, so they are not included; confirm current authority charges before applying.'],
  ['What if the parents’ marriage certificate is not attested?', 'Ask the issuing-country authority and the relevant UAE authority which attestation chain is needed. The required steps depend on where the certificate was issued and the application file.'],
] as const;

function NewbornVisaPageContent() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <div className="gv-newborn-page">
        <div className="gv-newborn-shell">
          <nav className="gv-newborn-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Newborn Visa</span>
          </nav>

          <header className="gv-newborn-hero">
            <div className="gv-newborn-hero-copy">
              <span className="gv-newborn-eyebrow"><span aria-hidden="true" />Newborn residence · UAE guide</span>
              <h1>Welcome your baby to the UAE — <strong>we’ll help with every step.</strong></h1>
              <p>From the birth certificate and passport to the residence application, follow one clear checklist and keep the 120-day deadline in view.</p>
              <div className="gv-newborn-hero-actions">
                <button type="button" className="gv-newborn-button" onClick={() => setCalculatorOpen(true)}>Calculate newborn visa costs <ArrowRight size={16} /></button>
                <a className="gv-newborn-button gv-newborn-button--outline" href="#newborn-process">See the five phases</a>
              </div>
              <div className="gv-newborn-proof"><Baby size={16} />For UAE-born babies · document and visa support</div>
            </div>
            <div className="gv-newborn-hero-image">
              <Image src="/assets/newborn/newborn-family.webp" alt="Parent lifting and holding their young child" fill preload sizes="(max-width: 760px) 100vw, 48vw" />
              <div className="gv-newborn-image-shade" />
              <div className="gv-newborn-image-caption"><span>FOR NEW PARENTS</span><strong>One small arrival.<br />A few important steps.</strong></div>
              <span className="gv-newborn-image-badge"><Baby size={15} />UAE NEWBORN VISA</span>
            </div>
          </header>

          <aside className="gv-newborn-deadline" role="alert">
            <span><AlertTriangle size={22} /></span>
            <div><strong>You have 120 days from your baby’s birth.</strong><p>Use the grace period to complete the passport and residence process. Start now: attestation and embassy appointment times can vary.</p></div>
            <button type="button" onClick={() => setCalculatorOpen(true)}>Check my next step <ArrowRight size={15} /></button>
          </aside>

          <section className="gv-newborn-section" id="newborn-process">
            <div className="gv-newborn-section-heading">
              <span className="gv-newborn-eyebrow"><span aria-hidden="true" />The newborn visa process, in five phases</span>
              <h2>From the birth record to <strong>residence issuance.</strong></h2>
              <p>Start document preparation before the hospital discharge where possible. Each phase depends on the records and appointment rules of the issuing authority.</p>
            </div>
            <ol className="gv-newborn-timeline">
              {phases.map(({ title, detail, icon: Icon }, index) => <li key={title}><span className="gv-newborn-step-index">0{index + 1}</span><span className="gv-newborn-phase-icon"><Icon size={19} /></span><div><h3>{title}</h3><p>{detail}</p></div>{index < phases.length - 1 && <span className="gv-newborn-connector" aria-hidden="true" />}</li>)}
            </ol>
          </section>

          <section className="gv-newborn-checklist-section">
            <div className="gv-newborn-section-heading">
              <span className="gv-newborn-eyebrow"><span aria-hidden="true" />Documents, grouped by stage</span>
              <h2>A practical checklist for <strong>each application.</strong></h2>
              <p>Exact document requirements depend on the baby’s nationality, parents’ records and the authority handling the file.</p>
            </div>
            <div className="gv-newborn-checklist-grid">{checklists.map((group, index) => <article key={group.title}><span>0{index + 1} · CHECKLIST</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></article>)}</div>
          </section>

          <section className="gv-newborn-fine-alert">
            <div><span><ShieldCheck size={19} /></span><div><h2>Prevent avoidable fines.</h2><p>Record the baby’s date of birth, keep copies of each application receipt and passport request, and track the 120-day date. If any authority or embassy delay puts the deadline at risk, ask GDRFA / ICP for case-specific guidance before it expires.</p></div></div>
            <a href="https://www.gdrfad.gov.ae/en" target="_blank" rel="noreferrer">GDRFA Dubai <ArrowRight size={15} /></a>
          </section>

          <section className="gv-newborn-cost-section">
            <div><span className="gv-newborn-eyebrow"><span aria-hidden="true" />Newborn visa cost calculator</span><h2>Get an itemized <strong>starting estimate.</strong></h2><p>Choose the sponsor’s visa type and birth-certificate language to see the listed government fees. Passport issuance and case-specific charges are excluded; this is an indicative guide, not a live government quote.</p></div>
            <div className="gv-newborn-cost-card"><div><span>NEWBORN VISA</span><BadgeCheck size={24} /></div><strong>Built around your sponsor’s visa</strong><p>Review sponsor visa duration, birth-certificate language and an itemized fee breakdown. Passport fees depend on nationality and consulate.</p><button type="button" onClick={() => setCalculatorOpen(true)}>Calculate newborn cost <ArrowRight size={16} /></button><small>Figures are illustrative. Confirm current charges before payment.</small></div>
          </section>

          <section className="gv-newborn-faq-section">
            <div className="gv-newborn-section-heading"><span className="gv-newborn-eyebrow"><span aria-hidden="true" />Questions parents ask</span><h2>Newborn visa <strong>FAQ.</strong></h2></div>
            <div className="gv-newborn-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </section>

          <section className="gv-newborn-closing">
            <div><span className="gv-newborn-eyebrow"><span aria-hidden="true" />You take care of the little one</span><h2>We’ll help you keep the paperwork <strong>on track.</strong></h2><p>Get a clear checklist, review your timeline and prepare the newborn residence file before the deadline approaches.</p></div>
            <button type="button" onClick={() => setCalculatorOpen(true)}>Calculate newborn cost <ArrowRight size={16} /></button>
          </section>
          <p className="gv-newborn-disclaimer"><ShieldCheck size={14} />We are a private documentation support provider, not a UAE government agency. Deadlines, fines, document rules and fees can change; confirm your case directly with the relevant authority.</p>
        </div>
      </div>
      <NewbornVisaCalculator open={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </StandalonePageFrame>
  );
}

export function NewbornVisaPageContentWithFrame() {
  return <NewbornVisaPageContent />;
}
