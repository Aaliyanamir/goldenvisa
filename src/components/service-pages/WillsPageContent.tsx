'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeCheck,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Coins,
  Compass,
  DollarSign,
  FileCheck,
  FileText,
  Gavel,
  Globe,
  Heart,
  HelpCircle,
  Home,
  Info,
  Landmark,
  Lock,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stamp,
  Star,
  Truck,
  UserCheck,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

const topHighlights = [
  {
    title: 'DIFC Courts Wills Partner',
    text: 'Registered with DIFC Courts Wills Service Centre for full asset protection.',
    icon: Landmark,
  },
  {
    title: 'Dubai Courts Registered',
    text: 'Official bilingual notarization with Dubai Courts Notary Public.',
    icon: Stamp,
  },
  {
    title: '100% Online Registration',
    text: 'Remote video call verification & digital registry issuance available.',
    icon: Globe,
  },
];

const willTypes = [
  {
    id: 'single',
    title: 'Single Will',
    subtitle: 'For Individual Expatriates',
    price: 'From AED 950',
    desc: 'Covers all UAE assets including real estate, bank accounts, vehicle, and personal possessions for a single testator.',
    inclusions: [
      'Comprehensive UAE asset distribution',
      'Bank account freeze protection',
      'Interim & permanent guardian appointment',
      'Lawyer-drafted bilingual (English/Arabic)',
      'DIFC or Dubai Courts registration option',
    ],
    idealFor: 'Single individuals, sole property owners, or expat professionals in UAE.',
  },
  {
    id: 'mirror',
    title: 'Mirror / Couple Wills',
    subtitle: 'For Married Couples',
    price: 'Most Popular',
    desc: 'Reciprocal wills for husband and wife ensuring joint assets and children automatically pass to the surviving spouse.',
    inclusions: [
      'Reciprocal asset transfer to surviving spouse',
      'Joint bank account & property protection',
      'Full guardianship designation for minor children',
      'Secondary beneficiaries appointment',
      'Substantial bundle savings on court registration',
    ],
    idealFor: 'Married couples with joint properties, bank accounts, or minor children.',
  },
  {
    id: 'property',
    title: 'Property Will',
    subtitle: 'Real Estate Specific',
    price: 'Fast Track',
    desc: 'Exclusively covers up to 5 real estate properties located in Dubai and across the UAE.',
    inclusions: [
      'Covers up to 5 UAE title deeds',
      'Prevents real estate asset freeze',
      'Direct transfer to named heirs',
      'Simplified registration process',
      'Valid across all 7 UAE Emirates',
    ],
    idealFor: 'Property investors, villa owners, and real estate landlords.',
  },
  {
    id: 'guardianship',
    title: 'Guardianship Will',
    subtitle: 'For Minor Children Under 18',
    price: 'Essential for Parents',
    desc: 'Designates primary and interim legal guardians for your minor children living in the UAE to prevent local custody disputes.',
    inclusions: [
      'Primary guardian appointment',
      'UAE-resident interim guardian designation',
      'Prevents local authority custody placement',
      'Fast-track DIFC registration available',
      'Peace of mind for expat families',
    ],
    idealFor: 'Expat parents with children under 18 years residing in the UAE.',
  },
  {
    id: 'financial',
    title: 'Financial & Business Will',
    subtitle: 'Bank Accounts & Company Shares',
    price: 'Business Protection',
    desc: 'Secures UAE bank accounts, trade license shares, company equity, stocks, and business investments.',
    inclusions: [
      'Secures bank accounts & investments',
      'Company shareholding succession plan',
      'Maintains business operational continuity',
      'Prevents company account freezing',
      'Bilingual court compliant formatting',
    ],
    idealFor: 'Company founders, shareholders, partners, and high net-worth investors.',
  },
];

