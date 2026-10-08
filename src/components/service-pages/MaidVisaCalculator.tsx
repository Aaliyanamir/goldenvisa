'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  CircleHelp,
  ClipboardCheck,
  FileCheck2,
  HeartHandshake,
  House,
  Landmark,
  RotateCcw,
  Share2,
  ShieldCheck,
  UserRound,
  Users,
  X,
} from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';

type MaidRequest = 'new' | 'renewal' | 'cancellation' | 'eligibility';
type Emirate = 'Dubai' | 'Abu Dhabi' | 'Sharjah' | 'Ajman' | 'Umm Al Quwain' | 'Ras Al Khaimah' | 'Fujairah';
type SponsorProfile = 'UAE / GCC national' | 'UAE resident expatriate' | 'Not sure';
type HouseholdStatus = 'Single' | 'Married' | 'Not sure';
type BooleanAnswer = 'yes' | 'no' | 'unsure';
type WorkerRoute = 'inside' | 'outside' | 'currently sponsored';
type FeeKind = 'charge' | 'deposit' | 'refund';
type FeeLine = { id: string; label: string; detail: string; kind: FeeKind };

type Props = { open: boolean; onClose: () => void; onBackToHub?: () => void };

const requestOptions: Array<{ id: MaidRequest; label: string; detail: string; icon: typeof BriefcaseBusiness }> = [
  { id: 'new', label: 'New sponsorship', detail: 'Start a domestic worker sponsorship file', icon: BriefcaseBusiness },
  { id: 'renewal', label: 'Renewal', detail: 'Renew an existing worker permit and residence', icon: RotateCcw },
  { id: 'cancellation', label: 'Cancellation', detail: 'Close a current sponsorship / residence file', icon: FileCheck2 },
  { id: 'eligibility', label: 'Eligibility review', detail: 'Check which sponsorship route may apply', icon: CircleHelp },
];

const emirates: Emirate[] = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Umm Al Quwain', 'Ras Al Khaimah', 'Fujairah'];

const feeLines: Record<Exclude<MaidRequest, 'eligibility'>, FeeLine[]> = {
  new: [
    { id: 'permit', label: 'Entry permit / status change', detail: 'Government immigration charge; route depends on whether the worker is inside or outside the UAE.', kind: 'charge' },
    { id: 'labour', label: 'Work permit, contract & approval', detail: 'Authorized-channel labour / contract approval charges, if quoted for this route.', kind: 'charge' },
    { id: 'medical', label: 'Medical fitness', detail: 'Medical screening charge quoted by the authorized centre.', kind: 'charge' },
    { id: 'emiratesId', label: 'Emirates ID', detail: 'Worker ID application charge for the quoted visa duration.', kind: 'charge' },
    { id: 'insurance', label: 'Health insurance', detail: 'Policy premium for the worker, when required for the selected route.', kind: 'charge' },
    { id: 'service', label: 'Typing / service-centre charges', detail: 'Authorized centre processing or service fee.', kind: 'charge' },
    { id: 'recruitment', label: 'Recruitment / approved-channel package', detail: 'Enter only if this is part of your written quotation.', kind: 'charge' },
    { id: 'deposit', label: 'Refundable deposit / guarantee', detail: 'Show separately; confirm the amount, receipt and refund conditions in writing.', kind: 'deposit' },
  ],
  renewal: [
    { id: 'permit', label: 'Work permit & residence renewal', detail: 'Government renewal charges shown in the current written quotation.', kind: 'charge' },
    { id: 'labour', label: 'Contract / labour approval', detail: 'Authorized-channel contract or approval charges, if quoted.', kind: 'charge' },
    { id: 'medical', label: 'Medical fitness', detail: 'Enter only if screening applies to this worker and route.', kind: 'charge' },
    { id: 'emiratesId', label: 'Emirates ID renewal', detail: 'Worker ID renewal charge for the quoted visa duration.', kind: 'charge' },
    { id: 'insurance', label: 'Health insurance renewal', detail: 'Policy premium for the worker, when required.', kind: 'charge' },
    { id: 'service', label: 'Typing / service-centre charges', detail: 'Authorized centre processing or service fee.', kind: 'charge' },
    { id: 'fines', label: 'Fines / outstanding dues', detail: 'Enter only an amount confirmed by the relevant authority or provider.', kind: 'charge' },
    { id: 'deposit', label: 'Additional refundable deposit', detail: 'Enter only if a new or additional deposit is confirmed for this renewal.', kind: 'deposit' },
  ],
  cancellation: [
    { id: 'cancellation', label: 'Permit / residence cancellation', detail: 'Government cancellation charge confirmed for this file.', kind: 'charge' },
    { id: 'service', label: 'Typing / service-centre charges', detail: 'Authorized centre processing or service fee.', kind: 'charge' },
    { id: 'dues', label: 'Confirmed fines or settlement dues', detail: 'Include only amounts confirmed for this worker and case.', kind: 'charge' },
    { id: 'refund', label: 'Refundable deposit expected back', detail: 'A potential credit only; confirm refund eligibility, timing and amount with the provider.', kind: 'refund' },
  ],
};

