'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, Baby, BadgeCheck, BriefcaseBusiness, Building2, CheckCircle2, ChevronDown, ChevronRight, CreditCard, FileCheck2, FileText, HeartHandshake, HeartPulse, Home, Landmark, Languages, Phone, Scale, ShieldCheck, Stamp, TrendingUp, Umbrella, Users, type LucideIcon } from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  detail: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceCta {
  label: string;
  href: string;
  type: 'contact' | 'whatsapp' | 'phone';
}

type ServiceDesign =
  | 'golden-residency'
  | 'property-residency'
  | 'family-residency'
  | 'newborn-registration'
  | 'household-residency'
  | 'identity-card'
  | 'medical-identity'
  | 'visa-status'
  | 'iloe-protection'
  | 'dld-trustee'
  | 'property-valuation'
  | 'pro-coordination'
  | 'amer-center'
  | 'document-attestation'
  | 'legal-translation'
  | 'power-of-attorney'
  | 'estate-planning';

type ServiceSection = 'overview' | 'highlights' | 'process' | 'documents' | 'faq' | 'contact';

interface ServiceVisualPreset {
  id: string;
  icon: LucideIcon;
  accent: string;
  metric: string;
  caption: string;
}

const serviceVisuals: Record<string, ServiceVisualPreset> = {
  'Golden Visa': { id: 'golden-residency', icon: Award, accent: '#D0A94F', metric: '10 YEARS', caption: 'Long-term residency' },
  'Property Visa': { id: 'property-residency', icon: Building2, accent: '#C28B45', metric: 'AED 2M+', caption: 'Property investor route' },
  'Family Visa': { id: 'family-residency', icon: HeartHandshake, accent: '#B59A55', metric: 'FAMILY', caption: 'One coordinated plan' },
  'Newborn Visa': { id: 'newborn-registration', icon: Baby, accent: '#D1A65F', metric: 'NEW ARRIVAL', caption: 'A clear first step' },
  'Maid Visa': { id: 'household-residency', icon: Users, accent: '#A98B4C', metric: 'HOUSEHOLD', caption: 'Sponsor support' },
  'Emirates ID': { id: 'identity-card', icon: CreditCard, accent: '#C5A059', metric: 'EMIRATES ID', caption: 'Identity services' },
  'Medical & EID': { id: 'medical-identity', icon: HeartPulse, accent: '#A78F5A', metric: 'MEDICAL + EID', caption: 'Health and identity steps' },
  'Visa Validity Checker': { id: 'visa-status', icon: BadgeCheck, accent: '#C0A45C', metric: 'STATUS CHECK', caption: 'Review your visa details' },
  'ILOE Insurance': { id: 'iloe-protection', icon: Umbrella, accent: '#B49550', metric: 'ILOE', caption: 'Coverage guidance' },
  'DLD Trustee Services': { id: 'dld-trustee', icon: Landmark, accent: '#C19A55', metric: 'DLD', caption: 'Property documentation' },
  'Property Revaluation': { id: 'property-valuation', icon: TrendingUp, accent: '#B88F42', metric: 'VALUATION', caption: 'Property value review' },
  'PRO Services': { id: 'pro-coordination', icon: BriefcaseBusiness, accent: '#C4A858', metric: 'CASE SUPPORT', caption: 'Government coordination' },
  'Amer Center': { id: 'amer-center', icon: FileCheck2, accent: '#B79248', metric: 'AMER', caption: 'Application assistance' },
  'Attestation': { id: 'document-attestation', icon: Stamp, accent: '#C29B52', metric: 'CERTIFIED', caption: 'Document authentication' },
  'Legal Translation': { id: 'legal-translation', icon: Languages, accent: '#B79A5D', metric: 'EN  /  AR', caption: 'Certified legal translation' },
  'Power of Attorney (POA)': { id: 'power-of-attorney', icon: FileText, accent: '#C3A15A', metric: 'AUTHORITY', caption: 'Formal representation' },
  'Wills & Last Testament': { id: 'estate-planning', icon: Scale, accent: '#A88F57', metric: 'LEGACY', caption: 'Plan with clarity' },
};

const defaultVisual: ServiceVisualPreset = {
  id: 'service-guidance', icon: ShieldCheck, accent: '#C5A059', metric: 'UAE SERVICES', caption: 'Guidance for your case',
};

