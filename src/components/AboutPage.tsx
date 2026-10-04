'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe2,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { contactInfo } from '../lib/contactInfo';

interface AboutPageProps {
  onOpenCalculator: () => void;
}

const serviceAreas = [
  {
    icon: BadgeCheck,
    title: 'Residency & visa support',
    text: 'Practical guidance for family, investor and long-term UAE residence applications.',
  },
  {
    icon: Building2,
    title: 'Business government services',
    text: 'Help coordinate company paperwork, labour transactions and immigration submissions.',
  },
  {
    icon: FileCheck2,
    title: 'Documents & legal support',
    text: 'Attestation, certified translation and document preparation for your intended use.',
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Clear expectations',
    text: 'We explain the likely route, documents and third-party charges before a file proceeds.',
  },
  {
    icon: Users,
    title: 'Support shaped around you',
    text: 'A dedicated point of contact helps keep each application and its next steps organized.',
  },
  {
    icon: Globe2,
    title: 'One coordinated journey',
    text: 'We help connect the relevant typing, authority, medical and identity-card stages.',
  },
  {
    icon: Clock3,
    title: 'Timely updates',
    text: 'You receive progress guidance and follow-up requests as your case moves forward.',
  },
];

const process = [
  ['Understand the request', 'We clarify your goal, emirate, applicant details and current document stage.'],
  ['Map the requirements', 'You receive a tailored checklist and a transparent outline of expected charges.'],
  ['Prepare and follow up', 'With your instruction, we coordinate paperwork and monitor the submission milestones.'],
  ['Close the file', 'We explain the outcome and share practical next steps for the completed service.'],
];

const commitments = [
  ['Careful document review', 'Check names, dates and supporting evidence before a submission is prepared.'],
  ['Itemized cost guidance', 'Separate authority charges from service fees and optional third-party costs.'],
  ['A clear point of contact', 'Know where to direct questions as your application moves between steps.'],
  ['Responsible case updates', 'Understand what has happened and what is still waiting on an authority.'],
];

const supportOptions = [
  ['Personal guidance', 'A clear document plan for an individual or family application.'],
  ['Priority coordination', 'Ask which appointment or processing options are available for your case.'],
  ['Business support', 'Coordinate recurring employee, licence and immigration file requirements.'],
];

const visionContent = {
  mission: {
    label: 'Our Mission',
    title: 'Make the next step easier to understand.',
    text: 'We bring clarity to UAE residency, business and document procedures with practical preparation, responsive communication and careful coordination.',
  },
  vision: {
    label: 'Our Vision',
    title: 'A more confident experience of doing things in the UAE.',
    text: 'We want every client to know what to prepare, what to expect and which decisions remain with the relevant authority.',
  },
  values: {
    label: 'Our Values',
    title: 'Be clear, careful and accountable.',
    text: 'We value respectful service, accurate paperwork, transparent costs and honest updates throughout every engagement.',
  },
} as const;

