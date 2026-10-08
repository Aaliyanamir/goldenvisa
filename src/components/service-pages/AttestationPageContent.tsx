'use client';

import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  Globe,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

const featuredSteps = [
  {
    title: 'Doorstep pickup & delivery',
    text: 'Our rider comes to your home or office — no typing-centre queues.',
    icon: Truck,
  },
  {
    title: 'Pay only after delivery',
    text: 'You settle up once your attested documents are back with you.',
    icon: Banknote,
  },
  {
    title: 'Track it all online',
    text: 'Instant quote, confirm and follow progress from your phone.',
    icon: Smartphone,
  },
];

const processSteps = [
  { no: '1', title: 'Request & quote', desc: 'Tell us what to attest on WhatsApp or the app — get an instant, itemised quote.' },
  { no: '2', title: 'We collect', desc: 'Confirm, and our rider picks your documents up from your door.' },
  { no: '3', title: 'We attest', desc: 'We complete the full attestation through the official channels.' },
  { no: '4', title: 'Delivered — pay after', desc: 'Your documents come back to you. You pay only on delivery.' },
];

const needCards = [
  { icon: GraduationCap, title: 'Work & employment visa', desc: 'Degree attestation is required for many skilled job visas and for professional licensing.' },
  { icon: Users, title: 'Family & spouse visa', desc: 'Attested marriage and birth certificates let you sponsor a spouse and children in the UAE.' },
  { icon: Building2, title: 'School & university', desc: 'Schools and universities ask for attested certificates and transcripts at admission.' },
  { icon: FileCheck2, title: 'Business setup & banking', desc: 'Trade licences, MOAs and powers of attorney need attestation for company setup, tenders and bank accounts.' },
];

const documentCards = [
  {
    label: 'Educational',
    title: 'Educational certificates',
    desc: 'Academic and professional certificates attested for employment, licensing and university admission in the UAE — handled end to end, including the steps in the country that issued them.',
    image: '/assets/images/maid-support.jpg',
  },
  {
    label: 'Personal & civil',
    title: 'Personal & civil documents',
    desc: 'Civil and family certificates attested so you can sponsor dependents and complete official UAE formalities — fully managed from doorstep collection to final MOFA attestation.',
    image: '/assets/images/emirates-id-documents.jpg',
  },
  {
    label: 'Commercial',
    title: 'Commercial documents',
    desc: 'Company and trade documents attested for business setup, tenders, banking and overseas partners — we coordinate every official stage so they are accepted without delays.',
    image: '/assets/service-pages/corporate-pro-team.jpg',
  },
];

const fees = [
  { title: 'Personal & educational', fee: 'AED 150 / doc', desc: 'The fixed MOFAIC government fee for certificates like degrees, marriage and birth.' },
  { title: 'Commercial', fee: 'AED 2,000 / doc', desc: 'The fixed MOFAIC fee for trade licences, MOAs, powers of attorney and other corporate papers.' },
  { title: 'Embassy & home-country steps', fee: 'Varies', desc: 'Charged by the foreign authorities and embassy; and they vary by country and document — not by us.' },
  { title: 'Service & courier', fee: 'Quoted upfront', desc: 'Our handling and secure courier — always confirmed in your quote before you commit. No surprises.' },
];

const reasons = [
  { icon: Smartphone, title: '100% online', desc: 'Submit and track from anywhere — no typing-centre queues or counter visits.' },
  { icon: Globe, title: 'End to end', desc: 'From the first stamp abroad to the final MOFAIC attestation, we coordinate every stage.' },
  { icon: ShieldCheck, title: 'Honest on fees', desc: 'Government fee versus service charge, separated clearly — the same approach as our visa calculator.' },
  { icon: Clock3, title: 'Fast & tracked', desc: 'Priority handling where available, with status updates so you are never left guessing.' },
];

const articles = [
  { title: 'How does UAE marriage certificate attestation work?', image: '/assets/blog/article-1.jpg', tag: 'Family visa' },
  { title: 'What documents are needed for degree attestation in Dubai?', image: '/assets/blog/article-2.jpg', tag: 'Education' },
  { title: 'MOFA attestation for business setup: the checklist', image: '/assets/blog/article-3.jpg', tag: 'Commercial' },
];