const workflow: Record<MaidRequest, Array<{ title: string; detail: string }>> = {
  new: [
    { title: 'Check sponsor and worker route', detail: 'An authorized centre checks sponsor category, household information, emirate and worker documents against current rules.' },
    { title: 'Confirm written quote and contract', detail: 'Confirm the permitted channel, itemized charges, any refundable deposit, contract and worker protections before payment or travel.' },
    { title: 'Apply for entry permit or status change', detail: 'Use the route confirmed for a worker outside the UAE or already in the country. A visit visa is not permission to work.' },
    { title: 'Complete required medical, ID and insurance steps', detail: 'Follow the appointment and insurance instructions provided for the case and emirate.' },
    { title: 'Finalize approvals and residence', detail: 'Complete the confirmed permit and residence steps; keep receipts, contract copies and renewal dates.' },
  ],
  renewal: [
    { title: 'Check expiry dates and current file', detail: 'Review the worker passport, residence, work permit, contract and any authority notices before expiry.' },
    { title: 'Confirm renewal route and charges', detail: 'Ask the authorized centre to verify the emirate-specific requirements and itemized government / service fees.' },
    { title: 'Complete any required screening or insurance', detail: 'Renew insurance and attend a medical appointment only when the case instructions require it.' },
    { title: 'Submit renewal and retain proof', detail: 'Complete the contract, permit, ID and residence steps through the confirmed channel and keep application receipts.' },
  ],
  cancellation: [
    { title: 'Confirm who must approve the cancellation', detail: 'Check the sponsor, worker, contract and issuing authority requirements before submitting a closure request.' },
    { title: 'Settle documented obligations', detail: 'Confirm any salary, ticket, fine or other contractual / legal obligations with the responsible parties.' },
    { title: 'Submit permit and residence cancellation', detail: 'Follow the authorized channel, confirm any grace period and retain cancellation confirmation.' },
    { title: 'Ask about deposit return and next status', detail: 'Get written deposit refund instructions and clarify the worker’s lawful next status or departure arrangements.' },
  ],
  eligibility: [
    { title: 'Identify sponsor category and emirate', detail: 'The current route can depend on whether the sponsor is a UAE / GCC national or resident expatriate and the file’s emirate.' },
    { title: 'Prepare household and income details', detail: 'Share income evidence, accommodation and relevant family-status information only through the authorized review channel.' },
    { title: 'Check worker documents and status', detail: 'Prepare the worker passport, current UAE status and the intended domestic-worker arrangement.' },
    { title: 'Obtain an authorized route decision', detail: 'Only the relevant authority or authorized centre can confirm eligibility, required documents and current charges.' },
  ],
};

function money(amount: number) {
  return `AED ${new Intl.NumberFormat('en-AE', { maximumFractionDigits: 2 }).format(amount)}`;
}

function parseAmount(value: string) {
  if (value.trim() === '') return null;
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : null;
}

