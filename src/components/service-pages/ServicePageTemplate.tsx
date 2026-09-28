'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CheckCircle2, ChevronDown, ChevronRight, Clock3, FileText, Home, MessageSquare, ShieldCheck } from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

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
}: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <StandalonePageFrame currentView="career" showMobileStickyBar={false}>
      <div className="service-page-theme bg-[#f9f6f0] text-slate-900 dark:bg-[#07090F] dark:text-slate-100">
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
          <div className="overflow-hidden rounded-[32px] border border-[#EADCC0] bg-gradient-to-br from-[#fffdf9] via-[#fffaf0] to-[#f5efe5] shadow-[0_30px_80px_-40px_rgba(139,109,45,0.45)]">
            <div className="grid items-center gap-10 px-5 py-8 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D3A7] bg-[#F8F1DF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D2D]">
                  <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
                  {eyebrow}
                </div>

                <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
                  {title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_30px_-12px_rgba(197,160,89,0.9)] transition-transform hover:-translate-y-0.5"
                  >
                    Contact our team <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={secondaryCtaHref}
                    target={secondaryCtaHref.startsWith('http') ? '_blank' : undefined}
                    rel={secondaryCtaHref.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D7C28C] bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-[#fffaf0]"
                  >
                    {secondaryCtaLabel}
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E9DDC0] bg-white p-6 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.3)]">
                <div className="rounded-2xl bg-[#F8F1DF] p-4 text-[#7d611f]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C6D2D]">Priority service</p>
                      <p className="mt-2 text-xl font-black text-slate-900">{badge}</p>
                    </div>
                    <div className="rounded-full bg-white p-2 text-[#C5A059] shadow-sm">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-[#C5A059]" />
                    <div>
                      <p className="font-bold text-slate-900">Fast-track guidance</p>
                      <p className="text-sm text-slate-600">Step-by-step support from application review to final submission.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <Clock3 className="mt-0.5 h-5 w-5 text-[#C5A059]" />
                    <div>
                      <p className="font-bold text-slate-900">Clear timelines</p>
                      <p className="text-sm text-slate-600">Straightforward progress updates to keep every requirement on track.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <FileText className="mt-0.5 h-5 w-5 text-[#C5A059]" />
                    <div>
                      <p className="font-bold text-slate-900">Checklist-driven process</p>
                      <p className="text-sm text-slate-600">Document review and form coordination designed to minimize delays.</p>
                    </div>
                  </div>
                </div>
              </div>
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
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </StandalonePageFrame>
  );
}
