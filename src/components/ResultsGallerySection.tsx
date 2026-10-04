import React from 'react';
import { ArrowRight, BadgeCheck, FileCheck2, Globe2, MessagesSquare } from 'lucide-react';

const servicePrinciples = [
  { icon: FileCheck2, title: 'Clear requirements', detail: 'Understand the documents and eligibility criteria for your pathway.' },
  { icon: Globe2, title: 'Remote coordination', detail: 'Manage reviews and updates from wherever you are.' },
  { icon: MessagesSquare, title: 'Direct case support', detail: 'Get guidance from a dedicated contact throughout your application.' },
];

export const ResultsGallerySection: React.FC = () => (
  <section className="border-b border-slate-200 bg-[#F3F0E8] px-4 py-16 dark:border-white/10 dark:bg-[#17140D] sm:px-6 lg:px-10">
    <div className="mx-auto grid max-w-[1560px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D8C796] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#695324] dark:border-[#C5A059]/20 dark:bg-white/5 dark:text-[#DFC47E]">
          <BadgeCheck className="h-4 w-4" /> Application support
        </span>
        <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-4xl">
          A clear process for your UAE residency plans
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700 dark:text-slate-300">
          Compare pathways, prepare the right documents, and get practical guidance at each stage of your application.
        </p>
        <a href="#services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#695324] hover:text-[#8C6D2D] dark:text-[#DFC47E] dark:hover:text-white">
          Explore services <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid gap-px overflow-hidden rounded-lg border border-[#D8C796] bg-[#E8E1D0] sm:grid-cols-3 dark:border-amber-100/15 dark:bg-amber-100/15">
        {servicePrinciples.map(({ icon: Icon, title, detail }) => (
          <article key={title} className="min-h-44 bg-white p-6 dark:bg-[#172520]">
            <Icon className="h-6 w-6 text-[#8C6D2D] dark:text-[#DFC47E]" />
            <h3 className="mt-5 text-base font-bold text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);