function makeQuoteMessage(values: {
  request: MaidRequest;
  emirate: Emirate;
  sponsorProfile: SponsorProfile;
  householdStatus: HouseholdStatus;
  monthlyIncome: string;
  accommodation: BooleanAnswer;
  workerRoute: WorkerRoute;
  amounts: Record<string, string>;
  notApplicable: string[];
  total: number;
  deposits: number;
  refunds: number;
  incomplete: number;
}) {
  const lines = feeLines[values.request as Exclude<MaidRequest, 'eligibility'>] ?? [];
  const income = parseAmount(values.monthlyIncome);
  return [
    `Hello, I need a maid / domestic-worker visa ${values.request === 'eligibility' ? 'eligibility review' : values.request}.`,
    `Emirate: ${values.emirate}`,
    `Sponsor category: ${values.sponsorProfile}`,
    income !== null ? `Monthly household income shared for review: ${money(income)}` : '',
    `Family / marital status: ${values.householdStatus}`,
    `Accommodation provided: ${values.accommodation === 'yes' ? 'Yes' : values.accommodation === 'no' ? 'No' : 'Not sure'}`,
    `Worker situation: ${values.workerRoute === 'inside' ? 'Inside the UAE' : values.workerRoute === 'outside' ? 'Outside the UAE' : 'Currently sponsored / employed'}`,
    values.request === 'eligibility' ? 'Please confirm the permitted route, eligibility requirements and current itemized charges.' : '',
    ...lines.map((line) => {
      const amount = parseAmount(values.amounts[line.id] ?? '');
      return values.notApplicable.includes(line.id)
        ? `${line.label}: Not applicable`
        : amount === null
          ? `${line.label}: Not quoted yet`
          : `${line.label}: ${money(amount)}`;
    }),
    values.request === 'eligibility' ? '' : `Entered charges subtotal: ${money(values.total)}`,
    values.deposits > 0 ? `Refundable deposit amount included separately: ${money(values.deposits)}` : '',
    values.refunds > 0 ? `Potential deposit refund (not deducted): ${money(values.refunds)}` : '',
    values.incomplete > 0 ? `Unpriced items: ${values.incomplete} — subtotal is partial, not a final total.` : '',
    'Please confirm eligibility, current government fees, service charges and deposit terms in writing.',
  ].filter(Boolean).join('\n');
}

