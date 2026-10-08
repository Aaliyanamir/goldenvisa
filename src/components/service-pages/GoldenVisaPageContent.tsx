'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Brush,
  Building2,
  Check,
  FileCheck2,
  Landmark,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { FamilyVisaCalculator, type ServiceId } from './FamilyVisaCalculator';

const categories = [
  {
    id: 'property',
    label: 'Property investor',
    badge: 'AED 2M+',
    summary: 'Own one or more qualifying UAE properties with a combined value of AED 2 million or more.',
    icon: Building2,
    title: 'A property route built around the registered value',
    detail: 'A qualifying UAE real-estate investment valued at AED 2 million or more may support a 10-year Golden Visa application. Title, valuation, mortgage and ownership-share evidence are checked by the relevant authority.',
    conditions: ['Qualifying UAE property must be registered to the applicant or qualifying co-owners.', 'Current property valuation, title status, mortgage and any minimum paid amount must meet the authority route.', 'The AED 2 million figure is a route guide; it does not guarantee approval.'],
    eligibility: ['Combined qualifying property value is commonly assessed at AED 2 million or more.', 'DLD title deed or an eligible off-plan record may be required.', 'For mortgaged properties, the authority may require a bank liability letter and proof of paid amount.'],
    steps: ['Check title deed / Oqood and each applicant’s registered share.', 'Obtain DLD valuation and bank evidence if required.', 'Submit the investor nomination or application through the relevant authority.', 'After approval, complete medical fitness, Emirates ID and residence issuance.'],
    documents: ['DLD title deed or eligible Oqood', 'Current valuation where requested', 'Mortgage / paid-amount evidence', 'Co-owner details and ownership shares'],
    prompt: 'Approximate property value (AED)',
    threshold: 2_000_000,
  },
  {
    id: 'company',
    label: 'Company owner',
    badge: 'AED 2M+',
    summary: 'Own or hold a qualifying share in a UAE company that meets the investment criteria.',
    icon: BriefcaseBusiness,
    title: 'A company investment route supported by ownership evidence',
    detail: 'A qualifying company investment or ownership share may support an investor route. Company valuation, ownership, licensing and any required authority recommendation need to be reviewed against current criteria.',
    conditions: ['The company must be UAE-licensed and the applicant’s ownership / investment must be verifiable.', 'The authority may require a valuation, audited financial statements or a recommendation.', 'The share value alone is not an approval; company activity and current category rules are reviewed.'],
    eligibility: ['The commonly cited investment guide is AED 2 million or more.', 'Applicant identity, shareholding and source of funds must be evidenced.', 'Trade licence and company records must be valid for the application.'],
    steps: ['Confirm licence status, ownership share and qualifying valuation.', 'Prepare company, applicant and source-of-funds evidence.', 'Obtain any required recommendation and submit through the correct authority.', 'Complete medical, Emirates ID and residence issuance after approval.'],
    documents: ['Valid UAE trade licence', 'Share certificate and ownership records', 'Company valuation or audited financial evidence', 'Investor / authority recommendation if required'],
    prompt: 'Company share value (AED)',
    threshold: 2_000_000,
  },
  {
    id: 'professional',
    label: 'Manager or executive',
    badge: 'AED 30K salary',
    summary: 'Managers, executives and skilled professionals earning AED 30,000 or more per month.',
    icon: BadgeCheck,
    title: 'For qualified professionals with a strong UAE employment file',
    detail: 'The skilled-professional route can consider occupation, salary, degree, employment contract and any required professional licence. A commonly cited salary figure is AED 30,000 per month; the authority assesses the full category criteria.',
    conditions: ['Applicant must have a qualifying skilled / managerial role and valid UAE employment records.', 'Salary, occupation classification, degree attestation and professional licence may all be reviewed.', 'The salary guide is not sufficient by itself; the authority confirms current criteria.'],
    eligibility: ['Commonly cited monthly salary is AED 30,000 or above.', 'A valid employment contract and attested university degree may be required.', 'Regulated professions may need a valid professional licence or approval.'],
    steps: ['Check occupation classification, contract and salary evidence.', 'Attest the qualification and prepare any professional licence.', 'Submit the category application / nomination to the responsible authority.', 'Complete medical fitness, Emirates ID and residence issuance after approval.'],
    documents: ['Valid UAE employment contract', 'Salary certificate and payslips if requested', 'Attested university degree', 'Professional licence for regulated roles'],
    prompt: 'Monthly basic salary (AED)',
    threshold: 30_000,
  },
  {
    id: 'deposit',
    label: 'Fixed deposit',
    badge: 'AED 2M deposit',
    summary: 'Hold a qualifying fixed-term deposit with an approved UAE bank.',
    icon: Landmark,
    title: 'An investment route using a qualifying bank deposit',
    detail: 'A qualifying deposit route may require a fixed-term investment with an approved UAE bank and official confirmation of the amount, source and holding terms. Confirm that the deposit type is accepted before applying.',
    conditions: ['Deposit must be placed with a UAE bank accepted for the selected route.', 'The bank must confirm the amount, owner, source and required holding period.', 'Early release or a non-qualifying deposit type can affect eligibility; verify before committing funds.'],
    eligibility: ['Common guide is a fixed deposit of AED 2 million or more.', 'Applicant should be named as account holder / investor in bank records.', 'Additional bank or authority recommendation may be required.'],
    steps: ['Ask the bank to confirm the current visa route and deposit conditions in writing.', 'Prepare deposit certificate, account-holder ID and source-of-funds evidence.', 'Submit the bank-backed file to the relevant authority.', 'Complete UAE residence formalities after approval and maintain deposit conditions as required.'],
    documents: ['Bank confirmation of the qualifying deposit', 'Deposit term and account-holder details', 'Evidence of source of funds if requested', 'Authority or bank recommendation where applicable'],
    prompt: 'Fixed deposit amount (AED)',
    threshold: 2_000_000,
  },
  {
    id: 'talent',
    label: 'Creative talent',
    badge: 'Via Ministry of Culture',
    summary: 'For talent across cultural and creative fields, subject to nomination by the relevant authority.',
    icon: Brush,
    title: 'A nomination-led route for creative and cultural talent',
    detail: 'Creative professionals may be considered through the relevant cultural authority or nominating body. The required portfolio, professional record and nomination depend on the field and current criteria.',
    conditions: ['Route is nomination-led and depends on the applicant’s field and record of achievement.', 'The responsible cultural or creative authority determines the evidence and endorsement required.', 'A portfolio by itself does not equal nomination or visa approval.'],
    eligibility: ['Relevant creative, cultural or artistic professional profile.', 'Documented work, recognition, awards, publications or impact may support assessment.', 'Recommendation / nomination from the responsible authority may be required.'],
    steps: ['Identify the nominating authority for the applicant’s creative discipline.', 'Prepare a portfolio and verifiable record of professional achievements.', 'Request the required recommendation or nomination.', 'Submit the residence file and complete medical / Emirates ID steps after approval.'],
    documents: ['Portfolio and record of creative work', 'Awards, publications or professional evidence', 'Recommendation or nomination from the relevant body', 'Passport and current residence information'],
    prompt: 'Creative talent nomination stage',
  },
  {
    id: 'dependent',
    label: 'Family dependents',
    badge: 'Via Golden Visa holder',
    summary: 'Eligible spouses, children and parents may obtain long-term residency through an approved sponsor.',
    icon: Users,
    title: 'A family route linked to an eligible Golden Visa sponsor',
    detail: 'Eligible family members may apply as dependents of a Golden Visa holder. Sponsorship conditions, relationship evidence, insurance and each applicant’s requirements must be confirmed.',
    conditions: ['A valid Golden Visa holder must sponsor the dependent under the applicable relationship rules.', 'Each dependent requires an individual application and valid identity documents.', 'Relationship certificates may need attestation / Arabic translation; insurance or other conditions may apply.'],
    eligibility: ['Eligible spouse, children and parents may be considered subject to current dependent rules.', 'Sponsor’s visa and residence status must be valid.', 'The authority confirms relationship proof, age / dependency rules and any financial or insurance requirements.'],
    steps: ['Confirm sponsor status and each dependent’s eligible relationship.', 'Prepare attested relationship documents, passports and required insurance.', 'Submit a dependent entry permit / residence application for each family member.', 'Complete status change, medical fitness and Emirates ID steps when required.'],
    documents: ['Sponsor’s valid Golden Visa and Emirates ID', 'Attested marriage or birth certificate as applicable', 'Dependent passport and compliant photograph', 'Insurance and application records where required'],
    prompt: 'Sponsor status',
  },
] as const;