export function AboutPage({ onOpenCalculator }: AboutPageProps) {
  const [activeVision, setActiveVision] = useState<keyof typeof visionContent>('mission');
  const vision = visionContent[activeVision];

  return (
    <div className="about-page">
      <section className="about-hero">
        <Image
          src="/assets/blog/article-3.jpg"
          alt="Consultants reviewing paperwork together"
          fill
          priority
          sizes="100vw"
          className="about-hero-image"
        />
        <div className="about-hero-shade" />
        <div className="about-shell about-hero-layout">
          <div className="about-hero-content">
            <span className="about-eyebrow"><Sparkles size={14} />UAE residency and business support</span>
            <h1>About Golden Visa Dubai<span> — your UAE consultancy.</span></h1>
            <p>
              Practical help for UAE residency, business paperwork and document
              services—planned around your situation and the requirements of the
              relevant authority.
            </p>
            <div className="about-actions">
              <button type="button" onClick={onOpenCalculator}><Sparkles size={16} />Explore service options</button>
              <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer"><Phone size={15} />Chat on WhatsApp</a>
            </div>
            <div className="about-hero-proof"><ShieldCheck size={17} />Private consultancy · Government decisions remain with the authority</div>
          </div>
          <aside className="about-hero-card">
            <div className="about-hero-card-head"><span>ABOUT US</span><BadgeCheck size={19} /></div>
            <strong>Clear guidance.<br />Considered support.</strong>
            <p>Residency · Government services · Documents</p>
            <div className="about-hero-card-grid">
              <span><CheckCircle2 size={15} />Case-led guidance</span>
              <span><CheckCircle2 size={15} />Clear next steps</span>
              <span><CheckCircle2 size={15} />Cost transparency</span>
              <span><CheckCircle2 size={15} />Human support</span>
            </div>
          </aside>
        </div>
      </section>

      <div className="about-trust-strip" aria-label="Service principles">
        <span>UAE Residency</span><i /><span>Business Support</span><i /><span>Document Services</span><i /><span>Client Guidance</span>
      </div>

      <section className="about-founder">
        <div className="about-shell about-founder-card">
          <div className="about-founder-profile">
            <div className="about-founder-avatar">
              <Image
                src="/assets/images/Bilal_photo.jpeg"
                alt="Bilal, Golden Visa Dubai"
                fill
                sizes="104px"
                className="about-founder-photo"
              />
            </div>
            <strong>Bilal</strong>
            <span>Leadership &amp; client care</span>
          </div>
          <div className="about-founder-copy">
            <span className="about-eyebrow"><span />A considered beginning</span>
            <h2>A strong future starts with <em>a strong foundation.</em></h2>
            <p>
              A UAE application can involve more than one form or appointment.
              Our role is to help make the moving parts easier to follow—from
              understanding the request to preparing documents and tracking next
              steps.
            </p>
            <p>
              We work with individuals, families and businesses seeking practical
              support with residency, government transactions and official
              documents. Each case is reviewed on its own details.
            </p>
            <blockquote>
              “Good guidance means being clear about the process, careful with
              the paperwork and honest about what the authorities decide.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="about-licensed">
        <div className="about-shell about-licensed-layout">
          <div>
            <span className="about-eyebrow"><span />Responsible government application support</span>
            <h2>Official processes. <em>Careful preparation.</em></h2>
            <p>
              Golden Visa Dubai is a private consultancy and documentation
              support provider. We help prepare and coordinate applications;
              eligibility, approval and official processing are determined by
              the relevant UAE authority.
            </p>
          </div>
          <div className="about-authority-card">
            <div><span>Service provider</span><strong>Private consultancy</strong></div>
            <div><span>Application review</span><strong>Authority requirements apply</strong></div>
            <div><span>Government charges</span><strong>Confirmed for each case</strong></div>
            <div><span>Approval decision</span><strong>Made by the relevant authority</strong></div>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="about-shell">
          <div className="about-section-heading">
            <span className="about-eyebrow"><span />Our areas of support</span>
            <h2>Residency, business &amp; <em>document services.</em></h2>
            <p>Start with the service that best matches what you need to do.</p>
          </div>
          <div className="about-service-grid">
            {serviceAreas.map(({ icon: Icon, title, text }, index) => (
              <article key={title}>
                <span className="about-card-number">0{index + 1}</span>
                <span className="about-card-icon"><Icon size={21} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-strength">
        <div className="about-shell">
          <div className="about-section-heading about-section-heading--center">
            <span className="about-eyebrow"><span />What shapes our work</span>
            <h2>Our strength is in <em>the details.</em></h2>
            <p>Four practical priorities guide how we support every enquiry and file.</p>
          </div>
          <div className="about-strength-grid">
            {[
              ['Clear preparation', 'Understand which records, approvals and details may be needed.'],
              ['Thoughtful coordination', 'Keep related typing, medical and identity steps in sequence.'],
              ['Useful communication', 'Receive understandable updates and know what happens next.'],
              ['Transparent scope', 'See the service scope and cost components before you proceed.'],
            ].map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-partner">
        <div className="about-shell about-partner-card">
          <div>
            <span className="about-eyebrow"><span />Your trusted partner</span>
            <h2>Business, residency &amp; <em>professional services</em> in the UAE.</h2>
            <p>
              Whether you are planning a residence application, handling
              employee paperwork or preparing an official document, our team can
              help identify the right service and coordinate the next steps.
            </p>
            <div className="about-partner-details">
              <span><Check size={15} />A tailored document checklist</span>
              <span><Check size={15} />A clear view of costs and scope</span>
              <span><Check size={15} />Support through the relevant stages</span>
            </div>
          </div>
          <div className="about-partner-cta">
            <HeartHandshake size={42} />
            <strong>Let’s map out<br />your next step.</strong>
            <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">Talk to our team <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-shell about-vision-card">
          <span className="about-eyebrow"><span />Our vision &amp; mission</span>
          <h2>Your goals matter to us.</h2>
          <div className="about-vision-tabs" role="tablist" aria-label="Our mission, vision and values">
            {(Object.keys(visionContent) as Array<keyof typeof visionContent>).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeVision === key}
                aria-controls="about-vision-panel"
                onClick={() => setActiveVision(key)}
              >
                {visionContent[key].label}
              </button>
            ))}
          </div>
          <div id="about-vision-panel" className="about-vision-panel" role="tabpanel">
            <h3>{vision.title}</h3>
            <p>{vision.text}</p>
          </div>
          <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">Contact us for guidance <ArrowRight size={15} /></a>
        </div>
      </section>

      <section className="about-different">
        <div className="about-shell about-different-layout">
          <div>
            <span className="about-eyebrow"><span />Why clients work with us</span>
            <h2>What makes us <em>different.</em></h2>
            <p>Our approach keeps your case understandable and the next action visible.</p>
            <ul>
              {principles.map(({ title, text }) => (
                <li key={title}><CheckCircle2 size={17} /><span><strong>{title}</strong>{text}</span></li>
              ))}
            </ul>
          </div>
          <div className="about-different-visual" aria-label="A coordinated service journey">
            <div className="about-orbit about-orbit--outer" />
            <div className="about-orbit about-orbit--inner" />
            <span className="about-orbit-node about-orbit-node--one"><FileCheck2 size={20} /></span>
            <span className="about-orbit-node about-orbit-node--two"><Building2 size={20} /></span>
            <span className="about-orbit-node about-orbit-node--three"><Users size={20} /></span>
            <span className="about-orbit-core"><HeartHandshake size={31} /></span>
            <strong>One clear<br />service journey</strong>
          </div>
        </div>
      </section>

      <section className="about-process">
        <div className="about-shell">
          <div className="about-section-heading">
            <span className="about-eyebrow"><span />How we work with you</span>
            <h2>A clear process, <em>one step at a time.</em></h2>
          </div>
          <ol className="about-process-grid">
            {process.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-results">
        <div className="about-shell">
          <div className="about-section-heading about-section-heading--center">
            <span className="about-eyebrow"><span />A dependable service experience</span>
            <h2>Clear process. <em>Confident next steps.</em></h2>
            <p>Rather than promise outcomes, we focus on the parts of the process we can help you prepare and understand.</p>
          </div>
          <div className="about-commitment-grid">
            {commitments.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="about-review-note">
            <ShieldCheck size={19} />
            <p>Every application is different. Final eligibility, processing times and decisions belong to the relevant government authority.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-shell about-cta-inner">
          <div>
            <span className="about-eyebrow"><span />Start with a conversation</span>
            <h2>Plan your UAE application with confidence.</h2>
            <p>Tell us what you need to do, and we will help identify the service and information to confirm before you proceed.</p>
          </div>
          <div className="about-actions">
            <button type="button" onClick={onOpenCalculator}>Explore service options <ArrowRight size={16} /></button>
            <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">Chat on WhatsApp <Phone size={15} /></a>
          </div>
        </div>
      </section>

      <section className="about-support">
        <div className="about-shell">
          <div className="about-section-heading about-section-heading--center">
            <span className="about-eyebrow"><span />Service options</span>
            <h2>Professional support, <em>shaped around you.</em></h2>
          </div>
          <div className="about-support-grid">
            {supportOptions.map(([title, text], index) => (
              <article key={title}>
                <span>{index === 0 ? <Users size={20} /> : index === 1 ? <Sparkles size={20} /> : <Building2 size={20} />}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-referral">
        <div className="about-shell about-referral-inner">
          <div>
            <span className="about-eyebrow"><span />Professional connections</span>
            <h2>Grow together through <em>trusted referrals.</em></h2>
            <p>
              If you advise clients or businesses with UAE residency and
              documentation needs, contact us to discuss whether a professional
              referral arrangement is a fit.
            </p>
          </div>
          <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">Discuss a partnership <ArrowRight size={15} /></a>
        </div>
      </section>
      <p className="about-disclaimer"><Check size={14} />Golden Visa Dubai provides private consultancy and documentation support. Government eligibility, fees and processing decisions are determined by the relevant UAE authorities.</p>
    </div>
  );
}
