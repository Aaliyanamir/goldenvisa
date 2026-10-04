'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Check,
  ChevronDown,
  FileCheck2,
  Heart,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { FamilyVisaCalculator } from './FamilyVisaCalculator';

const checklistGroups = [
  {
    label: 'Spouse',
    items: [
      ['Sponsor’s passport, residence visa and Emirates ID', 'Clear colour copies; passport should meet current validity rules.'],
      ['Spouse’s passport and recent photograph', 'White background, current passport format.'],
      ['Attested marriage certificate', 'Home-country attestation, UAE Embassy and MOFA UAE; Arabic legal translation if required.'],
      ['Sponsor’s salary certificate or labour contract', 'Shows the qualifying monthly salary and employer accommodation, if applicable.'],
      ['Tenancy contract / Ejari and health insurance', 'Required depending on emirate, sponsor profile and authority checklist.'],
    ],
  },
  {
    label: 'Child',
    items: [
      ['Sponsor’s passport, residence visa and Emirates ID', 'The sponsor must hold valid UAE residence status.'],
      ['Child’s passport and recent photograph', 'Include the current passport details and required validity.'],
      ['Attested birth certificate', 'Relationship proof must follow the required issuing-country attestation chain.'],
      ['Sponsor’s salary and accommodation proof', 'Salary certificate / labour contract and Ejari when requested.'],
      ['Existing entry permit or visit visa', 'Needed when the child is already in the UAE and a status change is requested.'],
    ],
  },
  {
    label: 'Parents',
    items: [
      ['Sponsor’s passport, residence visa and Emirates ID', 'Keep the sponsor identity and residence copies current.'],
      ['Parents’ passports and recent photographs', 'Prepare a separate application file for each parent.'],
      ['Attested birth certificate proving relationship', 'Arabic legal translation may be needed for foreign-language records.'],
      ['Higher salary and suitable accommodation evidence', 'Parent sponsorship is commonly reviewed at around AED 20,000 monthly, with additional conditions.'],
      ['Health insurance and any sibling / dependency declarations', 'Requirements vary by emirate and family circumstances.'],
    ],
  },
  {
    label: 'Newborn',
    items: [
      ['UAE birth certificate', 'Start registration and any required attestation immediately after birth.'],
      ['Newborn passport and recent photograph', 'Apply through the relevant embassy or consulate as soon as the certificate is ready.'],
      ['Parents’ passports, residence visas and Emirates IDs', 'Include both parents’ identity and sponsorship records.'],
      ['Attested marriage certificate if requested', 'Confirm whether the issuing-country and MOFA chain is complete.'],
      ['Application and deadline dates', 'The 120-day period is counted from the date of birth.'],
    ],
  },
  {
    label: 'Renewal',
    items: [
      ['Dependent’s passport and current residence details', 'Check passport validity before starting the renewal.'],
      ['Sponsor’s passport, Emirates ID and residence visa', 'Sponsor residence must remain valid through the dependent renewal.'],
      ['Current Emirates ID and visa / file number', 'Keep the PRAN or application reference for tracking.'],
      ['Updated salary, accommodation and insurance proof', 'Provide updated records when requested by the authority.'],
      ['Medical fitness appointment for eligible adults', 'Medical requirements differ by age and renewal case.'],
    ],
  },
];

