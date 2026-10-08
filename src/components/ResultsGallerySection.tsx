import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faFileCircleCheck, faGlobe, faComments } from '@fortawesome/free-solid-svg-icons';

const servicePrinciples = [
  { icon: faFileCircleCheck, title: 'Know what to prepare', detail: 'Get a clearer view of the documents and criteria relevant to your route.' },
  { icon: faGlobe, title: 'Coordinate from anywhere', detail: 'Keep your application moving with remote case coordination and updates.' },
  { icon: faComments, title: 'Talk to a real person', detail: 'Get practical guidance from a team that can help you understand next steps.' },
];

export const ResultsGallerySection: React.FC = () => (
  <section data-scroll-reveal className="relative overflow-hidden bg-[#F9F9F8] px-5 py-20 sm:px-8 lg:py-24">
    <div aria-hidden="true" className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
    <div className="relative mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8A6A12]">
          <span className="h-px w-8 bg-[#B8860B]" /> Support, built around your case
        </span>
        <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-.035em] text-[#1F1F1F] sm:text-4xl lg:text-5xl">
          A clear process for your UAE residency plans
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-7 text-[#626262] sm:text-base">
          Compare pathways, understand the documents involved and get practical guidance at each stage of your application.
        </p>
        <a href="#services" data-scroll-reveal className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-[#765800] transition hover:text-[#1F1F1F]">
          Explore our services <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
        </a>
      </div>
      <div className="home-stagger grid gap-3 sm:grid-cols-3">
        {servicePrinciples.map(({ icon: Icon, title, detail }, index) => (
          <article
            key={title}
            data-scroll-reveal
            className={`group relative min-h-[230px] overflow-hidden rounded-[26px] border border-white/80 bg-white/65 p-6 shadow-[0_12px_36px_-28px_rgba(31,31,31,.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:bg-white/90 hover:shadow-[0_20px_50px_-30px_rgba(31,31,31,.35)] ${
              index === 1 ? 'sm:translate-y-5' : ''
            }`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 text-[#8A6A12] transition group-hover:bg-[#D4AF37] group-hover:text-[#1F1F1F]">
              <FontAwesomeIcon icon={Icon} className="h-5 w-5" />
            </div>
            <h3 className="mt-8 text-base font-semibold text-[#1F1F1F]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#66645F]">{detail}</p>
            <span aria-hidden="true" className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </div>
    </div>
  </section>
);
