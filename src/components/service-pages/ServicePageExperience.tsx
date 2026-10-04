'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  MapPin,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { serviceCatalog, type ServicePageContent } from './serviceCatalog';
import { FamilyVisaPageContentWithFrame } from './FamilyVisaPageContent';
import { PropertyVisaPageContentWithFrame } from './PropertyVisaPageContent';
import { GoldenVisaPageContentWithFrame } from './GoldenVisaPageContent';
import { NewbornVisaPageContentWithFrame } from './NewbornVisaPageContent';
import { FamilyVisaCalculator, type ServiceId } from './FamilyVisaCalculator';

const officialLinks = {
  icp: 'https://smartservices.icp.gov.ae/echannels/web/client/default.html#/login',
  gdrfa: 'https://www.gdrfad.gov.ae/en',
  mofa: 'https://www.mofa.gov.ae/en/Services/Attestation',
  iloe: 'https://www.iloe.ae/',
  dha: 'https://www.dha.gov.ae/en/MedicalFitness',
};

const serviceHeroImages: Partial<Record<string, { src: string; alt: string }>> = {
  'Maid Visa': { src: '/assets/images/maid-support.jpg', alt: 'Domestic worker completing household support' },
  'Emirates ID Services': { src: '/assets/images/emirates-id-documents.jpg', alt: 'Identity application documents prepared for review' },
  'Corporate PRO Services': { src: '/assets/service-pages/corporate-pro-team.jpg', alt: 'Business team coordinating corporate administration' },
  'Amer Center Services': { src: '/assets/service-pages/amer-center.jpg', alt: 'Modern service-centre office interior' },
  'Document Attestation': { src: '/assets/service-pages/document-attestation.jpg', alt: 'Official paperwork prepared for document verification' },
  'Legal Translation': { src: '/assets/service-pages/legal-translation.jpg', alt: 'A document being prepared for professional translation' },
};

const calculatorServices: Partial<Record<string, ServiceId>> = {
  'Maid Visa': 'maid',
  'Emirates ID Services': 'emiratesId',
  'Corporate PRO Services': 'pro',
  'Amer Center Services': 'amer',
  'Document Attestation': 'attestation',
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="gv-eyebrow"><span aria-hidden="true" />{children}</span>;
}

