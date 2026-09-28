import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Visa Validity Checker | Golden Visa Dubai',
  description: 'Visa validity support and status review guidance for residents and applicants tracking UAE visa requirements.',
};

export default function VisaValidityCheckerPage() {
  return (
    <ServicePageTemplate
      eyebrow="Status review"
      title="Visa Validity Checker"
      description="Support for understanding visa validity, status checks, and the information needed to review current residency or entry conditions with greater clarity."
      badge="Status and eligibility support"
      overviewTitle="A clear way to understand visa status and validity"
      overviewText="Reviewing visa validity is essential for residents, dependents, and applicants who need to understand whether current documentation is active, nearing expiry, or requires follow-up action. A structured review helps make the information easier to interpret and supports next-step planning with more confidence."
      highlights={[
        { title: 'Status review', description: 'We help interpret the current document situation and highlight the main points that need attention.' },
        { title: 'Checklist guidance', description: 'Applicants can review the files and information required to assess status, renewal timing, or next actions.' },
        { title: 'Action planning', description: 'We help organize the next steps so the applicant knows what to prepare before moving forward.' },
      ]}
      process={[
        { title: 'Information review', detail: 'We assess the current residence, visa, or entry status and look at the information available for review.' },
        { title: 'Document check', detail: 'Relevant records and supporting details are organized so the status can be interpreted accurately.' },
        { title: 'Outcome planning', detail: 'The next steps are explained clearly, including whether renewal or follow-up action is needed.' },
        { title: 'Guided support', detail: 'We remain available to clarify any questions about validity, expiry, or supporting requirements.' },
      ]}
      documents={[
        'Passport and visa copies',
        'Current UAE residence documents if applicable',
        'Previous approval or entry records',
        'Dependent or sponsor information if relevant',
        'Any renewal or follow-up record the applicant has on hand',
        'Additional supporting records for status review',
      ]}
      faq={[
        { question: 'Why is reviewing visa validity important?', answer: 'It helps residents and applicants understand whether their current visa is active, expiring soon, or requires a follow-up action to remain compliant.' },
        { question: 'Can I review my status before planning the next step?', answer: 'Yes. A case review helps clarify what information is available and what action may be needed next.' },
        { question: 'Does every case need the same documents?', answer: 'Not necessarily. The required information can vary depending on the current visa type, resident status, and applicant circumstances.' },
      ]}
    />
  );
}