const whoNeedsWill = [
  {
    icon: Home,
    title: 'Property Owners',
    desc: 'Villas, apartments, and land plots in the UAE are subject to local inheritance rules unless covered by a registered Will.',
  },
  {
    icon: Building2,
    title: 'Business Owners & Partners',
    desc: 'Ensure company trade licenses and shareholdings pass seamlessly to co-founders or heirs without operational disruption.',
  },
  {
    icon: Landmark,
    title: 'UAE Bank Account Holders',
    desc: 'Upon death, individual and joint bank accounts in the UAE are immediately frozen until court probate is granted.',
  },
  {
    icon: Heart,
    title: 'Parents of Minor Children',
    desc: 'Appoint trusted primary and interim guardians for children under 18 to ensure full family custody protection.',
  },
  {
    icon: ShieldCheck,
    title: 'Single Expatriates',
    desc: 'Protect personal savings, vehicles, end-of-service benefits, and investments according to your personal choice.',
  },
];

const difcVsDubaiCourts = [
  {
    feature: 'Registry Jurisdiction',
    difc: 'DIFC Courts Wills Service (English Common Law basis)',
    dubai: 'Dubai Courts Notary Public (UAE Civil Law format)',
  },
  {
    feature: 'Language of Will',
    difc: 'English (with official Arabic translation on record)',
    dubai: 'Bilingual (English & Legal Arabic side-by-side)',
  },
  {
    feature: 'Asset Scope',
    difc: 'Worldwide assets or UAE-specific assets',
    dubai: 'UAE-wide assets (all 7 Emirates)',
  },
  {
    feature: 'Registration Method',
    difc: '100% Online remote video call via DIFC portal',
    dubai: 'Online video call notary or Dubai Notary visit',
  },
  {
    feature: 'Guardianship Clauses',
    difc: 'Full guardianship & interim guardian support',
    dubai: 'Guardianship provisions included in court format',
  },
  {
    feature: 'Probate Procedure',
    difc: 'Direct DIFC Courts Probate order in English',
    dubai: 'Dubai Courts Execution department enforcement',
  },
];

const registrationSteps = [
  {
    step: '01',
    title: 'Initial Legal Review',
    desc: 'Detailed consultation to list your UAE assets, bank accounts, property details, and chosen beneficiaries & guardians.',
    icon: Compass,
  },
  {
    step: '02',
    title: 'Bilingual Lawyer Drafting',
    desc: 'Our experienced UAE legal team drafts your customized Will in English and legal Arabic following strict court guidelines.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Review & Client Approval',
    desc: 'You review the draft Will, refine beneficiary clauses, and confirm all passport & title deed details.',
    icon: FileCheck,
  },
  {
    step: '04',
    title: 'Official Court Registration',
    desc: 'Complete remote video call notarization with DIFC Courts or Dubai Courts and receive your official registered Will certificate.',
    icon: Stamp,
  },
];

const requiredDocuments = [
  { label: 'Passports & Emirates IDs', detail: 'Copies for Testator, Spouse, Beneficiaries & Appointed Guardians' },
  { label: 'Family Certificate', detail: 'Marriage Certificate & Birth Certificates of minor children (if applicable)' },
  { label: 'Property Title Deeds', detail: 'Copies of Dubai Land Department (DLD) title deeds or Oqood contracts' },
  { label: 'Company Registration', detail: 'Trade license copy, Memorandum of Association (MOA), and shareholder certificate' },
  { label: 'Bank Account Details', detail: 'Bank names and account IBAN numbers to be included in asset schedule' },
  { label: 'Guardians Details', detail: 'Passport copies, addresses, and contact numbers of primary & interim guardians' },
];

const keyBenefits = [
  {
    icon: Lock,
    title: 'Prevents Automatic Bank Account Freeze',
    desc: 'Ensures surviving family members maintain immediate access to liquid funds and bank accounts.',
  },
  {
    icon: Heart,
    title: 'Secures Custody of Minor Children',
    desc: 'Guarantees your chosen guardians take immediate legal custody without interference or court disputes.',
  },
  {
    icon: Home,
    title: 'Seamless Real Estate Transfer',
    desc: 'Bypasses lengthy probate disputes and enables direct transfer of property title deeds to your designated heirs.',
  },
  {
    icon: Scale,
    title: 'Freedom of Asset Distribution',
    desc: 'Allows non-Muslim expats full freedom to distribute assets according to their home country laws or personal wishes.',
  },
  {
    icon: Building2,
    title: 'Business Share Continuity',
    desc: 'Protects company shares and commercial operations from freezing, ensuring co-partners and heirs can operate smoothly.',
  },
  {
    icon: ShieldCheck,
    title: 'Complete Legal Peace of Mind',
    desc: 'Enforceable under UAE Personal Status Law (Article 11) and DIFC Courts Wills Service Rules.',
  },
];

