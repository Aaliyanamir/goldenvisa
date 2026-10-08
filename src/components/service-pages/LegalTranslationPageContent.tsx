'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Gavel,
  Globe,
  GraduationCap,
  HelpCircle,
  Languages,
  Phone,
  ShieldCheck,
  Sparkles,
  Stamp,
  Truck,
  UserCheck,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

const topFeatureSteps = [
  {
    title: 'Doorstep Pick & Drop',
    text: 'We collect your original documents from your home or office anywhere in Dubai & UAE.',
    icon: Truck,
  },
  {
    title: 'Fast Turnaround',
    text: 'Express certified translation completed within 24 to 48 hours with digital PDF delivery.',
    icon: Clock,
  },
  {
    title: 'MOJ Certified Translators',
    text: 'Official Ministry of Justice sworn translators accepted by all UAE Ministries, Courts & GDRFA.',
    icon: Stamp,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Send Documents',
    desc: 'Submit your documents via WhatsApp or email for an instant, transparent quote.',
    icon: FileText,
  },
  {
    step: '02',
    title: 'Certified Translation',
    desc: 'MOJ sworn translator translates your document with official stamp and legal signature.',
    icon: Stamp,
  },
  {
    step: '03',
    title: 'Notarization & Attestation',
    desc: 'Optional MOFA or embassy attestation coordinated for government or overseas submission.',
    icon: ShieldCheck,
  },
  {
    step: '04',
    title: 'Doorstep Delivery',
    desc: 'Original stamped hardcopy delivered to your doorstep, with digital PDF sent instantly.',
    icon: Truck,
  },
];

const useCases = [
  {
    icon: UserCheck,
    title: 'Visa & Residency',
    desc: 'Marriage, birth, and police clearance certificates translated into Arabic for Golden Visa, Partner Visa, and Family Sponsorship.',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Business',
    desc: 'Trade licenses, Articles of Association (MOA), Board Resolutions, Financial Audits, and Commercial Agreements.',
  },
  {
    icon: Gavel,
    title: 'Court & Legal Affairs',
    desc: 'Litigation papers, contracts, power of attorney, and legal affidavits formatted for Dubai Courts and judicial authorities.',
  },
  {
    icon: GraduationCap,
    title: 'Education & Employment',
    desc: 'Degree certificates, diplomas, academic transcripts, and marksheets for MOHRE, KHDA, and university admissions.',
  },
];

const documentCategories = [
  {
    id: 'commercial',
    badge: 'Category 1',
    label: 'Commercial & Corporate',
    title: 'Corporate & Business Legal Translation',
    desc: 'Trade licenses, Articles of Association (MOA), Board Resolutions, Power of Attorney, Financial Statements, Audit Reports, and Commercial Agreements officially translated for UAE Ministries and Freezone Authorities.',
    image: '/assets/service-pages/corporate-pro-team.jpg',
    tags: ['Trade Licenses', 'MOAs & Amendments', 'Board Resolutions', 'Financial Audits', 'Contracts'],
  },
  {
    id: 'personal',
    badge: 'Category 2',
    label: 'Personal Certificates',
    title: 'Personal & Civil Certificate Translation',
    desc: 'Marriage certificates, Birth certificates, Death certificates, Police Clearance Certificates (PCC), Adoption papers, and Divorce decrees translated by sworn MOJ translators for GDRFA and family sponsorship.',
    image: '/assets/images/emirates-id-documents.jpg',
    tags: ['Marriage Certificates', 'Birth Certificates', 'Police Clearance', 'Divorce Decrees', 'Affidavits'],
  },
  {
    id: 'academic',
    badge: 'Category 3',
    label: 'Educational & Academic',
    title: 'Academic & Qualification Translation',
    desc: 'High School Diplomas, University Degrees, Academic Transcripts, Marksheets, Training Certificates, and KHDA equivalency documents translated for MOHRE work permits and Golden Visa applications.',
    image: '/assets/images/maid-support.jpg',
    tags: ['Degree Certificates', 'High School Diplomas', 'Transcripts', 'KHDA Documents', 'Professional Licenses'],
  },
];

