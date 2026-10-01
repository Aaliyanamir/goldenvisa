"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Building2, FileCheck2, Users } from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';

const focusAreas = [
  { title: 'Visa & documentation', detail: 'Support clients with accurate paperwork, clear communication, and well-organised case progress.', icon: FileCheck2 },
  { title: 'Business services', detail: 'Help entrepreneurs navigate company formation and the practical steps of doing business in the UAE.', icon: Building2 },
  { title: 'Client experience', detail: 'Make every interaction helpful, responsive, and easy to understand across the customer journey.', icon: Users },
];

export const CareerPage: React.FC = () => {
  const [selectedCv, setSelectedCv] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleApplicationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const role = String(formData.get('position') ?? 'General application');
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Career application: ${role}`;
    const body = `Name: ${name}\nEmail: ${email}\nPosition: ${role}\nCV selected: ${selectedCv || 'Not selected'}\n\n${message}\n\nPlease attach the selected CV before sending.`;
    window.location.href = `mailto:${contactInfo.generalEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitMessage('Your email app will open with the application details. Attach your selected CV there to complete the application.');
  };

  return (
  <div className="bg-[var(--bg-page)] text-[var(--text-main)]">
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-alt)] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Careers at Golden Visa Dubai</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Build meaningful work in the <span className="text-[var(--gold-dark)]">UAE</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)]">Join a team helping people and businesses navigate residency, company setup, and professional services with care and clarity.</p>
          <a href={`mailto:${contactInfo.generalEmail}?subject=${encodeURIComponent('Career inquiry')}`} className="gold-btn mt-8 inline-flex min-h-12 items-center gap-2 rounded-md px-5 text-sm font-bold">Introduce yourself <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="career-orbit-shell">
          <div className="relative z-10 flex min-h-[390px] flex-col justify-between overflow-hidden rounded-lg bg-slate-950 p-7 text-white shadow-xl sm:p-9" style={{ backgroundImage: "linear-gradient(180deg, rgba(7,18,19,.18) 0%, rgba(7,18,19,.92) 72%), url('/assets/blog/article-1.jpg')", backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <div className="relative z-10 flex items-start justify-between gap-4">
            <span className="rounded-full border border-white/30 bg-black/25 px-3 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">People first, details matter</span>
            <BriefcaseBusiness className="h-7 w-7 text-amber-300" />
          </div>
          <div className="relative z-10">
            <p className="text-sm font-semibold text-amber-200">Careers · Business Bay, Dubai</p>
            <p className="mt-2 max-w-md text-3xl font-extrabold leading-tight">Thoughtful work for a global community.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Client service</span>
              <span className="rounded border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Residency support</span>
              <span className="rounded border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Business services</span>
            </div>
          </div>
          </div>
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

    <section id="application" className="border-y border-[var(--border-subtle)] bg-[var(--bg-alt)] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Make an introduction</p>
          <h2 className="mt-3 text-3xl font-extrabold">Tell us what you could bring</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-muted)]">Share your experience and select a CV. Your email app will open with the application details so you can attach the file before sending.</p>
        </div>
        <form onSubmit={handleApplicationSubmit} className="grid gap-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:grid-cols-2 sm:p-7">
          <label className="grid gap-1.5 text-xs font-semibold">Full name *<input name="name" required autoComplete="name" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
          <label className="grid gap-1.5 text-xs font-semibold">Email address *<input type="email" name="email" required autoComplete="email" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
          <label className="grid gap-1.5 text-xs font-semibold sm:col-span-2">Position of interest *<select name="position" required defaultValue="" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]"><option value="" disabled>Select a position</option><option>Visa and Immigration Consultant</option><option>PRO Services Specialist</option><option>Document Processing Coordinator</option><option>Client Relationship Executive</option><option>Business Setup Consultant</option><option>Other / General application</option></select></label>
          <label className="grid gap-1.5 text-xs font-semibold sm:col-span-2">CV or resume (PDF, DOC, DOCX) *<input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required onChange={(event) => setSelectedCv(event.currentTarget.files?.[0]?.name ?? '')} className="min-h-12 border border-[var(--border-subtle)] bg-[var(--bg-page)] p-2 text-sm file:mr-3 file:border-0 file:bg-slate-200 file:px-3 file:py-2 file:text-xs file:font-bold" /></label>
          {selectedCv && <p className="text-xs text-[var(--text-muted)] sm:col-span-2">Selected file: {selectedCv}</p>}
          <label className="grid gap-1.5 text-xs font-semibold sm:col-span-2">Short introduction<textarea name="message" rows={4} className="resize-y border border-[var(--border-subtle)] bg-[var(--bg-page)] p-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
          <p className="text-xs leading-5 text-[var(--text-muted)] sm:col-span-2">Your CV is not uploaded to this website. Attach it to the email that opens after you submit.</p>
          <button type="submit" className="gold-btn inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-md px-5 text-sm font-bold">Prepare application <ArrowRight className="h-4 w-4" /></button>
          {submitMessage && <p role="status" className="self-center text-xs text-[var(--text-muted)] sm:col-span-2">{submitMessage}</p>}
        </form>
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
};