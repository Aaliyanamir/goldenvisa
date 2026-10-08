'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, ShieldCheck, X } from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';
import { calculateIloeEstimate } from './iloeCalculatorMath';

type Props = { open: boolean; onClose: () => void; onBackToHub?: () => void };

const salaryPresets = [5000, 8000, 12000, 16000, 20000, 30000];
const money = (amount: number) => `AED ${Math.round(amount).toLocaleString('en-AE')}`;

export function IloeCalculator({ open, onClose, onBackToHub }: Props) {
  const [salary, setSalary] = useState('');
  const [subscriptionMonths, setSubscriptionMonths] = useState('');
  const [jobLossType, setJobLossType] = useState('');
  const [daysSinceLastDay, setDaysSinceLastDay] = useState('');
  const [missedSubscription, setMissedSubscription] = useState(false);
  const [latePremium, setLatePremium] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href]');
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

  const estimate = useMemo(() => calculateIloeEstimate({
    salary,
    subscriptionMonths,
    jobLossType,
    daysSinceLastDay,
    missedSubscription,
    latePremium,
  }), [daysSinceLastDay, jobLossType, latePremium, missedSubscription, salary, subscriptionMonths]);
  const salaryInvalid = salary.trim() !== '' && (!estimate.hasSalary || estimate.monthlySalary > 1_000_000);
  const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent([
    'Hello, I need help reviewing my ILOE insurance estimate.',
    estimate.hasSalary && !salaryInvalid ? `Average monthly basic salary: ${money(estimate.monthlySalary)}` : '',
    subscriptionMonths ? `Subscription months: ${subscriptionMonths}` : '',
    jobLossType ? `Employment ended: ${jobLossType}` : '',
    daysSinceLastDay ? `Days since last working day: ${daysSinceLastDay}` : '',
    `Illustrative selected penalty total: ${money(estimate.fineEstimate)}`,
    'Please confirm current policy conditions and any actual fine on the official ILOE portal.',
  ].filter(Boolean).join('\n'))}`;

  if (!open) return null;

  return (
    <div className="gv-family-calculator-overlay" onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="gv-family-calculator-dialog" role="dialog" aria-modal="true" aria-labelledby="gv-iloe-calculator-title" tabIndex={-1} ref={dialogRef}>
        <header className="gv-family-calculator-header">
          <div>
            <span className="gv-family-calculator-brand">UAE INSURANCE · ILOE</span>
            <h2 id="gv-iloe-calculator-title">ILOE benefit & fine estimator</h2>
          </div>
          <div className="gv-family-calculator-header-actions">
            {onBackToHub && <button className="gv-family-calculator-change" type="button" onClick={onBackToHub}><ArrowLeft size={14} /> All calculators</button>}
            <button className="gv-family-calculator-close" type="button" onClick={close} aria-label="Close ILOE estimator"><X size={19} /></button>
          </div>
        </header>

        <section className="gv-family-calculator-content">
          <div className="gv-family-calculator-intro">
            <h3>Estimate a possible claim and review common conditions</h3>
            <p>Calculations are illustrative only. The insurer confirms policy terms, eligibility, exclusions, actual penalties and payment records.</p>
          </div>

          <div className="gv-family-calculator-service-fields">
            <label htmlFor="gv-iloe-modal-salary">Average monthly basic salary over the last six months (AED)
              <input id="gv-iloe-modal-salary" type="number" min="1" max="1000000" inputMode="decimal" aria-invalid={salaryInvalid} value={salary} onChange={(event) => setSalary(event.target.value)} placeholder="e.g. 12,000" />
            </label>
            {salaryInvalid && <p className="gv-family-calculator-service-validation">Enter a salary greater than AED 0 and no more than AED 1,000,000.</p>}
            <div className="gv-iloe-presets" aria-label="Salary examples">
              {salaryPresets.map((amount) => (
                <button key={amount} type="button" aria-pressed={salary === String(amount)} onClick={() => setSalary(String(amount))}>
                  {amount.toLocaleString('en-AE')}
                </button>
              ))}
            </div>
          </div>

          <div className="gv-family-calculator-service-assessment gv-iloe-modal-benefit" aria-live="polite">
            <ShieldCheck size={18} />
            {estimate.hasSalary && !salaryInvalid ? (
              <div>
                <strong>Indicative monthly benefit: {money(estimate.monthlyBenefit)}</strong>
                <p>Up to three months · maximum estimate {money(estimate.maxBenefit)} · {estimate.categoryA ? 'Category A / 1' : 'Category B / 2'} · monthly cap {money(estimate.monthlyCap)}.</p>
                <p>Guide rate: 60% of average basic salary. This is not a claim approval or payment promise.</p>
              </div>
            ) : <p>Enter a valid basic salary to see the illustrative 60% benefit estimate.</p>}
          </div>

          <div className="gv-family-calculator-service-fields gv-iloe-modal-eligibility">
            <h4>Preliminary condition check</h4>
            <label htmlFor="gv-iloe-modal-months">Consecutive subscription months
              <input id="gv-iloe-modal-months" type="number" min="0" max="600" value={subscriptionMonths} onChange={(event) => setSubscriptionMonths(event.target.value)} placeholder="e.g. 14" />
            </label>
            <label htmlFor="gv-iloe-modal-job-loss">How did employment end?
              <select id="gv-iloe-modal-job-loss" value={jobLossType} onChange={(event) => setJobLossType(event.target.value)}>
                <option value="">Select an option</option>
                <option value="involuntary">Involuntary job loss</option>
                <option value="resignation">Resignation</option>
                <option value="cause">Dismissal for cause</option>
                <option value="unsure">Not sure</option>
              </select>
            </label>
            <label htmlFor="gv-iloe-modal-days">Days since last working day
              <input id="gv-iloe-modal-days" type="number" min="0" max="9999" value={daysSinceLastDay} onChange={(event) => setDaysSinceLastDay(event.target.value)} placeholder="e.g. 10" />
            </label>
          </div>

          <div className="gv-family-calculator-service-assessment" aria-live="polite">
            <ShieldCheck size={18} />
            <p>{!estimate.eligibilityReady
              ? 'Common guidance usually refers to at least 12 consecutive months, qualifying involuntary job loss and applying within 30 days.'
              : estimate.appearsEligible
                ? 'Common conditions appear aligned. Confirm policy terms, exclusions and claim evidence directly with the insurer.'
                : 'One or more common conditions may not be met. Check your policy and official claim rules; the insurer determines eligibility.'}</p>
          </div>

          <fieldset className="gv-iloe-modal-fines">
            <legend>Illustrative fine triggers · select any that apply</legend>
            <label><input type="checkbox" checked={missedSubscription} onChange={(event) => setMissedSubscription(event.target.checked)} /><span>Subscription missed by deadline <strong>+ AED 400</strong></span></label>
            <label><input type="checkbox" checked={latePremium} onChange={(event) => setLatePremium(event.target.checked)} /><span>Premium unpaid for over three months <strong>+ AED 200</strong></span></label>
            <output><span>Illustrative selected total</span><strong>{money(estimate.fineEstimate)}</strong></output>
            <small>Not a live balance; verify actual penalties on the official portal.</small>
          </fieldset>

          <div className="gv-family-calculator-official-links">
            <a href="https://www.iloe.ae/" target="_blank" rel="noreferrer">Open official ILOE portal <ArrowUpRight size={14} /></a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">Ask for help reviewing this estimate <ArrowUpRight size={14} /></a>
          </div>
          <div className="gv-family-calculator-disclaimer"><ShieldCheck size={15} /><p>This calculator does not access policy records or check a live fine. Do not send passwords, OTPs or Emirates ID details.</p></div>
        </section>
      </div>
    </div>
  );
}
