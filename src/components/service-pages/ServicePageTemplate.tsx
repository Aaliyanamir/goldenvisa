'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronDown, ChevronRight, Home, Phone, ShieldCheck, type LucideIcon } from 'lucide-react';
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
  image: string;
  imageAlt: string;
  layout: 'split' | 'immersive';
}

const unsplashPhoto = (id: string) => `https://images.unsplash.com/${id}`;
const serviceImageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) =>
  `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 75}`;

const serviceVisuals: Record<string, ServiceVisualPreset> = {
  'Golden Visa': { id: 'golden-residency', icon: ShieldCheck, accent: '#D0A94F', metric: '10 YEARS', caption: 'Long-term residency', image: unsplashPhoto('photo-1651467606797-e1c660cf3fda'), imageAlt: 'Dubai skyline at sunset', layout: 'immersive' },
  'Property Visa': { id: 'property-residency', icon: ShieldCheck, accent: '#C28B45', metric: 'AED 2M+', caption: 'Property investor route', image: unsplashPhoto('photo-1600596542815-ffad4c1539a9'), imageAlt: 'Contemporary home representing property investment', layout: 'immersive' },
  'Family Visa': { id: 'family-residency', icon: ShieldCheck, accent: '#B59A55', metric: 'FAMILY', caption: 'One coordinated plan', image: unsplashPhoto('photo-1511895426328-dc8714191300'), imageAlt: 'Family spending time together outdoors', layout: 'split' },
  'Newborn Visa': { id: 'newborn-registration', icon: ShieldCheck, accent: '#D1A65F', metric: 'NEW ARRIVAL', caption: 'A clear first step', image: unsplashPhoto('photo-1511895426328-dc8714191300'), imageAlt: 'Family spending time together outdoors', layout: 'split' },
  'Maid Visa': { id: 'household-residency', icon: ShieldCheck, accent: '#A98B4C', metric: 'HOUSEHOLD', caption: 'Sponsor support', image: unsplashPhoto('photo-1581578731548-c64695cc6952'), imageAlt: 'Household support at home', layout: 'split' },
  'Emirates ID': { id: 'identity-card', icon: ShieldCheck, accent: '#C5A059', metric: 'EMIRATES ID', caption: 'Identity services', image: unsplashPhoto('photo-1651467606797-e1c660cf3fda'), imageAlt: 'Dubai skyline and modern city buildings', layout: 'split' },
  'Medical & EID': { id: 'medical-identity', icon: ShieldCheck, accent: '#A78F5A', metric: 'MEDICAL + EID', caption: 'Health and identity steps', image: unsplashPhoto('photo-1612349317150-e413f6a5b16d'), imageAlt: 'Healthcare professional in a clinical setting', layout: 'split' },
  'Visa Validity Checker': { id: 'visa-status', icon: ShieldCheck, accent: '#C0A45C', metric: 'STATUS CHECK', caption: 'Review your visa details', image: unsplashPhoto('photo-1450101499163-c8848c66ca85'), imageAlt: 'Reviewing official documents at a desk', layout: 'split' },
  'ILOE Insurance': { id: 'iloe-protection', icon: ShieldCheck, accent: '#B49550', metric: 'ILOE', caption: 'Coverage guidance', image: unsplashPhoto('photo-1521791136064-7986c2920216'), imageAlt: 'Professionals discussing support options', layout: 'split' },
  'DLD Trustee Services': { id: 'dld-trustee', icon: ShieldCheck, accent: '#C19A55', metric: 'DLD', caption: 'Property documentation', image: unsplashPhoto('photo-1600596542815-ffad4c1539a9'), imageAlt: 'Contemporary home representing property documentation', layout: 'split' },
  'Property Revaluation': { id: 'property-valuation', icon: ShieldCheck, accent: '#B88F42', metric: 'VALUATION', caption: 'Property value review', image: unsplashPhoto('photo-1600596542815-ffad4c1539a9'), imageAlt: 'Contemporary home representing property valuation', layout: 'split' },
  'PRO Services': { id: 'pro-coordination', icon: ShieldCheck, accent: '#C4A858', metric: 'CASE SUPPORT', caption: 'Government coordination', image: unsplashPhoto('photo-1521737711867-e3b97375f902'), imageAlt: 'Professionals coordinating work together', layout: 'split' },
  'Amer Center': { id: 'amer-center', icon: ShieldCheck, accent: '#B79248', metric: 'AMER', caption: 'Application assistance', image: unsplashPhoto('photo-1651467606797-e1c660cf3fda'), imageAlt: 'Dubai skyline at sunset', layout: 'split' },
  'Attestation': { id: 'document-attestation', icon: ShieldCheck, accent: '#C29B52', metric: 'CERTIFIED', caption: 'Document authentication', image: unsplashPhoto('photo-1450101499163-c8848c66ca85'), imageAlt: 'Reviewing official documents at a desk', layout: 'split' },
  'Legal Translation': { id: 'legal-translation', icon: ShieldCheck, accent: '#B79A5D', metric: 'EN  /  AR', caption: 'Certified legal translation', image: unsplashPhoto('photo-1450101499163-c8848c66ca85'), imageAlt: 'Reviewing official documents at a desk', layout: 'split' },
  'Power of Attorney (POA)': { id: 'power-of-attorney', icon: ShieldCheck, accent: '#C3A15A', metric: 'AUTHORITY', caption: 'Formal representation', image: unsplashPhoto('photo-1450101499163-c8848c66ca85'), imageAlt: 'Reviewing official documents at a desk', layout: 'split' },
  'Wills & Last Testament': { id: 'estate-planning', icon: ShieldCheck, accent: '#A88F57', metric: 'LEGACY', caption: 'Plan with clarity', image: unsplashPhoto('photo-1600596542815-ffad4c1539a9'), imageAlt: 'Contemporary home representing long-term planning', layout: 'split' },
};

const defaultVisual: ServiceVisualPreset = {
  id: 'service-guidance', icon: ShieldCheck, accent: '#C5A059', metric: 'UAE SERVICES', caption: 'Guidance for your case', image: unsplashPhoto('photo-1651467606797-e1c660cf3fda'), imageAlt: 'Dubai skyline', layout: 'split',
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
  const Icon = visual.icon;

  return (
    <section className={`service-hero service-hero--photo service-hero--${visual.layout} service-hero--${visual.id}`}>
      <div className="service-hero-photo-copy">
        <ServiceIntro eyebrow={eyebrow} title={title} description={description} actionCtas={actionCtas} secondaryCtaLabel={secondaryCtaLabel} secondaryCtaHref={secondaryCtaHref} />
      </div>
      <aside className="service-hero-photo-panel">
        <Image className="service-hero-photo-image" loader={serviceImageLoader} src={visual.image} alt={visual.imageAlt} fill sizes="(max-width: 900px) calc(100vw - 48px), 560px" quality={75} preload />
        <div className="service-hero-photo-shade" aria-hidden="true" />
        <div className="service-hero-photo-topline"><span>{badge}</span><span>UAE / DXB</span></div>
        <div className="service-hero-photo-caption">
          <span className="service-hero-photo-icon"><Icon className="h-5 w-5" /></span>
          <span><strong>{visual.metric}</strong><small>{visual.caption}</small></span>
        </div>
      </aside>
    </section>
  );
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
