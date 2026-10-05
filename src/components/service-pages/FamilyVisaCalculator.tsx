'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShieldCheck,
  X,
} from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';

type VisaCategory = 'family' | 'newborn';
export type ServiceId =
  | 'family'
  | 'golden'
  | 'property'
  | 'newborn'
  | 'maid'
  | 'emiratesId'
  | 'pro'
  | 'amer'
  | 'attestation'
  | 'translation'
  | 'poa'
  | 'wills'
  | 'dld'
  | 'revaluation'
  | 'medical'
  | 'visaValidity'
  | 'iloe';
type SponsorVisa = 'employee' | 'investor' | 'golden' | 'retirement';
type ApplicationKind = 'new' | 'renewal';
type DependentLocation = 'inside' | 'outside';
type MedicalSpeed = 'normal' | 'vip';
type CalculatorStep = 'service' | 'serviceRequest' | 'serviceDetails' | 'sponsor' | 'application' | 'location' | 'familyFile' | 'dependents' | 'medical';

const serviceOptions: Array<{ id: ServiceId; label: string; detail: string }> = [
  { id: 'family', label: 'Family Visa', detail: 'Spouse, child, parent or dependent' },
  { id: 'golden', label: 'Golden Visa', detail: 'Property, professional, founder or student route' },
  { id: 'property', label: 'Property Visa', detail: '2-year investor, retirement or Golden route' },
  { id: 'newborn', label: 'Newborn Visa', detail: 'Residence for a baby born in the UAE' },
  { id: 'maid', label: 'Maid Visa', detail: 'Domestic worker sponsorship and renewal' },
  { id: 'emiratesId', label: 'Emirates ID', detail: 'New, renewal or replacement card' },
  { id: 'pro', label: 'Corporate PRO Services', detail: 'Company retainer or one-off government task' },
  { id: 'amer', label: 'Amer Center Services', detail: 'Application typing and submission support' },
  { id: 'attestation', label: 'Document Attestation', detail: 'Country, document and attestation route' },
  { id: 'translation', label: 'Legal Translation', detail: 'Certified translation and page-count quote' },
  { id: 'poa', label: 'Power of Attorney', detail: 'Drafting, translation and notarization' },
  { id: 'wills', label: 'Wills & Last Testament', detail: 'DIFC or Dubai Courts planning consultation' },
  { id: 'dld', label: 'DLD Trustee Services', detail: 'Transfer, mortgage or title transaction' },
  { id: 'revaluation', label: 'Property Revaluation', detail: 'DLD certificate for visa, sale or finance' },
  { id: 'medical', label: 'Medical Fitness & EID Locations', detail: 'Medical screening speed and emirate' },
  { id: 'visaValidity', label: 'Visa Validity Checker', detail: 'Find the right official ICP / GDRFA portal' },
  { id: 'iloe', label: 'ILOE Insurance', detail: 'Plan category, subscription or compliance check' },
];

