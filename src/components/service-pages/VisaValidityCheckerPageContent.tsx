'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileCheck,
  FileText,
  Globe,
  HelpCircle,
  Info,
  Lock,
  MapPin,
  MessageSquare,
  CreditCard,
  Phone,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
  X,
} from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { contactInfo } from '@/lib/contactInfo';

const nationalities = [
  'India', 'Pakistan', 'Philippines', 'United Kingdom', 'Egypt', 'Bangladesh',
  'Nigeria', 'Sudan', 'Jordan', 'Syria', 'Nepal', 'Sri Lanka', 'Russia',
  'China', 'United States', 'Canada', 'Australia', 'Germany', 'France',
  'Italy', 'South Africa', 'Lebanon', 'Iran', 'Saudi Arabia', 'Oman',
];

const faqs = [
  {
    question: 'How can I check my UAE visa status online?',
    answer: 'You can check your UAE visa status online using your passport number, expiry date, and nationality. For visas issued in Dubai, use the official GDRFA Dubai portal. For visas issued in Abu Dhabi, Sharjah, Ajman, RAK, UAQ, or Fujairah, use the official ICP Smart Services portal.',
  },
  {
    question: 'What is the difference between GDRFA and ICP portals?',
    answer: 'GDRFA (General Directorate of Residency and Foreigners Affairs) handles entry permits and residence visas issued specifically by the Emirate of Dubai. ICP (Federal Authority for Identity, Citizenship, Customs and Port Security) handles visas issued by all other six UAE emirates as well as federal Emirates ID records.',
  },
  {
    question: 'How do I check overstay fines in Dubai or the UAE?',
    answer: 'You can check overstay fines through the ICP Smart Services fine inquiry page or GDRFA Dubai fine checker. You will need your File Number, Passport Number, or Unified Number (UID) to retrieve your current fine balance.',
  },
  {
    question: 'What is a Unified Number (UID) and where can I find it?',
    answer: 'A Unified Number (UID) is a unique 9-digit identification number assigned by UAE immigration authorities to every person entering the UAE. You can find your UID printed on your visa page or entry permit above your file number.',
  },
  {
    question: 'What is the daily overstay fine rate in the UAE?',
    answer: 'The current standard overstay fine in the UAE is AED 50 per day after your visa validity or official grace period expires. Additional ICP/GDRFA service charges and exit permit fees may apply upon departure or status change.',
  },
  {
    question: 'How long is the grace period after visa cancellation or expiry?',
    answer: 'Standard residence visas typically have a 30-day to 60-day grace period after cancellation or expiry, depending on the visa category (e.g. Golden Visa holders get up to 6 months grace period). You must exit the country or renew your status before the grace period ends.',
  },
  {
    question: 'Can Brightlink Consulting check my visa status on WhatsApp?',
    answer: 'Yes! If you prefer not to navigate government portals yourself, you can send your passport copy or application details to our PRO desk on WhatsApp, and our team will verify your visa status directly on official systems.',
  },
];

export function VisaValidityCheckerPageContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [passportNumber, setPassportNumber] = useState('');
  const [nationality, setNationality] = useState('India');
  const [emirate, setEmirate] = useState<'dubai' | 'other'>('dubai');
  const [visaType, setVisaType] = useState<'residence' | 'visit' | 'golden'>('residence');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const resetModal = () => {
    setModalStep(1);
    setPassportNumber('');
    setNationality('India');
    setEmirate('dubai');
    setVisaType('residence');
  };

  const handleOpenModal = () => {
    resetModal();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const getOfficialPortalLink = () => {
    if (emirate === 'dubai') {
      return 'https://www.gdrfad.gov.ae/en/services?id=381a1795-f126-11ec-a068-0050569629ef';
    }
    return 'https://smartservices.icp.gov.ae/echannels/web/client/default.html#/fileValidity';
  };

  const whatsappCheckMsg = `Hello Brightlink PRO Team, please check my UAE visa status.\nPassport: ${passportNumber || 'Not provided'}\nNationality: ${nationality}\nEmirate: ${emirate === 'dubai' ? 'Dubai (GDRFA)' : 'Abu Dhabi / Federal (ICP)'}\nVisa Type: ${visaType}`;

  return (
    <div className="gv-validity-page">
      <div className="gv-validity-shell">
        {/* Breadcrumb */}
        <nav className="gv-validity-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/#services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">Visa Validity Checker</span>
        </nav>

        {/* ── 1. HERO SECTION ────────────────────────────────── */}
        <header className="gv-validity-hero">
          <div className="gv-validity-hero-copy">
            <span className="gv-validity-eyebrow">
              <span aria-hidden="true" />OFFICIAL VISA CHECKER
            </span>
            <h1>Check your UAE visa status by <span>passport number</span></h1>
            <p>Verify your residence visa, visit visa, or entry permit validity directly on official GDRFA Dubai and ICP Smart Services systems before expiry.</p>

            <div className="gv-validity-hero-card">
              <div className="gv-validity-card-badge">
                <ShieldCheck size={16} /> 100% Free & Secure Check
              </div>
              <ul className="gv-validity-card-list">
                <li><CheckCircle2 size={16} /> Enter your passport number</li>
                <li><CheckCircle2 size={16} /> Select passport nationality</li>
                <li><CheckCircle2 size={16} /> Get instant official portal guidance</li>
              </ul>
              <button
                className="gv-validity-btn gv-validity-btn--gold"
                type="button"
                onClick={handleOpenModal}
              >
                <Search size={16} /> Check my visa status <ArrowRight size={16} />
              </button>
              <small className="gv-validity-card-privacy">
                <Lock size={12} /> We respect your privacy. Passport details are used solely to generate official portal guidance.
              </small>
            </div>

            <div className="gv-validity-hero-proof">
              <div className="gv-validity-stars" aria-label="5 stars">★★★★★</div>
              <span><strong>4.9 / 5.0</strong> based on 1,200+ visa status reviews</span>
            </div>
          </div>

          <aside className="gv-validity-hero-aside">
            <div className="gv-validity-stat-box">
              <div className="gv-validity-stat-item">
                <span className="gv-validity-stat-num">GDRFA</span>
                <span className="gv-validity-stat-label">Dubai Issued Visas</span>
              </div>
              <div className="gv-validity-stat-item">
                <span className="gv-validity-stat-num">ICP</span>
                <span className="gv-validity-stat-label">Abu Dhabi & Other Emirates</span>
              </div>
              <div className="gv-validity-stat-item gv-validity-stat-item--gold">
                <span className="gv-validity-stat-num">AED 50</span>
                <span className="gv-validity-stat-label">Daily Overstay Fine Rate</span>
              </div>
            </div>
          </aside>
        </header>

        {/* ── 2. HOW IT WORKS / 3 STEPS ───────────────────────── */}
        <section className="gv-validity-section" id="how-it-works">
          <div className="gv-validity-heading">
            <span className="gv-validity-eyebrow"><span aria-hidden="true" />HOW IT WORKS</span>
            <h2>Your status check in 3 <strong>easy steps.</strong></h2>
            <p>Follow our interactive guide to reach the correct government portal without confusion.</p>
          </div>

          <div className="gv-validity-steps-grid">
            <article className="gv-validity-step-card">
              <span className="gv-validity-step-num">01</span>
              <div className="gv-validity-step-icon"><FileText size={22} /></div>
              <h3>Enter passport</h3>
              <p>Provide your passport number and issuing country exactly as printed on your passport document.</p>
            </article>

            <article className="gv-validity-step-card">
              <span className="gv-validity-step-num">02</span>
              <div className="gv-validity-step-icon"><Globe size={22} /></div>
              <h3>Select issuing emirate</h3>
              <p>Choose whether your visa was issued in Dubai (GDRFA) or another emirate (ICP Abu Dhabi, Sharjah, Ajman, RAK, UAQ, Fujairah).</p>
            </article>

            <article className="gv-validity-step-card">
              <span className="gv-validity-step-num">03</span>
              <div className="gv-validity-step-icon"><ExternalLink size={22} /></div>
              <h3>Get official result</h3>
              <p>Follow our direct link to the exact government form, or let our PRO desk verify your visa status on WhatsApp.</p>
            </article>
          </div>

          <div className="gv-validity-cta-trigger">
            <button className="gv-validity-btn gv-validity-btn--gold" type="button" onClick={handleOpenModal}>
              Start 3-Step Status Check <ArrowRight size={16} />
            </button>
            <a
              className="gv-validity-btn gv-validity-btn--ghost"
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, please help me check my UAE visa status on WhatsApp.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageSquare size={16} /> Ask PRO Team on WhatsApp
            </a>
          </div>
        </section>

        {/* ── 3. DETAILED CONTENT & OVERSTAY WARNING ─────────── */}
        <section className="gv-validity-section" id="guide">
          <div className="gv-validity-heading">
            <span className="gv-validity-eyebrow"><span aria-hidden="true" />IMPORTANT KNOWLEDGE</span>
            <h2>Checking your visa validity <strong>in the UAE.</strong></h2>
          </div>

          <div className="gv-validity-guide-grid">
            {/* Overstay Fine Banner */}
            <article className="gv-validity-warning-card">
              <div className="gv-validity-warning-header">
                <AlertTriangle size={24} />
                <div>
                  <h3>Overstay Fines in the UAE — AED 50 / day</h3>
                  <span>Avoid unexpected daily fines and exit bans</span>
                </div>
              </div>
              <p>Under current UAE regulations, staying beyond your visa validity or grace period incurs a fine of <strong>AED 50 per day</strong>. Additional ICP/GDRFA service charges apply when issuing exit permits or renewing status.</p>
              <ul>
                <li><CheckCircle2 size={14} /> <strong>Grace Period:</strong> 30 to 60 days for standard residence visas after cancellation/expiry.</li>
                <li><CheckCircle2 size={14} /> <strong>Golden Visa Holders:</strong> Up to 6 months grace period after cancellation.</li>
                <li><CheckCircle2 size={14} /> <strong>Tourist / Visit Visas:</strong> No grace period — fines accumulate immediately after visa expiry.</li>
              </ul>
            </article>

            {/* GDRFA vs ICP Comparison */}
            <div className="gv-validity-portals-grid">
              <article className="gv-validity-portal-card">
                <div className="gv-validity-portal-badge">DUBAI VISAS</div>
                <h3>GDRFA Dubai Portal</h3>
                <p>Use for visas issued by Dubai (General Directorate of Residency and Foreigners Affairs).</p>
                <ul className="gv-validity-portal-list">
                  <li>Dubai employment visas</li>
                  <li>Dubai family & dependent visas</li>
                  <li>Dubai visit & tourist visas</li>
                </ul>
                <a className="gv-validity-portal-link" href="https://www.gdrfad.gov.ae/en" target="_blank" rel="noreferrer">
                  Open GDRFA Portal <ExternalLink size={14} />
                </a>
              </article>

              <article className="gv-validity-portal-card">
                <div className="gv-validity-portal-badge">FEDERAL / OTHER EMIRATES</div>
                <h3>ICP Smart Services</h3>
                <p>Use for visas issued in Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, or Fujairah.</p>
                <ul className="gv-validity-portal-list">
                  <li>Abu Dhabi & Northern Emirates visas</li>
                  <li>Emirates ID biometrics & status</li>
                  <li>Federal fine inquiry system</li>
                </ul>
                <a className="gv-validity-portal-link" href="https://smartservices.icp.gov.ae" target="_blank" rel="noreferrer">
                  Open ICP Portal <ExternalLink size={14} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ── 4. WHATSAPP CHECK IN 3 STEPS BANNER ─────────────── */}
        <section className="gv-validity-whatsapp-banner">
          <div className="gv-validity-whatsapp-copy">
            <span className="gv-validity-eyebrow" style={{ color: '#DFBE74' }}>EXPRESS PRO ASSISTANCE</span>
            <h2>WhatsApp Check in 3 Steps</h2>
            <p>Prefer not to deal with government forms? Send your details to our PRO desk and receive a verified status update directly on WhatsApp.</p>
            
            <div className="gv-validity-wa-steps">
              <div><span>1</span><small>Send passport copy on WhatsApp</small></div>
              <div><span>2</span><small>PRO team verifies on official portal</small></div>
              <div><span>3</span><small>Receive instant PDF & status report</small></div>
            </div>

            <a
              className="gv-validity-btn gv-validity-btn--gold"
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello Brightlink PRO Desk, I would like you to check my UAE visa status on WhatsApp.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Check on WhatsApp Now <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* ── 5. ACCORDION FAQS ───────────────────────────────── */}
        <section className="gv-validity-section gv-validity-faq-section" id="faq">
          <div className="gv-validity-heading" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
            <span className="gv-validity-eyebrow"><span aria-hidden="true" />FREQUENTLY ASKED</span>
            <h2>Frequently asked <strong>questions.</strong></h2>
          </div>

          <div className="gv-validity-faqs">
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

        {/* ── 6. CLOSING CTA BANNER ───────────────────────────── */}
        <section className="gv-validity-closing">
          <span className="gv-validity-eyebrow" style={{ color: '#DFBE74' }}>STAY COMPLIANT</span>
          <h2>Not sure where your visa stands?</h2>
          <p>Don’t risk daily overstay fines. Contact Brightlink Consulting for official status verification, visa renewals, and family sponsorship.</p>
          <div className="gv-validity-closing-actions">
            <a
              className="gv-validity-btn gv-validity-btn--gold"
              href={`${contactInfo.whatsappHref}?text=${encodeURIComponent('Hello, I need assistance checking my UAE visa status and renewal options.')}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
            <a className="gv-validity-closing-phone" href={contactInfo.phoneHref}>
              <Phone size={15} /> Call {contactInfo.phone}
            </a>
          </div>
        </section>
      </div>

      {/* ── 7. INTERACTIVE WIZARD MODAL ───────────────────────── */}
      {modalOpen && (
        <div className="gv-validity-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleCloseModal(); }}>
          <div className="gv-validity-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <header className="gv-validity-modal-header">
              <div>
                <span className="gv-validity-modal-subtitle">VISA STATUS CHECK</span>
                <h3 id="modal-title">STEP {modalStep} OF 5</h3>
              </div>
              <button className="gv-validity-modal-close" type="button" onClick={handleCloseModal} aria-label="Close modal">
                <X size={20} />
              </button>
            </header>

            {/* Progress Bar */}
            <div className="gv-validity-modal-progress">
              <div style={{ width: `${(modalStep / 5) * 100}%` }} />
            </div>

            <div className="gv-validity-modal-body">
              {/* STEP 1: Passport Number */}
              {modalStep === 1 && (
                <div className="gv-validity-modal-step">
                  <div className="gv-validity-modal-icon"><CreditCard size={28} /></div>
                  <h4>What's your passport number?</h4>
                  <p>Enter it exactly as printed on your passport — letters and numbers only.</p>
                  <div className="gv-validity-input-wrap">
                    <input
                      type="text"
                      placeholder="e.g. A1234567"
                      value={passportNumber}
                      onChange={(e) => setPassportNumber(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <button
                    className="gv-validity-btn gv-validity-btn--gold"
                    type="button"
                    onClick={() => setModalStep(2)}
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {/* STEP 2: Nationality */}
              {modalStep === 2 && (
                <div className="gv-validity-modal-step">
                  <div className="gv-validity-modal-icon"><Globe size={28} /></div>
                  <h4>Select your passport nationality</h4>
                  <p>Choose the issuing country of your passport.</p>
                  <div className="gv-validity-select-wrap">
                    <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                      {nationalities.map((nat) => (
                        <option key={nat} value={nat}>{nat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="gv-validity-modal-actions">
                    <button className="gv-validity-btn gv-validity-btn--ghost" type="button" onClick={() => setModalStep(1)}>
                      Back
                    </button>
                    <button className="gv-validity-btn gv-validity-btn--gold" type="button" onClick={() => setModalStep(3)}>
                      Continue <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Emirate */}
              {modalStep === 3 && (
                <div className="gv-validity-modal-step">
                  <div className="gv-validity-modal-icon"><MapPin size={28} /></div>
                  <h4>Which emirate issued your visa?</h4>
                  <p>Dubai visas use GDRFA; other emirates use ICP Smart Services.</p>
                  <div className="gv-validity-options-grid">
                    <button
                      type="button"
                      className={`gv-validity-option-card ${emirate === 'dubai' ? 'is-selected' : ''}`}
                      onClick={() => setEmirate('dubai')}
                    >
                      <strong>Dubai (GDRFA)</strong>
                      <small>Issued in Dubai emirate</small>
                    </button>
                    <button
                      type="button"
                      className={`gv-validity-option-card ${emirate === 'other' ? 'is-selected' : ''}`}
                      onClick={() => setEmirate('other')}
                    >
                      <strong>Other Emirate (ICP)</strong>
                      <small>Abu Dhabi, Sharjah, Ajman, RAK, UAQ, Fujairah</small>
                    </button>
                  </div>
                  <div className="gv-validity-modal-actions">
                    <button className="gv-validity-btn gv-validity-btn--ghost" type="button" onClick={() => setModalStep(2)}>
                      Back
                    </button>
                    <button className="gv-validity-btn gv-validity-btn--gold" type="button" onClick={() => setModalStep(4)}>
                      Continue <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Visa Type */}
              {modalStep === 4 && (
                <div className="gv-validity-modal-step">
                  <div className="gv-validity-modal-icon"><FileCheck size={28} /></div>
                  <h4>Select your visa type</h4>
                  <p>Choose the category of visa you wish to verify.</p>
                  <div className="gv-validity-options-grid">
                    <button
                      type="button"
                      className={`gv-validity-option-card ${visaType === 'residence' ? 'is-selected' : ''}`}
                      onClick={() => setVisaType('residence')}
                    >
                      <strong>Residence Visa</strong>
                      <small>Employment, partner, or family visa</small>
                    </button>
                    <button
                      type="button"
                      className={`gv-validity-option-card ${visaType === 'visit' ? 'is-selected' : ''}`}
                      onClick={() => setVisaType('visit')}
                    >
                      <strong>Visit / Tourist Visa</strong>
                      <small>Entry permit or tourist visa</small>
                    </button>
                    <button
                      type="button"
                      className={`gv-validity-option-card ${visaType === 'golden' ? 'is-selected' : ''}`}
                      onClick={() => setVisaType('golden')}
                    >
                      <strong>Golden Visa</strong>
                      <small>10-year investor/professional residency</small>
                    </button>
                  </div>
                  <div className="gv-validity-modal-actions">
                    <button className="gv-validity-btn gv-validity-btn--ghost" type="button" onClick={() => setModalStep(3)}>
                      Back
                    </button>
                    <button className="gv-validity-btn gv-validity-btn--gold" type="button" onClick={() => setModalStep(5)}>
                      View Results & Official Link <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: Results & Direct Link */}
              {modalStep === 5 && (
                <div className="gv-validity-modal-step">
                  <div className="gv-validity-modal-icon gv-validity-modal-icon--success"><CheckCircle2 size={32} /></div>
                  <h4>Your Status Verification Guide</h4>
                  <p className="gv-validity-modal-summary">
                    Passport: <strong>{passportNumber || 'N/A'}</strong> · Nationality: <strong>{nationality}</strong> · Emirate: <strong>{emirate === 'dubai' ? 'Dubai (GDRFA)' : 'Federal (ICP)'}</strong>
                  </p>

                  <div className="gv-validity-result-box">
                    <h5>Official Portal Instructions</h5>
                    <ol>
                      <li>Click the button below to open the official {emirate === 'dubai' ? 'GDRFA Dubai' : 'ICP Smart Services'} portal.</li>
                      <li>Select <strong>Passport Information</strong> / <strong>File Validity</strong>.</li>
                      <li>Enter Passport Number (<code>{passportNumber || 'Your Passport #'}</code>) and Select <strong>{nationality}</strong>.</li>
                      <li>Click Search to view your official visa expiry & status.</li>
                    </ol>
                  </div>

                  <div className="gv-validity-modal-final-actions">
                    <a
                      className="gv-validity-btn gv-validity-btn--gold"
                      href={getOfficialPortalLink()}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Official {emirate === 'dubai' ? 'GDRFA' : 'ICP'} Portal <ExternalLink size={16} />
                    </a>
                    <a
                      className="gv-validity-btn gv-validity-btn--ghost"
                      href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(whatsappCheckMsg)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageSquare size={16} /> Verify on WhatsApp with PRO Desk
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function VisaValidityCheckerPageContentWithFrame() {
  return (
    <StandalonePageFrame currentView="service" showMobileStickyBar={false}>
      <VisaValidityCheckerPageContent />
    </StandalonePageFrame>
  );
}
