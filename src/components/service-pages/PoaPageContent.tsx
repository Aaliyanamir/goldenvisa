'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Banknote,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  FileCheck,
  FileText,
  Gavel,
  Globe,
  Home,
  Hourglass,
  Info,
  Languages,
  Lock,
  MessageSquare,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

const topFeatureHighlights = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Information collected',
    detail: 'Share your requirements and identity copies securely online or via WhatsApp.',
  },
  {
    step: '02',
    icon: Scale,
    title: 'Lawyer-drafted',
    detail: 'Drafted by licensed legal professionals in English & Arabic for UAE compliance.',
  },
  {
    step: '03',
    icon: Languages,
    title: 'Legal translation',
    detail: 'MOJ-certified bilingual legal translation matching Dubai Courts notary rules.',
  },
  {
    step: '04',
    icon: Video,
    title: 'Notarised by video call',
    detail: 'Official Dubai Courts video session — no physical notary visit required.',
  },
];

const poaTypes = [
  {
    id: 'property',
    title: 'Property POA',
    icon: Home,
    badge: 'Most Popular',
    summary: 'Buy, sell, lease, or manage real estate & DLD property transactions.',
    items: ['Property Sale & Purchase POA', 'Tenancy & Lease Management POA', 'Developer & Oqood POA', 'Property Gift Transfer POA'],
    price: 'From AED 699',
  },
  {
    id: 'general',
    title: 'General Personal POA',
    icon: Scale,
    badge: 'Comprehensive',
    summary: 'Broad authority to manage personal, financial, and administrative affairs.',
    items: ['General Financial Management', 'Government Department Representation', 'Utility & Telecommunications POA', 'General Legal Affairs'],
    price: 'From AED 899',
  },
  {
    id: 'business',
    title: 'Business & Corporate POA',
    icon: Briefcase,
    badge: 'Commercial',
    summary: 'Empower company managers, sign commercial contracts, & handle bank accounts.',
    items: ['Share Purchase & Transfer POA', 'Company Trade Licence Renewal', 'Commercial Contract Signing', 'Bank Account Management POA'],
    price: 'From AED 999',
  },
  {
    id: 'vehicle',
    title: 'Vehicle & Specific POA',
    icon: Car,
    badge: 'Specific Action',
    summary: 'Single-purpose authorization for vehicle transfer, inheritance, or family representation.',
    items: ['Vehicle Sale & Export POA', 'RTA Registration & Transfer', 'Inheritance & Estate Settlement', 'Child Travel / School Authorization'],
    price: 'From AED 599',
  },
];

const timelineSteps = [
  {
    step: 'Step 1',
    title: 'Consultation & Requirements',
    detail: 'Choose your POA type and share intended use, principal details, and representative passport copies.',
    icon: FileText,
  },
  {
    step: 'Step 2',
    title: 'Bilingual Legal Drafting',
    detail: 'Our legal experts draft your POA in English & Arabic adhering to UAE Notary Public and DLD legal standards.',
    icon: Languages,
  },
  {
    step: 'Step 3',
    title: 'Dubai Courts Video Notarization',
    detail: 'Attend a quick 5-minute video call with Dubai Courts Notary Public from anywhere in the world.',
    icon: Video,
  },
  {
    step: 'Step 4',
    title: 'Digital Stamped E-POA Issued',
    detail: 'Receive your officially stamped digital Power of Attorney with QR verification code for immediate use.',
    icon: Award,
  },
];

const benefitsGrid = [
  {
    icon: Globe,
    title: '100% Remote Video Notarization',
    detail: 'Complete your notarization via official Dubai Courts video session without visiting a physical office.',
  },
  {
    icon: Scale,
    title: 'Lawyer-Drafted, Not Copy-Paste',
    detail: 'Custom legal clauses written specifically for your situation, preventing authority rejections.',
  },
  {
    icon: Banknote,
    title: 'Budget-Friendly & Transparent',
    detail: 'Clear itemized pricing for drafting, legal translation, and official notary fees with zero hidden costs.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed UAE Acceptance',
    detail: 'Fully formatted to meet DLD, RTA, MOHRE, UAE Banks, Free Zones, and Court standards.',
  },
];