const faq = [
  { q: 'What is attestation?', a: 'Attestation is a verification process that confirms a document was issued authentically and is accepted for official UAE use.' },
  { q: 'What documents usually need attestation?', a: 'Degree certificates, marriage certificates, birth certificates, police clearance, trade licences and powers of attorney are common examples.' },
  { q: 'How long does it take?', a: 'The full timeline depends on the document type, country of issue and embassy requirements. We confirm your exact processing window in the quote.' },
  { q: 'Do I need to visit a ministry or embassy myself?', a: 'No. We handle the end-to-end coordination and can collect and deliver your documents to your door.' },
  { q: 'What is the MOFA fee in the UAE?', a: 'The UAE MOFA fee is usually AED 150 for personal and educational certificates, though other documents and country-specific steps may vary.' },
  { q: 'Can you handle commercial documents too?', a: 'Yes. We also manage company paperwork, trade licenses, powers of attorney and other legal documents for UAE setup and compliance.' },
];

export function AttestationPageContent() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <div style={{ background: '#f5f1ea', color: '#121212', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 20px 110px' }}>
          <section
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 0.85fr',
              gap: 28,
              background: '#fffaf2',
              border: '1px solid #f0e0b8',
              borderRadius: 26,
              padding: '28px 28px 26px',
              boxShadow: '0 20px 50px rgba(28, 25, 22, 0.04)',
            }}
          >
            <div style={{ paddingRight: 12 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#eaf7ef',
                  color: '#1e7a3d',
                  borderRadius: 999,
                  padding: '8px 14px',
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 0.08,
                  textTransform: 'uppercase',
                  marginBottom: 20,
                }}
              >
                <CheckCircle2 size={15} /> 100% online service
              </div>

              <div style={{ display: 'grid', gap: 18 }}>
                {featuredSteps.map(({ title, text, icon: Icon }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: '#fff6dc',
                        color: '#ca8a1b',
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#1f1d1a' }}>{title}</h3>
                      <p style={{ margin: '6px 0 0', color: '#5d5b55', fontSize: 14, lineHeight: 1.6 }}>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 26, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
                <a
                  href={contactInfo.whatsappHref}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '0 20px',
                    minHeight: 46,
                    borderRadius: 999,
                    background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)',
                    color: '#fff',
                    fontWeight: 800,
                    textDecoration: 'none',
                    boxShadow: '0 10px 22px rgba(197, 160, 89, 0.25)',
                  }}
                >
                  Get a free quote <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                borderRadius: 24,
                overflow: 'hidden',
                background: '#f7f4f0',
                border: '1px solid #efe7d7',
                minHeight: 360,
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 360 }}>
                <Image src="/assets/service-pages/document-attestation.jpg" alt="Document attestation process" fill style={{ objectFit: 'cover' }} />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(16, 14, 12, 0.1), rgba(16, 14, 12, 0.38))',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    left: 18,
                    right: 18,
                    bottom: 18,
                    background: 'rgba(255,255,255,0.92)',
                    borderRadius: 18,
                    padding: '16px 18px',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontWeight: 800, fontSize: 12, letterSpacing: 0.06, color: '#2d2d2d' }}>ATTESTATION TRACKER</span>
                    <span style={{ fontSize: 11, color: '#666', fontWeight: 600 }}>MOFA + embassy</span>
                  </div>
                  <div style={{ display: 'grid', gap: 9 }}>
                    {['Notarised in home country', 'Home country foreign ministry', 'UAE Embassy attestation', 'MOFAIC (UAE MOFA) - final step'].map((step, index) => (
                      <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: index === 3 ? '#1a1a1a' : '#3d7a49', fontWeight: index === 3 ? 800 : 600 }}>
                        <CheckCircle2 size={14} /> {step}
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid #e7e1d6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: '#67625d' }}>
                    <span>MOFAIC government fee</span>
                    <strong style={{ color: '#8C6D2D', fontSize: 18, letterSpacing: -0.04 }}>AED 150</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginTop: 42, background: '#f8f4ef', borderRadius: 30, padding: '26px 24px 8px' }}>
            <div style={{ maxWidth: 720 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> How it works
              </span>
              <h1 style={{ margin: '14px 0 14px', fontSize: 'clamp(2.7rem, 5vw, 4.8rem)', lineHeight: 0.96, letterSpacing: '-0.06em', color: '#121212', fontWeight: 800 }}>
                We come to you. You pay <span style={{ color: '#C5A059' }}>after</span>.
              </h1>
              <p style={{ margin: 0, color: '#5d5b55', fontSize: 17, lineHeight: 1.7, maxWidth: 610 }}>
                A 100% online service. Request in seconds, we collect from your door, attest everything through the official channels, and deliver it back — and you only pay once it is safely in your hands.
              </p>
            </div>
          </section>

          <section style={{ marginTop: 42, background: '#f7f3ee', border: '1px solid #eee4d2', borderRadius: 30, padding: '30px 18px 8px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
              {processSteps.map((item) => (
                <article
                  key={item.no}
                  style={{
                    background: '#fff',
                    borderRadius: 22,
                    border: '1px solid #efe8db',
                    padding: '22px 18px 18px',
                    position: 'relative',
                    boxShadow: '0 14px 30px rgba(19, 18, 16, 0.02)',
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#8C6D2D', marginBottom: 10 }}>STEP {item.no}</div>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#1d1b18' }}>{item.title}</h3>
                  <p style={{ margin: '10px 0 0', color: '#5e5a56', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 56 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, alignItems: 'end', marginBottom: 18 }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                  <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> MOFA attestation
                </span>
                <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', letterSpacing: '-0.05em', lineHeight: 1.05, color: '#171611' }}>
                  MOFA <span style={{ color: '#C5A059' }}>attestation</span> in the UAE, done properly.
                </h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['MOFA (MOFAIC) attested', 'Embassy legalisation', 'Educational - Personal - Commercial'].map((tag) => (
                  <span key={tag} style={{ background: '#f0ede8', borderRadius: 8, padding: '8px 12px', color: '#363230', fontSize: 12, fontWeight: 700 }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 10 }}>
              <a href={contactInfo.whatsappHref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)', color: '#fff', minHeight: 46, borderRadius: 999, padding: '0 20px', fontWeight: 800, textDecoration: 'none' }}>
                Get a Free Quote <ArrowRight size={18} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', color: '#e1a517' }}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <strong style={{ fontSize: 15 }}>4.9</strong>
                <span style={{ color: '#5d5b55', fontSize: 13 }}>based on 825 reviews</span>
              </div>
            </div>
          </section>

          <section style={{ marginTop: 56 }}>
            <div style={{ marginBottom: 18 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> When you need it
              </span>
              <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(2rem, 3.2vw, 3rem)', letterSpacing: '-0.05em', color: '#171611' }}>When you'll <span style={{ color: '#C5A059' }}>need</span> attestation.</h2>
              <p style={{ margin: '12px 0 0', color: '#5d5b55', fontSize: 15, maxWidth: 640, lineHeight: 1.7 }}>
                If a document crosses a border, UAE authorities want proof it is genuine. Attestation is that proof — here is where it usually comes up.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
              {needCards.map(({ icon: Icon, title, desc }) => (
                <article key={title} style={{ display: 'flex', gap: 14, background: '#fff', borderRadius: 20, border: '1px solid #efe8db', padding: '18px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 12, background: '#fff6dc', color: '#bd7c19', flexShrink: 0 }}>
                    <Icon size={19} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#1f1d1a' }}>{title}</h3>
                    <p style={{ margin: '8px 0 0', color: '#5d5b55', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 56 }}>
            <div style={{ marginBottom: 14 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> The documents
              </span>
              <h2 style={{ margin: '12px 0 10px', fontSize: 'clamp(2rem, 3.2vw, 3rem)', letterSpacing: '-0.05em', color: '#171611' }}>Documents we <span style={{ color: '#C5A059' }}>attest</span>.</h2>
              <p style={{ margin: 0, color: '#5d5b55', fontSize: 15, lineHeight: 1.7, maxWidth: 740 }}>Three families of documents, three slightly different paths. Find yours below — the documents themselves, and what the process looks like.</p>
            </div>

            <div style={{ display: 'grid', gap: 20 }}> 
              {documentCards.map(({ label, title, desc, image }, idx) => (
                <div key={label} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', background: '#fff', borderRadius: 26, overflow: 'hidden', border: '1px solid #efe8db' }}>
                  <div style={{ position: 'relative', minHeight: 270 }}>
                    <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px 24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, alignSelf: 'flex-start', background: '#fff5e6', color: '#b56d14', borderRadius: 8, padding: '7px 10px', fontSize: 11, fontWeight: 800, letterSpacing: 0.09, textTransform: 'uppercase' }}>
                      <BadgeCheck size={12} /> Category {idx + 1}
                    </div>
                    <h3 style={{ margin: '14px 0 10px', fontSize: 32, letterSpacing: '-0.05em', color: '#171611' }}>{label}</h3>
                    <p style={{ margin: 0, color: '#5d5b55', fontSize: 15, lineHeight: 1.8 }}>{desc}</p>
                    <a href={contactInfo.whatsappHref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20, alignSelf: 'flex-start', background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)', color: '#fff', minHeight: 42, padding: '0 18px', borderRadius: 999, fontWeight: 800, textDecoration: 'none' }}>
                      Get a quote <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 56, background: '#f6f3ee', border: '1px solid #eee2d1', borderRadius: 30, padding: '30px 18px 24px' }}>
            <div style={{ marginBottom: 18 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> What it costs
              </span>
              <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.05em', color: '#171611' }}>Fees & <span style={{ color: '#C5A059' }}>timelines</span>.</h2>
              <p style={{ margin: '12px 0 0', color: '#5d5b55', fontSize: 15, maxWidth: 700, lineHeight: 1.7 }}>We are upfront about the difference between the fixed government fee and the service and courier costs around it — the same transparency as our visa pages.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
              {fees.map((item) => (
                <div key={item.title} style={{ background: '#fff', borderRadius: 18, border: '1px solid #efe7d9', padding: '18px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 10 }}>
                    <h4 style={{ margin: 0, fontSize: 16, lineHeight: 1.4, color: '#1d1b18', maxWidth: 150 }}>{item.title}</h4>
                    <span style={{ color: '#8C6D2D', fontWeight: 800, fontSize: 13, whiteSpace: 'nowrap' }}>{item.fee}</span>
                  </div>
                  <p style={{ margin: 0, color: '#5d5b55', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <p style={{ margin: '22px 0 0', color: '#3d3a36', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Check size={16} style={{ color: '#1a7a3e' }} /> Government fees are set by MOFAIC and can change — we confirm your exact total in the quote.
            </p>
          </section>

          <section style={{ marginTop: 56 }}>
            <div style={{ marginBottom: 18 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> Why it is worth it
              </span>
              <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.05em', color: '#171611' }}>Why attest with <span style={{ color: '#C5A059' }}>us</span>.</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 18 }}>
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ background: '#fff', border: '1px solid #efe8db', borderRadius: 18, padding: '18px 16px', display: 'flex', gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fff5e0', color: '#ba7e18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: '#1f1d1a' }}>{title}</h4>
                    <p style={{ margin: '8px 0 0', color: '#5d5b55', fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 56 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                  <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> Latest insights
                </span>
                <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.05em', color: '#171611' }}>Recent articles</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18 }}>
              {articles.map((article) => (
                <article key={article.title} style={{ background: '#fff', borderRadius: 20, border: '1px solid #efe8db', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: 210 }}>
                    <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: 18 }}>
                    <span style={{ display: 'inline-flex', background: '#fff5e6', color: '#b56d14', borderRadius: 999, padding: '7px 10px', fontSize: 11, fontWeight: 800, letterSpacing: 0.06, textTransform: 'uppercase' }}>{article.tag}</span>
                    <h3 style={{ margin: '12px 0 0', fontSize: 20, lineHeight: 1.35, color: '#171611' }}>{article.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 56 }}>
            <div style={{ marginBottom: 18 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#c98d26', fontSize: 11, fontWeight: 800, letterSpacing: 0.12, textTransform: 'uppercase' }}>
                <span style={{ width: 8, height: 8, display: 'inline-block', borderRadius: '50%', background: '#d4a237', boxShadow: '0 0 0 4px rgba(212,162,55,0.12)' }} /> FAQ
              </span>
              <h2 style={{ margin: '12px 0 0', fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.05em', color: '#171611' }}>Attestation FAQ</h2>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              {faq.map((item, idx) => (
                <details key={item.q} open={idx === 0} style={{ background: '#fff', border: '1px solid #efe8db', borderRadius: 16, padding: '0 18px' }}>
                  <summary style={{ listStyle: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 60, fontWeight: 800, color: '#171611' }}>
                    {item.q}
                    <ChevronDown size={18} style={{ color: '#9d6c0b' }} />
                  </summary>
                  <p style={{ margin: '0 0 18px', color: '#5d5b55', lineHeight: 1.7, fontSize: 15 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 58, background: 'linear-gradient(135deg, #15140F 0%, #211F1A 100%)', borderRadius: 28, padding: '30px 26px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', border: '1px solid #332F27' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: 0.12, fontWeight: 800, textTransform: 'uppercase', color: '#C5A059' }}>Ready to start?</div>
              <h3 style={{ margin: '8px 0 0', fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.05em', lineHeight: 1.06, color: '#FAF9F6' }}>Ready to attest your documents?</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <a href={contactInfo.whatsappHref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 46, padding: '0 20px', borderRadius: 999, background: 'linear-gradient(135deg, #C5A059 0%, #8C6D2D 100%)', color: '#fff', fontWeight: 800, textDecoration: 'none' }}>
                Get started <ArrowRight size={18} />
              </a>
              <a href={contactInfo.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 46, padding: '0 20px', borderRadius: 999, border: '1px solid #C5A059', color: '#FAF9F6', fontWeight: 800, textDecoration: 'none' }}>
                Call us
              </a>
            </div>
          </section>

        </div>
      </div>
    </StandalonePageFrame>
  );
}