const benefits = [
  { title: 'Long-term planning', detail: 'A 10-year residence validity may reduce frequent renewal cycles, subject to the approved category and current rules.' },
  { title: 'Family sponsorship', detail: 'Eligible family members can be considered under the applicable Golden Visa sponsorship rules.' },
  { title: 'Residence flexibility', detail: 'Golden Visa holders may have different residence conditions from standard visas; check the current rules for your category.' },
  { title: 'One coordinated file', detail: 'Keep nomination, evidence, medical fitness and Emirates ID stages organized against a single checklist.' },
];

const process = [
  ['Choose a route', 'Match your profile to property, company investment, professional, fixed deposit, creative talent or family sponsorship.'],
  ['Verify the evidence', 'Review official records, ownership or salary figures, qualification documents and any required nomination.'],
  ['Submit for review', 'Prepare the application through the authority channel that handles the selected category.'],
  ['Complete UAE formalities', 'After the required approval, complete medical fitness, Emirates ID and residence issuance steps.'],
];

const faqs = [
  ['Does owning property automatically qualify me?', 'No. The relevant authority checks the registered property value, ownership share, property status and category rules. The AED 2 million figure is a route guide, not an approval promise.'],
  ['Can a mortgaged property be used?', 'Some property cases may be considered with mortgage and paid-amount evidence. The accepted valuation and finance documents depend on the authority and application route.'],
  ['Is AED 30,000 salary enough for a professional Golden Visa?', 'Salary alone does not confirm eligibility. Occupation, degree, contract, licence and other current criteria may also be assessed.'],
  ['Should I cancel my current visa before applying?', 'Do not cancel an existing UAE residence visa until the authority-specific application sequence has been confirmed for your case.'],
  ['Can my family apply with me?', 'Eligible family applications can be planned alongside the main applicant. Relationship proof, insurance and each dependent’s application are reviewed separately.'],
  ['How much does the Golden Visa cost?', 'The total depends on category, authority charges, Emirates ID, medical, dependents and optional support. Use the service calculator for a route check, then request a current itemized quote.'],
] as const;

