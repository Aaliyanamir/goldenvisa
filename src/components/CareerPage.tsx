import React from 'react';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Building2, FileCheck2, Users } from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';

const focusAreas = [
  { title: 'Visa & documentation', detail: 'Support clients with accurate paperwork, clear communication, and well-organised case progress.', icon: FileCheck2 },
  { title: 'Business services', detail: 'Help entrepreneurs navigate company formation and the practical steps of doing business in the UAE.', icon: Building2 },
  { title: 'Client experience', detail: 'Make every interaction helpful, responsive, and easy to understand across the customer journey.', icon: Users },
];

export const CareerPage: React.FC = () => (
  <div className="bg-[var(--bg-page)] text-[var(--text-main)]">
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-alt)] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Careers at Golden Visa Dubai</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Build meaningful work in the <span className="text-[var(--gold-dark)]">UAE</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)]">Join a team helping people and businesses navigate residency, company setup, and professional services with care and clarity.</p>
          <a href={`mailto:${contactInfo.generalEmail}?subject=${encodeURIComponent('Career inquiry')}`} className="gold-btn mt-8 inline-flex min-h-12 items-center gap-2 rounded-md px-5 text-sm font-bold">Introduce yourself <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 gap-px border border-[var(--border-subtle)] bg-[var(--border-subtle)]">
          <div className="col-span-2 bg-[var(--bg-surface)] p-7 sm:p-9">
            <BriefcaseBusiness className="h-7 w-7 text-[var(--gold-dark)]" />
            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">Work with purpose</p>
            <p className="mt-2 text-2xl font-extrabold">People first. Details matter.</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--text-muted)]">Golden Visa Dubai supports customers through important personal and business decisions. We value thoughtful service, accuracy, and responsible follow-through.</p>
          </div>
          <div className="bg-[var(--bg-surface)] p-5"><span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-dark)]">Location</span><p className="mt-2 font-semibold">Business Bay, Dubai</p></div>
          <div className="bg-[var(--bg-surface)] p-5"><span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-dark)]">Applications</span><p className="mt-2 font-semibold">Year-round</p></div>
        </div>
      </div>
    </section>

    <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Where you can contribute</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Bring your expertise to the work</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">We welcome speculative applications from people whose experience fits the services and customers we support. These focus areas are not advertised vacancies.</p>
        </div>
        <div className="mt-8 grid gap-px border border-[var(--border-subtle)] bg-[var(--border-subtle)] md:grid-cols-3">
          {focusAreas.map(({ title, detail, icon: Icon }) => (
            <article key={title} className="bg-[var(--bg-surface)] p-6 sm:p-7">
              <Icon className="h-6 w-6 text-[var(--gold-dark)]" />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-alt)] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Make an introduction</p>
          <h2 className="mt-3 text-3xl font-extrabold">Tell us what you could bring</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">Email your CV and a short note about your experience and the kind of role you are interested in. Please do not include sensitive identity or financial documents.</p>
        </div>
        <a href={`mailto:${contactInfo.generalEmail}?subject=${encodeURIComponent('Career inquiry - CV attached')}`} className="gold-btn inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-bold">Email your CV <ArrowRight className="h-4 w-4" /></a>
      </div>
    </section>

    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-8">
        <p className="text-sm text-[var(--text-muted)]">Questions about working with Golden Visa Dubai?</p>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <a className="text-[var(--gold-dark)] hover:underline" href={`mailto:${contactInfo.generalEmail}`}>{contactInfo.generalEmail}</a>
          <Link className="inline-flex items-center gap-1 text-[var(--gold-dark)] hover:underline" href="/contact-us">Contact us <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  </div>
);