export function MaidVisaCalculator({ open, onClose, onBackToHub }: Props) {
  const [step, setStep] = useState(0);
  const [request, setRequest] = useState<MaidRequest>('new');
  const [emirate, setEmirate] = useState<Emirate>('Dubai');
  const [sponsorProfile, setSponsorProfile] = useState<SponsorProfile>('UAE resident expatriate');
  const [householdStatus, setHouseholdStatus] = useState<HouseholdStatus>('Not sure');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [accommodation, setAccommodation] = useState<BooleanAnswer>('unsure');
  const [workerRoute, setWorkerRoute] = useState<WorkerRoute>('outside');
  const [amounts, setAmounts] = useState<Record<string, string>>({});
  const [notApplicable, setNotApplicable] = useState<string[]>([]);
  const [notice, setNotice] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const handleKeyDown = (event: KeyboardEvent) => {
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
    document.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [close, open]);

  const currentLines = useMemo(() => request === 'eligibility' ? [] : feeLines[request], [request]);
  const estimate = useMemo(() => {
    let charges = 0;
    let deposits = 0;
    let refunds = 0;
    let incomplete = 0;
    let invalid = 0;

    for (const line of currentLines) {
      if (notApplicable.includes(line.id)) continue;
      const raw = amounts[line.id] ?? '';
      if (raw.trim() === '') {
        incomplete += 1;
        continue;
      }
      const amount = parseAmount(raw);
      if (amount === null) {
        invalid += 1;
        continue;
      }
      if (line.kind === 'deposit') deposits += amount;
      else if (line.kind === 'refund') refunds += amount;
      else charges += amount;
    }

    return { charges, deposits, refunds, fundsNeeded: charges + deposits, incomplete, invalid };
  }, [amounts, currentLines, notApplicable]);

  const workerStatusLabel = workerRoute === 'inside'
    ? 'Inside the UAE'
    : workerRoute === 'outside'
      ? 'Outside the UAE'
      : 'Currently sponsored / employed';
  const monthlyIncomeInvalid = monthlyIncome.trim() !== '' && parseAmount(monthlyIncome) === null;
  const progress = `STEP ${Math.min(step + 1, 7)} OF 7`;

  const clearEstimate = () => {
    setStep(0);
    setRequest('new');
    setEmirate('Dubai');
    setSponsorProfile('UAE resident expatriate');
    setHouseholdStatus('Not sure');
    setMonthlyIncome('');
    setAccommodation('unsure');
    setWorkerRoute('outside');
    setAmounts({});
    setNotApplicable([]);
    setNotice('');
  };

  const message = makeQuoteMessage({
    request,
    emirate,
    sponsorProfile,
    householdStatus,
    monthlyIncome,
    accommodation,
    workerRoute,
    amounts,
    notApplicable,
    total: estimate.charges,
    deposits: estimate.deposits,
    refunds: estimate.refunds,
    incomplete: estimate.incomplete + estimate.invalid,
  });
  const whatsappHref = `${contactInfo.whatsappHref}?text=${encodeURIComponent(message)}`;

  const share = async () => {
    setNotice('');
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Maid visa fee review', text: message });
        return;
      }
      if (!navigator.clipboard) throw new Error('Sharing and clipboard are not available in this browser.');
      await navigator.clipboard.writeText(message);
      setNotice('Your fee summary was copied.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setNotice(error instanceof Error ? error.message : 'Could not share the fee summary. Please try again.');
    }
  };

  if (!open) return null;

  const linesForDisplay = currentLines;
  const currentWorkflow = workflow[request];

  return (
    <div
      className="gv-maid-calculator-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <section className="gv-maid-calculator" role="dialog" aria-modal="true" aria-labelledby="gv-maid-calculator-title" tabIndex={-1} ref={dialogRef}>
        <header className="gv-maid-calculator-header">
          {onBackToHub && <button type="button" className="gv-maid-calculator-hub" onClick={onBackToHub}><ArrowLeft size={15} /> All calculators</button>}
          <div>
            <span className="gv-maid-calculator-brand">DOMESTIC WORKER · UAE</span>
            <h2 id="gv-maid-calculator-title">Maid visa planner</h2>
          </div>
          <button type="button" className="gv-maid-calculator-close" onClick={close} aria-label="Close maid visa planner"><X size={19} /></button>
        </header>

        <div className="gv-maid-calculator-progress">
          <span>{progress}</span>
          <div><span className="gv-maid-calculator-progress-fill" style={{ width: `${Math.min((step + 1) / 7 * 100, 100)}%` }} /></div>
        </div>

        {step === 0 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><ClipboardCheck size={15} />Start with your request</span>
              <h3>What do you need help with?</h3>
              <p>Choose the service so we can show the relevant route, checklist and fee items.</p>
            </div>
            <div className="gv-maid-calculator-options">
              {requestOptions.map(({ id, label, detail, icon: Icon }) => (
                <button key={id} type="button" className={request === id ? 'is-selected' : ''} aria-pressed={request === id} onClick={() => { setRequest(id); setWorkerRoute(id === 'new' ? 'outside' : 'currently sponsored'); setAmounts({}); setNotApplicable([]); setStep(1); }}>
                  <span className="gv-maid-option-icon"><Icon size={19} /></span>
                  <span><strong>{label}</strong><small>{detail}</small></span>
                  {request === id && <Check size={17} />}
                </button>
              ))}
            </div>
            <p className="gv-maid-auto-note">Choose an option to continue automatically. Your information stays in this browser until you choose to share it.</p>
          </div>
        )}

        {step === 1 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><Users size={15} />SPONSOR PROFILE</span>
              <h3>Who will sponsor the worker?</h3>
              <p>Choose the closest category. The relevant authority confirms eligibility and any applicable conditions.</p>
            </div>
            <div className="gv-maid-calculator-options">
              {([
                { id: 'UAE resident expatriate', title: 'UAE resident expatriate', detail: 'I hold a UAE residence visa' },
                { id: 'UAE / GCC national', title: 'UAE / GCC national', detail: 'I am a UAE or GCC citizen' },
                { id: 'Not sure', title: 'Not sure', detail: 'I need the sponsor category checked' },
              ] as const).map(({ id, title, detail }) => (
                <button key={id} type="button" className={sponsorProfile === id ? 'is-selected' : ''} aria-pressed={sponsorProfile === id} onClick={() => { setSponsorProfile(id); setStep(2); }}>
                  <span className="gv-maid-option-icon"><Users size={18} /></span>
                  <span><strong>{title}</strong><small>{detail}</small></span>
                  {sponsorProfile === id && <Check size={17} />}
                </button>
              ))}
            </div>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(0)}><ArrowLeft size={16} /> Back</button>
              <span>Selection advances automatically.</span>
              <span />
            </footer>
          </div>
        )}

        {step === 2 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><Landmark size={15} />FILE LOCATION</span>
              <h3>Which emirate will handle the file?</h3>
              <p>Requirements and current charges can vary by emirate. This selection helps tailor the review.</p>
            </div>
            <div className="gv-maid-emirate-grid">
              {emirates.map((item) => (
                <button key={item} type="button" className={emirate === item ? 'is-selected' : ''} aria-pressed={emirate === item} onClick={() => { setEmirate(item); setStep(3); }}>
                  <Landmark size={16} /><span>{item}</span>{emirate === item && <Check size={15} />}
                </button>
              ))}
            </div>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(1)}><ArrowLeft size={16} /> Back</button>
              <span>Choose an emirate to continue.</span>
              <span />
            </footer>
          </div>
        )}

        {step === 3 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><Users size={15} />HOUSEHOLD DETAILS</span>
              <h3>What is your family / marital status?</h3>
              <p>Some routes request household details as part of sponsor eligibility review.</p>
            </div>
            <div className="gv-maid-calculator-options">
              {(['Married', 'Single', 'Not sure'] as const).map((answer) => (
                <button key={answer} type="button" className={householdStatus === answer ? 'is-selected' : ''} aria-pressed={householdStatus === answer} onClick={() => { setHouseholdStatus(answer); setStep(4); }}>
                  <span className="gv-maid-option-icon"><Users size={18} /></span>
                  <span><strong>{answer}</strong><small>{answer === 'Not sure' ? 'I need guidance on the required evidence' : `Sponsor household status: ${answer.toLowerCase()}`}</small></span>
                  {householdStatus === answer && <Check size={17} />}
                </button>
              ))}
            </div>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(2)}><ArrowLeft size={16} /> Back</button>
              <span>Your choice advances automatically.</span>
              <span />
            </footer>
          </div>
        )}

        {step === 4 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><BadgeCheck size={15} />OPTIONAL PROFILE DETAIL</span>
              <h3>Monthly household income (AED)</h3>
              <p>Only enter the amount if you want to include it in your request. We do not compare it with a threshold or decide eligibility.</p>
            </div>
            <label className="gv-maid-income-field" htmlFor="maid-income">
              <span>Monthly amount · optional</span>
              <input id="maid-income" type="number" min="0" inputMode="decimal" aria-invalid={monthlyIncomeInvalid} aria-describedby={monthlyIncomeInvalid ? 'maid-income-error' : 'maid-income-help'} value={monthlyIncome} onChange={(event) => setMonthlyIncome(event.target.value)} onBlur={(event) => { if (!monthlyIncomeInvalid && !(event.relatedTarget instanceof HTMLButtonElement)) setStep(5); }} onKeyDown={(event) => { if (event.key === 'Enter' && !monthlyIncomeInvalid) setStep(5); }} placeholder="Enter amount or leave blank" />
              {monthlyIncomeInvalid
                ? <small id="maid-income-error" className="gv-maid-fee-error">Enter a valid non-negative amount.</small>
                : <small id="maid-income-help">Leave the field to continue automatically.</small>}
            </label>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(3)}><ArrowLeft size={16} /> Back</button>
              <span>Income is optional and is shared only if you request a quote.</span>
              <button type="button" className="is-secondary" disabled={monthlyIncomeInvalid} onClick={() => { setMonthlyIncome(''); setStep(5); }}>Skip <ArrowRight size={16} /></button>
            </footer>
          </div>
        )}

        {step === 5 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><House size={15} />ACCOMMODATION</span>
              <h3>Is suitable accommodation arranged?</h3>
              <p>Accommodation may be part of the sponsor and household review. An authority confirms the applicable conditions.</p>
            </div>
            <div className="gv-maid-calculator-options">
              {([
                { id: 'yes', title: 'Yes', detail: 'Accommodation is arranged' },
                { id: 'no', title: 'No', detail: 'Accommodation is not arranged yet' },
                { id: 'unsure', title: 'Not sure', detail: 'I need to confirm the requirement' },
              ] as const).map(({ id, title, detail }) => (
                <button key={id} type="button" className={accommodation === id ? 'is-selected' : ''} aria-pressed={accommodation === id} onClick={() => { setAccommodation(id); setStep(6); }}>
                  <span className="gv-maid-option-icon"><House size={18} /></span>
                  <span><strong>{title}</strong><small>{detail}</small></span>
                  {accommodation === id && <Check size={17} />}
                </button>
              ))}
            </div>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(4)}><ArrowLeft size={16} /> Back</button>
              <span>Your choice advances automatically.</span>
              <span />
            </footer>
          </div>
        )}

        {step === 6 && (
          <div className="gv-maid-calculator-body">
            <div className="gv-maid-calculator-intro">
              <span className="gv-maid-calculator-eyebrow"><UserRound size={15} />WORKER STATUS</span>
              <h3>Where is the worker now?</h3>
              <p>The worker’s location and current sponsorship can change the entry or status-change steps. Never allow work to start without required authorization.</p>
            </div>
            <div className="gv-maid-calculator-options">
              {([
                { id: 'outside', title: 'Outside the UAE', detail: 'Ask which entry permit and approved recruitment route applies.', icon: Landmark },
                { id: 'inside', title: 'Inside the UAE', detail: 'An authorized centre must confirm if status change is available.', icon: House },
                { id: 'currently sponsored', title: 'Currently sponsored / employed', detail: 'Use renewal or cancellation review for an existing file.', icon: HeartHandshake },
              ] as const).map(({ id, title, detail, icon: Icon }) => (
                <button key={id} type="button" className={workerRoute === id ? 'is-selected' : ''} aria-pressed={workerRoute === id} onClick={() => { setWorkerRoute(id); setStep(7); }}>
                  <span className="gv-maid-option-icon"><Icon size={19} /></span>
                  <span><strong>{title}</strong><small>{detail}</small></span>
                  {workerRoute === id && <Check size={17} />}
                </button>
              ))}
            </div>
            <div className="gv-maid-calculator-safety"><ShieldCheck size={17} /><p>Do not use a visit visa as permission to work. Confirm the lawful entry, status and contract process with the authorized channel.</p></div>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(5)}><ArrowLeft size={16} /> Back</button>
              <span>Choose a worker situation to build your plan.</span>
              <span />
            </footer>
          </div>
        )}

        {step === 7 && (
          <div className="gv-maid-calculator-result">
            <div className="gv-maid-calculator-result-head">
              <div>
                <span className="gv-maid-calculator-eyebrow"><BadgeCheck size={15} />YOUR {request === 'eligibility' ? 'ELIGIBILITY' : 'APPLICATION'} PLAN</span>
                <h3>{requestOptions.find((option) => option.id === request)?.label}</h3>
                <p>{emirate} · {sponsorProfile} · Worker {workerStatusLabel.toLowerCase()}</p>
              </div>
              <button type="button" className="is-secondary" onClick={() => setStep(0)}><RotateCcw size={15} /> Edit answers</button>
            </div>

            <section className="gv-maid-route">
              <h4><ClipboardCheck size={16} /> Your route, step by step</h4>
              <ol>
                {currentWorkflow.map((item, index) => (
                  <li key={item.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <div><strong>{item.title}</strong><small>{item.detail}</small></div>
                  </li>
                ))}
              </ol>
            </section>

            {request === 'eligibility' ? (
              <div className="gv-maid-eligibility-note">
                <ShieldCheck size={19} />
                <p>No eligibility decision or fee estimate is generated here. Share the sponsor category and current details with an authorized centre to confirm the permitted route.</p>
              </div>
            ) : (
              <section className="gv-maid-budget">
                <div className="gv-maid-budget-heading">
                  <div><span className="gv-maid-calculator-eyebrow"><Landmark size={14} />ITEMIZED BUDGET</span><h4>Enter amounts from a current quote</h4></div>
                  <p>Tariffs depend on the sponsor, emirate, worker route and current authority rules. No default rates are used.</p>
                </div>
                <div className="gv-maid-fee-list">
                  {linesForDisplay.map((line) => {
                    const isNotApplicable = notApplicable.includes(line.id);
                    const rawAmount = amounts[line.id] ?? '';
                    const invalid = rawAmount.trim() !== '' && parseAmount(rawAmount) === null;
                    return (
                      <div className={`gv-maid-fee-row${isNotApplicable ? ' is-skipped' : ''}`} key={line.id}>
                        <div>
                          <strong>{line.label}</strong>
                          <small>{line.detail}</small>
                        </div>
                        <label className="gv-maid-fee-input">
                          <span>{line.kind === 'deposit' ? 'Refundable deposit' : line.kind === 'refund' ? 'Potential refund' : 'Quoted amount'}</span>
                          <div><span>AED</span><input type="number" min="0" max="100000000" step="0.01" inputMode="decimal" aria-label={`${line.label} in AED`} disabled={isNotApplicable} value={isNotApplicable ? '' : rawAmount} onChange={(event) => setAmounts((current) => ({ ...current, [line.id]: event.target.value }))} placeholder="Not quoted" /></div>
                          {invalid && <small className="gv-maid-fee-error">Enter a valid amount of AED 0 or more.</small>}
                        </label>
                        <label className="gv-maid-not-applicable"><input type="checkbox" checked={isNotApplicable} onChange={() => { setNotApplicable((current) => isNotApplicable ? current.filter((id) => id !== line.id) : [...current, line.id]); setAmounts((current) => ({ ...current, [line.id]: '' })); }} /><span>Not applicable</span></label>
                      </div>
                    );
                  })}
                </div>

                <div className="gv-maid-budget-summary" aria-live="polite">
                  <div><span>Confirmed charges entered</span><strong>{money(estimate.charges)}</strong></div>
                  {estimate.deposits > 0 && <div><span>Refundable deposit (separate)</span><strong>{money(estimate.deposits)}</strong></div>}
                  {estimate.refunds > 0 && <div><span>Potential deposit refund · not deducted</span><strong>{money(estimate.refunds)}</strong></div>}
                  <div className="is-total"><span>{estimate.incomplete > 0 || estimate.invalid > 0 ? 'Known amount to budget for' : 'Entered charges'}</span><strong>{money(estimate.fundsNeeded)}</strong></div>
                  {estimate.incomplete > 0 || estimate.invalid > 0 ? (
                    <p>{estimate.incomplete + estimate.invalid} item(s) are still unpriced or invalid. This is a partial subtotal, not the full application cost.</p>
                  ) : (
                    <p>All listed items are priced or marked not applicable. Verify every amount against a current written quote before payment.</p>
                  )}
                </div>
              </section>
            )}

            <section className="gv-maid-documents">
              <h4><FileCheck2 size={16} />Keep these details ready</h4>
              <ul>
                <li><Check size={14} /> Sponsor passport, Emirates ID and UAE residence visa</li>
                <li><Check size={14} /> Sponsor income evidence and accommodation documents</li>
                <li><Check size={14} /> Family book or marriage certificate when relevant</li>
                <li><Check size={14} /> Worker passport, photograph and contact details</li>
                <li><Check size={14} /> Signed contract, job offer or insurance records when required</li>
                <li><Check size={14} /> Application, medical and Emirates ID references after approval</li>
              </ul>
            </section>

            <div className="gv-maid-result-actions">
              <button type="button" className="is-secondary" onClick={() => { setStep(1); setNotice(''); }}><ArrowLeft size={15} /> Edit profile</button>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="is-primary">Request official fee confirmation <ArrowRight size={15} /></a>
              <button type="button" className="is-secondary" onClick={share}><Share2 size={15} /> Share plan</button>
            </div>
            {notice && <p className="gv-maid-share-notice" role="status">{notice}</p>}
            <p className="gv-maid-disclaimer"><ShieldCheck size={14} />Private planning aid only—not an eligibility decision or official tariff. Amounts are calculated only from figures you enter. Confirm current requirements and charges with the relevant authority or authorized centre.</p>
            <footer className="gv-maid-calculator-nav">
              <button type="button" className="is-secondary" onClick={() => setStep(6)}><ArrowLeft size={15} /> Back</button>
              <span>Estimate only · no fee data is submitted by this page</span>
              <button type="button" onClick={clearEstimate}>Start over <RotateCcw size={15} /></button>
            </footer>
          </div>
        )}

      </section>
    </div>
  );
}
