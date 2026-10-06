'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  FileCheck2,
  Home,
  Landmark,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';
import { FamilyVisaCalculator } from './FamilyVisaCalculator';

const propertyRoutes = [
  {
    id: 'investor',
    icon: Home,
    term: '2-year residence',
    value: 'No minimum*',
    label: '2-year investor residence',
    description: 'The reference route describes no minimum property value for a sole owner; an individual joint share should be above AED 400,000.',
    note: '*Ownership and live rules must be verified',
  },
  {
    id: 'retirement',
    icon: Landmark,
    term: '5-year retirement',
    value: 'AED 1,000,000+',
    label: 'Property-based retirement option',
    description: 'For applicants aged 55 or older who meet the applicable Dubai retirement visa requirements.',
    note: 'Age and additional financial criteria apply',
  },
  {
    id: 'golden',
    icon: BadgeCheck,
    term: '10-year Golden Visa',
    value: 'AED 2,000,000+',
    label: 'Real estate investor category',
    description: 'For qualifying real estate investment, subject to title, ownership, valuation and mortgage rules.',
    note: 'Golden Visa approval is authority-led',
  },
];

const processSteps = [
  {
    title: 'Review your ownership',
    detail: 'Check your DLD title deed or eligible Oqood, ownership share, property value and mortgage status.',
  },
  {
    title: 'Confirm the right route',
    detail: 'Compare your case with current DLD, ICP or GDRFA requirements before opening an application.',
  },
  {
    title: 'Submit property evidence',
    detail: 'Prepare the valuation, bank liability letter or NOC, and any co-owner documents requested.',
  },
  {
    title: 'Complete residence steps',
    detail: 'Submit the immigration file, then attend required medical fitness and Emirates ID appointments.',
  },
];

const documents = [
  'Passport copy and recent personal photograph',
  'DLD title deed for a completed property, or eligible Oqood for off-plan property',
  'Current DLD valuation certificate where the recorded value needs confirmation',
  'Mortgage liability letter, paid-amount statement and bank NOC if requested',
  'Co-owner details and proof of each applicant’s registered share',
  'UAE residence details, Emirates ID and insurance documents where applicable',
];

const faqs = [
  {
    question: 'Which property value qualifies for a UAE residence visa?',
    answer: 'The reference route describes no minimum property value for a sole owner applying for a 2-year investor residence, and a joint ownership share above AED 400,000. It also describes AED 1 million and age 55+ for a property-based 5-year retirement route, or AED 2 million for the real-estate Golden Visa category. These are route guides, not approval promises; current authority rules and your title record determine eligibility.',
  },
  {
    question: 'Can I apply with a mortgaged property?',
    answer: 'Possibly. The bank’s liability letter, amount paid, property value and route-specific rules may be reviewed. For a Golden Visa, the accepted mortgage and equity evidence must meet the current authority requirements.',
  },
  {
    question: 'Does an SPA qualify, or do I need a title deed?',
    answer: 'A sale and purchase agreement by itself is generally not sufficient proof of registered ownership. A DLD title deed is used for completed property; an eligible off-plan property may be evidenced by Oqood. Confirm the document accepted for your specific route.',
  },
  {
    question: 'Can I combine more than one property?',
    answer: 'A combined portfolio may be considered for some routes when the authority can verify eligible ownership and total value. Each title, ownership share and mortgage is reviewed; do not assume separate values will automatically be combined.',
  },
  {
    question: 'Can my family receive residence with me?',
    answer: 'Eligible family members may be sponsored under the applicable residence category. Their relationship documents, applications, insurance and government charges are separate and should be included in the route review.',
  },
  {
    question: 'What does the application cost?',
    answer: 'There is no single fee for every property visa file. Government application, residence, Emirates ID, medical, status-change and service charges depend on the visa category, emirate, applicant count and circumstances. Request a current itemized quote before proceeding.',
  },
];

function PropertyEyebrow({ children }: { children: React.ReactNode }) {
  return <span className="gv-property-eyebrow"><span aria-hidden="true" />{children}</span>;
}