const serviceFlows: Record<ServiceDesign, ServiceSection[]> = {
  'golden-residency': ['overview', 'highlights', 'process', 'documents', 'faq', 'contact'],
  'property-residency': ['process', 'overview', 'documents', 'highlights', 'faq', 'contact'],
  'family-residency': ['overview', 'process', 'faq', 'highlights', 'documents', 'contact'],
  'newborn-registration': ['documents', 'overview', 'faq', 'process', 'highlights', 'contact'],
  'household-residency': ['overview', 'documents', 'highlights', 'process', 'faq', 'contact'],
  'identity-card': ['highlights', 'process', 'overview', 'faq', 'documents', 'contact'],
  'medical-identity': ['process', 'highlights', 'documents', 'overview', 'faq', 'contact'],
  'visa-status': ['overview', 'faq', 'highlights', 'documents', 'process', 'contact'],
  'iloe-protection': ['highlights', 'overview', 'faq', 'process', 'documents', 'contact'],
  'dld-trustee': ['process', 'documents', 'highlights', 'overview', 'faq', 'contact'],
  'property-valuation': ['overview', 'documents', 'highlights', 'faq', 'process', 'contact'],
  'pro-coordination': ['process', 'highlights', 'documents', 'faq', 'overview', 'contact'],
  'amer-center': ['overview', 'process', 'documents', 'faq', 'highlights', 'contact'],
  'document-attestation': ['documents', 'process', 'overview', 'highlights', 'faq', 'contact'],
  'legal-translation': ['highlights', 'overview', 'documents', 'process', 'faq', 'contact'],
  'power-of-attorney': ['overview', 'highlights', 'documents', 'faq', 'process', 'contact'],
  'estate-planning': ['highlights', 'overview', 'process', 'faq', 'documents', 'contact'],
};

interface ServicePageTemplateProps {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  overviewTitle: string;
  overviewText: string;
  highlights: ServiceHighlight[];
  process: ServiceStep[];
  documents: string[];
  faq: ServiceFaq[];
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  actionCtas?: ServiceCta[];
}

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="service-section-header mb-8">
    <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D5B5] bg-[#F8F1DF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C6D2D]">
      <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
      {eyebrow}
    </div>
    <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h2>
  </div>
);

const Card = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="service-highlight-card rounded-3xl border border-[#E9E2D2] bg-white p-6 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.26)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(197,160,89,0.34)]">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F1DF] text-[#8C6D2D]">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
  </div>
);

