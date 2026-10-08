'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Handshake,
  Home,
  Landmark,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Signature,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { serviceCatalog } from './serviceCatalog';

const content = serviceCatalog['DLD Trustee Services'];

const transactionIcons = [Handshake, FileCheck2, Users, Landmark, Building2, ClipboardCheck];
const processIcons = [MapPin, FileCheck2, Landmark, Banknote, Users, BadgeCheck];
const checklistIcons = [Users, FileText, ClipboardCheck, Landmark, Signature, Building2, Home, MapPin, Banknote, ShieldCheck];
const costIcons = [Banknote, Building2, ClipboardCheck, Landmark, Landmark, Home, FileText];

const checklistGroups = [
  { title: 'People & authority', range: [0, 1] as const },
  { title: 'Property, developer & lender', range: [2, 3] as const },
  { title: 'Representatives & companies', range: [4, 5] as const },
  { title: 'Transfer-specific evidence', range: [6, 7] as const },
  { title: 'Payment & final checks', range: [8, 9] as const },
];

export function DldTrusteePageContent() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <main className="gv-dld-page">
        <div className="gv-dld-shell">
          <nav className="gv-dld-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" />
            <Link href="/#services">Services</Link><ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{content.title}</span>
          </nav>

          <header className="gv-dld-hero">
            <div className="gv-dld-hero-copy">
              <span className="gv-dld-eyebrow"><Landmark size={15} />{content.eyebrow}</span>
              <h1>Property paperwork, <strong>made easier to follow.</strong></h1>
              <p>{content.description}</p>
              <div className="gv-dld-hero-actions">
                <a className="gv-dld-button gv-dld-button--gold" href="#dld-consultation">Plan your trustee appointment <ArrowRight size={17} /></a>
                <a className="gv-dld-button gv-dld-button--outline" href={contactInfo.phoneHref}>Call an advisor</a>
              </div>
              <div className="gv-dld-hero-trust"><ShieldCheck size={17} />Private preparation support · Official registration remains with DLD and the trustee</div>
            </div>

            <div className="gv-dld-hero-visual">
              <div className="gv-dld-hero-photo">
                <Image
                  src="/assets/property/dubai-skyline.jpg"
                  alt="Dubai skyline at sunset with Burj Khalifa and central district"
                  fill
                  priority
                  sizes="(max-width: 800px) 100vw, 48vw"
                />
                <div className="gv-dld-hero-photo-shade" />
                <span className="gv-dld-photo-label"><MapPin size={14} />{content.heroMetric} · {content.heroLabel}</span>
              </div>
              <div className="gv-dld-hero-quick-card">
                <div className="gv-dld-quick-card-icon"><FileCheck2 size={20} /></div>
                <div><strong>One clear transaction plan</strong><span>Parties · property · approvals · payment</span></div>
                <BadgeCheck size={19} />
              </div>
            </div>
          </header>

          <section className="gv-dld-at-a-glance" aria-label="DLD trustee service at a glance">
            {content.metrics.map((metric, index) => {
              const Icon = [Users, ClipboardCheck, Banknote][index] ?? BadgeCheck;
              return (
                <article key={metric.label}>
                  <span className="gv-dld-glance-icon"><Icon size={19} /></span>
                  <div><strong>{metric.value}</strong><p>{metric.label}</p></div>
                </article>
              );
            })}
          </section>

          {content.notice && (
            <aside className="gv-dld-notice" role="note">
              <span><ShieldAlert size={21} /></span>
              <div><strong>{content.notice.title}</strong><p>{content.notice.text}</p></div>
            </aside>
          )}

          <section className="gv-dld-section gv-dld-intro">
            <div className="gv-dld-section-heading">
              <span className="gv-dld-eyebrow"><FileCheck2 size={14} />Before you book</span>
              <h2>{content.introTitle}</h2>
            </div>
            <p>{content.intro}</p>
          </section>

          <section className="gv-dld-section" aria-labelledby="dld-services-title">
            <div className="gv-dld-section-heading">
              <span className="gv-dld-eyebrow"><Home size={14} />What we can help prepare</span>
              <h2 id="dld-services-title">Find your <strong>transaction type.</strong></h2>
              <p>Start with the closest match. Exact requirements depend on the property, parties and receiving trustee.</p>
            </div>
            <div className="gv-dld-transaction-grid">
              {content.highlights.map((item, index) => {
                const Icon = transactionIcons[index] ?? FileCheck2;
                return (
                  <article className="gv-dld-transaction-card" key={item.title}>
                    <span className="gv-dld-card-icon"><Icon size={21} /></span>
                    <span className="gv-dld-card-index">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="gv-dld-process-section" aria-labelledby="dld-process-title">
            <div className="gv-dld-section-heading">
              <span className="gv-dld-eyebrow"><ClipboardCheck size={14} />Step by step</span>
              <h2 id="dld-process-title">{content.processTitle}</h2>
              <p>Use this sequence to see what to confirm before, during and after the appointment.</p>
            </div>
            <ol className="gv-dld-process-list">
              {content.process.map((step, index) => {
                const Icon = processIcons[index] ?? Check;
                return (
                  <li key={step.title}>
                    <span className="gv-dld-process-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="gv-dld-process-icon"><Icon size={19} /></span>
                    <div><h3>{step.title}</h3><p>{step.detail}</p></div>
                    {index < content.process.length - 1 && <span className="gv-dld-process-connector" aria-hidden="true" />}
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="gv-dld-checklist-section" aria-labelledby="dld-checklist-title">
            <div className="gv-dld-checklist-heading">
              <div className="gv-dld-section-heading">
                <span className="gv-dld-eyebrow"><FileText size={14} />Get the file ready</span>
                <h2 id="dld-checklist-title">{content.documentsTitle}</h2>
                <p>The receiving trustee can request additional or different documents. Confirm its current checklist for your transaction.</p>
              </div>
              <div className="gv-dld-checklist-image">
                <Image
                  src="/assets/property/dubai-villa.jpg"
                  alt="Contemporary villa representing a Dubai property transaction"
                  fill
                  sizes="(max-width: 760px) 100vw, 34vw"
                />
                <span><Home size={14} /> PROPERTY RECORDS</span>
              </div>
            </div>
            <div className="gv-dld-checklist-groups">
              {checklistGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {content.documents.slice(group.range[0], group.range[1] + 1).map((document, groupIndex) => {
                      const index = group.range[0] + groupIndex;
                      const Icon = checklistIcons[index] ?? Check;
                      return <li key={document}><span><Icon size={15} /></span>{document}</li>;
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {content.table && (
            <section className="gv-dld-section gv-dld-fees-section" aria-labelledby="dld-costs-title">
              <div className="gv-dld-section-heading">
                <span className="gv-dld-eyebrow"><Banknote size={14} />Costs to confirm</span>
                <h2 id="dld-costs-title">{content.table.title}</h2>
                <p>{content.table.caption}</p>
              </div>
              <div className="gv-dld-cost-grid">
                {content.table.rows.map(([title, when, verify], index) => {
                  const Icon = costIcons[index] ?? Banknote;
                  return (
                    <article key={title}>
                      <span className="gv-dld-cost-icon"><Icon size={18} /></span>
                      <div className="gv-dld-cost-title"><h3>{title}</h3><span>VERIFY BEFORE PAYMENT</span></div>
                      <p><strong>When it may apply</strong>{when}</p>
                      <p><strong>What to verify</strong>{verify}</p>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          <section className="gv-dld-faq-section" aria-labelledby="dld-faq-title">
            <div className="gv-dld-section-heading">
              <span className="gv-dld-eyebrow"><BadgeCheck size={14} />Clear answers</span>
              <h2 id="dld-faq-title">DLD trustee <strong>questions.</strong></h2>
            </div>
            <div className="gv-dld-faq-list">
              {content.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary><span>{faq.question}</span><b aria-hidden="true">+</b></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="gv-dld-cta" id="dld-consultation">
            <div className="gv-dld-cta-icon"><Landmark size={24} /></div>
            <div>
              <span className="gv-dld-eyebrow">A clear next step</span>
              <h2>{content.formTitle}</h2>
              <p>{content.formDescription}</p>
            </div>
            <a href={contactInfo.whatsappHref} className="gv-dld-button gv-dld-button--gold">Request a file review <ArrowRight size={17} /></a>
          </section>
          <p className="gv-dld-disclaimer"><ShieldCheck size={14} />We are a private documentation support provider, not a UAE government agency. DLD and trustee requirements, charges and processing times can change; confirm your transaction with the relevant authority.</p>
        </div>
      </main>
    </StandalonePageFrame>
  );
}
