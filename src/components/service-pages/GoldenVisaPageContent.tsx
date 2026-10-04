'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  FileCheck2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { FamilyVisaCalculator, type ServiceId } from './FamilyVisaCalculator';

const categories = [
  {
    id: 'property',
    label: 'Real estate investors',
    icon: Building2,
    title: 'A property route built around the registered value',
    detail: 'A qualifying UAE real-estate investment valued at AED 2 million or more may support a 10-year Golden Visa application. Title, valuation, mortgage and ownership-share evidence are checked by the relevant authority.',
    documents: ['DLD title deed or eligible Oqood', 'Current valuation where requested', 'Mortgage / paid-amount evidence', 'Co-owner details and ownership shares'],
    prompt: 'Approximate property value (AED)',
    threshold: 2_000_000,
  },
  {
    id: 'professional',
    label: 'Professionals',
    icon: BadgeCheck,
    title: 'For qualified professionals with a strong UAE employment file',
    detail: 'The skilled-professional route can consider occupation, salary, degree, employment contract and any required professional licence. A commonly cited salary figure is AED 30,000 per month; the authority assesses the full category criteria.',
    documents: ['Valid UAE employment contract', 'Salary certificate and payslips if requested', 'Attested university degree', 'Professional licence for regulated roles'],
    prompt: 'Monthly basic salary (AED)',
    threshold: 30_000,
  },
  {
    id: 'entrepreneur',
    label: 'Entrepreneurs',
    icon: Sparkles,
    title: 'A nomination-led route for founders and business owners',
    detail: 'Entrepreneur applications rely on evidence that fits the applicable approved project, investment, business or incubator pathway. There is no single amount that confirms eligibility for every entrepreneur.',
    documents: ['Trade licence and ownership records', 'Business plan and project evidence', 'Investment / valuation evidence where relevant', 'Approved incubator or authority recommendation if required'],
    prompt: 'Business or nomination stage',
  },
  {
    id: 'student',
    label: 'Outstanding students',
    icon: GraduationCap,
    title: 'Academic achievement supported by official records',
    detail: 'Eligible high-achieving graduates may be nominated based on their institution, academic performance and current authority criteria. Confirm the correct route with the school, university or nominating body.',
    documents: ['Official transcripts and graduation certificate', 'School or university recommendation', 'Institution accreditation details', 'Passport and current residence information'],
    prompt: 'Education level',
  },
] as const;

const benefits = [
  { title: 'Long-term planning', detail: 'A 10-year residence validity may reduce frequent renewal cycles, subject to the approved category and current rules.' },
  { title: 'Family sponsorship', detail: 'Eligible family members can be considered under the applicable Golden Visa sponsorship rules.' },
  { title: 'Residence flexibility', detail: 'Golden Visa holders may have different residence conditions from standard visas; check the current rules for your category.' },
  { title: 'One coordinated file', detail: 'Keep nomination, evidence, medical fitness and Emirates ID stages organized against a single checklist.' },
];