function ServiceArtwork({
  visual,
  title,
  badge,
  eyebrow,
}: {
  visual: ServiceVisualPreset;
  title: string;
  badge: string;
  eyebrow: string;
}) {
  const Icon = visual.icon;

  return (
    <div className={`service-artwork service-artwork--${visual.id}`} role="img" aria-label={`${title}: ${visual.caption}`}>
      <div className="service-artwork-grid" />
      <div className="service-artwork-topline">
        <span>{eyebrow}</span>
        <span>UAE / DXB</span>
      </div>
      <div className="service-artwork-center">
        <div className="service-artwork-emblem"><Icon className="h-8 w-8" /></div>
        <div>
          <p className="service-artwork-metric">{visual.metric}</p>
          <p className="service-artwork-caption">{visual.caption}</p>
        </div>
      </div>
      <div className="service-artwork-details">
        <span><span className="service-artwork-status" /> {badge}</span>
        <span>{title}</span>
      </div>
      <span className="service-artwork-index" aria-hidden="true">GV / {visual.id.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}

function ServiceActions({
  actionCtas,
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  actionCtas?: ServiceCta[];
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}) {
  if (actionCtas) {
    return (
      <div className="service-hero-actions">
        {actionCtas.map((cta) => {
          const Icon = cta.type === 'phone' ? Phone : ArrowRight;
          const className = `service-action service-action--${cta.type}`;
          return cta.type === 'contact' ? (
            <Link key={cta.label} href={cta.href} className={className}>{cta.label}<Icon className="h-4 w-4" /></Link>
          ) : (
            <a key={cta.label} href={cta.href} target={cta.href.startsWith('http') ? '_blank' : undefined} rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={className}>
              {cta.type === 'whatsapp' ? <WhatsAppIcon className="h-4 w-4" /> : <Icon className="h-4 w-4" />}{cta.label}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="service-hero-actions">
      <Link href="/contact-us" className="service-action service-action--contact">Contact our team <ArrowRight className="h-4 w-4" /></Link>
      <a href={secondaryCtaHref} target={secondaryCtaHref.startsWith('http') ? '_blank' : undefined} rel={secondaryCtaHref.startsWith('http') ? 'noreferrer' : undefined} className="service-action service-action--secondary">{secondaryCtaLabel}</a>
    </div>
  );
}

function ServiceIntro({
  eyebrow,
  title,
  description,
  actionCtas,
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actionCtas?: ServiceCta[];
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}) {
  return (
    <div className="service-hero-intro">
      <span className="service-hero-eyebrow"><span />{eyebrow}</span>
      <h1 className="service-page-title">{title}</h1>
      <p className="service-hero-description">{description}</p>
      <ServiceActions actionCtas={actionCtas} secondaryCtaLabel={secondaryCtaLabel} secondaryCtaHref={secondaryCtaHref} />
    </div>
  );
}

function ServiceHero({
  visual,
  eyebrow,
  title,
  description,
  badge,
  actionCtas,
  secondaryCtaLabel,
  secondaryCtaHref,
}: {
  visual: ServiceVisualPreset;
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  actionCtas?: ServiceCta[];
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}) {
  const intro = <ServiceIntro eyebrow={eyebrow} title={title} description={description} actionCtas={actionCtas} secondaryCtaLabel={secondaryCtaLabel} secondaryCtaHref={secondaryCtaHref} />;
  const artwork = <ServiceArtwork visual={visual} title={title} badge={badge} eyebrow={eyebrow} />;

  switch (visual.id) {
    case 'golden-residency':
      return <section className="service-hero service-hero--golden"><div className="service-hero-golden-copy"><span className="service-hero-edition">RESIDENCY / 01</span>{intro}<div className="service-hero-golden-note"><Award /> <span>{visual.metric}<small>{visual.caption}</small></span></div></div><aside className="service-hero-golden-art">{artwork}<span className="service-hero-side-label">UNITED ARAB EMIRATES</span></aside></section>;
    case 'property-residency':
      return <section className="service-hero service-hero--property"><aside className="service-hero-property-art">{artwork}<span className="service-hero-property-stamp">INVESTOR ROUTE</span></aside><div className="service-hero-property-copy">{intro}<div className="service-hero-property-bar"><Building2 /><span>{visual.metric}</span><small>{visual.caption}</small></div></div></section>;
    case 'family-residency':
      return <section className="service-hero service-hero--family"><div className="service-hero-family-orbit" aria-hidden="true"><span /><span /><span /></div><div className="service-hero-family-copy">{intro}</div><div className="service-hero-family-art">{artwork}<span>ONE FAMILY. ONE PLAN.</span></div></section>;
    case 'newborn-registration':
      return <section className="service-hero service-hero--newborn"><header className="service-hero-newborn-heading"><span>WELCOME TO THE UAE</span><Baby /></header><div className="service-hero-newborn-card"><div className="service-hero-newborn-copy">{intro}</div><div className="service-hero-newborn-art">{artwork}<span>FIRST DOCUMENTS<br />A NEW CHAPTER</span></div></div></section>;
    case 'household-residency':
      return <section className="service-hero service-hero--household"><div className="service-hero-household-copy"><span className="service-hero-file-tab">SPONSOR FILE / 01</span>{intro}<div className="service-hero-household-tags"><span>SPONSOR</span><span>EMPLOYEE</span><span>DOCUMENTS</span></div></div><aside className="service-hero-household-art">{artwork}</aside></section>;
    case 'identity-card':
      return <section className="service-hero service-hero--identity"><div className="service-hero-identity-copy">{intro}<span className="service-hero-identity-index">IDENTITY / UAE</span></div><aside className="service-hero-identity-card"><span className="service-hero-chip" /><div>{artwork}</div><span className="service-hero-card-number">784 •••• ••••••• •</span></aside></section>;
    case 'medical-identity':
      return <section className="service-hero service-hero--medical"><div className="service-hero-medical-heading">{intro}</div><div className="service-hero-medical-track"><article><span>01 / HEALTH</span><HeartPulse /><h2>Medical fitness</h2><p>Assessment and required health records</p></article><div className="service-hero-medical-connector" /><article><span>02 / IDENTITY</span><CreditCard /><h2>Emirates ID</h2><p>Biometrics and identity documentation</p></article></div></section>;
    case 'visa-status':
      return <section className="service-hero service-hero--status"><div className="service-hero-status-copy"><span className="service-hero-status-label"><BadgeCheck /> STATUS REVIEW</span>{intro}</div><aside className="service-hero-status-panel"><div className="service-hero-status-top"><span>CASE REVIEW</span><span>UAE / DXB</span></div>{artwork}<div className="service-hero-status-footer"><span>DOCUMENT CHECK</span><span>DETAILS REQUIRED</span></div></aside></section>;
    case 'iloe-protection':
      return <section className="service-hero service-hero--iloe"><div className="service-hero-iloe-shield"><span /><Umbrella /></div><div className="service-hero-iloe-copy">{intro}<span className="service-hero-iloe-caption">PROTECTION / GUIDANCE / CLARITY</span></div><aside className="service-hero-iloe-art">{artwork}</aside></section>;
    case 'dld-trustee':
      return <section className="service-hero service-hero--trustee"><div className="service-hero-trustee-copy"><span className="service-hero-trustee-kicker">PROPERTY TRANSFER SERVICES</span>{intro}<div className="service-hero-trustee-seal"><Landmark /> DLD TRUSTEE SUPPORT</div></div><aside className="service-hero-trustee-art">{artwork}<span>TRANSFER<br />RECORDS<br />COMPLIANCE</span></aside></section>;
    case 'property-valuation':
      return <section className="service-hero service-hero--valuation"><div className="service-hero-valuation-chart" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div><div className="service-hero-valuation-copy">{intro}</div><aside className="service-hero-valuation-result"><TrendingUp /><span>{visual.metric}</span><small>{visual.caption}</small>{artwork}</aside></section>;
    case 'pro-coordination':
      return <section className="service-hero service-hero--pro"><header className="service-hero-pro-heading"><span>ONE POINT OF COORDINATION</span>{intro}</header><div className="service-hero-pro-board"><div><span>01</span><FileText /><strong>DOCUMENTS</strong></div><div><span>02</span><BriefcaseBusiness /><strong>GOVERNMENT</strong></div><div><span>03</span><CheckCircle2 /><strong>FOLLOW-UP</strong></div>{artwork}</div></section>;
    case 'amer-center':
      return <section className="service-hero service-hero--amer"><aside className="service-hero-amer-counter"><span className="service-hero-amer-number">A</span>{artwork}<span className="service-hero-amer-hours">APPLICATION SUPPORT / UAE</span></aside><div className="service-hero-amer-copy">{intro}<div className="service-hero-amer-line"><span />VISA FACILITATION</div></div></section>;
    case 'document-attestation':
      return <section className="service-hero service-hero--attestation"><div className="service-hero-attestation-stack"><span /><span /><div>{artwork}<Stamp /></div></div><div className="service-hero-attestation-copy"><span className="service-hero-attestation-overline">DOCUMENT AUTHENTICATION</span>{intro}</div></section>;
    case 'legal-translation':
      return <section className="service-hero service-hero--translation"><div className="service-hero-translation-language"><span>EN</span><Languages /><span>AR</span></div><div className="service-hero-translation-copy">{intro}</div><aside className="service-hero-translation-sheet"><span>ENGLISH</span><span>العربية</span>{artwork}<div className="service-hero-translation-rule" /></aside></section>;
    case 'power-of-attorney':
      return <section className="service-hero service-hero--poa"><div className="service-hero-poa-copy"><span className="service-hero-poa-ref">LEGAL INSTRUMENT / UAE</span>{intro}</div><aside className="service-hero-poa-document"><div className="service-hero-poa-document-top"><span>POWER OF ATTORNEY</span><span>01</span></div>{artwork}<div className="service-hero-signature"><span>AUTHORIZED SIGNATURE</span><span /></div></aside></section>;
    case 'estate-planning':
      return <section className="service-hero service-hero--estate"><div className="service-hero-estate-copy"><span className="service-hero-estate-mark">A PLAN FOR WHAT MATTERS</span>{intro}<div className="service-hero-estate-rule"><span /> <Scale /> <span /></div></div><aside className="service-hero-estate-art">{artwork}<span>FAMILY<br />FUTURE<br />LEGACY</span></aside></section>;
    default:
      return <section className="service-hero service-hero--default">{intro}{artwork}</section>;
  }
}

export function ServicePageTemplate({
  eyebrow,
  title,
  description,
  badge,
  overviewTitle,
  overviewText,
  highlights,
  process,
  documents,
  faq,
  secondaryCtaLabel = 'Speak to an advisor',
  secondaryCtaHref = '/contact-us',
  actionCtas,
}: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const visual = serviceVisuals[title] ?? defaultVisual;
  const visualStyle = { '--service-accent': visual.accent } as CSSProperties;
  const serviceFlow = serviceFlows[visual.id as ServiceDesign] ?? serviceFlows['golden-residency'];

  return (
    <StandalonePageFrame currentView="career" showMobileStickyBar={false}>
      <div className={`service-page-theme service-theme-${visual.id} service-layout--${visual.id} bg-[#f9f6f0] text-slate-900 dark:bg-[#07090F] dark:text-slate-100`} style={visualStyle}>
        <div className="mx-auto max-w-7xl px-4 pt-6 md:px-6 lg:px-8 lg:pt-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm text-slate-600">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-[#E7DFC7] bg-white px-2.5 py-1.5 font-medium text-slate-700 transition-colors hover:text-[#8C6D2D]">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <Link href="/#services" className="font-medium text-slate-700 transition-colors hover:text-[#8C6D2D]">Services</Link>
            <ChevronRight className="h-4 w-4 text-slate-400" />
            <span className="truncate font-semibold text-slate-900">{title}</span>
          </nav>
        </div>

        <ServiceHero visual={visual} eyebrow={eyebrow} title={title} description={description} badge={badge} actionCtas={actionCtas} secondaryCtaLabel={secondaryCtaLabel} secondaryCtaHref={secondaryCtaHref} />

        <main className="service-content mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-20 md:px-6 lg:px-8">
          <section className="service-overview-section" style={{ order: serviceFlow.indexOf('overview') }}>
            <SectionHeader eyebrow="Overview" title={overviewTitle} />
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="service-overview-copy rounded-[28px] border border-[#EADCC0] bg-white p-7 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]">
                <p className="text-lg leading-9 text-slate-700">{overviewText}</p>
              </div>

              <div className="service-overview-assurances rounded-[28px] border border-[#EADCC0] bg-[#fffaf0] p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C5A059]/10 text-[#8C6D2D]">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C6D2D]">Why clients choose us</p>
                    <p className="text-xl font-black text-slate-900">Professional support</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {['Clear guidance', 'Document review', 'Personalized next steps'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-[#C5A059]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="service-highlights-section" style={{ order: serviceFlow.indexOf('highlights') }}>
            <SectionHeader eyebrow="Highlights" title="What this service includes" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  icon={<span className="text-lg font-black">0{index + 1}</span>}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>

          <section className="service-process-section" style={{ order: serviceFlow.indexOf('process') }}>
            <SectionHeader eyebrow="Process" title="How the application is managed" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.title} className="service-process-step rounded-[28px] border border-[#E8D9BF] bg-white p-6 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.25)]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6D2D]">Step {index + 1}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F1DF] text-sm font-black text-[#8C6D2D]">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="service-documents-panel rounded-[28px] border border-[#EADCC0] bg-white p-7 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]" style={{ order: serviceFlow.indexOf('documents') }}>
              <SectionHeader eyebrow="Documents" title="Common checklist" />
              <ul className="space-y-3">
                {documents.map((document) => (
                  <li key={document} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#C5A059]" />
                    <span>{document}</span>
                  </li>
                ))}
              </ul>
          </section>

          <section className="service-faq-panel rounded-[28px] border border-[#EADCC0] bg-[#fffaf0] p-7 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]" style={{ order: serviceFlow.indexOf('faq') }}>
              <SectionHeader eyebrow="Questions" title="Frequently asked questions" />
              <div className="space-y-3">
                {faq.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div key={item.question} className="rounded-2xl border border-[#E7DFC7] bg-white p-3">
                      <button
                        className="flex w-full items-center justify-between gap-4 text-left"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <span className="font-bold text-slate-900">{item.question}</span>
                        <ChevronDown className={`h-4 w-4 text-[#8C6D2D] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>}
                    </div>
                  );
                })}
              </div>
          </section>

          <section className="service-final-cta rounded-[32px] border border-[#E1D3AA] bg-gradient-to-r from-[#f9f5ec] to-[#f5ead6] p-8 md:p-10" style={{ order: serviceFlow.indexOf('contact') }}>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D2D]">Need guidance?</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Speak with our team about your case.</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_30px_-12px_rgba(197,160,89,0.9)]"
                >
                  Contact our team <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/971566556645"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D7C28C] bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:bg-[#fffaf0]"
                >
                  WhatsApp support
                </a>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0E1320]/95 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-16px_rgba(15,23,42,0.45)] backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-md items-center gap-2">
            <Link
              href="/contact-us"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#C5A059] px-3 text-sm font-bold text-slate-950 transition-colors hover:bg-[#d4b36f]"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Contact us
            </Link>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </StandalonePageFrame>
  );
}