const faqs = [
  {
    question: 'What salary do I need to sponsor my wife or husband?',
    answer: 'The general threshold is AED 4,000 a month, or AED 3,000 if the employer provides accommodation. The figure is normally checked against the labour contract or salary certificate. Parent sponsorship is assessed separately and usually has a higher salary and housing requirement.',
  },
  {
    question: 'My family member is already in Dubai on a visit visa. Do they have to fly out?',
    answer: 'Not always. If eligible, an in-country change-of-status application can replace exit and re-entry. The medical and Emirates ID steps still apply; confirm the correct route for the current visa before it expires.',
  },
  {
    question: 'Which certificates need attestation, and can you do it?',
    answer: 'Foreign marriage and birth certificates generally need the issuing-country attestation chain, UAE Embassy attestation and MOFA UAE attestation, followed by certified Arabic translation when required. We can review the stamps and help coordinate missing stages.',
  },
  {
    question: 'How long does a Dubai family visa take?',
    answer: 'A new file commonly takes about five to ten working days once the documents are ready. Renewals are often faster. Authority review, certificate attestation and medical appointment availability can change the timeline.',
  },
  {
    question: 'Can a woman sponsor her husband and children?',
    answer: 'Yes. A UAE-resident woman can sponsor eligible family members if she meets the applicable salary and occupation conditions. The authority may request extra evidence, so check the file before submission.',
  },
  {
    question: 'What is the family file, and do I need one?',
    answer: 'A sponsor’s family file is opened for the first dependent sponsorship and can be used to add eligible family members later. A one-time government fee may apply when opening it.',
  },
  {
    question: 'Do I have to come to your office?',
    answer: 'Most document review and file preparation can be handled remotely. Applicants still attend any government-required medical and biometric appointments, and originals may be needed for some attestation or submission steps.',
  },
  {
    question: 'What do you charge on top of government fees?',
    answer: 'Government charges are itemized and passed on with official receipts. Our service fee, insurance, attestation, medical, Emirates ID and any refundable deposits are shown separately in the written quote before work begins.',
  },
];

const feeExamples = [
  { label: 'Spouse · new residence visa', detail: 'Illustrative single-dependent application', amount: 'AED 1,579' },
  { label: 'Two children · already in the UAE', detail: 'Illustrative status-change case', amount: 'AED 4,766' },
  { label: 'Spouse · visa renewal', detail: 'Illustrative renewal application', amount: 'AED 1,037' },
  { label: 'Spouse + child · Golden Visa holder', detail: 'Illustrative dependent file', amount: 'AED 8,284' },
];

const deadlines = [
  { value: '60 days', title: 'Entry permit', detail: 'Entry permits commonly have a limited validity window. Check the expiry printed on your permit; the exact period depends on the permit type.' },
  { value: '120 days', title: 'Newborn residence', detail: 'A newborn’s residence process must be completed within the grace period counted from the birth date.' },
  { value: '30 days', title: 'Renewal grace', detail: 'A post-expiry grace period may apply. Check your live ICP or GDRFA file and renew before fines begin.' },
  { value: '6 months', title: 'Time outside the UAE', detail: 'Many standard residence visas may be affected after 180 continuous days abroad; exemptions and special visa categories apply.' },
];

const relatedServices = [
  { label: 'Golden Visa', href: '/golden-visa' },
  { label: 'Property Visa', href: '/property-visa' },
  { label: 'Attestation', href: '/attestation' },
  { label: 'Legal Translation', href: '/legal-translation' },
  { label: 'Power of Attorney', href: '/poa' },
  { label: 'PRO Services', href: '/pro-services' },
];

function FamilyEyebrow({ children }: { children: React.ReactNode }) {
  return <span className="gv-family-eyebrow"><span aria-hidden="true" />{children}</span>;
}

