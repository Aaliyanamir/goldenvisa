"use client";

import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Building2, Clock3, Mail, MapPin,
  MessageCircle, Navigation, Phone, ShieldCheck, Star, Truck,
} from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';

const contactMethods = [
  {
    title: 'WhatsApp Us',
    detail: contactInfo.phone,
    note: 'Instant replies almost anytime.',
    href: contactInfo.whatsappHref,
    icon: MessageCircle,
    tone: 'green',
  },
  {
    title: 'Speak with a Specialist',
    detail: contactInfo.phone,
    note: 'Reach our support team directly.',
    href: contactInfo.phoneHref,
    icon: Phone,
    tone: 'red',
  },
  {
    title: 'General Inquiries',
    detail: contactInfo.generalEmail,
    note: 'For general questions and support.',
    href: `mailto:${contactInfo.generalEmail}`,
    icon: Mail,
    tone: 'blue',
  },
  {
    title: 'Golden Visa Inquiries',
    detail: contactInfo.visaEmail,
    note: 'For visa inquiries and documents.',
    href: `mailto:${contactInfo.visaEmail}`,
    icon: Mail,
    tone: 'gold',
  },
];

const workSteps = [
  { title: 'Apply online', text: 'Share your details and documents over WhatsApp, Zoom, or a call.' },
  { title: 'We collect originals', text: 'If an original document is needed, a rider can collect it at a convenient time.' },
  { title: 'Delivery to your door', text: 'Processed documents are returned to your home or office.' },
];

