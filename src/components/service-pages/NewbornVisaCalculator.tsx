'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  BriefcaseBusiness,
  Check,
  Landmark,
  Share2,
  Sparkles,
  X,
} from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';
import { emiratesIdFees } from './FamilyVisaCalculator';

type SponsorType = 'employee' | 'investor' | 'golden';
type CertificateLanguage = 'arabic' | 'arabicEnglish';
type CalculatorStep = 'sponsor' | 'certificate' | 'result';

const sponsorOptions = [
  { id: 'employee', label: '2-Year Employee Visa', subtitle: 'Standard employment visa holder', icon: BriefcaseBusiness },
  { id: 'investor', label: '2-Year Partner / Investor Visa', subtitle: 'Partner / investor / property owner', icon: Landmark },
  { id: 'golden', label: 'Golden Visa', subtitle: '10-year Golden Visa holder', icon: Sparkles },
] as const;

const certificateOptions = [
  { id: 'arabic', label: 'Arabic Only', subtitle: 'Mandatory Arabic birth certificate' },
  { id: 'arabicEnglish', label: 'Arabic + English', subtitle: 'Adds the English birth certificate fee' },
] as const;

const formatAed = (amount: number) => `AED ${new Intl.NumberFormat('en-AE').format(amount)}`;

export function NewbornVisaCalculator({ open, onClose, onBackToHub }: { open: boolean; onClose: () => void; onBackToHub?: () => void }) {
  const [step, setStep] = useState<CalculatorStep>('sponsor');
  const [sponsor, setSponsor] = useState<SponsorType>('employee');
  const [certificate, setCertificate] = useState<CertificateLanguage>('arabic');
  const [notice, setNotice] = useState('');
  const dialogRef = useRef<HTMLElement>(null);

  const close = useCallback(() => {
    setStep('sponsor');
    setSponsor('employee');
    setCertificate('arabic');
    setNotice('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [close, open]);

  const selectedSponsor = sponsorOptions.find((option) => option.id === sponsor);
  const selectedCertificate = certificateOptions.find((option) => option.id === certificate);

  const estimate = useMemo(() => {
    const sponsorDuration = sponsor === 'golden' ? 10 : 2;
    const idFee = emiratesIdFees[sponsorDuration];
    const birthCertificateRows = [
      { label: 'Birth Certificate — Arabic', amount: 70 },
      ...(certificate === 'arabicEnglish' ? [{ label: 'Birth Certificate — English', amount: 50 }] : []),
      { label: 'Birth Certificate Delivery', amount: 20 },
    ];
    const birthCertificateTotal = birthCertificateRows.reduce((total, row) => total + row.amount, 0);
    const mofaRows = [
      { label: 'MOFA Attestation', amount: 150 },
      { label: 'MOFA Delivery', amount: 25 },
    ];
    const mofaTotal = mofaRows.reduce((total, row) => total + row.amount, 0);
    const residencyRows = [
      { label: `Emirates ID — ${sponsorDuration} Years`, amount: idFee },
      { label: 'Visa Stamping', amount: 410 },
    ];
    const residencyTotal = residencyRows.reduce((total, row) => total + row.amount, 0);
    const total = birthCertificateTotal + mofaTotal + residencyTotal;

    if (birthCertificateTotal !== (certificate === 'arabic' ? 90 : 140) || mofaTotal !== 175 || residencyTotal !== idFee + 410) {
      throw new Error('Newborn visa fee breakdown does not match its itemized charges.');
    }

    return {
      birthCertificateRows,
      birthCertificateTotal,
      mofaRows,
      mofaTotal,
      passportTotal: null,
      residencyRows,
      residencyTotal,
      total,
    };
  }, [certificate, sponsor]);

  const shareMessage = [
    'Newborn visa fee estimate',
    `Sponsor visa: ${selectedSponsor?.label ?? '2-Year Employee Visa'}`,
    `Birth certificate: ${selectedCertificate?.label ?? 'Arabic Only'}`,
    `Birth certificate: ${formatAed(estimate.birthCertificateTotal)}`,
    `MOFA attestation: ${formatAed(estimate.mofaTotal)}`,
    'Baby passport issuance: Not included; fees depend on nationality and consulate',
    `Residency issuance: ${formatAed(estimate.residencyTotal)}`,
    `Total estimated government fees: ${formatAed(estimate.total)}`,
    'Estimate only. Confirm current fees with the relevant authorities.',
  ].join('\n');

  const shareEstimate = async () => {
    setNotice('');
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Newborn visa fee estimate', text: shareMessage });
        return;
      }
      if (!navigator.clipboard) throw new Error('Sharing and clipboard are not available in this browser.');
      await navigator.clipboard.writeText(shareMessage);
      setNotice('Estimate copied. You can paste it into a message.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setNotice(error instanceof Error ? error.message : 'Could not share the estimate. Please try again.');
    }
  };

  const recalculate = () => {
    setStep('sponsor');
    setSponsor('employee');
    setCertificate('arabic');
    setNotice('');
  };

  if (!open) return null;

  const stepProgress = step === 'sponsor' ? 1 : step === 'certificate' ? 2 : 3;
  const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent(shareMessage)}`;

  return (
    <div
      className="gv-newborn-calculator-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section className="gv-newborn-calculator" role="dialog" aria-modal="true" aria-labelledby="gv-newborn-calculator-title" tabIndex={-1} ref={dialogRef}>
        <header className="gv-newborn-calculator-header">
          <span className="gv-newborn-calculator-handle" aria-hidden="true" />
          {onBackToHub && <button type="button" className="gv-newborn-calculator-hub" onClick={onBackToHub}><ArrowLeft size={15} /><span>All calculators</span></button>}
          <div className="gv-newborn-calculator-brand"><strong>FamilyVisa</strong><b>.ae</b></div>
          <button type="button" onClick={close} aria-label="Close newborn cost calculator"><X size={22} /></button>
          {step !== 'result' && (
            <div className="gv-newborn-calculator-progress" aria-label={`Step ${stepProgress} of 2`}>
              <span style={{ width: `${stepProgress * 50}%` }} />
            </div>
          )}
        </header>

        {step === 'sponsor' && (
          <div className="gv-newborn-calculator-body">
            <h2 id="gv-newborn-calculator-title">What is the sponsor&apos;s visa type?</h2>
            <p>The Emirates ID and visa stamping fees depend on the parent&apos;s (sponsor&apos;s) visa type.</p>
            <div className="gv-newborn-calculator-options">
              {sponsorOptions.map(({ id, label, subtitle, icon: Icon }) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => {
                    setSponsor(id);
                    setStep('certificate');
                  }}
                >
                  <span className="gv-newborn-calculator-option-icon"><Icon size={20} /></span>
                  <span className="gv-newborn-calculator-option-copy"><strong>{label}</strong><small>{subtitle}</small></span>
                  <span className="gv-newborn-calculator-radio" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'certificate' && (
          <div className="gv-newborn-calculator-body">
            <div className="gv-newborn-calculator-step-nav">
              <button type="button" onClick={() => setStep('sponsor')} aria-label="Back to sponsor visa type"><ArrowLeft size={19} /></button>
              <span>Step 2 of 2</span>
            </div>
            <h2 id="gv-newborn-calculator-title">Birth certificate — Arabic only or with English?</h2>
            <p>The Arabic birth certificate is mandatory. English is optional and adds an extra fee.</p>
            <div className="gv-newborn-calculator-options">
              {certificateOptions.map(({ id, label, subtitle }) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => {
                    setCertificate(id);
                    setNotice('');
                    setStep('result');
                  }}
                >
                  <span className="gv-newborn-calculator-option-icon"><Check size={20} /></span>
                  <span className="gv-newborn-calculator-option-copy"><strong>{label}</strong><small>{subtitle}</small></span>
                  <span className="gv-newborn-calculator-radio" aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="gv-newborn-calculator-result">
            <div className="gv-newborn-calculator-step-nav">
              <button type="button" onClick={() => setStep('certificate')} aria-label="Back to birth certificate selection"><ArrowLeft size={19} /></button>
              <span>Fee breakdown</span>
            </div>
            <div className="gv-newborn-calculator-sponsor-note"><Baby size={16} /> {selectedSponsor?.label}</div>
            <h2 id="gv-newborn-calculator-title">Visa fees breakdown</h2>

            <div className="gv-newborn-calculator-fee-groups">
              <FeeGroup title="Birth Certificate" amount={estimate.birthCertificateTotal} rows={estimate.birthCertificateRows} icon="▤" />
              <FeeGroup title="MOFA Attestation" amount={estimate.mofaTotal} rows={estimate.mofaRows} icon="▧" />
              <FeeGroup
                title="Baby Passport Issuance"
                amount={estimate.passportTotal}
                note="Baby passport issuance is not included. Fees and requirements vary by nationality. Please check with your country's consulate or embassy."
                icon="◉"
              />
              <FeeGroup title="Residency Issuance" amount={estimate.residencyTotal} rows={estimate.residencyRows} icon="▣" />
            </div>

            <div className="gv-newborn-calculator-total"><span>Total government fees</span><strong>{formatAed(estimate.total)}</strong></div>

            <div className="gv-newborn-calculator-actions">
              <button type="button" onClick={recalculate}><ArrowLeft size={16} /> Recalculate</button>
              <a href={whatsappHref} target="_blank" rel="noreferrer"><span aria-hidden="true">◉</span> WhatsApp</a>
              <button type="button" onClick={shareEstimate}><Share2 size={16} /> Share</button>
            </div>
            {notice && <p className="gv-newborn-calculator-notice" role="status">{notice}</p>}
            <p className="gv-newborn-calculator-disclaimer">This estimate is for information only. For the actual price, please contact us. Passport fees are excluded; service charges, insurance and any fines are not included.</p>
            <button className="gv-newborn-calculator-done" type="button" onClick={close}>Done <ArrowRight size={16} /></button>
          </div>
        )}
      </section>
    </div>
  );
}

function FeeGroup({
  title,
  amount,
  rows,
  note,
  icon,
}: {
  title: string;
  amount: number | null;
  rows?: Array<{ label: string; amount: number }>;
  note?: string;
  icon: string;
}) {
  return (
    <section className="gv-newborn-calculator-fee-group">
      <header>
        <span className="gv-newborn-calculator-fee-icon" aria-hidden="true">{icon}</span>
        <h3>{title}</h3>
        <strong>{amount === null ? 'Not applicable' : formatAed(amount)}</strong>
      </header>
      {rows?.map((row) => (
        <div className="gv-newborn-calculator-fee-row" key={row.label}>
          <span>{row.label}</span><strong>{formatAed(row.amount)}</strong>
        </div>
      ))}
      {note && <p>{note}</p>}
    </section>
  );
}