function GoldenVisaPageContent() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [metric, setMetric] = useState('');
  const [screenerStage, setScreenerStage] = useState('');
  const [goldenSponsor, setGoldenSponsor] = useState('');
  const [consultationStage, setConsultationStage] = useState('');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [messageLink, setMessageLink] = useState('');
  const active = categories[activeCategory];
  const isNumericRoute = 'threshold' in active;
  const metricValue = Number(metric);
  const eligibilityMessage = active.id === 'dependent'
    ? goldenSponsor === 'yes'
      ? 'A dependent route may be available through your current Golden Visa sponsor. The relationship and current dependent requirements still need confirmation.'
      : 'A dependent application requires an eligible Golden Visa sponsor. Confirm the relationship and current rules.'
    : isNumericRoute
      ? metricValue >= active.threshold
        ? `Your stated figure reaches the commonly cited ${active.badge} route guide. The complete evidence and current authority criteria still need review.`
        : `Your stated figure is below the commonly cited ${active.badge} route guide. Another category may fit better.`
      : 'This route is nomination- and evidence-led. An advisor can help identify the correct nominating authority and records.';
  const hasScreenerResponse = Boolean(metric || screenerStage || (active.id === 'dependent' && goldenSponsor));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = [
      'Hello, I would like a Golden Visa consultation.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Category: ${active.label}`,
      consultationStage ? `Current stage: ${consultationStage}` : '',
      metric ? `${active.prompt}: ${metric}` : '',
      active.id === 'dependent' && goldenSponsor ? `Current Golden Visa sponsor: ${goldenSponsor}` : '',
      'Please confirm current eligibility, documents and itemized fees.',
    ].filter(Boolean).join('\n');
    setMessageLink(`${contactInfo.whatsappHref}?text=${encodeURIComponent(message)}`);
  };

  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <div className="gv-golden-page">
        <div className="gv-golden-shell">
          <nav className="gv-golden-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Golden Visa</span>
          </nav>

          <header className="gv-golden-hero">
            <div className="gv-golden-hero-copy">
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />10-year UAE residence · category-led guide</span>
              <h1>Your next chapter in the UAE, <strong>planned for the long term.</strong></h1>
              <p>Compare Golden Visa routes, see which documents each one needs and get a careful first eligibility check before you start an application.</p>
              <div className="gv-golden-actions">
                <a className="gv-golden-button" href="#eligibility">Check my route <ArrowRight size={17} /></a>
                <button className="gv-golden-button gv-golden-button--outline" type="button" onClick={() => setCalculatorOpen(true)}>Open all-service calculator <ArrowUpRight size={16} /></button>
              </div>
              <div className="gv-golden-trust"><ShieldCheck size={16} />Independent documentation support · decisions remain with UAE authorities</div>
            </div>
            <div className="gv-golden-hero-image">
              <Image src="/assets/golden-visa/dubai-residency.webp" alt="Burj Al Arab on the Dubai coastline" fill preload sizes="(max-width: 760px) 100vw, 48vw" />
              <div className="gv-golden-image-shade" />
              <div className="gv-golden-image-caption"><span>GOLDEN VISA · UAE</span><strong>Six pathways.<br />One considered plan.</strong></div>
              <span className="gv-golden-image-stamp"><BadgeCheck size={15} />10 YEARS</span>
            </div>
          </header>

          <div className="gv-golden-stats" aria-label="Golden Visa overview">
            <div><strong>10 years</strong><span>Residence validity, subject to category approval</span></div>
            <div><strong>AED 2M</strong><span>Common real-estate investor route guide</span></div>
            <div><strong>6 pathways</strong><span>Property · company · professional · deposit · talent · family</span></div>
          </div>

          <section className="gv-golden-section" id="eligibility">
            <div className="gv-golden-section-heading">
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />Six ways to qualify</span>
              <h2>Choose the route <strong>that fits your evidence.</strong></h2>
              <p>Tap a pathway to see typical requirements and a first-check guide. Criteria are route-specific and final decisions remain with the relevant UAE authority.</p>
            </div>
            <div className="gv-golden-category-tabs" role="group" aria-label="Golden Visa applicant categories">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button key={category.id} type="button" aria-pressed={activeCategory === index} aria-controls="gv-golden-category-panel" id={`gv-golden-tab-${category.id}`} onClick={() => { setActiveCategory(index); setMetric(''); setScreenerStage(''); setGoldenSponsor(''); }}>
                    <span className="gv-golden-pathway-card-top"><span className="gv-golden-pathway-icon"><Icon size={19} /></span><span className="gv-golden-pathway-badge">{category.badge}</span></span>
                    <strong>{category.label}</strong>
                    <span className="gv-golden-pathway-summary">{category.summary}</span>
                    <span className="gv-golden-pathway-link">Requirements <ArrowRight size={14} /></span>
                  </button>
                );
              })}
            </div>
            <div className="gv-golden-category-panel" id="gv-golden-category-panel" role="region" aria-labelledby={`gv-golden-tab-${active.id}`}>
              <div className="gv-golden-route-copy">
                <span className="gv-golden-route-number">0{activeCategory + 1}</span>
                <h3>{active.title}</h3>
                <p>{active.detail}</p>
                <div className="gv-golden-route-detail">
                  <h4>Conditions</h4>
                  <ul>{active.conditions.map((condition) => <li key={condition}><Check size={15} />{condition}</li>)}</ul>
                </div>
                <div className="gv-golden-route-detail">
                  <h4>Eligibility criteria</h4>
                  <ul>{active.eligibility.map((criterion) => <li key={criterion}><Check size={15} />{criterion}</li>)}</ul>
                </div>
                <div className="gv-golden-route-detail">
                  <h4>Step-by-step process</h4>
                  <ol>{active.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
                </div>
                <div className="gv-golden-route-detail">
                  <h4>Document requirements</h4>
                  <ul>{active.documents.map((document) => <li key={document}><Check size={15} />{document}</li>)}</ul>
                </div>
              </div>
              <div className="gv-golden-screener">
                <h3>Quick route check</h3>
                <p>Enter a broad figure or stage. Nothing is submitted or stored.</p>
                {active.id === 'dependent' ? (
                  <label htmlFor="gv-golden-sponsor">Is your sponsor a current Golden Visa holder?
                    <select id="gv-golden-sponsor" value={goldenSponsor} onChange={(event) => setGoldenSponsor(event.target.value)}>
                      <option value="">Choose one</option><option value="yes">Yes</option><option value="no">No</option>
                    </select>
                  </label>
                ) : isNumericRoute ? (
                  <label htmlFor="gv-golden-metric">
                    {active.prompt}
                    <input id="gv-golden-metric" type="number" min="0" inputMode="numeric" placeholder={active.id === 'professional' ? 'e.g. 30,000' : 'e.g. 2,000,000'} value={metric} onChange={(event) => setMetric(event.target.value)} />
                  </label>
                ) : active.id === 'talent' ? (
                  <label htmlFor="gv-golden-metric">{active.prompt}
                    <select id="gv-golden-metric" value={screenerStage} onChange={(event) => { setScreenerStage(event.target.value); setMetric(event.target.value); }}>
                      <option value="">Select one</option><option value="Nomination secured">Nomination secured</option><option value="Preparing creative portfolio">Preparing creative portfolio</option><option value="Need to identify nominating body">Need to identify nominating body</option>
                    </select>
                  </label>
                ) : null}
                <div className="gv-golden-result" role="status" aria-live="polite"><ShieldCheck size={18} /><p>{hasScreenerResponse ? eligibilityMessage : 'Enter the relevant figure or stage to see the next route check.'}</p></div>
                <button type="button" onClick={() => setCalculatorOpen(true)}>Continue to service calculator <ArrowRight size={15} /></button>
              </div>
            </div>
          </section>

          <section className="gv-golden-benefits-section">
            <div className="gv-golden-section-heading">
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />A long-term residence route</span>
              <h2>More room to plan <strong>what comes next.</strong></h2>
            </div>
            <div className="gv-golden-benefit-grid">
              {benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><BadgeCheck size={19} /><h3>{benefit.title}</h3><p>{benefit.detail}</p></article>)}
            </div>
          </section>

          <section className="gv-golden-section">
            <div className="gv-golden-section-heading">
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />From profile review to residence</span>
              <h2>A clear process, <strong>one approval at a time.</strong></h2>
              <p>The exact authority sequence differs by category. Confirm where to file before changing an existing visa status.</p>
            </div>
            <ol className="gv-golden-process">{process.map(([title, detail], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><span className="gv-golden-process-divider" aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></li>)}</ol>
          </section>

          <section className="gv-golden-documents-section">
            <div>
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />Prepare your file</span>
              <h2>Documents change with the <strong>route you choose.</strong></h2>
              <p>Start with clear, current copies. The authority may ask for additional originals, attestations or nominations.</p>
              <a href="#golden-consultation">Ask for a route-specific checklist <ArrowRight size={15} /></a>
            </div>
            <div className="gv-golden-document-cards">
              {[
                ['Core identity', 'Passport, UAE visa and Emirates ID if resident, plus a compliant recent photograph.'],
                ['Property investor', 'Title deed or eligible Oqood, DLD valuation, mortgage and co-owner evidence where relevant.'],
                ['Company owner', 'Trade licence, ownership records and company valuation or financial evidence.'],
                ['Professional', 'Employment contract, salary evidence, attested qualification and professional licence if applicable.'],
                ['Fixed deposit', 'Bank confirmation, deposit terms and source-of-funds evidence if requested.'],
                ['Creative talent', 'Portfolio, professional record and nomination or recommendation from the relevant authority.'],
                ['Family dependents', 'Sponsor’s Golden Visa and attested proof of relationship for each dependent.'],
              ].map(([title, detail]) => <article key={title}><FileCheck2 size={18} /><h3>{title}</h3><p>{detail}</p></article>)}
            </div>
          </section>

          <section className="gv-golden-faq-section">
            <div className="gv-golden-section-heading"><span className="gv-golden-eyebrow"><span aria-hidden="true" />Questions & answers</span><h2>Golden Visa, <strong>explained clearly.</strong></h2></div>
            <div className="gv-golden-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </section>

          <section className="gv-golden-consultation" id="golden-consultation">
            <div>
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />Fast-track consultation</span>
              <h2>Get a Golden Visa route review.</h2>
              <p>Share your preferred category and a broad profile outline. An advisor can map the likely evidence, authority steps and current fee components.</p>
              <div><Users size={17} />Your inquiry is prepared locally; it is sent only if you choose to continue in WhatsApp.</div>
            </div>
            <form onSubmit={handleSubmit} onChange={() => setMessageLink('')}>
              <label htmlFor="gv-golden-name">Your name<input id="gv-golden-name" name="name" autoComplete="name" required /></label>
              <label htmlFor="gv-golden-phone">Phone / WhatsApp<input id="gv-golden-phone" name="phone" type="tel" autoComplete="tel" required /></label>
              <label htmlFor="gv-golden-email">Email (optional)<input id="gv-golden-email" name="email" type="email" autoComplete="email" /></label>
              <label htmlFor="gv-golden-stage">Current application stage<select id="gv-golden-stage" name="stage" value={consultationStage} onChange={(event) => setConsultationStage(event.target.value)}><option value="">Choose a stage</option><option>Exploring eligibility</option><option>Documents ready</option><option>Existing application in progress</option><option>Need help with dependents</option></select></label>
              <button className="gv-golden-button" type="submit">Prepare consultation request <ArrowRight size={16} /></button>
              {messageLink && <div role="status" className="gv-golden-form-result"><p>Your inquiry is ready. It has not been sent.</p><a href={messageLink} target="_blank" rel="noreferrer">Continue to WhatsApp <ArrowUpRight size={15} /></a></div>}
            </form>
          </section>
          <p className="gv-golden-disclaimer"><ShieldCheck size={14} />Private documentation provider, not a government authority. Published thresholds are general route guides and can change; verify eligibility, fees and timelines with the relevant authority before acting.</p>
        </div>
      </div>
      <FamilyVisaCalculator open={calculatorOpen} onClose={() => setCalculatorOpen(false)} initialService={'golden' satisfies ServiceId} />
    </StandalonePageFrame>
  );
}

export function GoldenVisaPageContentWithFrame() {
  return <GoldenVisaPageContent />;
}
