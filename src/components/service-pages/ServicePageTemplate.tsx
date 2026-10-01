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

interface ServiceVisualPreset {
  id: string;
  icon: LucideIcon;
  accent: string;
  metric: string;
  caption: string;
  composition: 'editorial' | 'architecture' | 'orbit' | 'document' | 'dashboard';
}

const serviceVisuals: Record<string, ServiceVisualPreset> = {
  'Golden Visa': { id: 'golden-residency', icon: Award, accent: '#C5A059', metric: '10 YEARS', caption: 'Long-term residency', composition: 'editorial' },
  'Property Visa': { id: 'property-residency', icon: Building2, accent: '#A88643', metric: 'AED 2M+', caption: 'Property investor route', composition: 'architecture' },
  'Family Visa': { id: 'family-residency', icon: HeartHandshake, accent: '#B79552', metric: 'FAMILY', caption: 'One coordinated plan', composition: 'orbit' },
  'Newborn Visa': { id: 'newborn-registration', icon: Baby, accent: '#BE9C68', metric: 'NEW ARRIVAL', caption: 'A clear first step', composition: 'orbit' },
  'Maid Visa': { id: 'household-residency', icon: Users, accent: '#927447', metric: 'HOUSEHOLD', caption: 'Sponsor support', composition: 'document' },
  'Emirates ID': { id: 'identity-card', icon: CreditCard, accent: '#B79857', metric: 'EMIRATES ID', caption: 'Identity services', composition: 'dashboard' },
  'Medical & EID': { id: 'medical-identity', icon: HeartPulse, accent: '#8F9270', metric: 'MEDICAL + EID', caption: 'Health and identity steps', composition: 'dashboard' },
  'Visa Validity Checker': { id: 'visa-status', icon: BadgeCheck, accent: '#A58D54', metric: 'STATUS CHECK', caption: 'Review your visa details', composition: 'editorial' },
  'ILOE Insurance': { id: 'iloe-protection', icon: Umbrella, accent: '#927B50', metric: 'ILOE', caption: 'Coverage guidance', composition: 'orbit' },
  'DLD Trustee Services': { id: 'dld-trustee', icon: Landmark, accent: '#B18B4F', metric: 'DLD', caption: 'Property documentation', composition: 'architecture' },
  'Property Revaluation': { id: 'property-valuation', icon: TrendingUp, accent: '#9D8249', metric: 'VALUATION', caption: 'Property value review', composition: 'dashboard' },
  'PRO Services': { id: 'pro-coordination', icon: BriefcaseBusiness, accent: '#C5A059', metric: 'CASE SUPPORT', caption: 'Government coordination', composition: 'document' },
  'Amer Center': { id: 'amer-center', icon: FileCheck2, accent: '#A28148', metric: 'AMER', caption: 'Application assistance', composition: 'dashboard' },
  'Attestation': { id: 'document-attestation', icon: Stamp, accent: '#B18A4C', metric: 'CERTIFIED', caption: 'Document authentication', composition: 'document' },
  'Legal Translation': { id: 'legal-translation', icon: Languages, accent: '#927B50', metric: 'EN  /  AR', caption: 'Certified legal translation', composition: 'editorial' },
  'Power of Attorney (POA)': { id: 'power-of-attorney', icon: FileText, accent: '#A48B57', metric: 'AUTHORITY', caption: 'Formal representation', composition: 'document' },
  'Wills & Last Testament': { id: 'estate-planning', icon: Scale, accent: '#91794C', metric: 'LEGACY', caption: 'Plan with clarity', composition: 'architecture' },
};

const defaultVisual: ServiceVisualPreset = {
  id: 'service-guidance', icon: ShieldCheck, accent: '#C5A059', metric: 'UAE SERVICES', caption: 'Guidance for your case', composition: 'editorial',
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
  <div className="mb-8">
    <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D5B5] bg-[#F8F1DF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C6D2D]">
      <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
      {eyebrow}
    </div>
    <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h2>
  </div>
);