const faqs = [
  {
    question: 'What happens if a non-Muslim dies in Dubai without a registered Will?',
    answer:
      'Without a registered Will in the UAE, local Personal Status and Sharia-based inheritance principles may automatically apply to real estate and bank accounts. Additionally, bank accounts (both individual and joint) are frozen, and temporary custody of minor children may be placed under court supervision until legal guardians are formally established.',
  },
  {
    question: 'What is the main difference between DIFC Wills and Dubai Courts Wills?',
    answer:
      'DIFC Wills are governed by English Common Law rules, written in English, and registered directly with the DIFC Courts Wills Service Centre (offering worldwide asset coverage). Dubai Courts Wills are written in bilingual format (English and Arabic), registered through the Dubai Notary Public, and offer a cost-effective solution valid across all 7 UAE Emirates.',
  },
  {
    question: 'Do foreign registered Wills (e.g. UK, India, US) apply automatically in the UAE?',
    answer:
      'No. Foreign Wills are not automatically recognized or enforced in the UAE. To execute a foreign Will in Dubai, heirs must go through lengthy diplomatic attestation, MOFA legalization, certified Arabic translation, and court probate proceedings. Having a registered UAE Will (DIFC or Dubai Courts) ensures immediate, local enforcement without delay.',
  },
  {
    question: 'Can a single Will cover both property and guardianship for children?',
    answer:
      'Yes! A Full DIFC Will or a Comprehensive Dubai Courts Will can cover real estate, bank accounts, company shares, personal belongings, as well as the appointment of primary and interim guardians for minor children under 18.',
  },
  {
    question: 'Is it necessary to visit the court in person to register a Will?',
    answer:
      'No. Both DIFC Courts and Dubai Courts now offer 100% online video call registration options. You can complete the verification and registration procedure remotely from your home or office.',
  },
  {
    question: 'Can I amend, update, or revoke my registered Will in the future?',
    answer:
      'Yes. You can update, add new assets (such as new real estate properties or bank accounts), or modify beneficiary/guardian details at any time by registering a Codicil or a new revised Will.',
  },
];

