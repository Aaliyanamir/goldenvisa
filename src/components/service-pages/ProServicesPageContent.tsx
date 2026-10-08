'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Briefcase,
  Check,
  ChevronDown,
  ClipboardList,
  FileCheck2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { FamilyVisaCalculator, type ServiceId } from './FamilyVisaCalculator';

/* ─── data ──────────────────────────────────────────────────────── */

const serviceItems = [
  { icon: Briefcase, title: 'Employee visa & labour card', detail: 'New work permits, labour contracts and MOHRE submissions for your hires.' },
  { icon: Users, title: 'Visa renewal & cancellation', detail: 'Keep employee files current or process end-of-service cancellations cleanly.' },
  { icon: ClipboardList, title: 'Establishment card & licences', detail: 'Renew your establishment card, update company records and manage quota.' },
  { icon: FileCheck2, title: 'Medical, Emirates ID & typing', detail: 'Coordinate medical fitness, biometrics and application typing for every file.' },
  { icon: ShieldCheck, title: 'Document attestation & translation', detail: 'Degree, marriage and commercial document attestation through MOFA and embassies.' },
  { icon: Briefcase, title: 'Golden Visa & investor files', detail: 'Property and professional Golden Visa nominations, dependent sponsorship and DLD coordination.' },
];

const processSteps = [
  { title: 'Offer letter accepted', detail: 'Employee signs and you share the passport, photo and qualification documents.' },
  { title: 'Labour approval & contract', detail: 'MOHRE work permit application, contract typing and approval.' },
  { title: 'Entry permit & status change', detail: 'Entry permit issuance or in-country status change for the employee.' },
  { title: 'Medical & Emirates ID', detail: 'DHA medical fitness, Emirates ID biometrics and card issuance.' },
  { title: 'Labour card & residence visa', detail: 'Final labour card printing, residence visa stamping and file closure.' },
];

const mohreFees = [
  { category: 'Category 1 (Lowest)', permit: 'AED 300', contract: 'AED 200', total: 'AED 500+' },
  { category: 'Category 2', permit: 'AED 2,100', contract: 'AED 200', total: 'AED 2,300+' },
  { category: 'Category 3 (Highest)', permit: 'AED 5,100', contract: 'AED 200', total: 'AED 5,300+' },
];

const typicalFiles = [
  {
    title: 'Single employee visa — new hire',
    items: ['MOHRE work permit & contract', 'Entry permit or status change', 'Medical fitness & Emirates ID', 'Labour card & residence visa'],
    estimate: 'From AED 4,500',
    note: 'Government + service fees; depends on MOHRE category',
  },
  {
    title: 'Employee visa renewal',
    items: ['Labour contract renewal', 'Medical fitness (if required)', 'Emirates ID renewal', 'Residence visa renewal'],
    estimate: 'From AED 3,200',
    note: 'Government + service fees; varies by visa duration',
  },
  {
    title: 'Employee cancellation',
    items: ['Labour contract cancellation', 'Residence visa cancellation', 'Final settlement coordination', 'Grace period tracking'],
    estimate: 'From AED 1,800',
    note: 'Government fees; end-of-service settlement handled separately',
  },
  {
    title: 'Monthly retainer — 5+ employees',
    items: ['Named PRO coordinator', 'Renewal calendar & tracker', 'All visa lifecycle transactions', 'Establishment card renewals'],
    estimate: 'Custom quote',
    note: 'Government fees billed separately at cost',
  },
];

const deadlines = [
  { value: '30 days', title: 'Visa renewal', detail: 'Renew within 30 days of expiry to avoid daily overstay fines.' },
  { value: '60 days', title: 'Entry permit', detail: 'Entry permits typically expire 60 days after issue — check the printed date.' },
  { value: '14 days', title: 'Cancellation grace', detail: 'After cancellation, the employee usually has a grace period to change status or exit.' },
  { value: '30 days', title: 'Establishment card', detail: 'Renew the establishment immigration card before it lapses or new transactions may be blocked.' },
];

const faqs = [
  { question: 'What does PRO services actually mean?', answer: 'PRO stands for Public Relations Officer. A PRO coordinates your company\'s government paperwork — labour permits, visa applications, establishment renewals and authority submissions — so your team can focus on the business.' },
  { question: 'Why does one company pay a different MOHRE labour fee?', answer: 'The company\'s MOHRE category, employee profile and permit type affect labour charges. Category 1 companies pay the lowest fees; Category 3 the highest. Confirm your live tariff and category before budgeting.' },
  { question: 'Can I hire someone who already has a Golden Visa?', answer: 'A work permit may be available without a new residence visa, subject to MOHRE rules and the employee\'s current status. The correct approach depends on the individual case.' },
  { question: 'Do you handle cancellations and end-of-service?', answer: 'Yes. We coordinate labour cancellation, residence visa cancellation and help track the grace period. End-of-service financial settlements are handled between employer and employee.' },
  { question: 'Are government fees included in the retainer?', answer: 'Government fees and third-party charges are usually separate from the professional service retainer and are itemized with official receipts in every invoice.' },
  { question: 'Can you process visas for other emirates?', answer: 'We handle Dubai (GDRFA) immigration and MOHRE labour files. For other emirates, we coordinate through federal ICP channels where the service scope allows.' },
];