type QuoteServiceId = Exclude<ServiceId, 'family' | 'newborn'>;
const serviceQuestions: Record<QuoteServiceId, {
  options: string[];
  detailLabel: string;
  placeholder: string;
  note: string;
}> = {
  golden: {
    options: ['Property investor', 'Company owner', 'Manager or executive', 'Fixed deposit', 'Creative talent', 'Family dependents'],
    detailLabel: 'Relevant amount, application stage or evidence',
    placeholder: 'e.g. property value or monthly basic salary',
    note: 'The screener can compare published route guides; nominations and final eligibility are authority-led.',
  },
  property: {
    options: ['10-year Golden Visa', '5-year retirement route', '2-year investor route', 'Dependent visa'],
    detailLabel: 'Property value or registered share (AED)',
    placeholder: 'Enter an approximate property value',
    note: 'Ownership, sole or joint title, property status and mortgage evidence affect the route. Fees require a current itemized quote.',
  },
  maid: {
    options: ['New sponsorship', 'Renewal', 'Eligibility review', 'Cancellation'],
    detailLabel: 'Sponsor salary, household or current status',
    placeholder: 'Share only the information needed for a first review',
    note: 'Sponsor conditions, refundable deposits, insurance and government charges vary by case and emirate.',
  },
  emiratesId: {
    options: ['New application', 'Renewal', 'Lost / damaged replacement', 'Track an existing application'],
    detailLabel: 'Application number stage or cardholder age',
    placeholder: 'Do not enter a full ID number or personal security details',
    note: 'For live status, use ICP with your PRAN / application reference. Card charges depend on validity and applicant category.',
  },
  pro: {
    options: ['Corporate retainer', 'Individual PRO task', 'Multi-employee project', 'Trade licence / quota support'],
    detailLabel: 'Company emirate, employee count or request scope',
    placeholder: 'e.g. Dubai · 4 renewals · monthly support',
    note: 'Government charges and professional retainer pricing are quoted separately after company-category review.',
  },
  amer: {
    options: ['Visa application', 'Family sponsorship', 'Renewal / cancellation', 'Appointment preparation'],
    detailLabel: 'Emirate, visa type or application stage',
    placeholder: 'Describe the application stage',
    note: 'Amer centre tariffs and service availability depend on the centre and transaction. Confirm the live charge before visiting.',
  },
  attestation: {
    options: ['Educational document', 'Personal document', 'Commercial document', 'Other document'],
    detailLabel: 'Issuing country and document count',
    placeholder: 'e.g. India · 2 degree certificates',
    note: 'The required authentication chain and price depend on the issuing country, document type and MOFA / embassy steps.',
  },
  translation: {
    options: ['Arabic to English', 'English to Arabic', 'Other language pair', 'Certified legal translation'],
    detailLabel: 'Language pair, document type and page count',
    placeholder: 'e.g. French to Arabic · 5 pages',
    note: 'Certified availability and the final quote depend on the language pair, document format and page count.',
  },
  poa: {
    options: ['General POA', 'Property POA', 'Corporate POA', 'Vehicle / personal POA'],
    detailLabel: 'Language, number of signers or notarization route',
    placeholder: 'Share the intended use and signing location',
    note: 'Drafting, legal translation, notarization and any attestation are priced as separate case components.',
  },
  wills: {
    options: ['DIFC Will', 'Dubai Courts Will', 'Guardianship planning', 'Compare registration routes'],
    detailLabel: 'Family, asset or guardianship planning topic',
    placeholder: 'Do not include account numbers or confidential asset details',
    note: 'Registry eligibility, will type and registration fees must be confirmed for your family and asset profile.',
  },
  dld: {
    options: ['Property sale transfer', 'Mortgage registration / release', 'Gift transfer', 'Title deed / trustee appointment'],
    detailLabel: 'Property value and transaction stage',
    placeholder: 'e.g. AED 2,000,000 · mortgage release',
    note: 'Trustee, DLD, bank and developer charges vary by transaction. Get the current breakdown before an appointment.',
  },
  revaluation: {
    options: ['Golden Visa eligibility', 'Sale or transfer', 'Refinancing', 'Other DLD valuation purpose'],
    detailLabel: 'Property type, location or current valuation',
    placeholder: 'e.g. apartment in Dubai Marina',
    note: 'The certificate type, property details and DLD requirements determine the valuation process and charges.',
  },
  medical: {
    options: ['Standard screening', 'VIP / express screening', 'Medical plus Emirates ID', 'Find a nearby centre'],
    detailLabel: 'Emirate, applicant age and preferred timing',
    placeholder: 'e.g. Dubai · adult · this week',
    note: 'Medical tests, express options and centre availability vary. Confirm suitability and live prices with the selected centre.',
  },
  visaValidity: {
    options: ['Dubai-issued visa (GDRFA)', 'Other emirate / federal visa (ICP)', 'Overstay / expiry guidance', 'Application status help'],
    detailLabel: 'Visa emirate or the official reference type',
    placeholder: 'Never share UAE Pass passwords or OTPs',
    note: 'Use the official portal for live status. This tool does not collect passport numbers or check government databases.',
  },
  iloe: {
    options: ['Category 1 subscription', 'Category 2 subscription', 'Check subscription status', 'Fine / compliance question'],
    detailLabel: 'Employment category or salary band',
    placeholder: 'Do not include Emirates ID or policy numbers',
    note: 'Verify current subscription premiums, coverage and compliance directly with the official ILOE portal.',
  },
};

const sponsorVisas: Array<{ id: SponsorVisa; label: string; detail: string; years: 2 | 5 | 10 }> = [
  { id: 'employee', label: '2-Year Employee Visa', detail: 'Sponsored by your employer', years: 2 },
  { id: 'investor', label: '2-Year Investor / Partner', detail: 'Business owner or property investor', years: 2 },
  { id: 'golden', label: '10-Year Golden Visa', detail: 'You hold a Golden Visa', years: 10 },
  { id: 'retirement', label: '5-Year Retirement Visa', detail: 'Property-based retirement visa', years: 5 },
];

const emiratesIdFees: Record<2 | 5 | 10, number> = {
  2: 354,
  5: 754,
  10: 1254,
};

const medicalFees: Record<MedicalSpeed, number> = {
  normal: 273,
  vip: 703,
};

const formatAed = (amount: number) => `AED ${new Intl.NumberFormat('en-AE').format(amount)}`;
const parseNumericValue = (value: string) => Number(value.replace(/[^\d.]/g, ''));