export function WillsPageContent() {
  const [selectedWillId, setSelectedWillId] = useState('mirror');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedWill = willTypes.find((w) => w.id === selectedWillId) || willTypes[1];

  return (
    <div style={{ background: '#FAF9F6', color: '#15140F', minHeight: '100vh', fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 20px 110px' }}>
        {/* Top Warning Banner */}
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
            background: '#15140F',
            color: '#FAF9F6',
            border: '1px solid #C5A059',
            borderRadius: 22,
            padding: '20px 26px',
            marginBottom: 32,
            boxShadow: '0 10px 30px rgba(21, 20, 15, 0.15)',
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(197, 160, 89, 0.2)',
                color: '#D4AF37',
                borderRadius: 6,
                padding: '5px 12px',
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              <ShieldAlert size={14} /> DIFC & DUBAI COURTS REGISTERED WILLS
            </div>
            <p style={{ margin: 0, color: '#E5E2DA', fontSize: '0.94rem', lineHeight: 1.6 }}>
              <strong>CRITICAL LEGAL NOTICE:</strong> Without a registered Will in the UAE, local Sharia inheritance rules automatically apply to real estate, bank accounts, and guardianship of minors. Protect your family today.
            </p>
          </div>
          <div>
            <a
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need urgent legal guidance regarding Will Registration in Dubai.')}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                color: '#FFFFFF',
                padding: '14px 22px',
                borderRadius: 999,
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(197, 160, 89, 0.3)',
              }}
            >
              Book Free Consultation <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 32,
            alignItems: 'center',
            background: '#15140F',
            color: '#FAF9F6',
            border: '1px solid #28261F',
            borderRadius: 28,
            padding: '36px 32px',
            marginBottom: 42,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#C5A059', fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
              <Scale size={15} /> Official UAE Legacy Protection
            </div>
            <h1 style={{ margin: '0 0 16px', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: 800 }}>
              Protect your family & <span style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UAE assets with a registered Will.</span>
            </h1>
            <p style={{ margin: '0 0 24px', color: '#A09D95', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 620 }}>
              Lawyer-drafted bilingual Wills registered with DIFC Courts Wills Service or Dubai Courts. Secure real estate, bank accounts, business equity, and legal guardianship for minor children.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
              {['DIFC Courts Wills Service Partner', 'Dubai Notary Registered', '100% Online Remote Notarization'].map((badge) => (
                <span key={badge} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#211F1A', border: '1px solid #332F27', color: '#D4AF37', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 600 }}>
                  <CheckCircle2 size={14} /> {badge}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I want to start my Will drafting & registration in Dubai.')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                  color: '#FFFFFF',
                  padding: '14px 26px',
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                Start Will Registration <ArrowRight size={16} />
              </a>
              <a
                href={contactInfo.phoneHref}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#211F1A',
                  border: '1px solid #C5A059',
                  color: '#FAF9F6',
                  padding: '14px 24px',
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} /> Call {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Hero Promo Box */}
          <div style={{ background: '#211F1A', border: '1px solid #332F27', borderRadius: 24, padding: '30px 24px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 18, right: 18, background: '#C5A059', color: '#15140F', fontWeight: 800, fontSize: 10, padding: '4px 10px', borderRadius: 6, letterSpacing: '0.08em' }}>SPECIAL OFFER</div>
            <div style={{ fontSize: 12, color: '#A09D95', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Will Drafting & Assistance</div>
            <h2 style={{ margin: '8px 0 16px', fontSize: '2.2rem', color: '#D4AF37', fontWeight: 800 }}>
              From AED 950 <small style={{ fontSize: '1rem', color: '#A09D95', fontWeight: 500 }}>/ package</small>
            </h2>
            <div style={{ height: 1, background: '#332F27', margin: '16px 0' }} />
            <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'grid', gap: 10, fontSize: '0.9rem', color: '#E5E2DA' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> <strong>Lawyer Drafted (Bilingual English/Arabic)</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> DIFC Courts & Dubai Courts Options
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> Property, Bank Accounts & Guardianship
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> End-to-End Registration Support
              </li>
            </ul>
            <a
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I want to claim the Will Registration Special Package starting from AED 950.')}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: 999,
                fontWeight: 800,
                fontSize: '0.9rem',
                textDecoration: 'none',
                width: '100%',
              }}
            >
              Claim Will Package <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Top Highlights Grid */}
        <section style={{ marginBottom: 46 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
            {topHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '24px 22px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: '#15140F', fontWeight: 800 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#66635B', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Will Registration is Important */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Info size={14} /> Legal Protection Overview
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Why is Will registration <span style={{ color: '#8C6D2D' }}>important in Dubai?</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 780 }}>
              Under UAE Personal Status Law (Article 11), non-Muslim expatriates have the legal right to register a Will to govern the succession of their UAE-based real estate, bank accounts, and minor children guardianship.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 22, padding: '28px 26px', boxShadow: '0 12px 36px rgba(0, 0, 0, 0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#C84546', fontWeight: 800, fontSize: '1.1rem', marginBottom: 16 }}>
                <AlertTriangle size={20} /> Without a Registered Will
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#5D5950', lineHeight: 1.8, display: 'grid', gap: 10, fontSize: '0.93rem' }}>
                <li>Bank accounts (individual & joint) are automatically frozen upon death.</li>
                <li>Real estate title deed transfers are halted pending court probate.</li>
                <li>Local Sharia inheritance default formulas dictate asset distribution.</li>
                <li>Temporary custody of minor children may be placed under court review.</li>
                <li>Company trade license operations & bank sign-offs face immediate freeze.</li>
              </ul>
            </div>

            <div style={{ background: '#15140F', border: '1px solid #332F27', borderRadius: 22, padding: '28px 26px', color: '#FAF9F6', boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#D4AF37', fontWeight: 800, fontSize: '1.1rem', marginBottom: 16 }}>
                <ShieldCheck size={20} /> With a Registered UAE Will
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#E5E2DA', lineHeight: 1.8, display: 'grid', gap: 10, fontSize: '0.93rem' }}>
                <li>Surviving family members maintain immediate financial access.</li>
                <li>Direct transfer of property title deeds to named beneficiaries.</li>
                <li>You retain 100% freedom to distribute assets according to your choice.</li>
                <li>Immediate appointment of designated primary & interim legal guardians.</li>
                <li>Business shareholdings & trade license operations continue without disruption.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Will Types Selection with Live Interactive Preview Panel */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <FileText size={14} /> Tailored Options
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Types of Wills <span style={{ color: '#8C6D2D' }}>available in Dubai & UAE.</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 760 }}>
              Select a Will category below to review inclusions, eligibility, and direct order options tailored for your asset portfolio.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14, marginBottom: 24 }}>
            {willTypes.map((type) => {
              const isSelected = type.id === selectedWillId;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedWillId(type.id)}
                  style={{
                    background: isSelected ? '#15140F' : '#FFFFFF',
                    color: isSelected ? '#FAF9F6' : '#15140F',
                    border: isSelected ? '1px solid #C5A059' : '1px solid #EFE8DB',
                    borderRadius: 18,
                    padding: '20px 16px',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                    boxShadow: isSelected ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 800, color: isSelected ? '#D4AF37' : '#8C6D2D', textTransform: 'uppercase', marginBottom: 6 }}>{type.price}</div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: 800 }}>{type.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.78rem', color: isSelected ? '#A09D95' : '#716E66', lineHeight: 1.4 }}>{type.subtitle}</p>
                </div>
              );
            })}
          </div>

          {/* Selected Will Detail Panel */}
          <div style={{ background: '#15140F', border: '1px solid #332F27', borderRadius: 24, padding: '32px 30px', color: '#FAF9F6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span style={{ color: '#C5A059', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>SELECTED WILL DETAILS</span>
                <h3 style={{ margin: '6px 0 0', fontSize: '2rem', color: '#FAF9F6', fontWeight: 800 }}>{selectedWill.title}</h3>
                <p style={{ margin: '4px 0 0', color: '#D4AF37', fontSize: '1.05rem', fontWeight: 600 }}>{selectedWill.subtitle}</p>
              </div>
              <a
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello, I want to order the ${selectedWill.title} package.`)}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                  color: '#FFFFFF',
                  padding: '12px 22px',
                  borderRadius: 999,
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
              >
                Order {selectedWill.title} <ArrowRight size={16} />
              </a>
            </div>

            <p style={{ margin: '20px 0', color: '#A09D95', fontSize: '1rem', lineHeight: 1.7 }}>{selectedWill.desc}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, marginTop: 24, paddingTop: 24, borderTop: '1px solid #28261F' }}>
              <div>
                <h4 style={{ margin: '0 0 14px', color: '#FAF9F6', fontSize: '1.05rem', fontWeight: 800 }}>What is included in this Will:</h4>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
                  {selectedWill.inclusions.map((inc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#FAF9F6', fontSize: '0.92rem' }}>
                      <CheckCircle2 size={16} style={{ color: '#C5A059', flexShrink: 0 }} /> {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#211F1A', borderRadius: 16, padding: '20px 22px', border: '1px solid #332F27' }}>
                <h4 style={{ margin: '0 0 8px', color: '#D4AF37', fontSize: '0.95rem', fontWeight: 800 }}>IDEAL FOR:</h4>
                <p style={{ margin: 0, color: '#A09D95', fontSize: '0.9rem', lineHeight: 1.6 }}>{selectedWill.idealFor}</p>
                <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid #28261F', fontSize: '0.85rem', color: '#C5A059', fontWeight: 700 }}>
                  ✓ Guaranteed acceptance by DIFC Courts & Dubai Notary Public
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFC Courts vs Dubai Courts Detailed Comparison Matrix */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Scale size={14} /> Jurisdiction Comparison
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              DIFC Courts vs <span style={{ color: '#8C6D2D' }}>Dubai Courts Wills.</span>
            </h2>
            <p style={{ margin: '0 auto', color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 700 }}>
              Both options provide 100% legally binding asset protection in the UAE. Choose the jurisdiction that fits your preference and budget.
            </p>
          </div>

          <div style={{ background: '#15140F', border: '1px solid #28261F', borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr', background: '#211F1A', borderBottom: '1px solid #332F27', padding: '18px 24px', fontWeight: 800, fontSize: '0.95rem', color: '#FAF9F6' }}>
              <div>Feature / Criteria</div>
              <div style={{ color: '#D4AF37', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Landmark size={16} /> DIFC Courts Will Service
              </div>
              <div style={{ color: '#C5A059', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Stamp size={16} /> Dubai Courts Notary Will
              </div>
            </div>

            {difcVsDubaiCourts.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                  padding: '18px 24px',
                  borderBottom: idx === difcVsDubaiCourts.length - 1 ? 'none' : '1px solid #28261F',
                  fontSize: '0.9rem',
                  color: '#A09D95',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ fontWeight: 700, color: '#FAF9F6' }}>{row.feature}</div>
                <div style={{ color: '#E5E2DA' }}>{row.difc}</div>
                <div style={{ color: '#E5E2DA' }}>{row.dubai}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Needs a Will Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Users size={14} /> Target Audience
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Who usually needs a Will — <span style={{ color: '#8C6D2D' }}>and why.</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 740 }}>
              If you own assets or have dependents residing in the UAE, registering a Will is essential to secure your legacy.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
            {whoNeedsWill.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '22px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem', color: '#15140F', fontWeight: 800 }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#5D5950', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Foreign Registered Wills Notice Card */}
        <section style={{ marginBottom: 52 }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #1D1A14 0%, #15140F 100%)',
              border: '1px solid #C5A059',
              borderRadius: 24,
              padding: '36px 32px',
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 28,
              alignItems: 'center',
              boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
            }}
          >
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#D4AF37', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                <Globe size={14} /> Foreign Wills Clarification
              </span>
              <h3 style={{ margin: '0 0 14px', fontSize: '1.75rem', color: '#FAF9F6', fontWeight: 800, lineHeight: 1.25 }}>
                If you possess foreign registered Wills, do they apply in the UAE?
              </h3>
              <p style={{ margin: 0, color: '#A09D95', fontSize: '0.98rem', lineHeight: 1.7 }}>
                <strong>Foreign Wills are NOT automatically enforced in the UAE.</strong> Executing an overseas Will in Dubai requires extensive court probate, embassy attestation, MOFA legalization, and certified legal translation into Arabic. Registering a local UAE Will (DIFC or Dubai Courts) ensures immediate, direct execution without court delays.
              </p>
            </div>
            <div style={{ textAlign: 'center', background: '#211F1A', padding: '26px 20px', borderRadius: 18, border: '1px solid #332F27' }}>
              <ShieldAlert size={36} style={{ color: '#C5A059', margin: '0 auto 12px' }} />
              <h4 style={{ margin: '0 0 8px', color: '#FAF9F6', fontSize: '1.1rem', fontWeight: 800 }}>Avoid Probate Delays</h4>
              <p style={{ margin: '0 0 18px', color: '#A09D95', fontSize: '0.85rem', lineHeight: 1.5 }}>Draft a UAE-specific Will today for instant enforcement.</p>
              <a
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I have a foreign Will and want to register a UAE Will.')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                  color: '#FFFFFF',
                  padding: '12px 20px',
                  borderRadius: 999,
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                }}
              >
                Consult Legal Expert <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* 6 Key Benefits Grid */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Award size={14} /> Key Advantages
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Key benefits of registering <span style={{ color: '#8C6D2D' }}>a Will in Dubai.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
            {keyBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} style={{ display: 'flex', gap: 16, background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '22px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 6px', fontSize: '1.08rem', color: '#15140F', fontWeight: 800 }}>{benefit.title}</h3>
                    <p style={{ margin: 0, color: '#5D5950', fontSize: '0.9rem', lineHeight: 1.6 }}>{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Required Document Checklist Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <FileCheck size={14} /> Document Checklist
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Documents commonly <span style={{ color: '#8C6D2D' }}>required.</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 740 }}>
              To prepare your Will draft and proceed with court registration, collect the following standard documents.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 }}>
            {requiredDocuments.map((doc, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  background: '#FFFFFF',
                  border: '1px solid #EFE8DB',
                  borderRadius: 18,
                  padding: '20px 22px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: '#F8F1DF',
                    color: '#8C6D2D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.08rem', color: '#15140F', fontWeight: 800 }}>{doc.label}</h3>
                  <p style={{ margin: '6px 0 0', color: '#5D5950', fontSize: '0.9rem', lineHeight: 1.6 }}>{doc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Start to Registration Timeline */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Clock size={14} /> Process Timeline
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Clear guidance, <span style={{ color: '#8C6D2D' }}>start to registration.</span>
            </h2>
            <p style={{ margin: '0 auto', color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 700 }}>
              We handle the complete drafting, translation, and court registration process end-to-end.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
            {registrationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '24px 20px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#8C6D2D', letterSpacing: '0.08em', marginBottom: 12 }}>STEP {step.step}</div>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: '#15140F', fontWeight: 800 }}>{step.title}</h3>
                  <p style={{ margin: 0, color: '#5D5950', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Articles & Insights Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Sparkles size={14} /> Legal Guides
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>Recent articles</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
            <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px solid #EFE8DB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: 210 }}>
                <Image src="/assets/blog/article-1.webp" alt="DIFC vs Dubai Courts Wills" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', borderRadius: 999, padding: '4px 10px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Wills Comparison</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.4, color: '#15140F', fontWeight: 800 }}>DIFC Will vs Dubai Courts Will: Which option is right for non-Muslim expats?</h3>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px solid #EFE8DB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: 210 }}>
                <Image src="/assets/blog/article-2.webp" alt="Guardianship for minor children" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', borderRadius: 999, padding: '4px 10px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Family Protection</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.4, color: '#15140F', fontWeight: 800 }}>How to appoint legal guardians for minor children in Dubai & UAE</h3>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px solid #EFE8DB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: 210 }}>
                <Image src="/assets/blog/article-3.webp" alt="Protecting UAE real estate with a Will" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', borderRadius: 999, padding: '4px 10px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Real Estate</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.4, color: '#15140F', fontWeight: 800 }}>Protecting property title deeds and bank accounts from local probate freeze</h3>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <HelpCircle size={14} /> Clear Answers
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Frequently asked <span style={{ color: '#8C6D2D' }}>questions.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 18, overflow: 'hidden' }}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      color: isOpen ? '#8C6D2D' : '#15140F',
                    }}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease', color: '#8C6D2D', flexShrink: 0 }} />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', color: '#5D5950', fontSize: '0.95rem', lineHeight: 1.75 }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing Call-To-Action Banner */}
        <section
          style={{
            background: 'linear-gradient(135deg, #15140F 0%, #211F1A 100%)',
            border: '1px solid #332F27',
            borderRadius: 28,
            padding: '40px 32px',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          }}
        >
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 800, textTransform: 'uppercase', color: '#C5A059' }}>Ready to protect your legacy?</div>
            <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: '#FAF9F6', fontWeight: 800 }}>
              Need help with your Will & Last Testament?
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I am ready to start my Will drafting & registration.')}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 26px',
                borderRadius: 999,
                background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Start Registration Now <ArrowRight size={18} />
            </a>
            <a
              href={contactInfo.phoneHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 24px',
                borderRadius: 999,
                border: '1px solid #C5A059',
                color: '#FAF9F6',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              <Phone size={16} /> Call us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export function WillsPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <WillsPageContent />
    </StandalonePageFrame>
  );
}