const relatedServices = [
  { label: 'Family Visa', href: '/family-visa' },
  { label: 'Golden Visa', href: '/golden-visa' },
  { label: 'Emirates ID', href: '/emirates-id' },
  { label: 'Amer Center', href: '/amer-center' },
  { label: 'Attestation', href: '/attestation' },
];

/* ─── helpers ───────────────────────────────────────────────────── */

function ProEyebrow({ children }: { children: React.ReactNode }) {
  return <span className="gv-pro-eyebrow"><span aria-hidden="true" />{children}</span>;
}

/* ─── main component ────────────────────────────────────────────── */

function ProServicesPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="gv-pro-page">
      <div className="gv-pro-shell">
        {/* breadcrumb */}
        <nav className="gv-pro-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">PRO Services</span>
        </nav>

        {/* ── 1. HERO ────────────────────────────────────────── */}
        <header className="gv-pro-hero">
          <div className="gv-pro-hero-copy">
            <ProEyebrow>Corporate PRO services · UAE</ProEyebrow>
            <h1>Hiring paperwork, handled for your company.</h1>
            <p>Brightlink Consulting runs your <strong>MOHRE, GDRFA and ICP</strong> paperwork — labour permits, employee visas, renewals, cancellations and establishment files — so your HR team can focus on the business.</p>
            <a className="gv-pro-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need PRO services for my company. Please send me a scope proposal.')}`} target="_blank" rel="noreferrer">
              Start on WhatsApp <ArrowRight size={16} />
            </a>
            <button className="gv-pro-button gv-pro-button--dark" type="button" aria-haspopup="dialog" onClick={() => setCalculatorOpen(true)}>
              Calculate PRO fees <ArrowRight size={16} />
            </button>
            <a className="gv-pro-button gv-pro-button--outline" href={contactInfo.phoneHref}>
              Call our PRO desk <ArrowUpRight size={16} />
            </a>
            <div className="gv-pro-proof">
              <span><ShieldCheck size={14} />Government fees itemized separately</span>
              <span><FileCheck2 size={14} />Named coordinator for every account</span>
            </div>
          </div>
          <aside className="gv-pro-hero-card">
            <Image
              src="/assets/service-pages/corporate-pro-team.jpg"
              alt="Business team coordinating corporate administration"
              width={420}
              height={280}
              className="gv-pro-hero-card-img"
              priority
            />
            <div className="gv-pro-hero-stat">
              <strong>MOHRE · GDRFA · ICP</strong>
              <span>Labour, immigration & identity</span>
            </div>
          </aside>
        </header>

        {/* ── 2. EVERY LABOUR AND IMMIGRATION STEP ────────────── */}
        <section className="gv-pro-section" id="services">
          <div className="gv-pro-heading">
            <ProEyebrow>What we handle</ProEyebrow>
            <h2>Every labour and immigration step, <strong>priced up front.</strong></h2>
            <p>Government fees, service charges and third-party costs are itemized before you approve any work.</p>
          </div>
          <div className="gv-pro-service-grid">
            {serviceItems.map(({ icon: Icon, title, detail }) => (
              <article className="gv-pro-service-card" key={title}>
                <span className="gv-pro-service-icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── 3. FROM OFFER LETTER TO LABOUR CARD ─────────────── */}
        <section className="gv-pro-section" id="process">
          <div className="gv-pro-heading">
            <ProEyebrow>Process</ProEyebrow>
            <h2>From offer letter to labour card in <strong>seven to ten working days.</strong></h2>
          </div>
          <div className="gv-pro-stats">
            <div><strong>MOHRE</strong><span>Labour permits & contracts</span></div>
            <div><strong>GDRFA / ICP</strong><span>Residence & immigration files</span></div>
            <div><strong>7–10 days</strong><span>Typical new hire, documents ready</span></div>
          </div>
          <ol className="gv-pro-steps">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <span className="gv-pro-step-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 4. YOUR MOHRE CATEGORY SETS THE LABOUR FEE ───────── */}
        <section className="gv-pro-section" id="mohre-fees">
          <div className="gv-pro-heading">
            <ProEyebrow>Government fees</ProEyebrow>
            <h2>Your MOHRE category sets the <strong>labour fee.</strong></h2>
            <p>These are the government work-permit and contract charges. Your company category is set by MOHRE based on workforce and compliance factors.</p>
          </div>
          <div className="gv-pro-fee-table-wrap">
            <table className="gv-pro-fee-table">
              <thead>
                <tr><th>MOHRE category</th><th>Work permit</th><th>Contract typing</th><th>Combined</th></tr>
              </thead>
              <tbody>
                {mohreFees.map((row) => (
                  <tr key={row.category}>
                    <td><strong>{row.category}</strong></td>
                    <td>{row.permit}</td>
                    <td>{row.contract}</td>
                    <td><strong>{row.total}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="gv-pro-fee-note"><ShieldCheck size={14} /> Additional charges apply for medical, Emirates ID, entry permit, insurance and any typing-centre fees. All costs are itemized before you approve.</p>
        </section>

        {/* ── 5. FOUR TYPICAL FILES, PRICED LIVE ──────────────── */}
        <section className="gv-pro-section" id="pricing">
          <div className="gv-pro-heading">
            <ProEyebrow>Typical projects</ProEyebrow>
            <h2>Four typical files, <strong>priced live.</strong></h2>
            <p>Every quote separates government fees, service charges and third-party costs.</p>
          </div>
          <div className="gv-pro-pricing-grid">
            {typicalFiles.map((file) => (
              <article className="gv-pro-pricing-card" key={file.title}>
                <h3>{file.title}</h3>
                <ul>
                  {file.items.map((item) => (
                    <li key={item}><Check size={14} />{item}</li>
                  ))}
                </ul>
                <div className="gv-pro-pricing-footer">
                  <strong>{file.estimate}</strong>
                  <span>{file.note}</span>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '24px', padding: '24px 28px', background: '#fff', border: '1px solid var(--pro-line)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 760, color: '#211f1a' }}>Need an exact estimate for your team?</h3>
              <p style={{ margin: '4px 0 0', color: 'var(--pro-muted)', fontSize: '13px', lineHeight: 1.6 }}>Select your required PRO service, company emirate, and employee count to calculate estimated government & service costs.</p>
            </div>
            <button className="gv-pro-button" type="button" aria-haspopup="dialog" onClick={() => setCalculatorOpen(true)}>
              Open PRO Calculator <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* ── 6. THE WINDOWS THAT TURN INTO FINES ─────────────── */}
        <section className="gv-pro-section gv-pro-deadlines-section" id="deadlines">
          <div className="gv-pro-heading">
            <ProEyebrow>Good to know</ProEyebrow>
            <h2>The windows that turn into <strong>fines.</strong></h2>
          </div>
          <div className="gv-pro-deadlines">
            {deadlines.map((d) => (
              <article key={d.title}>
                <strong>{d.value}</strong>
                <div><h3>{d.title}</h3><p>{d.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 7. REVIEWS ──────────────────────────────────────── */}
        <section className="gv-pro-section gv-pro-review" aria-labelledby="pro-review-title">
          <div className="gv-pro-heading">
            <ProEyebrow>Our reviews</ProEyebrow>
            <h2 id="pro-review-title">Rated <strong>4.9</strong> by the companies we file for.</h2>
          </div>
          <div className="gv-pro-review-card">
            <strong className="gv-pro-review-score">4.9</strong>
            <div>
              <span className="gv-pro-stars" aria-label="Five stars">★★★★★</span>
              <p>Based on Google customer reviews</p>
            </div>
            <a href={contactInfo.googleReviewsUrl} target="_blank" rel="noreferrer">Read reviews on Google <ArrowUpRight size={14} /></a>
          </div>
        </section>

        {/* ── 8. FAQ ──────────────────────────────────────────── */}
        <section className="gv-pro-section gv-pro-faq-section" id="faq">
          <div className="gv-pro-heading">
            <ProEyebrow>Questions</ProEyebrow>
            <h2>PRO service <strong>questions</strong> from business owners.</h2>
          </div>
          <div className="gv-pro-faqs">
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

        {/* ── 9. RELATED SERVICES ─────────────────────────────── */}
        <nav className="gv-pro-related" aria-label="Related services">
          <strong>Related services</strong>
          <div className="gv-pro-related-links">
            {relatedServices.map((s) => (
              <Link href={s.href} key={s.label} className="gv-pro-related-link">
                {s.label}<ArrowUpRight size={12} />
              </Link>
            ))}
          </div>
        </nav>

        {/* ── 10. CLOSING CTA ─────────────────────────────────── */}
        <section className="gv-pro-closing">
          <ProEyebrow>Ready when you are</ProEyebrow>
          <h2>Give your hiring paperwork a home.</h2>
          <p>Share your company details on WhatsApp and get a scoped PRO proposal with every government fee itemized. You stay in control before anything is submitted.</p>
          <div className="gv-pro-closing-actions">
            <a className="gv-pro-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need PRO services for my company. Please send me a scoped proposal and cost breakdown.')}`} target="_blank" rel="noreferrer">
              Chat on WhatsApp <ArrowRight size={15} />
            </a>
            <a className="gv-pro-closing-secondary" href={contactInfo.phoneHref}>Call our team</a>
          </div>
          <small>Private service provider · Government decisions are made by the relevant UAE authority.</small>
        </section>
      </div>
      <FamilyVisaCalculator open={calculatorOpen} onClose={() => setCalculatorOpen(false)} initialService={'pro' satisfies ServiceId} />
    </div>
  );
}

export function ProServicesPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <ProServicesPageContent />
    </StandalonePageFrame>
  );
}