function getEstimateLines({
  sponsorVisa,
  application,
  location,
  hasFamilyFile,
  adults,
  children,
  medicalSpeed,
  category,
}: {
  sponsorVisa: SponsorVisa;
  application: ApplicationKind;
  location: DependentLocation;
  hasFamilyFile: boolean;
  adults: number;
  children: number;
  medicalSpeed: MedicalSpeed;
  category: VisaCategory;
}) {
  const plan = sponsorVisas.find((visa) => visa.id === sponsorVisa);
  if (!plan) throw new Error(`Missing family visa sponsor option "${sponsorVisa}"`);

  type FeeLine = { label: string; amount: number; count: number; amerExtra: number; applicant: 'adult' | 'child' | 'shared' };
  const lines: FeeLine[] = [];
  if (!hasFamilyFile) lines.push({ label: 'Family file opening', amount: 203, count: 1, amerExtra: 50, applicant: 'shared' });

  const entryPermit = location === 'inside' ? 989 : 339;
  const changeStatus = location === 'inside' ? 630 : 0;
  const idFee = emiratesIdFees[plan.years];
  const isNewApplication = application === 'new';

  const addDependentLines = (label: string, count: number, isAdult: boolean) => {
    if (count === 0) return;
    if (isNewApplication && category !== 'newborn') {
      lines.push({ label: `${label} · Entry permit (${location === 'inside' ? 'inside UAE' : 'outside UAE'})`, amount: entryPermit, count, amerExtra: 100, applicant: isAdult ? 'adult' : 'child' });
      if (changeStatus > 0) lines.push({ label: `${label} · Change of status`, amount: changeStatus, count, amerExtra: 9, applicant: isAdult ? 'adult' : 'child' });
    }
    if (isAdult && category === 'family') {
      lines.push({ label: `${label} · Medical ${medicalSpeed === 'vip' ? 'VIP' : 'Normal'}`, amount: medicalFees[medicalSpeed], count, amerExtra: 47, applicant: 'adult' });
    }
    lines.push({ label: `${label} · Emirates ID (${plan.years} years)`, amount: idFee, count, amerExtra: 31, applicant: isAdult ? 'adult' : 'child' });
    lines.push({ label: `${label} · Residence issuance`, amount: 410, count, amerExtra: 100, applicant: isAdult ? 'adult' : 'child' });
  };

  addDependentLines('Adult', adults, true);
  addDependentLines(category === 'newborn' ? 'Newborn' : 'Child', children, false);

  const total = lines.reduce((sum, line) => sum + line.amount * line.count, 0);
  const amerTotal = lines.reduce((sum, line) => sum + (line.amount + line.amerExtra) * line.count, 0);
  const applicantTotal = (applicant: FeeLine['applicant']) => lines
    .filter((line) => line.applicant === applicant)
    .reduce((sum, line) => sum + line.amount * line.count, 0);
  const adultTotal = applicantTotal('adult');
  const childTotal = applicantTotal('child');
  const sharedTotal = applicantTotal('shared');
  const amerApplicantTotal = (applicant: FeeLine['applicant']) => lines
    .filter((line) => line.applicant === applicant)
    .reduce((sum, line) => sum + (line.amount + line.amerExtra) * line.count, 0);
  const amerAdultTotal = amerApplicantTotal('adult');
  const amerChildTotal = amerApplicantTotal('child');
  const amerSharedTotal = amerApplicantTotal('shared');
  if (adultTotal + childTotal + sharedTotal !== total) {
    throw new Error('Family visa estimate line items do not sum to the total.');
  }
  const securityDepositNote = sponsorVisa === 'retirement'
    ? 'A refundable security deposit may be required for dependents of a retirement-visa sponsor. The amount is case- and authority-specific, so it is not included in this estimate.'
    : 'A refundable guarantee or security deposit may be requested for some cases. Confirm whether one applies and its amount with the issuing authority; it is not included in this estimate.';
  return { lines, total, amerTotal, adultTotal, childTotal, sharedTotal, amerAdultTotal, amerChildTotal, amerSharedTotal, securityDepositNote, plan };
}