const preparedPoaCategories = [
  {
    category: 'Personal POAs',
    items: [
      'Property Sale & Purchase POA',
      'Property Lease & Management POA',
      'Vehicle Transfer & Export POA',
      'Bank Account Operation POA',
      'Inheritance & Estate Settlement POA',
      'Child Travel & Guardian Authorization',
      'General Representation & Administrative POA',
    ],
  },
  {
    category: 'Business & Corporate POAs',
    items: [
      'Company Manager Authorization POA',
      'Share Transfer & Purchase POA',
      'Trade Licence Renewal & Amendment',
      'Commercial Contract Signing POA',
      'Bank Account Opening & Management POA',
      'Freezone & Mainland Government Representation',
      'Dispute & Legal Proceeding Representation',
    ],
  },
];

const acceptedDepartments = [
  'Dubai Land Department (DLD)',
  'Dubai Courts & UAE Notary Public',
  'Roads and Transport Authority (RTA)',
  'Ministry of Human Resources & Emiratisation (MOHRE)',
  'Federal Authority for Identity & Citizenship (ICP)',
  'UAE Central Bank & Commercial Banks',
  'Free Zone Authorities (DMCC, DAFZA, DIFC, IFZA)',
  'DEWA, Etisalat, du & Utilities',
];

const faqs = [
  {
    question: 'What is a Power of Attorney (POA) in the UAE?',
    answer: 'A Power of Attorney (POA) is a legal document that gives an appointed representative (agent/attorney-in-fact) legal authority to act on your behalf in personal, property, financial, or business matters in the UAE.',
  },
  {
    question: 'How is a POA notarized via video call in Dubai?',
    answer: 'Dubai Courts offers e-notarization via video call. Once your bilingual draft is approved, an official video session is scheduled where the Notary Public verifies your identity via UAE Pass or original passport, and issues your digitally stamped E-POA with QR verification.',
  },
  {
    question: 'What is the difference between a General and Specific POA?',
    answer: 'A General POA grants broad authority to manage multiple personal or business matters. A Specific (Special) POA is restricted to a single defined transaction — such as selling a specific apartment, transferring a vehicle, or renewing a company trade licence.',
  },
  {
    question: 'Can I issue a UAE POA if I am currently outside the UAE?',
    answer: 'Yes! You can notarize a Dubai POA via video call while abroad if you hold a valid UAE Pass or original passport. Alternatively, non-residents can notarize in their home country and complete UAE Embassy & MOFA attestation.',
  },
  {
    question: 'How long does it take to prepare and notarize a POA?',
    answer: 'Drafting and certified bilingual translation typically takes 24 to 48 hours. Video notarization appointments are available same-day or next-day depending on court booking slots.',
  },
  {
    question: 'How long is a Power of Attorney valid in the UAE?',
    answer: 'General POAs are valid until revoked by the principal or until death. Specific POAs (such as property sale POAs) often expire upon completion of the transaction or after a period defined by DLD / Notary Public rules (typically 2 to 5 years).',
  },
  {
    question: 'Which government departments accept a lawyer-drafted POA?',
    answer: 'Our POAs are accepted across all major UAE entities including Dubai Land Department (DLD), Dubai Courts, RTA, MOHRE, ICP, commercial banks, utility providers, and free zone authorities.',
  },
];