function PropertyVisaPageContent() {
  const [value, setValue] = useState('');
  const [age, setAge] = useState('');
  const [ownership, setOwnership] = useState<'sole' | 'joint'>('sole');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const amount = Number(value);
  const applicantAge = Number(age);
  const estimate = !value
    ? 'Enter your property value or registered share to see which route may be worth reviewing.'
    : amount >= 2_000_000
      ? 'Your stated value reaches the commonly cited AED 2 million property Golden Visa threshold. Ownership and mortgage criteria still need to be checked.'
      : amount >= 1_000_000 && applicantAge >= 55
        ? 'Your stated value and age may fit a property-based retirement route. Additional financial and property conditions apply.'
        : ownership === 'sole'
          ? 'The reference route describes no minimum property value for a sole owner applying for the 2-year investor residence. Title, property status and current authority requirements must be confirmed.'
          : amount > 400_000
            ? 'Your stated joint ownership share is above the commonly cited AED 400,000 guide for the 2-year investor route. The title record and current rules need review.'
            : 'Your stated joint share is below the commonly cited AED 400,000 guide. A different ownership record or residence route may need review.';
  const inquiryHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I would like a property visa eligibility review. Please tell me the current route requirements and itemized fees.')}`;

  return (
    <div className="gv-property-page">
      <div className="gv-property-shell">
        <nav className="gv-property-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Property Visa</span>
        </nav>

        <header className="gv-property-hero">
          <div className="gv-property-hero-copy">
            <PropertyEyebrow>Dubai property · UAE residence</PropertyEyebrow>
            <h1>Your property could open a <span>residency route.</span></h1>
            <p>Compare the common investor, retirement and Golden Visa pathways. We review the DLD ownership record, value and mortgage documents before you choose a route.</p>
            <div className="gv-property-hero-actions">
              <a className="gv-property-button" href="#route-check">Check my route <ArrowRight size={15} /></a>
              <button className="gv-property-button gv-property-button--outline" type="button" onClick={() => setCalculatorOpen(true)}>Calculate my property route <ArrowRight size={15} /></button>
              <a className="gv-property-button gv-property-button--outline" href={inquiryHref} target="_blank" rel="noreferrer">Chat with an advisor <ArrowUpRight size={14} /></a>
            </div>
            <div className="gv-property-trust">
              <span><ShieldCheck size={14} />Private application support</span>
              <span><FileCheck2 size={14} />DLD document review</span>
            </div>
          </div>

          <div className="gv-property-hero-visual">
            <Image
              src="/assets/property/dubai-skyline.jpg"
              alt="Dubai skyline and residential towers at sunset"
              width={2000}
              height={1333}
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
            <div className="gv-property-image-shade" />
            <div className="gv-property-image-label">
              <span>PROPERTY INVESTOR GUIDE</span>
              <strong>Own in Dubai.<br />Plan your next move.</strong>
              <small>DLD ownership evidence is the starting point.</small>
            </div>
            <div className="gv-property-image-stamp"><Building2 size={15} /><span>DXB<br /><b>REAL ESTATE</b></span></div>
          </div>
        </header>

        <div className="gv-property-facts" aria-label="Property visa route highlights">
          <div><strong>3 routes</strong><span>Different property-linked residence options</span></div>
          <div><strong>No minimum*</strong><span>Sole-owner 2-year route; joint share above AED 400K</span></div>
          <div><strong>AED 2M+</strong><span>Real-estate Golden Visa route guide</span></div>
          <div><strong>DLD first</strong><span>Title and value evidence must be verified</span></div>
        </div>

        <section className="gv-property-section gv-property-routes" id="routes">
          <div className="gv-property-section-heading">
            <PropertyEyebrow>Choose a starting point</PropertyEyebrow>
            <h2>Three property routes.<br /><strong>One is right for your case.</strong></h2>
            <p>Compare the property-linked pathways described in the current reference guide. Eligibility depends on registered ownership and current authority criteria—not the purchase price alone.</p>
          </div>

          <div className="gv-property-route-grid">
            {propertyRoutes.map(({ id, icon: Icon, term, value: threshold, label, description, note }, index) => (
              <article className={`gv-property-route-card${index === 2 ? ' gv-property-route-card--featured' : ''}`} key={id}>
                <div className="gv-property-route-top"><span className="gv-property-route-icon"><Icon size={18} /></span><span>0{index + 1}</span></div>
                <p className="gv-property-route-term">{term}</p>
                <strong className="gv-property-route-value">{threshold}</strong>
                <span className="gv-property-route-label">{label}</span>
                <p className="gv-property-route-description">{description}</p>
                <div className="gv-property-route-note"><Check size={13} />{note}</div>
                <a href="#route-check">Check this route <ArrowRight size={13} /></a>
              </article>
            ))}
          </div>

          <aside className="gv-property-route-note gv-property-route-note--alert">
            <CircleHelp size={17} />
            <p><strong>Thresholds are not a guarantee of approval.</strong> Joint ownership, completed vs off-plan status, mortgage balance and the authority’s current valuation can change the result. Get your exact property record checked before committing to an application.</p>
            <a href={inquiryHref} target="_blank" rel="noreferrer">Ask us <ArrowUpRight size={13} /></a>
          </aside>
        </section>

        <section className="gv-property-section gv-property-check" id="route-check">
          <div className="gv-property-check-image">
            <Image
              src="/assets/property/dubai-villa.jpg"
              alt="Modern villa with a pool, representing Dubai real estate investment"
              width={2000}
              height={1327}
              sizes="(max-width: 760px) 100vw, 42vw"
            />
            <div><span>DLD OWNERSHIP REVIEW</span><strong>A clear view<br />of your options.</strong></div>
          </div>
          <div className="gv-property-check-content">
            <PropertyEyebrow>Quick route guide</PropertyEyebrow>
            <h2>Start with your property value.</h2>
            <p>Enter an approximate value for an initial guide. This tool does not submit your details or determine official eligibility.</p>
            <div className="gv-property-check-fields">
              <label htmlFor="property-value">Property value / your registered share <span>AED</span>
                <input id="property-value" type="number" min="0" inputMode="numeric" placeholder="e.g. 450,000" value={value} onChange={(event) => setValue(event.target.value)} />
              </label>
              <label htmlFor="property-age">Applicant age <span>For retirement route</span>
                <input id="property-age" type="number" min="18" max="120" inputMode="numeric" placeholder="Optional" value={age} onChange={(event) => setAge(event.target.value)} />
              </label>
              <label htmlFor="property-ownership">Ownership type
                <select id="property-ownership" value={ownership} onChange={(event) => setOwnership(event.target.value as 'sole' | 'joint')}>
                  <option value="sole">Sole owner</option>
                  <option value="joint">Joint ownership</option>
                </select>
              </label>
            </div>
            <div className="gv-property-result" role="status" aria-live="polite">
              <span><BadgeCheck size={15} />INITIAL ROUTE GUIDE</span>
              <p>{estimate}</p>
            </div>
            <small>For guidance only. Final eligibility is confirmed by DLD and the relevant immigration authority.</small>
          </div>
        </section>

        <section className="gv-property-section gv-property-evidence">
          <div className="gv-property-section-heading">
            <PropertyEyebrow>Documents that matter</PropertyEyebrow>
            <h2>Title deed, valuation <strong>and clear ownership.</strong></h2>
            <p>Prepare the documents that let the authority match the property, its recorded value and each applicant to the correct route.</p>
          </div>
          <div className="gv-property-evidence-grid">
            <article className="gv-property-evidence-card gv-property-evidence-card--dark">
              <span><Landmark size={17} />01 · DLD RECORD</span>
              <h3>Proof the property is registered to you.</h3>
              <p>A title deed is generally used for completed property. Eligible off-plan ownership may use Oqood; an SPA alone is usually not the ownership record needed for a residence application.</p>
            </article>
            <article className="gv-property-evidence-card">
              <span><Wallet size={17} />02 · VALUE & FINANCE</span>
              <h3>Show how the property meets the route.</h3>
              <p>A current valuation may be requested when the recorded figure needs confirmation. If there is a mortgage, have the bank liability letter and paid-amount evidence reviewed.</p>
            </article>
            <article className="gv-property-evidence-card">
              <span><Building2 size={17} />03 · CO-OWNERSHIP</span>
              <h3>Make each owner’s share clear.</h3>
              <p>Jointly held property is assessed against the applicant’s recorded share and current route rules. Co-owner identity documents may be required for the file.</p>
            </article>
          </div>
        </section>

        <section className="gv-property-process-section">
          <div className="gv-property-shell">
            <div className="gv-property-section-heading">
              <PropertyEyebrow>From DLD review to residence</PropertyEyebrow>
              <h2>A four-step journey, <strong>without guesswork.</strong></h2>
              <p>We help organize the property evidence and application stages. Government decisions and appointments remain with the relevant authorities.</p>
            </div>
            <ol className="gv-property-process">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <span className="gv-property-step-number">0{index + 1}</span>
                  <span className="gv-property-step-icon">{index === 0 ? <Home size={17} /> : index === 1 ? <BadgeCheck size={17} /> : index === 2 ? <FileCheck2 size={17} /> : <Check size={17} />}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gv-property-section gv-property-documents">
          <div className="gv-property-section-heading">
            <PropertyEyebrow>Prepare your file</PropertyEyebrow>
            <h2>Your property visa <strong>checklist.</strong></h2>
            <p>Start with clear copies. The final list depends on your property type, visa route and emirate.</p>
          </div>
          <div className="gv-property-document-list">
            {documents.map((document) => <div key={document}><span><Check size={14} /></span>{document}</div>)}
          </div>
        </section>

        <section className="gv-property-section gv-property-fees">
          <div className="gv-property-section-heading">
            <PropertyEyebrow>No surprises in your quote</PropertyEyebrow>
            <h2>Know what can make up <strong>the total.</strong></h2>
            <p>There is no one-size-fits-all price for a property visa. Your written quote should show government charges and optional support separately.</p>
          </div>
          <div className="gv-property-fee-grid">
            <article><span>01</span><h3>Government application</h3><p>Entry or residence application, file opening and status-change costs where applicable.</p></article>
            <article><span>02</span><h3>Medical & Emirates ID</h3><p>Medical fitness and Emirates ID charges depend on the visa validity and service speed.</p></article>
            <article><span>03</span><h3>Property evidence</h3><p>DLD valuation or bank documents may carry separate charges depending on what your case needs.</p></article>
            <article><span>04</span><h3>Document & service support</h3><p>Any translation, insurance, family application or professional service fee should be itemized.</p></article>
          </div>
          <div className="gv-property-fee-footer">
            <span><ShieldCheck size={16} />Ask for current figures and official receipts before payment.</span>
            <button type="button" onClick={() => setCalculatorOpen(true)}>Open property cost guide <ArrowRight size={14} /></button>
          </div>
        </section>

        <section className="gv-property-section gv-property-faqs" id="property-faqs">
          <div className="gv-property-section-heading">
            <PropertyEyebrow>Clear answers</PropertyEyebrow>
            <h2>Property visa <strong>questions.</strong></h2>
          </div>
          <div className="gv-property-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={openFaq === index}>
                <summary onClick={(event) => { event.preventDefault(); setOpenFaq(openFaq === index ? null : index); }}>
                  {faq.question}<ChevronDown size={16} />
                </summary>
                {openFaq === index && <p>{faq.answer}</p>}
              </details>
            ))}
          </div>
        </section>

        <section className="gv-property-cta">
          <PropertyEyebrow>Make your next move with clarity</PropertyEyebrow>
          <h2>Your property. Your residence.<br /><span>Let’s check the route.</span></h2>
          <p>Send us your property type and approximate value. We’ll explain what evidence to prepare and provide a current itemized quote before you decide.</p>
          <div>
            <a className="gv-property-button" href={inquiryHref} target="_blank" rel="noreferrer">Check my route on WhatsApp <ArrowRight size={15} /></a>
            <a className="gv-property-cta-secondary" href={contactInfo.phoneHref}>Call our team</a>
          </div>
          <small>Private documentation support · Visa eligibility and approval are determined by UAE authorities.</small>
        </section>
      </div>
      <FamilyVisaCalculator open={calculatorOpen} onClose={() => setCalculatorOpen(false)} initialService="property" />
    </div>
  );
}

export function PropertyVisaPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <PropertyVisaPageContent />
    </StandalonePageFrame>
  );
}