function SectionHeading({ label, title, text, id }: { label: string; title: string; text?: string; id?: string }) {
  return (
    <div className="gv-section-heading">
      <Eyebrow>{label}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function ContentTable({ table }: { table: NonNullable<ServicePageContent['table']> }) {
  return (
    <section className="gv-section">
      <SectionHeading label="At a glance" title={table.title} text={table.caption} />
      <div className="gv-table-wrap">
        <table className="gv-table">
          <thead><tr>{table.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.join('|')}>
                {row.map((cell, index) => index === 0
                  ? <th scope="row" key={cell}>{cell}</th>
                  : <td key={`${index}-${cell}`}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CategoryTabs({ content }: { content: ServicePageContent }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = content.tabs ?? [];
  const active = tabs[activeTab];
  if (!active) return null;

  return (
    <div className="gv-tabs-panel">
      <div className="gv-tab-list" role="tablist" aria-label="Golden Visa categories">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            id={`category-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeTab}
            aria-controls="category-panel"
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id="category-panel" role="tabpanel" aria-labelledby={`category-tab-${activeTab}`} className="gv-tab-content">
        <div>
          <span className="gv-tab-index">0{activeTab + 1}</span>
          <h3>{active.title}</h3>
          <p>{active.detail}</p>
        </div>
        <ul>{active.points.map((point) => <li key={point}><Check size={16} />{point}</li>)}</ul>
      </div>
    </div>
  );
}

function GoldenScreener() {
  const [category, setCategory] = useState('property');
  const [value, setValue] = useState('');
  const [age, setAge] = useState('');
  const hasInput = Number(value) > 0 || Number(age) > 0;

  const result = category === 'property'
    ? Number(value) >= 2_000_000
      ? 'Your stated property value reaches the commonly used AED 2 million Golden Visa threshold. DLD ownership and eligibility still need to be checked.'
      : 'The stated value is below AED 2 million. A different category or other eligible property may be worth reviewing.'
    : category === 'professional'
      ? Number(value) >= 30_000
        ? 'Your stated monthly basic salary reaches the commonly cited professional-route figure. Occupation, contract and degree requirements also apply.'
        : 'The stated monthly basic salary is below the commonly cited professional-route figure. Consider another route and verify the current criteria.'
      : category === 'retirement'
        ? Number(value) >= 1_000_000 && Number(age) >= 55
          ? 'Your stated property value and age match the commonly cited retirement-route thresholds. Additional conditions and official review apply.'
          : 'The commonly cited retirement route uses an age threshold of 55 and property value of AED 1 million; check current terms.'
        : 'Entrepreneur and student nominations depend on authority-approved evidence rather than a single amount. Review the route documents with an advisor.';

  return (
    <section className="gv-section gv-screener" aria-labelledby="screener-title">
      <div className="gv-screener-intro">
        <Eyebrow>Interactive eligibility screener</Eyebrow>
        <h2 id="screener-title">Find the route worth reviewing</h2>
        <p>This is an initial guide, not an eligibility decision. Final criteria are confirmed by the relevant authority.</p>
      </div>
      <div className="gv-screener-controls">
        <label>
          Route to check
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="property">Real estate investor</option>
            <option value="professional">Skilled professional</option>
            <option value="retirement">Property retirement route</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="student">Outstanding student</option>
          </select>
        </label>
        {category !== 'student' && (
          <label>
            {category === 'professional' ? 'Monthly basic salary (AED)' : 'Property value (AED)'}
            <input inputMode="numeric" type="number" min="0" value={value} onChange={(event) => setValue(event.target.value)} placeholder={category === 'professional' ? 'e.g. 30,000' : 'e.g. 2,000,000'} />
          </label>
        )}
        {category === 'retirement' && (
          <label>
            Applicant age
            <input inputMode="numeric" type="number" min="0" max="120" value={age} onChange={(event) => setAge(event.target.value)} placeholder="Age in years" />
          </label>
        )}
      </div>
      <div className={`gv-screener-result${hasInput ? ' is-ready' : ''}`} aria-live="polite">
        <ShieldCheck size={20} />
        <p>{hasInput || category === 'student' ? result : 'Enter a value to see which published threshold may be relevant to your profile.'}</p>
      </div>
    </section>
  );
}

function AttestationSelector({
  country,
  setCountry,
  type,
  setType,
}: {
  country: string;
  setCountry: (country: string) => void;
  type: string;
  setType: (type: string) => void;
}) {
  const issuer = type === 'Educational' ? 'University / education authority'
    : type === 'Personal' ? 'Civil registry / notary authority'
      : 'Chamber of commerce / company authority';
  const workflow = [
    `${issuer} (${country})`,
    'Authentication by the relevant home-country authority',
    'UAE Embassy or Consulate in the issuing country, where required',
    'MOFA UAE attestation',
    'Certified Arabic translation if required for your UAE use',
  ];

  return (
    <section className="gv-section" aria-labelledby="attestation-flow-title">
      <SectionHeading id="attestation-flow-title" label="Interactive workflow" title="Build your attestation route" text="Select a country and document category to see the usual high-level sequence. Exact authority steps vary; confirm before sending originals." />
      <div className="gv-selectors">
        <label>Issuing country
          <select value={country} onChange={(event) => setCountry(event.target.value)}>
            {['United Kingdom', 'United States', 'India', 'Pakistan', 'France', 'Other'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>Document category
          <select value={type} onChange={(event) => setType(event.target.value)}>
            {['Educational', 'Personal', 'Commercial'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <ol className="gv-flow-list">
        {workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{step}</strong><small>{index === 0 ? `${type} document issued in ${country}` : index === 4 ? 'Confirm with the receiving authority' : 'Required stage depends on issuing-country rules'}</small></div>{index < workflow.length - 1 && <ChevronRight aria-hidden="true" />}</li>)}
      </ol>
    </section>
  );
}

function DocumentServiceFlow({ translation }: { translation: boolean }) {
  const steps = translation
    ? [
      ['Share a readable copy', 'Include every page, stamp and reverse side so the scope can be reviewed.'],
      ['Confirm language and use', 'Agree the language pair, receiving authority, certification needs and delivery date.'],
      ['Translate and certify', 'A qualified translator prepares the document and checks names, dates and official terms.'],
      ['Review delivery options', 'Confirm the final format, collection or delivery method and any payment arrangement.'],
    ]
    : [
      ['Request a document review', 'Share the issuing country, document category and intended UAE use for an initial route check.'],
      ['Confirm collection and quote', 'Agree the original-document handling, service scope, charges and payment terms before dispatch.'],
      ['Complete the required stages', 'Coordinate the applicable issuing-country, UAE mission and MOFA verification steps.'],
      ['Arrange return or delivery', 'Confirm completion evidence and the return method for the original documents.'],
    ];

  return (
    <section className="gv-section gv-document-flow" aria-labelledby="document-flow-title">
      <SectionHeading
        id="document-flow-title"
        label={translation ? 'Certified translation service' : 'Document attestation service'}
        title={translation ? 'From document review to certified delivery' : 'A guided route from document review to return'}
        text={translation
          ? 'Start with a clear scan. The receiving authority decides which language and certification format it will accept.'
          : 'The exact legalization sequence depends on origin and document type. Confirm the steps, custody and quote before sending originals.'}
      />
      <ol>
        {steps.map(([title, detail], index) => (
          <li key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{title}</h3><p>{detail}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ServiceSpecificInteractions({ title, onOpenCalculator }: { title: string; onOpenCalculator: () => void }) {
  const [maidChecks, setMaidChecks] = useState<string[]>([]);
  const [idType, setIdType] = useState('New application');
  const [proModel, setProModel] = useState('Corporate outsourcing');
  const maidChecklist = ['Income evidence ready', 'Household / family details ready', 'Accommodation details ready'];
  const isMaid = title === 'Maid Visa';
  const isEmiratesId = title === 'Emirates ID Services';
  const isPro = title === 'Corporate PRO Services';
  const isAmer = title === 'Amer Center Services';

  if (!isMaid && !isEmiratesId && !isPro && !isAmer) return null;

  return (
    <section className="gv-section gv-service-interaction" aria-labelledby="service-interaction-title">
      <div className="gv-service-interaction-copy">
        <Eyebrow>Choose your next step</Eyebrow>
        <h2 id="service-interaction-title">
          {isMaid ? 'Check your sponsor file readiness' : isEmiratesId ? 'Select the Emirates ID service' : isPro ? 'Choose the right PRO support model' : 'Find the right immigration service channel'}
        </h2>
        <p>
          {isMaid
            ? 'Use this preparation check to see which sponsor details are ready. It is not an eligibility decision; the applicable authority confirms current requirements.'
            : isEmiratesId
              ? 'Choose the transaction to see the most relevant next step. The live application and card status remain on ICP.'
              : isPro
                ? 'Compare ongoing company coverage with a defined one-off task. Authority fees are itemized separately from professional service charges.'
                : 'Amer centres submit Dubai immigration applications to GDRFA. For other emirates, check the federal ICP channel.'}
        </p>
      </div>

      {isMaid && (
        <div className="gv-readiness-panel">
          {maidChecklist.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={maidChecks.includes(item)}
                onChange={() => setMaidChecks((current) => current.includes(item) ? current.filter((check) => check !== item) : [...current, item])}
              />
              <span>{item}</span>
            </label>
          ))}
          <div className="gv-interaction-result" aria-live="polite">
            <strong>{maidChecks.length === maidChecklist.length ? 'Ready for an eligibility review' : `${maidChecks.length} of ${maidChecklist.length} preparation items ready`}</strong>
            <span>{maidChecks.length === maidChecklist.length ? 'Confirm current sponsor conditions, deposit terms and fees before applying.' : 'Complete the available sponsor details, then request a route-specific check.'}</span>
          </div>
          <button className="gv-button gv-button--gold" type="button" onClick={onOpenCalculator}>Build a maid visa request <ArrowRight size={16} /></button>
        </div>
      )}

      {isEmiratesId && (
        <div className="gv-id-service-tool">
          <div className="gv-id-service-options" role="group" aria-label="Choose Emirates ID transaction">
            {['New application', 'Renewal', 'Lost / damaged'].map((option) => (
              <button type="button" key={option} aria-pressed={idType === option} onClick={() => setIdType(option)}>{option}</button>
            ))}
          </div>
          <div className="gv-interaction-result" aria-live="polite">
            <strong>{idType}</strong>
            <span>{idType === 'New application'
              ? 'Usually follows a residence application; first-time adult applicants may need an ICP biometrics appointment.'
              : idType === 'Renewal'
                ? 'Renew against current residence details and check whether ICP asks for new biometrics.'
                : 'Submit a replacement request through ICP and keep its reference; a loss report may be required.'}</span>
          </div>
          <a className="gv-button gv-button--dark" href={officialLinks.icp} target="_blank" rel="noreferrer">Open ICP services <ArrowUpRight size={15} /></a>
        </div>
      )}

      {isPro && (
        <div className="gv-pro-model-tool">
          <div className="gv-id-service-options" role="group" aria-label="Choose PRO support model">
            {['Corporate outsourcing', 'Individual PRO task'].map((option) => (
              <button type="button" key={option} aria-pressed={proModel === option} onClick={() => setProModel(option)}>{option}</button>
            ))}
          </div>
          <div className="gv-interaction-result" aria-live="polite">
            <strong>{proModel}</strong>
            <span>{proModel === 'Corporate outsourcing'
              ? 'Best suited to recurring hiring, renewals and establishment-file tasks; proposals can include a named contact and transaction tracker.'
              : 'Best suited to a single employee, dependent or authority transaction with a clearly defined scope.'}</span>
          </div>
          <button className="gv-button gv-button--gold" type="button" onClick={onOpenCalculator}>Request a scoped quote <ArrowRight size={16} /></button>
        </div>
      )}

      {isAmer && (
        <div className="gv-amer-tool">
          <div className="gv-amer-service-list">
            {['Entry permits & residence', 'Renewal, cancellation & status change', 'Family, newborn & domestic worker files', 'Golden Visa & company immigration'].map((service, index) => (
              <div key={service}><span>0{index + 1}</span><strong>{service}</strong></div>
            ))}
          </div>
          <div className="gv-interaction-result">
            <strong>Before you go</strong>
            <span>Confirm centre hours, transaction availability and the itemized government / service-centre charges. Walk-in and express availability can vary.</span>
          </div>
          <a className="gv-button gv-button--gold" href="https://www.google.com/maps/search/?api=1&query=Amer+Center+Dubai" target="_blank" rel="noreferrer">Find an Amer centre <MapPin size={16} /></a>
        </div>
      )}
    </section>
  );
}

function VisaFineTool() {
  const [days, setDays] = useState('');
  const fine = Number.parseInt(days, 10);
  const valid = Number.isFinite(fine) && fine >= 0;
  return (
    <section className="gv-section gv-tool-panel" aria-labelledby="visa-tool-title">
      <div>
        <Eyebrow>Informative tool</Eyebrow>
        <h2 id="visa-tool-title">Estimate daily overstay fines</h2>
        <p>Enter the number of days after your applicable grace period. This estimate is not connected to a government file; confirm the actual amount with ICP or GDRFA.</p>
      </div>
      <label>Overstay days after grace period
        <input type="number" inputMode="numeric" min="0" value={days} onChange={(event) => setDays(event.target.value)} placeholder="Enter number of days" />
      </label>
      <output aria-live="polite">{valid ? `Indicative estimate: AED ${(fine * 50).toLocaleString('en-AE')}` : 'Estimated amount appears here'}</output>
      <p className="gv-tool-note">Uses the commonly cited AED 50/day rate only. Grace periods and actual fines depend on visa category and current authority records.</p>
      <div className="gv-official-links">
        <a href={officialLinks.icp} target="_blank" rel="noreferrer">Open ICP Smart Services <ArrowUpRight size={15} /></a>
        <a href={officialLinks.gdrfa} target="_blank" rel="noreferrer">Open GDRFA Dubai <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}

function LocationCards() {
  const locations = [
    { title: 'DHA medical fitness', detail: 'Choose an approved medical fitness centre and confirm the service speed before booking.', search: 'DHA medical fitness center Dubai', badge: 'Blood test & X-ray' },
    { title: 'ICP Emirates ID biometrics', detail: 'Use the centre shown on your ICP appointment notice; bring the original passport.', search: 'ICP Emirates ID biometric center Dubai', badge: 'Fingerprint & photo' },
    { title: 'Express / VIP options', detail: 'Selected facilities offer paid priority services. Ask the provider to confirm live availability and fees.', search: 'VIP medical fitness center Dubai', badge: 'Check availability' },
  ];
  return (
    <section className="gv-section" aria-labelledby="location-title">
      <SectionHeading label="Find a centre" title="Medical and Emirates ID locations" text="These map searches help locate nearby providers. Check that the selected facility is approved for your exact application before travelling." />
      <div className="gv-location-grid">
        {locations.map((location) => (
          <article className="gv-location-card" key={location.title}>
            <span className="gv-location-badge">{location.badge}</span>
            <MapPin size={19} aria-hidden="true" />
            <h3>{location.title}</h3>
            <p>{location.detail}</p>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.search)}`} target="_blank" rel="noreferrer">Search on Maps <ArrowUpRight size={15} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function LeadForm({
  content,
  country,
  setCountry,
  attestationType,
  setAttestationType,
}: {
  content: ServicePageContent;
  country: string;
  setCountry: (country: string) => void;
  attestationType: string;
  setAttestationType: (type: string) => void;
}) {
  const [messageLink, setMessageLink] = useState('');
  const [fileName, setFileName] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const request = String(form.get('request') ?? '').trim();
    const sourceLanguage = String(form.get('sourceLanguage') ?? '').trim();
    const targetLanguage = String(form.get('targetLanguage') ?? '').trim();
    const pageCount = String(form.get('pageCount') ?? '').trim();
    const receivingAuthority = String(form.get('receivingAuthority') ?? '').trim();
    const message = [
      `Hello, I would like to request help with ${content.title}.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      content.interaction === 'attestation' ? `Issuing country: ${country}` : '',
      content.interaction === 'attestation' ? `Document category: ${attestationType}` : '',
      sourceLanguage && targetLanguage ? `Language pair: ${sourceLanguage} to ${targetLanguage}` : '',
      pageCount ? `Approximate page count: ${pageCount}` : '',
      receivingAuthority ? `Receiving authority / intended use: ${receivingAuthority}` : '',
      request ? `Details: ${request}` : '',
      fileName ? `File to attach in WhatsApp: ${fileName}` : '',
    ].filter(Boolean).join('\n');
    setMessageLink(`${contactInfo.whatsappHref}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="gv-lead" id="consultation">
      <div className="gv-lead-copy">
        <Eyebrow>Personalized next step</Eyebrow>
        <h2>{content.formTitle}</h2>
        <p>{content.formDescription}</p>
        <div className="gv-lead-assurance"><ShieldCheck size={17} />Your details are not stored by this page. You choose when to continue in WhatsApp.</div>
      </div>
      <form className="gv-lead-form" onSubmit={handleSubmit} onChange={() => { if (messageLink) setMessageLink(''); }}>
        {(content.interaction === 'translation' || content.interaction === 'attestation') && (
          <div className="gv-upload">
            <label htmlFor="quote-file"><Upload size={18} />Add a document for your quote</label>
            <input id="quote-file" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? '')} />
            <p>{fileName ? `Selected: ${fileName}. Attach it yourself after WhatsApp opens; it has not been uploaded.` : 'PDF, JPG, PNG or Word. The file stays on your device and is not uploaded here.'}</p>
          </div>
        )}
        {content.interaction === 'attestation' && (
          <div className="gv-form-row">
            <label htmlFor="attestation-country">Issuing country
              <select id="attestation-country" value={country} onChange={(event) => setCountry(event.target.value)}>
                {['United Kingdom', 'United States', 'India', 'Pakistan', 'France', 'Other'].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label htmlFor="attestation-type">Document category
              <select id="attestation-type" value={attestationType} onChange={(event) => setAttestationType(event.target.value)}>
                {['Educational', 'Personal', 'Commercial'].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
        )}
        {content.interaction === 'translation' && (
          <>
            <div className="gv-form-row">
              <label htmlFor="translation-source">Translate from
                <select id="translation-source" name="sourceLanguage" defaultValue="">
                  <option value="" disabled>Select a language</option>
                  {['Arabic', 'English', 'French', 'Russian', 'Urdu', 'Hindi', 'German', 'Spanish', 'Chinese', 'Turkish', 'Other'].map((language) => <option key={language}>{language}</option>)}
                </select>
              </label>
              <label htmlFor="translation-target">Translate to
                <select id="translation-target" name="targetLanguage" defaultValue="">
                  <option value="" disabled>Select a language</option>
                  {['Arabic', 'English', 'French', 'Russian', 'Urdu', 'Hindi', 'German', 'Spanish', 'Chinese', 'Turkish', 'Other'].map((language) => <option key={language}>{language}</option>)}
                </select>
              </label>
            </div>
            <div className="gv-form-row">
              <label htmlFor="translation-pages">Approximate page count<input id="translation-pages" name="pageCount" type="number" min="1" inputMode="numeric" placeholder="e.g. 4" /></label>
              <label htmlFor="translation-authority">Where will you submit it?<input id="translation-authority" name="receivingAuthority" placeholder="Court, MOFA, employer, etc." /></label>
            </div>
          </>
        )}
        <div className="gv-form-row">
          <label htmlFor="lead-name">Your name<input id="lead-name" name="name" autoComplete="name" required /></label>
          <label htmlFor="lead-phone">Phone / WhatsApp<input id="lead-phone" name="phone" type="tel" autoComplete="tel" required /></label>
        </div>
        <label htmlFor="lead-email">Email (optional)<input id="lead-email" name="email" type="email" autoComplete="email" /></label>
        <label htmlFor="lead-request">What would you like help with?<textarea id="lead-request" name="request" rows={3} placeholder="Share only the details needed for an initial response." /></label>
        <button className="gv-button gv-button--gold" type="submit">Prepare WhatsApp inquiry <ArrowRight size={17} /></button>
        {messageLink && (
          <div className="gv-submit-followup" role="status">
            <p>Your inquiry is ready. Nothing has been sent yet.</p>
            <a className="gv-button gv-button--dark" href={messageLink} target="_blank" rel="noreferrer">Continue to WhatsApp <ArrowUpRight size={16} /></a>
          </div>
        )}
      </form>
    </section>
  );
}

export function ServicePageExperience({ title }: { title: string }) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [attestationCountry, setAttestationCountry] = useState('United Kingdom');
  const [attestationType, setAttestationType] = useState('Educational');
  const content = serviceCatalog[title];
  if (!content) throw new Error(`Missing service page content for "${title}"`);
  const heroImage = serviceHeroImages[content.title];
  if (title === 'Family Visa') return <FamilyVisaPageContentWithFrame />;
  if (title === 'Golden Visa') return <GoldenVisaPageContentWithFrame />;
  if (title === 'Property Visa') return <PropertyVisaPageContentWithFrame />;
  if (title === 'Newborn Visa') return <NewbornVisaPageContentWithFrame />;

  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <div className="gv-service-page">
        <div className="gv-page-shell">
          <nav className="gv-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><ChevronRight size={14} /><Link href="/#services">Services</Link><ChevronRight size={14} /><span aria-current="page">{content.title}</span>
          </nav>

          <header className="gv-hero">
            <div className="gv-hero-copy">
              <Eyebrow>{content.eyebrow}</Eyebrow>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
              <div className="gv-hero-actions">
                <a className="gv-button gv-button--gold" href="#consultation">Plan your next step <ArrowRight size={17} /></a>
                <a className="gv-button gv-button--outline" href={contactInfo.phoneHref}>Call an advisor <ArrowUpRight size={16} /></a>
              </div>
              <div className="gv-hero-trust"><BadgeCheck size={17} />Private documentation support · Government approval remains with the authority</div>
            </div>
            {heroImage ? (
              <aside className="gv-hero-photo">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 800px) 100vw, 42vw"
                />
                <div className="gv-hero-photo-caption"><strong>{content.heroMetric}</strong><span>{content.heroLabel}</span></div>
              </aside>
            ) : (
              <aside className="gv-hero-visual" aria-label={`${content.heroMetric} ${content.heroLabel}`}>
              <div className="gv-visual-top"><span>UAE SERVICE GUIDE</span><span>DXB / UAE</span></div>
              <div className="gv-visual-rule" />
              <div className="gv-visual-main">
                <span className="gv-visual-mark"><FileCheck2 size={26} /></span>
                <div><strong>{content.heroMetric}</strong><span>{content.heroLabel}</span></div>
              </div>
              <div className="gv-visual-lines" aria-hidden="true"><span /><span /><span /></div>
              <div className="gv-visual-bottom"><span><i />TAILORED TO YOUR CASE</span><ArrowDownRight size={18} /></div>
              <span className="gv-visual-index" aria-hidden="true">GV / 01</span>
              </aside>
            )}
          </header>

          <section className="gv-metrics" aria-label={`${content.title} key information`}>
            {content.metrics.map((metric) => <div className="gv-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </section>

          {content.notice && (
            <aside className={`gv-notice gv-notice--${content.notice.tone ?? 'info'}`} role="note">
              <Clock3 size={21} /><div><strong>{content.notice.title}</strong><p>{content.notice.text}</p></div>
            </aside>
          )}

          <section className="gv-section gv-overview">
            <SectionHeading label="Overview" title={content.introTitle} text={content.intro} />
          </section>

          {content.interaction === 'golden' && (
            <>
              <GoldenScreener />
              <section className="gv-section">
                <SectionHeading label="Eligibility categories" title="Choose a route to explore" text="Requirements and evidence are different for every nomination category." />
                <CategoryTabs content={content} />
              </section>
            </>
          )}
          {content.interaction === 'attestation' && (
            <AttestationSelector
              country={attestationCountry}
              setCountry={setAttestationCountry}
              type={attestationType}
              setType={setAttestationType}
            />
          )}
          {content.interaction === 'visa-checker' && <VisaFineTool />}
          {content.interaction === 'locations' && <LocationCards />}
          {(content.interaction === 'attestation' || content.interaction === 'translation') && (
            <DocumentServiceFlow translation={content.interaction === 'translation'} />
          )}
          <ServiceSpecificInteractions title={content.title} onOpenCalculator={() => setCalculatorOpen(true)} />

          <section className="gv-section">
            <SectionHeading label="Service detail" title={content.title === 'Golden Visa' ? 'Why applicants choose a 10-year route' : `What ${content.title.toLowerCase()} support includes`} />
            <div className="gv-card-grid">
              {content.highlights.map((item, index) => (
                <article className="gv-info-card" key={item.title}>
                  <span className="gv-card-number">0{index + 1}</span>
                  <span className="gv-card-icon"><CheckCircle2 size={19} /></span>
                  <h3>{item.title}</h3><p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          {content.benefits && (
            <section className="gv-section gv-benefits">
              <SectionHeading label="Long-term benefits" title="One residence, more room to plan" text="Benefits are subject to continued eligibility and current immigration rules." />
              <div className="gv-benefit-grid">{content.benefits.map((benefit) => <article key={benefit.title}><CheckCircle2 size={18} /><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}</div>
            </section>
          )}

          {content.tags?.map((group) => (
            <section className="gv-section gv-language-section" key={group.title}>
              <SectionHeading label="Language coverage" title={group.title} text="Availability depends on the document and the licensed translator for the required pair." />
              <ul className="gv-language-grid">{group.values.map((value) => <li key={value}>{value}</li>)}</ul>
            </section>
          ))}

          <section className="gv-section">
            <SectionHeading label="Process" title={content.processTitle} text="A clear sequence keeps each approval and document stage visible." />
            <ol className="gv-process-grid">
              {content.process.map((step, index) => (
                <li className="gv-process-card" key={step.title}>
                  <span className="gv-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="gv-process-line" aria-hidden="true" />
                  <h3>{step.title}</h3><p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          {content.table && <ContentTable table={content.table} />}

          <section className="gv-section gv-documents-section">
            <div>
              <SectionHeading label="Prepare your file" title={content.documentsTitle} text="The final checklist can change with your sponsor, authority, document origin and service route." />
            </div>
            <ul className="gv-document-grid">
              {content.documents.map((document) => <li key={document}><span><Check size={15} /></span>{document}</li>)}
            </ul>
          </section>

          {content.title === 'Amer Center Services' && (
            <section className="gv-section gv-location-highlight">
              <div><Eyebrow>Direct appointment</Eyebrow><h2>Visit or contact our Business Bay office</h2><p>We can help check your application type and document set before you visit. Amer centres themselves are separate licensed locations; check the selected centre’s hours before travelling.</p></div>
              <address>{contactInfo.address}<a href={contactInfo.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a><a href={contactInfo.phoneHref}>Call {contactInfo.phone}</a></address>
            </section>
          )}
          {content.title === 'Amer Center Services' && (
            <div className="gv-official-links gv-section-link">
              <a href={officialLinks.gdrfa} target="_blank" rel="noreferrer">GDRFA Dubai services <ArrowUpRight size={15} /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Amer+Center+Dubai" target="_blank" rel="noreferrer">Find an Amer centre on Maps <MapPin size={15} /></a>
              <a href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I would like help preparing for an Amer centre appointment.')}`} target="_blank" rel="noreferrer">Ask about an appointment <ArrowUpRight size={15} /></a>
            </div>
          )}

          {content.title === 'Visa Validity Checker' && (
            <aside className="gv-official-notice"><ShieldCheck size={20} /><p>Protect your identity: official status checks should be made on ICP or GDRFA. Never share your UAE Pass password, one-time passcode or full card details with a third party.</p></aside>
          )}

          <section className="gv-section gv-faq-section">
            <SectionHeading label="Questions & answers" title={`Frequently asked about ${content.title.toLowerCase()}`} />
            <div className="gv-faq-list">
              {content.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {content.title === 'Document Attestation' && <div className="gv-official-links gv-section-link"><a href={officialLinks.mofa} target="_blank" rel="noreferrer">MOFA UAE attestation services <ArrowUpRight size={15} /></a></div>}
          {content.title === 'Medical Fitness & EID Locations' && <div className="gv-official-links gv-section-link"><a href={officialLinks.dha} target="_blank" rel="noreferrer">DHA medical fitness information <ArrowUpRight size={15} /></a><a href={officialLinks.icp} target="_blank" rel="noreferrer">ICP Smart Services <ArrowUpRight size={15} /></a></div>}
          {content.title === 'ILOE Insurance' && <div className="gv-official-links gv-section-link"><a href={officialLinks.iloe} target="_blank" rel="noreferrer">Check ILOE subscription on the official portal <ArrowUpRight size={15} /></a></div>}
          {content.title === 'Emirates ID Services' && <div className="gv-official-links gv-section-link"><a href={officialLinks.icp} target="_blank" rel="noreferrer">Track Emirates ID with ICP <ArrowUpRight size={15} /></a></div>}

          <LeadForm
            content={content}
            country={attestationCountry}
            setCountry={setAttestationCountry}
            attestationType={attestationType}
            setAttestationType={setAttestationType}
          />
          <p className="gv-disclaimer"><ShieldCheck size={14} />We are a private documentation and PRO-services provider, not a UAE government agency. Government fees, eligibility and processing times may change.</p>
        </div>
      </div>
      {calculatorServices[content.title] && (
        <FamilyVisaCalculator
          open={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
          initialService={calculatorServices[content.title]}
        />
      )}
    </StandalonePageFrame>
  );
}