export function PoaPageContent() {
  const [selectedType, setSelectedType] = useState('property');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activePoa = poaTypes.find((p) => p.id === selectedType) || poaTypes[0];

  return (
    <div className="gv-poa-page">
      <div className="gv-poa-shell">
        {/* Breadcrumb */}
        <nav className="gv-poa-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Power of Attorney</span>
        </nav>

        {/* ── 0. TOP FEATURE HIGHLIGHTS ───────────────────────── */}
        <section className="gv-poa-top-bar">
          <div className="gv-poa-top-bar-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />ONLINE EXECUTION</span>
            <h2>Lawyer-drafted. Notarised by <strong>video call.</strong></h2>
            <p>Complete your Power of Attorney remotely — no notary office queues, no paper hassle.</p>
          </div>

          <div className="gv-poa-top-bar-grid">
            {topFeatureHighlights.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div key={feat.step} className="gv-poa-top-feature-card">
                  <span className="gv-poa-feature-num">{feat.step}</span>
                  <div className="gv-poa-feature-icon"><IconComp size={22} /></div>
                  <h3>{feat.title}</h3>
                  <p>{feat.detail}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 1. HERO SECTION ────────────────────────────────── */}
        <header className="gv-poa-hero">
          <div className="gv-poa-hero-copy">
            <span className="gv-poa-eyebrow">
              <span aria-hidden="true" />LAWYER-DRAFTED POA
            </span>
            <h1>A UAE Power of Attorney, <span>drafted by lawyers.</span></h1>
            <p>Brightlink Consulting prepares bilingual (Arabic & English) legal Power of Attorney documents, fully formatted for <strong>Dubai Courts, DLD, Banks & RTA</strong>, notarised remotely via video call.</p>

            <div className="gv-poa-hero-badges">
              <span><CheckCircle2 size={15} /> Lawyer-drafted in English & Arabic</span>
              <span><CheckCircle2 size={15} /> Notarised by video call</span>
              <span><CheckCircle2 size={15} /> No Notary Public visit</span>
            </div>

            <div className="gv-poa-hero-actions">
              <a
                className="gv-poa-btn gv-poa-btn--gold"
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I would like to draft and notarize a UAE Power of Attorney (POA). Please send me details.')}`}
                target="_blank"
                rel="noreferrer"
              >
                Start my POA draft <ArrowRight size={16} />
              </a>
              <a className="gv-poa-btn gv-poa-btn--ghost" href={contactInfo.phoneHref}>
                <Phone size={15} /> Call {contactInfo.phone}
              </a>
            </div>

            <div className="gv-poa-hero-proof">
              <div className="gv-poa-stars" aria-label="5 stars">★★★★★</div>
              <span><strong>4.9 / 5.0 rating</strong> based on Google customer reviews</span>
            </div>
          </div>

          {/* Hero Interactive Card & Special Offer */}
          <aside className="gv-poa-hero-aside">
            <div className="gv-poa-offer-card">
              <div className="gv-poa-offer-badge">SPECIAL OFFER</div>
              <div className="gv-poa-offer-pricing">
                <span className="gv-poa-save">Save up to 50%</span>
                <div className="gv-poa-price-group">
                  <small>Starting from</small>
                  <strong>AED 699</strong>
                </div>
              </div>
              <ul className="gv-poa-offer-list">
                <li><CheckCircle2 size={15} /> Legal drafting by experienced lawyer</li>
                <li><CheckCircle2 size={15} /> Official MOJ bilingual translation</li>
                <li><CheckCircle2 size={15} /> Dubai Courts video call coordination</li>
                <li><CheckCircle2 size={15} /> Digital E-stamped POA delivery</li>
              </ul>
              <a
                className="gv-poa-btn gv-poa-btn--gold"
                style={{ width: '100%' }}
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I want to claim the AED 699 POA drafting offer. Please guide me.')}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Free Consultation <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </header>

        {/* ── 2. ABOUT & IMAGE GUIDE SECTION ─────────────────── */}
        <section className="gv-poa-section" id="about">
          <div className="gv-poa-about-card">
            <div className="gv-poa-about-img-wrap">
              <Image
                src="/assets/service-pages/power-of-attorney.jpg"
                alt="Legal professional preparing a Power of Attorney document in Dubai"
                width={500}
                height={340}
                className="gv-poa-about-img"
              />
            </div>
            <div className="gv-poa-about-copy">
              <span className="gv-poa-eyebrow"><span aria-hidden="true" />LEGAL EXCELLENCE</span>
              <h2>About Our <strong>POA Services</strong></h2>
              <p>Appointing a trusted representative through a Power of Attorney (POA) in the UAE requires absolute legal accuracy. A single missing clause or formatting error can lead to authority rejection at the time of transaction.</p>
              <p>Our experienced legal team prepares custom bilingual (Arabic & English) Power of Attorney documents that comply 100% with Dubai Courts, DLD, and UAE Notary Public rules, ensuring your representative can act seamlessly on your behalf.</p>

              <div className="gv-poa-about-stats">
                <div><strong>100%</strong><span>Online Execution</span></div>
                <div><strong>24-48h</strong><span>Drafting Speed</span></div>
                <div><strong>4.9★</strong><span>Client Rating</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHEN YOU'LL NEED A POA (USE CASES) ───────────── */}
        <section className="gv-poa-section" id="when-needed">
          <div className="gv-poa-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />USE CASES</span>
            <h2>When you'll <strong>need a POA.</strong></h2>
            <p>A Power of Attorney lets someone you trust act on your behalf when traveling, managing property, running a business, or handling administrative tasks.</p>
          </div>

          <div className="gv-poa-grid-2x2">
            <article className="gv-poa-card-box">
              <div className="gv-poa-box-icon"><Home size={24} /></div>
              <div>
                <h3>Property Transactions</h3>
                <p>Buy, sell, rent, or manage Dubai real estate and DLD title deeds while living abroad.</p>
              </div>
            </article>

            <article className="gv-poa-card-box">
              <div className="gv-poa-box-icon"><Briefcase size={24} /></div>
              <div>
                <h3>Business & Company</h3>
                <p>Authorize company managers, sign commercial contracts, renew trade licences, and manage shareholding.</p>
              </div>
            </article>

            <article className="gv-poa-card-box">
              <div className="gv-poa-box-icon"><Banknote size={24} /></div>
              <div>
                <h3>Banking & Finance</h3>
                <p>Manage bank accounts, collect cheques, settle liabilities, and handle financial representation.</p>
              </div>
            </article>

            <article className="gv-poa-card-box">
              <div className="gv-poa-box-icon"><Gavel size={24} /></div>
              <div>
                <h3>Family & Legal Affairs</h3>
                <p>Handle vehicle transfers, inheritance claims, child travel authorizations, and court submissions.</p>
              </div>
            </article>
          </div>
        </section>

        {/* ── 4. TYPES OF POA WE CRAFT ────────────────────────── */}
        <section className="gv-poa-section" id="types">
          <div className="gv-poa-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />SOLUTIONS</span>
            <h2>Types of POA we <strong>craft.</strong></h2>
            <p>Choose the category you need. Click any option to preview included powers and starting fees.</p>
          </div>

          <div className="gv-poa-types-grid">
            {poaTypes.map((type) => {
              const IconComp = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  className={`gv-poa-type-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <div className="gv-poa-type-top">
                    <span className="gv-poa-type-icon"><IconComp size={20} /></span>
                    <span className="gv-poa-type-badge">{type.badge}</span>
                  </div>
                  <h3>{type.title}</h3>
                  <p>{type.summary}</p>
                  <div className="gv-poa-type-price">{type.price}</div>
                </button>
              );
            })}
          </div>

          {/* Active POA Preview Panel */}
          <div className="gv-poa-preview-panel">
            <div className="gv-poa-preview-header">
              <div>
                <h3>{activePoa.title} Detail & Powers</h3>
                <p>{activePoa.summary}</p>
              </div>
              <strong className="gv-poa-preview-price">{activePoa.price}</strong>
            </div>

            <div className="gv-poa-preview-list">
              {activePoa.items.map((item) => (
                <div key={item} className="gv-poa-preview-item">
                  <CheckCircle2 size={16} /> <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="gv-poa-preview-foot">
              <a
                className="gv-poa-btn gv-poa-btn--gold"
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello, I would like to order a ${activePoa.title} (${activePoa.price}). Please send me the requirements.`)}`}
                target="_blank"
                rel="noreferrer"
              >
                Order {activePoa.title} Now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── 5. NOTARISED ONLINE TIMELINE (4 STEPS) ──────────── */}
        <section className="gv-poa-section" id="timeline">
          <div className="gv-poa-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />PROCESS TIMELINE</span>
            <h2>Notarised online, <strong>no notary visit.</strong></h2>
            <p>From initial information collection to receiving your court-stamped E-POA in 4 streamlined steps.</p>
          </div>

          <div className="gv-poa-timeline">
            {timelineSteps.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <article key={s.step} className="gv-poa-timeline-card">
                  <span className="gv-poa-timeline-num">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="gv-poa-timeline-icon"><IconComp size={22} /></div>
                  <span className="gv-poa-timeline-tag">{s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 6. WHY CHOOSE OUR POA SERVICES (4 BENEFITS) ─────── */}
        <section className="gv-poa-section" id="why-choose">
          <div className="gv-poa-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />WHY BRIGHTLINK</span>
            <h2>Lawyer-drafted, <strong>not copy-paste.</strong></h2>
          </div>

          <div className="gv-poa-benefits-grid">
            {benefitsGrid.map((b) => {
              const IconComp = b.icon;
              return (
                <article key={b.title} className="gv-poa-benefit-card">
                  <span className="gv-poa-benefit-icon"><IconComp size={22} /></span>
                  <h3>{b.title}</h3>
                  <p>{b.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 7. DETAILED POWERS PREPARED & DEPARTMENTS ───────── */}
        <section className="gv-poa-section" id="powers-prepared">
          <div className="gv-poa-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />COVERAGE</span>
            <h2>Powers of Attorney <strong>we prepare.</strong></h2>
            <p>Full spectrum of legal delegation formatted for UAE government entities.</p>
          </div>

          <div className="gv-poa-categories-grid">
            {preparedPoaCategories.map((cat) => (
              <article key={cat.category} className="gv-poa-category-card">
                <h3>{cat.category}</h3>
                <ul>
                  {cat.items.map((item) => (
                    <li key={item}><CheckCircle2 size={15} />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Government Departments List */}
          <div className="gv-poa-depts-box">
            <h3>Accepted Government Departments</h3>
            <p>Our drafted POAs meet the strict acceptance criteria of all official UAE entities:</p>
            <div className="gv-poa-depts-tags">
              {acceptedDepartments.map((dept) => (
                <span key={dept} className="gv-poa-dept-tag">
                  <Building2 size={13} /> {dept}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. RECENT GUIDANCE ARTICLES ─────────────────────── */}
        <section className="gv-poa-section">
          <div className="gv-poa-heading">
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />HELP & GUIDES</span>
            <h2>Recent <strong>articles</strong></h2>
          </div>

          <div className="gv-poa-article-grid">
            <article className="gv-poa-article-card">
              <div className="gv-poa-article-img">
                <FileText size={32} />
              </div>
              <div className="gv-poa-article-body">
                <span className="gv-poa-article-tag">Legal Guide</span>
                <h3>General vs Specific POA — Which one do you need?</h3>
                <p>Learn the legal differences between General and Specific POAs to protect your assets and meet DLD/Bank acceptance rules.</p>
                <a className="gv-poa-article-link" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I want advice on whether I need a General or Specific POA.')}`} target="_blank" rel="noreferrer">
                  Consult a legal advisor on WhatsApp <ArrowRight size={14} />
                </a>
              </div>
            </article>

            <article className="gv-poa-article-card">
              <div className="gv-poa-article-img">
                <Video size={32} />
              </div>
              <div className="gv-poa-article-body">
                <span className="gv-poa-article-tag">Video Notarization</span>
                <h3>How to notarize a Dubai POA via video call from abroad.</h3>
                <p>Step-by-step instructions on attending a Dubai Courts Notary video session using UAE Pass or passport verification while overseas.</p>
                <a className="gv-poa-article-link" href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I am abroad and want to notarize a Dubai POA via video call.')}`} target="_blank" rel="noreferrer">
                  Book video notarization support <ArrowRight size={14} />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ── 9. ACCORDION FAQS ───────────────────────────────── */}
        <section className="gv-poa-section gv-poa-faq-section" id="faq">
          <div className="gv-poa-heading" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
            <span className="gv-poa-eyebrow"><span aria-hidden="true" />QUESTIONS & ANSWERS</span>
            <h2>Power of Attorney <strong>FAQ.</strong></h2>
          </div>

          <div className="gv-poa-faqs">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={openFaq === index}>
                <summary onClick={(e) => { e.preventDefault(); setOpenFaq(openFaq === index ? null : index); }}>
                  {faq.question}
                  <ChevronDown size={18} />
                </summary>
                {openFaq === index && <p>{faq.answer}</p>}
              </details>
            ))}
          </div>
        </section>

        {/* ── 10. CLOSING CTA BANNER ──────────────────────────── */}
        <section className="gv-poa-closing">
          <span className="gv-poa-eyebrow" style={{ color: '#DFBE74' }}>READY WHEN YOU ARE</span>
          <h2>Ready to set up your Power of Attorney?</h2>
          <p>Get lawyer-drafted bilingual POAs notarised remotely via video call. Our team guarantees court and department acceptance.</p>
          <div className="gv-poa-closing-actions">
            <a
              className="gv-poa-btn gv-poa-btn--gold"
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I am ready to start my Power of Attorney drafting and notarization.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Start My POA Order <ArrowRight size={16} />
            </a>
            <a className="gv-poa-closing-phone" href={contactInfo.phoneHref}>
              <Phone size={15} /> Call {contactInfo.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export function PoaPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <PoaPageContent />
    </StandalonePageFrame>
  );
}