const languagesSupported = [
  {
    title: 'English to Arabic',
    tag: 'MOST POPULAR',
    desc: 'Official certified translation required by all UAE ministries, GDRFA, Dubai Courts, and DET.',
    icon: Languages,
  },
  {
    title: 'French / German / Italian to Arabic',
    tag: 'EUROPEAN',
    desc: 'Certified translations for European documents submitted for UAE residency, banking, and business.',
    icon: Globe,
  },
  {
    title: 'Russian / Chinese / Japanese to Arabic',
    tag: 'ASIAN & CIS',
    desc: 'Sworn legal translation for international investors, corporate groups, and property buyers.',
    icon: Award,
  },
  {
    title: 'Other Global Languages',
    tag: '50+ LANGUAGES',
    desc: 'Spanish, Turkish, Urdu, Hindi, Farsi, Tagalog, Portuguese, Dutch, Polish, and 40+ more languages.',
    icon: Sparkles,
  },
];

const whoReliesOnUs = [
  {
    title: 'Golden Visa Applicants',
    desc: 'Translating foreign marriage certificates, birth certificates, and bank statements for residency approval.',
    icon: BadgeCheck,
  },
  {
    title: 'Investors & Entrepreneurs',
    desc: 'Company incorporation documents, MOAs, and commercial agreements translated into legal Arabic.',
    icon: Building2,
  },
  {
    title: 'Law Firms & Consultancies',
    desc: 'Litigation paperwork, power of attorney, and legal contracts prepared for Dubai Courts.',
    icon: Gavel,
  },
  {
    title: 'Expats & Families',
    desc: 'Attested personal documents, police clearance, and academic certificates for family visa sponsorship.',
    icon: Users,
  },
];

const faqs = [
  {
    question: 'What is an MOJ Certified Legal Translation in the UAE?',
    answer:
      'An MOJ (Ministry of Justice) certified legal translation is performed by a licensed sworn translator in the UAE. It bears an official MOJ stamp, translator declaration, and signature, making it legally valid for submission to all UAE courts, ministries, free zones, and government departments.',
  },
  {
    question: 'Which government entities require legal translation in Arabic?',
    answer:
      'All UAE federal and local government entities require foreign documents to be legally translated into Arabic. This includes Dubai Courts, GDRFA (Immigration), MOHRE (Ministry of Human Resources), MOFA (Ministry of Foreign Affairs), DLD (Dubai Land Department), and RTA.',
  },
  {
    question: 'How long does legal translation take in Dubai?',
    answer:
      'Standard certified translation is completed within 24 to 48 hours. Urgent same-day express translation service is also available upon request for time-sensitive filings.',
  },
  {
    question: 'Is legal translation different from regular translation?',
    answer:
      'Yes. Regular translation is non-certified and cannot be submitted to government authorities. MOJ Legal Translation is legally binding, sworn under oath, and stamped by an official Ministry of Justice licensed translator.',
  },
  {
    question: 'Do I need document attestation before legal translation?',
    answer:
      'Yes, foreign documents issued outside the UAE typically require home country foreign ministry attestation and UAE Embassy attestation before MOFA verification and MOJ legal translation into Arabic.',
  },
  {
    question: 'How do I receive my legally translated documents?',
    answer:
      'You will receive an instant high-resolution e-stamped digital PDF version via WhatsApp or email, plus physical hardcopies delivered directly to your home or office address by rider.',
  },
];