function FamilyVisaPageContent() {
  const [activeChecklist, setActiveChecklist] = useState(0);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const closeCalculator = () => setCalculatorOpen(false);
  const selectedChecklist = checklistGroups[activeChecklist];
  const readyCount = selectedChecklist.items.filter(([item]) => checkedItems.includes(item)).length;
  const checklistMessage = `Hello, I would like help with a UAE family visa (${selectedChecklist.label}). I have ${readyCount} of ${selectedChecklist.items.length} checklist items ready. Please send me the next steps.`;
  const checklistLink = `${contactInfo.whatsappHref}?text=${encodeURIComponent(checklistMessage)}`;

  const toggleChecklistItem = (item: string) => {
    setCheckedItems((current) => current.includes(item)
      ? current.filter((checked) => checked !== item)
      : [...current, item]);
  };

  return (
    <div className="gv-family-page">
      <div className="gv-family-shell">
        <nav className="gv-family-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Family Visa</span>
        </nav>

        <header className="gv-family-hero">
          <div className="gv-family-hero-copy">
            <FamilyEyebrow>Family visa · UAE residence</FamilyEyebrow>
            <h1>Bring your family to the UAE — <span>we run the whole file.</span></h1>
            <p><strong>800 DOCS prepares</strong> the sponsorship, checks your file against GDRFA or ICP requirements, helps coordinate medical and Emirates ID appointments, and keeps you informed through residence issuance.</p>
            <a className="gv-family-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I would like to start a UAE family visa application. Please send me the eligibility checklist.')}`} target="_blank" rel="noreferrer">
              Start on WhatsApp <ArrowRight size={16} />
            </a>
            <button className="gv-family-button gv-family-button--dark" type="button" aria-haspopup="dialog" onClick={() => setCalculatorOpen(true)}>
              Calculate government fees <ArrowRight size={16} />
            </button>
            <div className="gv-family-proof">
              <span><ShieldCheck size={14} />Independent documentation support</span>
              <span><FileCheck2 size={14} />One clear checklist, one file at a time</span>
            </div>
          </div>
          <aside className="gv-family-hero-card">
            <div className="gv-family-live"><span />FREE FILE REVIEW <small>· UAE FAMILY VISA</small></div>
            <h2>Who are you sponsoring?</h2>
            <p>Choose a relationship to see the starting eligibility guide.</p>
            <div className="gv-family-hero-choices">
              {[
                { icon: Heart, label: 'My spouse', detail: 'From AED 4,000 salary', href: '#who-qualifies' },
                { icon: Users, label: 'My child', detail: 'From AED 4,000 salary', href: '#who-qualifies' },
                { icon: Users, label: 'My parents', detail: 'Higher income & housing', href: '#who-qualifies' },
                { icon: Baby, label: 'My newborn', detail: '120-day deadline', href: '#deadlines' },
              ].map(({ icon: Icon, label, detail, href }) => (
                <a key={label} href={href} className="gv-family-choice">
                  <Icon size={16} /><span><strong>{label}</strong><small>{detail}</small></span><ArrowUpRight size={14} />
                </a>
              ))}
            </div>
            <div className="gv-family-hero-card-foot"><Check size={13} />Requirements are confirmed against your individual case</div>
          </aside>
          <span className="gv-family-hero-index" aria-hidden="true">FAMILY / DXB</span>
        </header>

        <div className="gv-family-stats" aria-label="Family visa highlights">
          <div><strong>5–10 days</strong><span>Typical new application, after documents are ready</span></div>
          <div><strong>3–5 days</strong><span>Typical renewal processing time</span></div>
          <div><strong>AED 4,000</strong><span>General minimum salary for spouse and child sponsorship</span></div>
          <div><strong>120 days</strong><span>Newborn residence deadline from birth</span></div>
        </div>

        <section className="gv-family-section gv-family-eligibility" id="who-qualifies">
          <div className="gv-family-heading">
            <FamilyEyebrow>Who you can sponsor</FamilyEyebrow>
            <h2>Who qualifies, and what each visa <em>needs.</em></h2>
            <p>These are general UAE guidelines for family sponsorship. The authority checks your exact emirate, sponsor profile and documents before approval.</p>
          </div>
          <div className="gv-family-eligibility-list">
            {[
              { icon: Heart, title: 'Spouse', detail: 'Marriage certificate attested and translated where required.', amount: 'AED 4,000', note: 'monthly salary' },
              { icon: Users, title: 'Children', detail: 'Birth certificate and parent relationship records.', amount: 'AED 4,000', note: 'or AED 3,000 with employer housing' },
              { icon: Users, title: 'Parents', detail: 'Higher sponsor income, suitable housing and insurance conditions.', amount: 'AED 20,000', note: 'commonly assessed income' },
              { icon: Baby, title: 'Newborn', detail: 'Birth certificate, passport and dependent visa file.', amount: '120 days', note: 'from the date of birth' },
            ].map(({ icon: Icon, title, detail, amount, note }) => (
              <article className="gv-family-eligibility-row" key={title}>
                <span className="gv-family-eligibility-icon"><Icon size={17} /></span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                <div className="gv-family-eligibility-value"><small>GENERAL GUIDE</small><strong>{amount}</strong><span>{note}</span></div>
              </article>
            ))}
          </div>
          <aside className="gv-family-salary-note">
            <span>!</span><p><strong>Salary alone may not tell the whole story.</strong> Profession, accommodation, relationship proof and insurance can also be assessed. Parent sponsorship has separate rules—check the current requirements before you apply.</p>
            <a href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Please check my family visa sponsor eligibility and salary documents.')}`} target="_blank" rel="noreferrer">Check my case <ArrowRight size={14} /></a>
          </aside>
        </section>

        <section className="gv-family-section gv-family-service" id="how-it-works">
          <div className="gv-family-heading">
            <FamilyEyebrow>How it works</FamilyEyebrow>
            <h2>Two things from you. <em>Everything else</em> from us.</h2>
          </div>
          <div className="gv-family-service-columns">
            <article className="gv-family-service-card">
              <span className="gv-family-card-kicker">YOU <i>·</i> Send and show up</span>
              <h3>Share your documents and attend the required appointments.</h3>
              <ul>
                <li><Check size={15} />Passport copies, relationship certificates and sponsor salary proof.</li>
                <li><Check size={15} />Medical screening for eligible adult applicants.</li>
                <li><Check size={15} />Emirates ID biometrics when the authority requests them.</li>
                <li><Check size={15} />Originals only when a government step requires them.</li>
              </ul>
            </article>
            <article className="gv-family-service-card gv-family-service-card--dark">
              <span className="gv-family-card-kicker"><b>800 DOCS</b> <i>·</i> The rest of the file</span>
              <ul>
                <li><Check size={15} />Review eligibility against GDRFA / ICP requirements.</li>
                <li><Check size={15} />Coordinate certificate attestation and certified translation.</li>
                <li><Check size={15} />Prepare entry permit or in-country status-change application.</li>
                <li><Check size={15} />Help coordinate medical and Emirates ID appointments.</li>
                <li><Check size={15} />Track residence issuance and keep the family file organized.</li>
                <li><Check size={15} />Share an itemized quote before you approve any paid work.</li>
              </ul>
            </article>
          </div>
          <ol className="gv-family-process">
            {[
              ['01', 'Quote & checklist', 'Route and documents confirmed'],
              ['02', 'Entry permit', 'New entry or status change'],
              ['03', 'Medical & EID', 'Appointments coordinated'],
              ['04', 'Residence visa', 'Final approval and issuance'],
            ].map(([number, title, detail]) => (
              <li key={number}><span>{number}</span><strong>{title}</strong><small>{detail}</small></li>
            ))}
          </ol>
        </section>

        <section className="gv-family-section gv-family-checklist-section" id="documents">
          <div className="gv-family-heading">
            <FamilyEyebrow>Documents</FamilyEyebrow>
            <h2>Tick what you have. We’ll chase the <em>rest.</em></h2>
            <p>Choose the applicant type. Your checklist stays in this browser and is never uploaded automatically.</p>
          </div>
          <div className="gv-family-checklist">
            <div className="gv-family-checklist-tabs" role="tablist" aria-label="Family visa document checklist">
              {checklistGroups.map((group, index) => (
                <button
                  key={group.label}
                  id={`family-checklist-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeChecklist === index}
                  aria-controls="family-checklist-panel"
                  onClick={() => setActiveChecklist(index)}
                >
                  {group.label}
                </button>
              ))}
            </div>
            <div className="gv-family-checklist-meta">
              <strong>{selectedChecklist.label} sponsorship checklist</strong>
              <span>{readyCount} of {selectedChecklist.items.length} ready</span>
            </div>
            <div id="family-checklist-panel" role="tabpanel" aria-labelledby={`family-checklist-tab-${activeChecklist}`} className="gv-family-checklist-items">
              {selectedChecklist.items.map(([item, detail]) => {
                const isChecked = checkedItems.includes(item);
                return (
                  <label className={isChecked ? 'is-checked' : ''} key={item}>
                    <input type="checkbox" checked={isChecked} onChange={() => toggleChecklistItem(item)} />
                    <span className="gv-family-checkbox"><Check size={13} /></span>
                    <span><strong>{item}</strong><small>{detail}</small></span>
                  </label>
                );
              })}
            </div>
            <div className="gv-family-checklist-foot">
              <span>Checklist is a guide. The authority may request additional documents.</span>
              <a href={checklistLink} target="_blank" rel="noreferrer">Send my list on WhatsApp <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section className="gv-family-section gv-family-fees-section" id="fees">
          <div className="gv-family-heading">
            <FamilyEyebrow>Government fees</FamilyEyebrow>
            <h2>Every dirham, <em>before</em> you start.</h2>
            <p>Example family visa estimates. Your final government fees depend on visa duration, emirate, applicant age, in-country status change and any required insurance.</p>
          </div>
          <div className="gv-family-fees">
            {feeExamples.map((fee) => (
              <button type="button" aria-haspopup="dialog" onClick={() => setCalculatorOpen(true)} key={fee.label}>
                <span><strong>{fee.label}</strong><small>{fee.detail}</small></span><b>{fee.amount}</b><ArrowRight size={15} />
              </button>
            ))}
            <p><ShieldCheck size={15} />Illustrative estimates only, not a live government fee quote. Official fees are confirmed and itemized before you proceed; service charges, insurance and attestation are shown separately.</p>
          </div>
          <button className="gv-family-estimator-link" id="family-fee-estimator" type="button" aria-haspopup="dialog" onClick={() => setCalculatorOpen(true)}>
            <span>⊙</span> Open the fee estimator <ArrowUpRight size={15} />
          </button>
        </section>

        <section className="gv-family-section gv-family-deadlines-section" id="deadlines">
          <div className="gv-family-heading">
            <FamilyEyebrow>Good to know</FamilyEyebrow>
            <h2>The dates that <em>cost money</em> if you miss them.</h2>
          </div>
          <div className="gv-family-deadlines">
            {deadlines.map((deadline) => (
              <article key={deadline.title}>
                <strong>{deadline.value}</strong>
                <div><h3>{deadline.title}</h3><p>{deadline.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="gv-family-review" aria-labelledby="family-review-title">
          <div className="gv-family-heading">
            <FamilyEyebrow>Our reviews</FamilyEyebrow>
            <h2 id="family-review-title">Rated <em>4.9</em> by families we’ve filed for.</h2>
          </div>
          <div className="gv-family-review-card">
            <strong className="gv-family-review-score">4.9</strong>
            <div><span className="gv-family-stars" aria-label="Five stars">★★★★★</span><p>Based on Google customer reviews</p></div>
            <a href={contactInfo.googleReviewsUrl} target="_blank" rel="noreferrer">Read reviews on Google <ArrowUpRight size={14} /></a>
          </div>
        </section>

        <section className="gv-family-section gv-family-faq-section" id="family-faq">
          <div className="gv-family-heading">
            <FamilyEyebrow>Questions</FamilyEyebrow>
            <h2>Family visa questions we answer <em>every day.</em></h2>
          </div>
          <div className="gv-family-faqs">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={openFaq === index}>
                <summary onClick={(event) => { event.preventDefault(); setOpenFaq(openFaq === index ? null : index); }}>
                  {faq.question}<ChevronDown size={16} />
                </summary>
                {openFaq === index && <p>{faq.answer}</p>}
              </details>
            ))}
          </div>
          <p className="gv-family-faq-source">Answers are general guidance and should be checked against current GDRFA / ICP rules for your application.</p>
        </section>

        <nav className="gv-family-related" aria-label="Related services">
          <strong>Related services</strong>
          <div>{relatedServices.map((service) => <Link href={service.href} key={service.label}>{service.label}<ArrowUpRight size={12} /></Link>)}</div>
        </nav>

        <section className="gv-family-closing">
          <FamilyEyebrow>Ready when you are</FamilyEyebrow>
          <h2>Send the documents tonight.<br /><span>We’ll file tomorrow.</span></h2>
          <p>Share clear copies on WhatsApp to get a checklist and an itemized estimate. You stay in control before anything is submitted.</p>
          <div>
            <a className="gv-family-button" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need help with a family visa in the UAE. Please send me the document checklist and a current itemized quote.')}`} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight size={15} /></a>
            <a className="gv-family-closing-secondary" href={contactInfo.phoneHref}>Call our team</a>
          </div>
          <small>Private service provider · Visa decisions are made by the relevant UAE authority.</small>
        </section>
      </div>
      <FamilyVisaCalculator open={calculatorOpen} onClose={closeCalculator} />
    </div>
  );
}

export function FamilyVisaPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <FamilyVisaPageContent />
    </StandalonePageFrame>
  );
}