const Card = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-3xl border border-[#E9E2D2] bg-white p-6 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.26)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(197,160,89,0.34)]">
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

  return (
    <StandalonePageFrame currentView="career" showMobileStickyBar={false}>
      <div className={`service-page-theme service-theme-${visual.id} bg-[#f9f6f0] text-slate-900 dark:bg-[#07090F] dark:text-slate-100`} style={visualStyle}>
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

        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-6 lg:px-8 lg:pt-12">
          <div className={`service-hero-frame service-hero-frame--${visual.composition}`}>
            <div className="service-hero-grid grid items-center gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D3A7] bg-[#F8F1DF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D2D]">
                  <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
                  {eyebrow}
                </div>

                <h1 className="mt-6 inline-block max-w-xl rounded-r-lg border border-[#EADCC0] border-l-4 border-l-[#C5A059] bg-white/80 px-5 py-4 text-4xl font-black tracking-tight text-slate-900 shadow-sm dark:border-white/10 dark:border-l-[#C5A059] dark:bg-white/5 md:text-5xl lg:text-[3.25rem]">
                  {title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {actionCtas ? actionCtas.map((cta) => {
                    const Icon = cta.type === 'phone' ? Phone : ArrowRight;
                    const className = cta.type === 'contact'
                      ? 'inline-flex items-center gap-2 rounded-lg bg-[#C5A059] px-4 py-3 text-sm font-bold text-slate-950 shadow-sm transition-colors hover:bg-[#d4b36f]'
                      : cta.type === 'whatsapp'
                        ? 'inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-600'
                        : 'inline-flex items-center gap-2 rounded-lg border border-[#D7C28C] bg-white px-4 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-[#fffaf0]';
                    return cta.type === 'contact' ? (
                      <Link key={cta.label} href={cta.href} className={className}>{cta.label}<Icon className="h-4 w-4" /></Link>
                    ) : (
                      <a key={cta.label} href={cta.href} target={cta.href.startsWith('http') ? '_blank' : undefined} rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={className}>{cta.type === 'whatsapp' ? <WhatsAppIcon className="h-4 w-4" /> : <Icon className="h-4 w-4" />}{cta.label}</a>
                    );
                  }) : (
                    <>
                      <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_30px_-12px_rgba(197,160,89,0.9)] transition-transform hover:-translate-y-0.5">Contact our team <ArrowRight className="h-4 w-4" /></Link>
                      <a href={secondaryCtaHref} target={secondaryCtaHref.startsWith('http') ? '_blank' : undefined} rel={secondaryCtaHref.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 rounded-full border border-[#D7C28C] bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-[#fffaf0]">{secondaryCtaLabel}</a>
                    </>
                  )}
                </div>
              </div>

              <ServiceArtwork visual={visual} title={title} badge={badge} eyebrow={eyebrow} />
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl space-y-16 px-4 pb-20 md:px-6 lg:px-8">
          <section>
            <SectionHeader eyebrow="Overview" title={overviewTitle} />
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[28px] border border-[#EADCC0] bg-white p-7 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]">
                <p className="text-lg leading-9 text-slate-700">{overviewText}</p>
              </div>

              <div className="rounded-[28px] border border-[#EADCC0] bg-[#fffaf0] p-7">
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

          <section>
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

          <section>
            <SectionHeader eyebrow="Process" title="How the application is managed" />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((step, index) => (
                <div key={step.title} className="rounded-[28px] border border-[#E8D9BF] bg-white p-6 shadow-[0_18px_35px_-28px_rgba(15,23,42,0.25)]">
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

          <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-[#EADCC0] bg-white p-7 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]">
              <SectionHeader eyebrow="Documents" title="Common checklist" />
              <ul className="space-y-3">
                {documents.map((document) => (
                  <li key={document} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#C5A059]" />
                    <span>{document}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#EADCC0] bg-[#fffaf0] p-7 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)]">
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
            </div>
          </section>

          <section className="rounded-[32px] border border-[#E1D3AA] bg-gradient-to-r from-[#f9f5ec] to-[#f5ead6] p-8 md:p-10">
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