const process = [
  ['Choose a route', 'Match your profile to the property, professional, entrepreneur or outstanding-student category.'],
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
  const [additionalRoute, setAdditionalRoute] = useState('category');
  const [goldenSponsor, setGoldenSponsor] = useState('');
  const [consultationStage, setConsultationStage] = useState('');
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [messageLink, setMessageLink] = useState('');
  const active = categories[activeCategory];
  const isNumericRoute = 'threshold' in active;
  const metricValue = Number(metric);
  const eligibilityMessage = additionalRoute === 'company'
    ? metricValue >= 2_000_000
      ? 'Your stated company share value reaches the commonly cited AED 2 million investment guide. Company eligibility and ownership evidence still need review.'
      : 'The stated company share value is below the commonly cited AED 2 million guide. Confirm current criteria and evidence before ruling out this route.'
    : additionalRoute === 'deposit'
      ? metricValue >= 2_000_000
        ? 'Your stated deposit reaches the commonly cited AED 2 million guide. The accepted deposit type, bank confirmation and holding terms need authority review.'
        : 'The stated deposit is below the commonly cited AED 2 million guide. Confirm current criteria with the relevant authority.'
      : additionalRoute === 'dependent'
        ? goldenSponsor === 'yes'
          ? 'A dependent route may be available through a current Golden Visa holder. The sponsor relationship and current dependent rules need confirmation.'
          : 'A dependent application requires an eligible Golden Visa sponsor. Confirm the relationship and current rules.'
        : isNumericRoute
          ? metricValue >= active.threshold
            ? `Your stated figure reaches the commonly cited ${active.id === 'property' ? 'AED 2 million property' : 'AED 30,000 monthly salary'} route guide. The complete evidence and current authority criteria still need to be reviewed.`
            : `Your stated figure is below the commonly cited ${active.id === 'property' ? 'AED 2 million property' : 'AED 30,000 monthly salary'} route guide. Another category may fit better.`
          : 'This category is nomination- and evidence-led. An advisor can check the records and the correct nominating authority.';
  const hasScreenerResponse = Boolean(metric || screenerStage || (additionalRoute === 'dependent' && goldenSponsor));

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
      additionalRoute !== 'category' ? `Additional route checked: ${additionalRoute}` : '',
      consultationStage ? `Current stage: ${consultationStage}` : '',
      metric ? `${active.prompt}: ${metric}` : '',
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
              <h1>Your next chapter in the UAE, <em>planned for the long term.</em></h1>
              <p>Compare Golden Visa routes, see which documents each one needs and get a careful first eligibility check before you start an application.</p>
              <div className="gv-golden-actions">
                <a className="gv-golden-button" href="#eligibility">Check my route <ArrowRight size={17} /></a>
                <button className="gv-golden-button gv-golden-button--outline" type="button" onClick={() => setCalculatorOpen(true)}>Open all-service calculator <ArrowUpRight size={16} /></button>
              </div>
              <div className="gv-golden-trust"><ShieldCheck size={16} />Independent documentation support · decisions remain with UAE authorities</div>
            </div>
            <div className="gv-golden-hero-image">
              <Image src="/assets/golden-visa/dubai-residency.jpg" alt="Burj Al Arab on the Dubai coastline" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
              <div className="gv-golden-image-shade" />
              <div className="gv-golden-image-caption"><span>GOLDEN VISA · UAE</span><strong>Four routes.<br />One considered plan.</strong></div>
              <span className="gv-golden-image-stamp"><BadgeCheck size={15} />10 YEARS</span>
            </div>
          </header>

          <div className="gv-golden-stats" aria-label="Golden Visa overview">
            <div><strong>10 years</strong><span>Residence validity, subject to category approval</span></div>
            <div><strong>AED 2M</strong><span>Common real-estate investor route guide</span></div>
            <div><strong>4 routes</strong><span>Property · professionals · entrepreneurs · students</span></div>
          </div>

          <section className="gv-golden-section" id="eligibility">
            <div className="gv-golden-section-heading">
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />Interactive eligibility screener</span>
              <h2>Start with the category <em>that fits your evidence.</em></h2>
              <p>Choose a route to see its common proof points. This first check is informative only and cannot guarantee nomination or approval.</p>
            </div>
            <div className="gv-golden-category-tabs" role="tablist" aria-label="Golden Visa applicant categories">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button key={category.id} type="button" role="tab" aria-selected={activeCategory === index} aria-controls="gv-golden-category-panel" id={`gv-golden-tab-${category.id}`} onClick={() => { setActiveCategory(index); setMetric(''); setScreenerStage(''); setAdditionalRoute('category'); setGoldenSponsor(''); }}>
                    <Icon size={18} /><span>{category.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="gv-golden-category-panel" id="gv-golden-category-panel" role="tabpanel" aria-labelledby={`gv-golden-tab-${active.id}`}>
              <div className="gv-golden-route-copy">
                <span className="gv-golden-route-number">0{activeCategory + 1}</span>
                <h3>{active.title}</h3>
                <p>{active.detail}</p>
                <ul>{active.documents.map((document) => <li key={document}><Check size={15} />{document}</li>)}</ul>
              </div>
              <div className="gv-golden-screener">
                <h3>Quick route check</h3>
                <p>Enter a broad figure or stage. Nothing is submitted or stored.</p>
                <label htmlFor="gv-golden-route">Route to check
                  <select id="gv-golden-route" value={additionalRoute} onChange={(event) => { setAdditionalRoute(event.target.value); setMetric(''); setScreenerStage(''); setGoldenSponsor(''); }}>
                    <option value="category">Selected category: {active.label}</option>
                    <option value="company">Company share value</option>
                    <option value="deposit">Bank deposit</option>
                    <option value="dependent">Dependent of a Golden Visa holder</option>
                  </select>
                </label>
                {additionalRoute === 'dependent' ? (
                  <label htmlFor="gv-golden-sponsor">Is your sponsor a current Golden Visa holder?
                    <select id="gv-golden-sponsor" value={goldenSponsor} onChange={(event) => setGoldenSponsor(event.target.value)}>
                      <option value="">Choose one</option><option value="yes">Yes</option><option value="no">No</option>
                    </select>
                  </label>
                ) : additionalRoute === 'company' || additionalRoute === 'deposit' || isNumericRoute ? (
                  <label htmlFor="gv-golden-metric">
                    {additionalRoute === 'company' ? 'Company share value (AED)' : additionalRoute === 'deposit' ? 'Bank deposit (AED)' : active.prompt}
                    <input id="gv-golden-metric" type="number" min="0" inputMode="numeric" placeholder={active.id === 'professional' && additionalRoute === 'category' ? 'e.g. 30,000' : 'e.g. 2,000,000'} value={metric} onChange={(event) => setMetric(event.target.value)} />
                  </label>
                ) : active.id === 'student' || active.id === 'entrepreneur' ? (
                  <label htmlFor="gv-golden-metric">{active.prompt}
                    <select id="gv-golden-metric" value={screenerStage} onChange={(event) => { setScreenerStage(event.target.value); setMetric(event.target.value); }}>
                      <option value="">Select one</option>
                      {active.id === 'student'
                        ? <><option value="School graduate">School graduate</option><option value="University graduate">University graduate</option><option value="Seeking nomination">Seeking nomination</option></>
                        : <><option value="Business established">Business established</option><option value="Incubator / nomination">Incubator / nomination</option><option value="Planning stage">Planning stage</option></>}
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
              <h2>More room to plan <em>what comes next.</em></h2>
            </div>
            <div className="gv-golden-benefit-grid">
              {benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><BadgeCheck size={19} /><h3>{benefit.title}</h3><p>{benefit.detail}</p></article>)}
            </div>
          </section>

          <section className="gv-golden-section">
            <div className="gv-golden-section-heading">
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />From profile review to residence</span>
              <h2>A clear process, <em>one approval at a time.</em></h2>
              <p>The exact authority sequence differs by category. Confirm where to file before changing an existing visa status.</p>
            </div>
            <ol className="gv-golden-process">{process.map(([title, detail], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><i aria-hidden="true" /><h3>{title}</h3><p>{detail}</p></li>)}</ol>
          </section>

          <section className="gv-golden-documents-section">
            <div>
              <span className="gv-golden-eyebrow"><span aria-hidden="true" />Prepare your file</span>
              <h2>Documents change with the <em>route you choose.</em></h2>
              <p>Start with clear, current copies. The authority may ask for additional originals, attestations or nominations.</p>
              <a href="#golden-consultation">Ask for a route-specific checklist <ArrowRight size={15} /></a>
            </div>
            <div className="gv-golden-document-cards">
              {[
                ['Core identity', 'Passport, UAE visa and Emirates ID if resident, plus a compliant recent photograph.'],
                ['Property investor', 'Title deed or eligible Oqood, DLD valuation, mortgage and co-owner evidence where relevant.'],
                ['Professional', 'Employment contract, salary evidence, attested qualification and professional licence if applicable.'],
                ['Founder or student', 'Business / incubator nomination, academic records, transcripts and institution recommendation as relevant.'],
              ].map(([title, detail]) => <article key={title}><FileCheck2 size={18} /><h3>{title}</h3><p>{detail}</p></article>)}
            </div>
          </section>

          <section className="gv-golden-faq-section">
            <div className="gv-golden-section-heading"><span className="gv-golden-eyebrow"><span aria-hidden="true" />Questions & answers</span><h2>Golden Visa, <em>explained clearly.</em></h2></div>
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