export function FamilyVisaCalculator({
  open,
  onClose,
  initialService,
}: {
  open: boolean;
  onClose: () => void;
  initialService?: ServiceId;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showServiceResult, setShowServiceResult] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceId | null>(initialService ?? null);
  const [category, setCategory] = useState<VisaCategory | null>(
    initialService === 'family' ? 'family' : initialService === 'newborn' ? 'newborn' : null,
  );
  const [sponsorVisa, setSponsorVisa] = useState<SponsorVisa | null>(null);
  const [application, setApplication] = useState<ApplicationKind>('new');
  const [location, setLocation] = useState<DependentLocation | null>(initialService === 'newborn' ? 'inside' : null);
  const [hasFamilyFile, setHasFamilyFile] = useState<boolean | null>(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [medicalSpeed, setMedicalSpeed] = useState<MedicalSpeed>('normal');
  const [showAmerComparison, setShowAmerComparison] = useState(false);
  const [actionNotice, setActionNotice] = useState('');
  const [serviceRequest, setServiceRequest] = useState('');
  const [serviceDetails, setServiceDetails] = useState('');
  const [serviceExtra, setServiceExtra] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const autoAdvanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const steps = useMemo<CalculatorStep[]>(() => {
    if (!selectedService) return ['service'];
    if (category === 'newborn') {
      return ['sponsor', 'familyFile'];
    }
    if (category !== 'family') return ['serviceRequest', 'serviceDetails'];
    return [
      'sponsor',
      'application',
      'location',
      'familyFile',
      'dependents',
      ...(adults > 0 ? ['medical' as const] : []),
    ];
  }, [adults, category, selectedService]);
  const activeStepIndex = Math.min(stepIndex, steps.length - 1);
  const activeStep = steps[activeStepIndex] ?? 'service';
  const isLastStep = activeStepIndex === steps.length - 1;
  const selectedSponsor = sponsorVisas.find((visa) => visa.id === sponsorVisa);
  const selectedServiceOption = serviceOptions.find((service) => service.id === selectedService);
  const serviceQuestion = selectedService && selectedService !== 'family' && selectedService !== 'newborn'
    ? serviceQuestions[selectedService]
    : null;
  const currentEstimate = category && sponsorVisa && location && hasFamilyFile !== null
    ? getEstimateLines({
      sponsorVisa,
      application,
      location,
      hasFamilyFile,
      adults: category === 'newborn' ? 0 : adults,
      children: category === 'newborn' ? 1 : children,
      medicalSpeed,
      category,
    })
    : null;

  const resetCalculator = useCallback((service: ServiceId | null = null) => {
    setStepIndex(0);
    setShowResult(false);
    setShowServiceResult(false);
    setSelectedService(service);
    setCategory(service === 'family' ? 'family' : service === 'newborn' ? 'newborn' : null);
    setSponsorVisa(null);
    setApplication('new');
    setLocation(service === 'newborn' ? 'inside' : null);
    setHasFamilyFile(null);
    setAdults(0);
    setChildren(service === 'newborn' ? 1 : 0);
    setMedicalSpeed('normal');
    setShowAmerComparison(false);
    setActionNotice('');
    setServiceRequest('');
    setServiceDetails('');
    setServiceExtra('');
  }, []);

  const closeCalculator = useCallback(() => {
    resetCalculator(initialService ?? null);
    onClose();
  }, [initialService, onClose, resetCalculator]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCalculator();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialogRef.current?.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
      previousFocus?.focus();
    };
  }, [closeCalculator, open]);

  const chooseService = (service: ServiceId) => {
    setSelectedService(service);
    setCategory(service === 'family' ? 'family' : service === 'newborn' ? 'newborn' : null);
    setStepIndex(0);
    setShowResult(false);
    setShowServiceResult(false);
    setSponsorVisa(null);
    setApplication('new');
    setLocation(service === 'newborn' ? 'inside' : null);
    setHasFamilyFile(null);
    setAdults(0);
    setChildren(service === 'newborn' ? 1 : 0);
    setMedicalSpeed('normal');
    setServiceRequest('');
    setServiceDetails('');
    setServiceExtra('');
    setActionNotice('');
  };

  const chooseAnotherService = () => {
    resetCalculator();
  };

  const advanceAfterChoice = () => {
    if (isLastStep) {
      setShowResult(true);
      setShowAmerComparison(false);
      setActionNotice('');
      return;
    }
    setStepIndex(activeStepIndex + 1);
  };

  useEffect(() => {
    if (!open || showResult || showServiceResult) return;

    const requiredPropertyDetail = selectedService === 'property'
      && (serviceRequest.includes('retirement') || serviceRequest.includes('investor'));
    const detailsReady = serviceDetails.trim().length > 0
      && (!requiredPropertyDetail || serviceExtra.trim().length > 0);
    const dependentsReady = activeStep === 'dependents' && adults + children > 0;
    const serviceDetailsReady = activeStep === 'serviceDetails' && detailsReady;

    if (!dependentsReady && !serviceDetailsReady) return;

    autoAdvanceTimer.current = setTimeout(() => {
      if (dependentsReady) {
        if (isLastStep) {
          setShowResult(true);
          setShowAmerComparison(false);
          setActionNotice('');
        } else {
          setStepIndex((index) => Math.min(index + 1, steps.length - 1));
        }
        return;
      }
      setShowServiceResult(true);
    }, dependentsReady ? 1_600 : 700);

    return () => {
      if (autoAdvanceTimer.current) {
        clearTimeout(autoAdvanceTimer.current);
        autoAdvanceTimer.current = null;
      }
    };
  }, [
    activeStep,
    adults,
    children,
    isLastStep,
    open,
    selectedService,
    serviceDetails,
    serviceExtra,
    serviceRequest,
    showResult,
    showServiceResult,
    steps.length,
  ]);

  const copyEstimate = async () => {
    if (!currentEstimate) return;
    const summary = `${category === 'newborn' ? 'Newborn visa' : 'Family visa'} estimate: ${formatAed(currentEstimate.total)} total government fee guide. Adults: ${formatAed(currentEstimate.adultTotal)}; children: ${formatAed(currentEstimate.childTotal)}; shared file charges: ${formatAed(currentEstimate.sharedTotal)}. Sponsor: ${currentEstimate.plan.label}. ${application === 'renewal' ? 'Renewal' : 'New visa'}, ${adults} adult(s), ${category === 'newborn' ? '1 newborn' : `${children} child(ren)`}. Any applicable refundable deposit is excluded pending authority confirmation. Fees are illustrative and must be verified before payment.`;
    try {
      await navigator.clipboard.writeText(summary);
      setActionNotice('Estimate copied to clipboard.');
    } catch {
      setActionNotice('Copy was blocked by your browser. You can select and copy the estimate details above.');
    }
  };

  const shareEstimate = async () => {
    if (!currentEstimate) return;
    const summary = `${category === 'newborn' ? 'Newborn visa' : 'Family visa'} estimate: ${formatAed(currentEstimate.total)} total government fee guide. Adults: ${formatAed(currentEstimate.adultTotal)}; children: ${formatAed(currentEstimate.childTotal)}; shared fees: ${formatAed(currentEstimate.sharedTotal)}. Sponsor: ${currentEstimate.plan.label}. Any applicable refundable deposit is excluded until confirmed. Verify current charges with the relevant authority.`;
    if (!navigator.share) {
      await copyEstimate();
      return;
    }
    try {
      await navigator.share({ title: 'UAE Family Visa Estimate', text: summary, url: window.location.href });
      setActionNotice('Estimate shared.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        setActionNotice('Sharing cancelled.');
        return;
      }
      setActionNotice('Could not open the share sheet. You can copy the estimate instead.');
    }
  };

  const serviceFeeHref = currentEstimate
    ? `${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello, please quote your service fee for my ${category === 'newborn' ? 'newborn visa' : 'family visa'} application. My estimated government charges are ${formatAed(currentEstimate.total)}. Sponsor: ${currentEstimate.plan.label}; ${application}; ${location} UAE; ${adults} adult(s), ${category === 'newborn' ? '1 newborn' : `${children} child(ren)`}. Please confirm current fees and documents.`)}`
    : contactInfo.whatsappHref;

  const getFeeGroup = (applicant: 'adult' | 'child' | 'shared') =>
    currentEstimate?.lines.filter((line) => line.applicant === applicant) ?? [];
  const renderFeeGroup = (title: string, applicant: 'adult' | 'child' | 'shared', total: number) => {
    const lines = getFeeGroup(applicant);
    return (
      <section className="gv-family-calculator-fee-group" key={applicant}>
        <div className="gv-family-calculator-fee-group-heading">
          <h4>{title}</h4>
          <strong>{formatAed(total)}</strong>
        </div>
        {lines.length > 0
          ? lines.map((line) => (
            <div className="gv-family-calculator-line" key={line.label}>
              <span>{line.label}{line.count > 1 && <em> × {line.count}</em>}</span>
              <strong>{formatAed(line.amount * line.count)}</strong>
            </div>
          ))
          : <p className="gv-family-calculator-fee-empty">No fees in this category for the selected applicants.</p>}
      </section>
    );
  };

  if (!open) return null;

  const stepTitles: Record<CalculatorStep, string> = {
    service: 'Choose a service to check',
    serviceRequest: selectedServiceOption ? `Choose a ${selectedServiceOption.label} route` : 'Choose a service route',
    serviceDetails: selectedServiceOption ? `${selectedServiceOption.label} route check` : 'Service route check',
    sponsor: 'Your visa (the sponsor)',
    application: 'New visa or renewal?',
    location: 'Where are your dependents now?',
    familyFile: 'Do you already have a family file?',
    dependents: 'Who are you sponsoring?',
    medical: 'Medical fitness test',
  };
  const stepDescriptions: Record<CalculatorStep, string> = {
    service: 'Select one of the 17 services. Family and newborn visas have a fee guide; other routes use service-specific checks and a tailored quote where fees vary.',
    serviceRequest: 'Choose a route to continue. Your selection opens the matching details step automatically.',
    serviceDetails: serviceQuestion?.note ?? 'Share the broad application details needed for a route check.',
    sponsor: 'Your family’s fees depend on the visa you hold.',
    application: 'On a renewal, the entry permit is not needed.',
    location: 'Inside the UAE adds a change-of-status step.',
    familyFile: 'A family file is opened once, the first time you sponsor someone.',
    dependents: 'Adults aged 18 or older need medical fitness; children do not.',
    medical: 'Select the medical processing speed for each adult.',
  };

  const serviceAssessment = (() => {
    if (!selectedService || !selectedServiceOption || !serviceQuestion) return null;
    const amount = parseNumericValue(serviceDetails);
    if (selectedService === 'golden') {
      const threshold = serviceRequest === 'Property investor' || serviceRequest === 'Company owner' || serviceRequest === 'Fixed deposit'
        ? 2_000_000
        : serviceRequest === 'Manager or executive' ? 30_000 : null;
      if (serviceRequest === 'Family dependents') {
        return 'Eligible dependents may apply through an active Golden Visa holder. Relationship evidence and the current sponsorship conditions must be checked.';
      }
      if (serviceRequest === 'Creative talent') {
        return 'This route is nomination-led through the relevant cultural authority. Portfolio evidence and the correct nominating body need review.';
      }
      if (threshold === null) {
        return 'This route is assessed using category-specific evidence. Confirm the current criteria and required nomination with the relevant authority.';
      }
      const reachesGuide = amount >= threshold;
      return reachesGuide
        ? `The details entered reach the commonly cited ${serviceRequest === 'Manager or executive' ? 'AED 30,000 monthly salary' : 'AED 2 million investment'} guide. Category evidence and current authority rules still need review.`
        : `The entered figure is below the commonly cited ${serviceRequest === 'Manager or executive' ? 'AED 30,000 monthly salary' : 'AED 2 million investment'} guide. Another category may fit better; request a profile review.`;
    }
    if (selectedService === 'property') {
      if (serviceRequest === '10-year Golden Visa') {
        return amount >= 2_000_000
          ? 'The stated property value reaches the commonly cited AED 2 million Golden Visa guide. Ownership, valuation and mortgage rules still require review.'
          : 'The stated value is below the commonly cited AED 2 million Golden Visa guide. A different property route may be worth checking.';
      }
      if (serviceRequest === '5-year retirement route') {
        return amount >= 1_000_000 && parseNumericValue(serviceExtra) >= 55
          ? 'The entered value and age reach the commonly cited property-retirement guide. Other financial and authority criteria still apply.'
          : 'The commonly cited guide uses property value of AED 1 million and age 55+. Confirm other current requirements.';
      }
      if (serviceRequest === '2-year investor route') {
        if (/sole owner/i.test(serviceExtra)) {
          return 'The reference route describes no minimum property value for a sole owner. Confirm the title record, property status and current authority criteria.';
        }
        return parseNumericValue(serviceExtra) > 400_000
          ? 'The entered joint-ownership share is above the commonly cited AED 400,000 guide. The title record and current authority criteria still need review.'
          : 'The reference route describes no minimum value for a sole owner and a joint share above AED 400,000. Confirm the ownership record and live rules.';
      }
      return 'Dependent applications are assessed separately. Share the sponsor route and number of family members for a current itemized quote.';
    }
    if (selectedService === 'visaValidity') {
      return 'Use GDRFA Dubai for Dubai-issued visa records and ICP for federal / other-emirate records. This page does not query government systems or calculate a live overstay balance.';
    }
    if (selectedService === 'iloe') {
      return 'Subscription and penalty details depend on the insured category and current policy rules. Check the official ILOE portal for a live amount; we can help review the process.';
    }
    return serviceQuestion.note;
  })();

  const serviceQuoteHref = selectedService && selectedServiceOption
    ? `${contactInfo.whatsappHref}?text=${encodeURIComponent([
      `Hello, I would like a current quote or route review for ${selectedServiceOption.label}.`,
      `Request: ${serviceRequest}`,
      serviceDetails ? `Details: ${serviceDetails}` : '',
      serviceExtra ? `Additional detail: ${serviceExtra}` : '',
      'Please confirm government fees, professional charges and required documents separately.',
    ].filter(Boolean).join('\n'))}`
    : contactInfo.whatsappHref;

  return (
    <div className="gv-family-calculator-overlay" onClick={(event) => { if (event.target === event.currentTarget) closeCalculator(); }}>
      <div
        className="gv-family-calculator-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gv-family-calculator-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <header className="gv-family-calculator-header">
          <div>
            <span className="gv-family-calculator-brand"><b>800</b> DOCS</span>
            <h2 id="gv-family-calculator-title">{selectedServiceOption ? `${selectedServiceOption.label} calculator` : 'UAE service calculator'}</h2>
          </div>
          <div className="gv-family-calculator-header-actions">
            {selectedService && <button className="gv-family-calculator-change" type="button" onClick={() => chooseAnotherService()}>All 17 services</button>}
            <button className="gv-family-calculator-close" type="button" onClick={closeCalculator} aria-label="Close service calculator"><X size={19} /></button>
          </div>
        </header>

        {!showResult && !showServiceResult && (
          <>
            <div className="gv-family-calculator-progress" aria-label={`Question ${activeStepIndex + 1} of ${steps.length}`}>
              <span>QUESTION {activeStepIndex + 1} OF {steps.length}</span>
              <div><i style={{ width: `${((activeStepIndex + 1) / steps.length) * 100}%` }} /></div>
            </div>

            <section className="gv-family-calculator-content">
              <div className="gv-family-calculator-intro">
                <h3>{stepTitles[activeStep]}</h3>
                <p>{stepDescriptions[activeStep]}</p>
              </div>

              {activeStep === 'service' && (
                <div className="gv-family-calculator-service-grid">
                  {serviceOptions.map((service) => (
                    <button key={service.id} type="button" onClick={() => chooseService(service.id)}>
                      <span><strong>{service.label}</strong><small>{service.detail}</small></span><ArrowRight size={15} />
                    </button>
                  ))}
                </div>
              )}

              {activeStep === 'serviceRequest' && serviceQuestion && (
                <div className="gv-family-calculator-options">
                  {serviceQuestion.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={serviceRequest === option ? 'is-selected' : ''}
                      aria-pressed={serviceRequest === option}
                      onClick={() => {
                        setServiceRequest(option);
                        setServiceDetails('');
                        setServiceExtra('');
                        setStepIndex(activeStepIndex + 1);
                      }}
                    >
                      <span><strong>{option}</strong></span><ArrowRight size={15} />
                    </button>
                  ))}
                </div>
              )}

              {activeStep === 'serviceDetails' && serviceQuestion && (
                <div className="gv-family-calculator-service-fields">
                  <label htmlFor="gv-service-details">{serviceQuestion.detailLabel}
                    <input id="gv-service-details" type="text" inputMode={selectedService === 'property' || selectedService === 'golden' ? 'decimal' : 'text'} value={serviceDetails} onChange={(event) => setServiceDetails(event.target.value)} placeholder={serviceQuestion.placeholder} />
                  </label>
                  {(selectedService === 'property' && (serviceRequest.includes('retirement') || serviceRequest.includes('investor'))) && (
                    <label htmlFor="gv-service-extra">{serviceRequest.includes('retirement') ? 'Applicant age' : 'Joint ownership share (AED), or type “sole owner”'}
                      <input id="gv-service-extra" type="text" inputMode={serviceRequest.includes('retirement') ? 'numeric' : 'text'} value={serviceExtra} onChange={(event) => setServiceExtra(event.target.value)} placeholder={serviceRequest.includes('retirement') ? 'e.g. 55' : 'e.g. 450,000 or sole owner'} />
                    </label>
                  )}
                  <p className="gv-family-calculator-service-note"><ShieldCheck size={15} />{serviceQuestion.note}</p>
                </div>
              )}

              {activeStep === 'sponsor' && (
                <div className="gv-family-calculator-options">
                  {sponsorVisas.map((visa) => (
                    <button key={visa.id} type="button" className={sponsorVisa === visa.id ? 'is-selected' : ''} aria-pressed={sponsorVisa === visa.id} onClick={() => { setSponsorVisa(visa.id); advanceAfterChoice(); }}>
                      <span className="gv-family-calculator-option-copy"><strong>{visa.label}</strong><small>{visa.detail}</small></span>
                      {visa.id === 'employee' && <em>Most common</em>}
                      {sponsorVisa === visa.id && <Check size={17} />}
                    </button>
                  ))}
                </div>
              )}

              {activeStep === 'application' && (
                <div className="gv-family-calculator-options">
                  <button type="button" className={application === 'new' ? 'is-selected' : ''} aria-pressed={application === 'new'} onClick={() => { setApplication('new'); advanceAfterChoice(); }}>
                    <span><strong>New visa</strong><small>First residence visa for the dependent</small></span>{application === 'new' && <Check size={17} />}
                  </button>
                  <button type="button" className={application === 'renewal' ? 'is-selected' : ''} aria-pressed={application === 'renewal'} onClick={() => { setApplication('renewal'); advanceAfterChoice(); }}>
                    <span><strong>Renewal</strong><small>Renewing an existing residence visa</small></span>{application === 'renewal' && <Check size={17} />}
                  </button>
                </div>
              )}

              {activeStep === 'location' && (
                <div className="gv-family-calculator-options">
                  <button type="button" className={location === 'inside' ? 'is-selected' : ''} aria-pressed={location === 'inside'} onClick={() => { setLocation('inside'); advanceAfterChoice(); }}>
                    <span><strong>Inside the UAE</strong><small>Dependent is currently in the country</small></span>{location === 'inside' && <Check size={17} />}
                  </button>
                  <button type="button" className={location === 'outside' ? 'is-selected' : ''} aria-pressed={location === 'outside'} onClick={() => { setLocation('outside'); advanceAfterChoice(); }}>
                    <span><strong>Outside the UAE</strong><small>Dependent is currently abroad</small></span>{location === 'outside' && <Check size={17} />}
                  </button>
                </div>
              )}

              {activeStep === 'familyFile' && (
                <div className="gv-family-calculator-options">
                  <button type="button" className={hasFamilyFile === false ? 'is-selected' : ''} aria-pressed={hasFamilyFile === false} onClick={() => { setHasFamilyFile(false); advanceAfterChoice(); }}>
                    <span><strong>No — open one</strong><small>One-time family file opening fee applies</small></span>{hasFamilyFile === false && <Check size={17} />}
                  </button>
                  <button type="button" className={hasFamilyFile === true ? 'is-selected' : ''} aria-pressed={hasFamilyFile === true} onClick={() => { setHasFamilyFile(true); advanceAfterChoice(); }}>
                    <span><strong>Yes — I have one</strong><small>No file-opening fee</small></span>{hasFamilyFile === true && <Check size={17} />}
                  </button>
                </div>
              )}

              {activeStep === 'dependents' && (
                <div className="gv-family-calculator-counts">
                  {[
                    { label: 'Adults', note: 'Aged 18 and above', value: adults, setValue: setAdults },
                    { label: 'Children', note: 'Below 18 — no medical', value: children, setValue: setChildren },
                  ].map((counter) => (
                    <div key={counter.label}>
                      <span><strong>{counter.label}</strong><small>{counter.note}</small></span>
                      <div>
                        <button type="button" aria-label={`Fewer ${counter.label.toLowerCase()}`} disabled={counter.value === 0} onClick={() => counter.setValue((count) => Math.max(0, count - 1))}><Minus size={16} /></button>
                        <output aria-label={`${counter.value} ${counter.label.toLowerCase()}`}>{counter.value}</output>
                        <button type="button" aria-label={`More ${counter.label.toLowerCase()}`} onClick={() => counter.setValue((count) => count + 1)}><Plus size={16} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeStep === 'medical' && (
                <div className="gv-family-calculator-medical">
                  {(['normal', 'vip'] as const).map((speed) => (
                    <button key={speed} type="button" className={medicalSpeed === speed ? 'is-selected' : ''} aria-pressed={medicalSpeed === speed} onClick={() => { setMedicalSpeed(speed); advanceAfterChoice(); }}>
                      <strong>{speed === 'normal' ? 'Normal' : 'VIP'}</strong>
                      <b>{formatAed(medicalFees[speed])}</b>
                      <small>{speed === 'normal' ? 'Report in 24 hours' : 'Report in 30 minutes'}</small>
                    </button>
                  ))}
                </div>
              )}
            </section>

            <footer className="gv-family-calculator-nav">
              <button type="button" className="gv-family-calculator-back" disabled={activeStepIndex === 0} onClick={() => setStepIndex((index) => Math.max(0, index - 1))}><ArrowLeft size={16} />Back</button>
              <span>
                {activeStep === 'dependents'
                  ? adults + children > 0 ? 'Your estimate will appear after you finish setting applicant counts.' : 'Add at least one applicant to continue.'
                  : activeStep === 'serviceDetails'
                    ? 'Complete the required details to review this route.'
                    : 'Your selection advances automatically.'}
              </span>
            </footer>
          </>
        )}

        {showServiceResult && selectedServiceOption && serviceQuestion && (
          <div className="gv-family-calculator-service-result">
            <span className="gv-family-calculator-result-kicker">SERVICE-SPECIFIC ROUTE CHECK</span>
            <h3>{selectedServiceOption.label}</h3>
            <p className="gv-family-calculator-service-summary" data-no-translate><strong>{serviceRequest}</strong>{serviceDetails ? ` · ${serviceDetails}` : ''}{serviceExtra ? ` · ${serviceExtra}` : ''}</p>
            <div className="gv-family-calculator-service-assessment"><ShieldCheck size={18} /><p>{serviceAssessment}</p></div>
            <div className="gv-family-calculator-service-quote">
              <span>Personalized fee review</span>
              <strong>Quote required</strong>
              <p>Exact government and professional charges vary by applicant, emirate, document, service speed and current authority tariffs. We do not invent a total where a verified fee schedule is not available.</p>
            </div>
            {selectedService === 'visaValidity' && <div className="gv-family-calculator-official-links"><a href="https://smartservices.icp.gov.ae/echannels/web/client/default.html#/login" target="_blank" rel="noreferrer">ICP Smart Services <ArrowRight size={14} /></a><a href="https://www.gdrfad.gov.ae/en" target="_blank" rel="noreferrer">GDRFA Dubai <ArrowRight size={14} /></a></div>}
            {selectedService === 'iloe' && <div className="gv-family-calculator-official-links"><a href="https://www.iloe.ae/" target="_blank" rel="noreferrer">Official ILOE portal <ArrowRight size={14} /></a></div>}
            <a className="gv-family-calculator-service-cta" href={serviceQuoteHref} target="_blank" rel="noreferrer">Request a current itemized quote <ArrowRight size={15} /></a>
            <button className="gv-family-calculator-service-edit" type="button" onClick={() => { setShowServiceResult(false); setStepIndex(0); }}>Edit service details</button>
            <div className="gv-family-calculator-disclaimer"><ShieldCheck size={15} /><p>Indicative route guidance only. Final eligibility and fees are confirmed by the relevant authority or licensed provider.</p></div>
          </div>
        )}

        {showResult && currentEstimate && selectedSponsor && (
          <div className="gv-family-calculator-result">
            <div className="gv-family-calculator-result-heading">
              <span>YOUR ESTIMATE</span>
              <h3>{category === 'newborn' ? 'Newborn residence visa' : `Dependents of a ${selectedSponsor.label}`}</h3>
              <p>Sponsor: {selectedSponsor.label} · {application === 'renewal' ? 'Renewal' : 'New visa'} · {location === 'inside' ? 'Inside UAE' : 'Outside UAE'} · {adults} adult{adults === 1 ? '' : 's'} · {category === 'newborn' ? '1 newborn' : `${children} child${children === 1 ? '' : 'ren'}`}</p>
            </div>

            <div className="gv-family-calculator-breakdown">
              {renderFeeGroup('Adult applicant fees', 'adult', currentEstimate.adultTotal)}
              {renderFeeGroup(category === 'newborn' ? 'Child / newborn applicant fees' : 'Child applicant fees', 'child', currentEstimate.childTotal)}
              {renderFeeGroup('Shared / one-time fees', 'shared', currentEstimate.sharedTotal)}
            </div>

            <div className="gv-family-calculator-security-note">
              <ShieldCheck size={18} />
              <div>
                <h4>Additional deposit / security requirements</h4>
                <p>{currentEstimate.securityDepositNote}</p>
              </div>
            </div>

            <div className="gv-family-calculator-total">
              <span>Final total · calculated fees only</span>
              <strong>{formatAed(currentEstimate.total)}</strong>
            </div>

            <button className="gv-family-calculator-compare-toggle" type="button" aria-expanded={showAmerComparison} onClick={() => setShowAmerComparison((shown) => !shown)}>
              <span>Compare with Amer centre prices</span><span>{showAmerComparison ? '−' : '+'}</span>
            </button>

            {showAmerComparison && (
              <div className="gv-family-calculator-comparison">
                <div className="gv-family-calculator-comparison-head"><span>Item</span><span>Online guide</span><span>Amer guide</span></div>
                {currentEstimate.lines.map((line) => (
                  <div className="gv-family-calculator-comparison-row" key={`compare-${line.label}`}>
                    <span>{line.label}{line.count > 1 ? ` × ${line.count}` : ''}</span>
                    <span>{formatAed(line.amount * line.count)}</span>
                    <span>{formatAed((line.amount + line.amerExtra) * line.count)}</span>
                  </div>
                ))}
                <div className="gv-family-calculator-comparison-row"><strong>Adult applicant fees</strong><strong>{formatAed(currentEstimate.adultTotal)}</strong><strong>{formatAed(currentEstimate.amerAdultTotal)}</strong></div>
                <div className="gv-family-calculator-comparison-row"><strong>Child applicant fees</strong><strong>{formatAed(currentEstimate.childTotal)}</strong><strong>{formatAed(currentEstimate.amerChildTotal)}</strong></div>
                <div className="gv-family-calculator-comparison-row"><strong>Shared / one-time fees</strong><strong>{formatAed(currentEstimate.sharedTotal)}</strong><strong>{formatAed(currentEstimate.amerSharedTotal)}</strong></div>
                <div className="gv-family-calculator-comparison-row is-total"><strong>Total</strong><strong>{formatAed(currentEstimate.total)}</strong><strong>{formatAed(currentEstimate.amerTotal)}</strong></div>
                <p>Amer centre figures are indicative comparisons only. Fees and service-channel charges change; confirm the live amount with your selected centre before payment.</p>
              </div>
            )}

            <div className="gv-family-calculator-result-actions">
              <button type="button" onClick={shareEstimate}><Share2 size={15} />Share</button>
              <button type="button" onClick={copyEstimate}><Clipboard size={15} />Copy</button>
              <button type="button" onClick={() => resetCalculator()}><RotateCcw size={15} />Start over</button>
            </div>
            {actionNotice && <p className="gv-family-calculator-status" role="status">{actionNotice}</p>}

            <div className="gv-family-calculator-disclaimer"><ShieldCheck size={15} /><p>This is an illustrative government-fee guide, not a live quote. Service fees, insurance, attestation and fines are not included. Confirm current charges with the relevant authority before payment.</p></div>

            <footer className="gv-family-calculator-result-nav">
              <button type="button" className="gv-family-calculator-back" onClick={() => { setShowResult(false); setStepIndex(0); }}><ArrowLeft size={15} />Edit answers</button>
              <a href={serviceFeeHref} target="_blank" rel="noreferrer">Get service fee <span>· {formatAed(currentEstimate.total)}</span><ArrowRight size={15} /></a>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