export function LegalTranslationPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: '#FAF9F6', color: '#15140F', minHeight: '100vh', fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 20px 110px' }}>
        {/* Top Notice Banner */}
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
              <Truck size={14} /> Doorstep Pick & Drop
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, color: '#E5E2DA', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {topFeatureSteps.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.title}:</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need MOJ Legal Translation service.')}`}
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
              Book Pickup Now <ArrowRight size={16} />
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
              <Languages size={15} /> Official UAE MOJ Sworn Service
            </div>
            <h1 style={{ margin: '0 0 16px', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.04em', fontWeight: 800 }}>
              Certified <span style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>legal translation</span> in the UAE, done properly.
            </h1>
            <p style={{ margin: '0 0 24px', color: '#A09D95', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 620 }}>
              MOJ-certified legal translation accepted by all UAE Government departments, Courts, Freezones, GDRFA, and Foreign Embassies. Over 50+ languages supported with doorstep collection and fast delivery.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
              {['MOJ Certified Translators', 'Ministry & Court Approved', '50+ Languages Supported'].map((badge) => (
                <span key={badge} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#211F1A', border: '1px solid #332F27', color: '#D4AF37', borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 600 }}>
                  <CheckCircle2 size={14} /> {badge}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I want to request a legal translation quote.')}`}
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
                Order Translation Now <ArrowRight size={16} />
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

          {/* Hero Deal Box */}
          <div style={{ background: '#211F1A', border: '1px solid #332F27', borderRadius: 24, padding: '30px 24px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 18, right: 18, background: '#C5A059', color: '#15140F', fontWeight: 800, fontSize: 10, padding: '4px 10px', borderRadius: 6, letterSpacing: '0.08em' }}>MOST POPULAR</div>
            <div style={{ fontSize: 12, color: '#A09D95', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>Legal Translation Deal</div>
            <h2 style={{ margin: '8px 0 16px', fontSize: '2.2rem', color: '#D4AF37', fontWeight: 800 }}>
              From AED 50 <small style={{ fontSize: '1rem', color: '#A09D95', fontWeight: 500 }}>/ page</small>
            </h2>
            <div style={{ height: 1, background: '#332F27', margin: '16px 0' }} />
            <ul style={{ margin: '0 0 24px', padding: 0, listStyle: 'none', display: 'grid', gap: 10, fontSize: '0.9rem', color: '#E5E2DA' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> <strong>MOJ Sworn Stamp & Signature</strong>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> Accepted by GDRFA, MOHRE & Courts
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> Digital PDF + Physical Hardcopy Option
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: '#C5A059' }} /> 24-48 Hours Express Delivery
              </li>
            </ul>
            <a
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I want to order legal translation at starting price AED 50/page.')}`}
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
              Order Legal Translation <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Clock size={14} /> Simple & Transparent Workflow
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Get it done. <span style={{ color: '#8C6D2D' }}>Without the runaround.</span>
            </h2>
            <p style={{ margin: '0 auto', color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 720 }}>
              Fast, official legal translation in Dubai with doorstep pickup & delivery, or simple digital upload via WhatsApp.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
            {processSteps.map((step) => {
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

        {/* Use Cases Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Gavel size={14} /> Official Requirements
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              When you need <span style={{ color: '#8C6D2D' }}>Legal Translation.</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 760 }}>
              Any foreign language document submitted to UAE government entities, courts, or visa authorities must be legally translated into Arabic by an MOJ sworn certified translator.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div key={useCase.title} style={{ display: 'flex', gap: 16, background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '24px 22px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 style={{ margin: '0 0 8px', fontSize: '1.15rem', color: '#15140F', fontWeight: 800 }}>{useCase.title}</h3>
                    <p style={{ margin: 0, color: '#5D5950', fontSize: '0.92rem', lineHeight: 1.65 }}>{useCase.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Documents We Translate Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <FileText size={14} /> Document Categories
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Documents we <span style={{ color: '#8C6D2D' }}>translate.</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 760 }}>
              From official personal certificates to complex legal and commercial contracts, we provide certified MOJ translations for all document types.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 24 }}>
            {documentCategories.map((doc) => (
              <div
                key={doc.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  background: '#15140F',
                  border: '1px solid #28261F',
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
                }}
              >
                <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      alignSelf: 'flex-start',
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: '#C5A059',
                      borderRadius: 6,
                      padding: '6px 12px',
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: 14,
                    }}
                  >
                    <BadgeCheck size={13} /> {doc.badge}
                  </div>
                  <h3 style={{ margin: '0 0 12px', fontSize: '1.6rem', color: '#FAF9F6', fontWeight: 800 }}>{doc.title}</h3>
                  <p style={{ margin: 0, color: '#A09D95', fontSize: '0.95rem', lineHeight: 1.7 }}>{doc.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: '#211F1A',
                          border: '1px solid #332F27',
                          borderRadius: 6,
                          padding: '4px 10px',
                          color: '#D4AF37',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <a
                      href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello, I need legal translation for ${doc.label}.`)}`}
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
                      Order {doc.label} Translation <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
                <div style={{ position: 'relative', minHeight: 280 }}>
                  <Image src={doc.image} alt={doc.title} fill style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, #15140F 0%, transparent 60%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages Supported Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Globe size={14} /> Global Linguistic Coverage
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Languages <span style={{ color: '#8C6D2D' }}>supported.</span>
            </h2>
            <p style={{ margin: '0 auto', color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 700 }}>
              Certified MOJ translation from and into over 50+ languages worldwide with complete accuracy and legal compliance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
            {languagesSupported.map((lang) => {
              const Icon = lang.icon;
              return (
                <div key={lang.title} style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '24px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 6, marginBottom: 12 }}>
                    {lang.tag}
                  </span>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.1rem', color: '#15140F', fontWeight: 800 }}>{lang.title}</h3>
                  <p style={{ margin: 0, color: '#5D5950', fontSize: '0.88rem', lineHeight: 1.6 }}>{lang.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who Relies On Us Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <Users size={14} /> Trusted Across UAE
            </span>
            <h2 style={{ margin: '10px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>
              Who relies <span style={{ color: '#8C6D2D' }}>on us.</span>
            </h2>
            <p style={{ margin: 0, color: '#5D5950', fontSize: '1rem', lineHeight: 1.7, maxWidth: 740 }}>
              Trusted by individuals, law firms, multinational corporations, and real estate agencies across the UAE.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
            {whoReliesOnUs.map((client) => {
              const Icon = client.icon;
              return (
                <div key={client.title} style={{ background: '#FFFFFF', border: '1px solid #EFE8DB', borderRadius: 20, padding: '22px 18px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: '#F8F1DF', color: '#8C6D2D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.08rem', color: '#15140F', fontWeight: 800 }}>{client.title}</h3>
                  <p style={{ margin: 0, color: '#5D5950', fontSize: '0.88rem', lineHeight: 1.6 }}>{client.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Articles & Insights Section */}
        <section style={{ marginBottom: 52 }}>
          <div style={{ marginBottom: 20 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#8C6D2D', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              <BookOpen size={14} /> Legal Translation Insights
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', letterSpacing: '-0.04em', color: '#15140F', fontWeight: 800 }}>Legal Translation Guides</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
            <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px solid #EFE8DB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: 210 }}>
                <Image src="/assets/blog/article-1.jpg" alt="Legal translation for Golden Visa" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', borderRadius: 999, padding: '4px 10px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Golden Visa</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.4, color: '#15140F', fontWeight: 800 }}>Which documents need legal translation into Arabic for UAE Golden Visa?</h3>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px solid #EFE8DB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: 210 }}>
                <Image src="/assets/blog/article-2.jpg" alt="Degree certificate translation" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', borderRadius: 999, padding: '4px 10px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>MOHRE & KHDA</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.4, color: '#15140F', fontWeight: 800 }}>Degree certificate translation & attestation guide for UAE work permits</h3>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: 20, border: '1px solid #EFE8DB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: 210 }}>
                <Image src="/assets/blog/article-3.jpg" alt="Corporate MOA translation" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 20 }}>
                <span style={{ display: 'inline-block', background: '#F8F1DF', color: '#8C6D2D', borderRadius: 999, padding: '4px 10px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', marginBottom: 10 }}>Corporate</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', lineHeight: 1.4, color: '#15140F', fontWeight: 800 }}>Translating trade licenses and MOAs for Dubai Courts and Free Zones</h3>
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
              Legal Translation <span style={{ color: '#8C6D2D' }}>FAQ</span>
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
            <div style={{ fontSize: 12, letterSpacing: '0.12em', fontWeight: 800, textTransform: 'uppercase', color: '#C5A059' }}>Ready to translate your documents?</div>
            <h2 style={{ margin: '8px 0 0', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.04em', lineHeight: 1.1, color: '#FAF9F6', fontWeight: 800 }}>
              Ready to translate your documents?
            </h2>
            <p style={{ margin: '8px 0 0', color: '#A09D95', fontSize: '0.95rem' }}>
              Get your MOJ certified legal translation fast with optional doorstep pickup & delivery across Dubai.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I am ready to order legal translation.')}`}
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
              Order Translation Now <ArrowRight size={18} />
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

export function LegalTranslationPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <LegalTranslationPageContent />
    </StandalonePageFrame>
  );
}