export const ContactUsPage: React.FC = () => {
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const phone = String(formData.get('phone') ?? '');
    const nationality = String(formData.get('nationality') ?? '');
    const service = String(formData.get('service') ?? '');
    const preference = String(formData.get('preference') ?? 'Email');
    const message = String(formData.get('message') ?? '');
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nNationality: ${nationality}\nService: ${service}\nPreferred contact: ${preference}\n\n${message}`;

    if (preference === 'WhatsApp') {
      window.open(`${contactInfo.whatsappHref}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
      setSubmitMessage('WhatsApp opened with your inquiry. Please send the message there to complete your request.');
      return;
    }

    if (preference === 'Phone') {
      window.location.href = contactInfo.phoneHref;
      setSubmitMessage(`Your phone app should call ${contactInfo.phone}.`);
      return;
    }

    const recipient = service.toLowerCase().includes('visa') ? contactInfo.visaEmail : contactInfo.generalEmail;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(`Website inquiry: ${service}`)}&body=${encodeURIComponent(body)}`;
    setSubmitMessage('Your email app should open with your inquiry. If it does not, contact us directly using the details above.');
  };

  return (
    <div className="bg-[var(--bg-page)] text-[var(--text-main)]">
      <section className="bg-[var(--bg-alt)] border-b border-[var(--border-subtle)] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Visit Brightlink</p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Visit us at our <span className="text-[var(--gold-dark)]">Dubai Office</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
              Centrally located in Business Bay, Dubai&apos;s leading financial and business hub, with convenient access by metro, car, or taxi.
            </p>
            <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="gold-btn mt-7 inline-flex min-h-12 items-center gap-2 rounded-md px-5 text-sm font-bold">
              <Navigation className="h-4 w-4" /> Get Directions <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-[var(--text-muted)]">Open directions in Google Maps</p>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-sm">
            <iframe
              title="Brightlink Management Consultancy on Google Maps"
              src={contactInfo.mapEmbedUrl}
              className="h-64 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h2 className="flex items-center gap-2 font-bold"><MapPin className="h-4 w-4 text-[var(--gold-dark)]" /> Office Address</h2>
                <p className="mt-2 max-w-lg text-sm leading-6 text-[var(--text-muted)]">{contactInfo.address}</p>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4 sm:min-w-56 sm:flex-col sm:items-start sm:border-t-0 sm:border-l sm:pl-5 sm:pt-0">
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">Google rating</p>
                  <p className="mt-1 flex items-center gap-2 text-lg font-extrabold"><span>4.9</span><span className="flex text-amber-500" aria-label="5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}</span></p>
                </div>
                <a href={contactInfo.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-[var(--gold-dark)] hover:underline">
                  Read reviews <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Reach Brightlink</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">More ways to <span className="text-[var(--gold-dark)]">contact us</span></h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">Choose the contact option that suits you best. Every message reaches our dedicated team directly.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map(({ title, detail, note, href, icon: Icon, tone }) => (
              <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex min-h-40 flex-col border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--gold-primary)]">
                <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md ${tone === 'green' ? 'bg-emerald-50 text-emerald-700' : tone === 'red' ? 'bg-rose-50 text-rose-700' : tone === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-800'}`}><Icon className="h-5 w-5" /></span>
                <span className="font-bold">{title}</span>
                <span className="mt-1 break-all text-sm text-[var(--gold-dark)]">{detail}</span>
                <span className="mt-2 text-xs text-[var(--text-muted)]">{note}</span>
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-2 rounded-md bg-[var(--gold-subtle)] px-5 py-4 text-sm sm:flex-row sm:items-center">
            <Truck className="h-5 w-5 shrink-0 text-[var(--gold-dark)]" />
            <p className="text-[var(--text-muted)]">Prefer to handle everything online? Share documents on WhatsApp. We can arrange a rider when an original document is required.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-alt)] px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">How Brightlink Works</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Complete your visa process <span className="text-[var(--gold-dark)]">from home</span></h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-muted)]">Most customers complete the process remotely. Visiting our office is optional.</p>
          <div className="mt-8 grid gap-px border border-[var(--border-subtle)] bg-[var(--border-subtle)] md:grid-cols-3">
            {workSteps.map((step, index) => (
              <article key={step.title} className="bg-[var(--bg-surface)] p-6 sm:p-7">
                <span className="text-sm font-extrabold text-[var(--gold-dark)]">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-dark)]">Contact Us</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">We&apos;re here to <span className="text-[var(--gold-dark)]">help you</span></h2>
            <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">Send your question to our team. Visa questions and documents can be sent directly to our visa team.</p>
            <div className="mt-7 space-y-4 text-sm">
              <a className="flex items-start gap-3 hover:text-[var(--gold-dark)]" href={contactInfo.phoneHref}><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold-dark)]" />{contactInfo.phone}</a>
              <a className="flex items-start gap-3 hover:text-[var(--gold-dark)]" href={`mailto:${contactInfo.generalEmail}`}><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold-dark)]" />{contactInfo.generalEmail}</a>
              <div className="flex items-start gap-3 text-[var(--text-muted)]"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold-dark)]" /><span>Monday–Friday, 9 AM–6 PM<br />Saturday, 10 AM–5 PM · Sunday closed</span></div>
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs text-[var(--text-muted)]"><ShieldCheck className="h-4 w-4 text-emerald-700" />Your details are used to respond to your inquiry.</div>
          </div>

          <form onSubmit={handleSubmit} className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 sm:p-8">
            <h3 className="text-center text-xl font-bold">Send us a message</h3>
            <p className="mt-2 text-center text-sm text-[var(--text-muted)]">Fill in the form and our team will get back to you.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold">Name *<input name="name" required autoComplete="name" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
              <label className="grid gap-1.5 text-xs font-semibold">Email *<input type="email" name="email" required autoComplete="email" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
              <label className="grid gap-1.5 text-xs font-semibold">Phone number *<input type="tel" name="phone" required autoComplete="tel" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
              <label className="grid gap-1.5 text-xs font-semibold">Nationality *<input name="nationality" required autoComplete="country-name" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
              <label className="grid gap-1.5 text-xs font-semibold sm:col-span-2">Service you need *<select name="service" required defaultValue="" className="h-11 border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]"><option value="" disabled>Select a service</option><option>Golden Visa</option><option>Family or dependent visa</option><option>Business setup</option><option>PRO services</option><option>Other inquiry</option></select></label>
              <fieldset className="sm:col-span-2">
                <legend className="text-xs font-semibold">Contact preference</legend>
                <div className="mt-2 flex flex-wrap gap-5 text-sm">
                  {['Phone', 'Email', 'WhatsApp'].map((value) => <label key={value} className="inline-flex items-center gap-2"><input type="radio" name="preference" value={value} defaultChecked={value === 'WhatsApp'} className="accent-[var(--gold-dark)]" />{value}</label>)}
                </div>
              </fieldset>
              <label className="grid gap-1.5 text-xs font-semibold sm:col-span-2">Your message *<textarea name="message" required rows={5} className="resize-y border border-[var(--border-subtle)] bg-[var(--bg-page)] p-3 text-sm font-normal outline-none focus:border-[var(--gold-primary)]" /></label>
            </div>
            <button type="submit" className="gold-btn mt-5 inline-flex min-h-11 items-center gap-2 rounded-md px-5 text-sm font-bold">Send inquiry <ArrowRight className="h-4 w-4" /></button>
            {submitMessage && <p role="status" className="mt-4 text-sm text-[var(--text-muted)]">{submitMessage}</p>}
          </form>
        </div>
      </section>

      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-alt)] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">Need help finding the office?</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">Call our team or open the official Google Maps directions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={contactInfo.officePhoneHref} className="inline-flex h-11 items-center gap-2 border border-[var(--border-subtle)] px-4 text-sm font-semibold"><Building2 className="h-4 w-4" /> Office line</a>
            <a href={contactInfo.directionsUrl} target="_blank" rel="noopener noreferrer" className="gold-btn inline-flex h-11 items-center gap-2 rounded-md px-4 text-sm font-bold">Google Maps <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </div>
  );
};