import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical & EID | Golden Visa Dubai',
  description: 'Medical and Emirates ID support for clear scheduling, document prep, and smooth application coordination.',
};

export default function MedicalEidPage() {
  return (
    <ServicePageTemplate
      eyebrow="Health & identity"
      title="Medical & EID"
      description="Support for coordinating medical screening and Emirates ID-related requirements, helping applicants stay organized and informed at each step."
      badge="Health and identity support"
      overviewTitle="A smoother route through medical and identity requirements"
      overviewText="Medical screening and Emirates ID procedures are often part of the broader residency or application journey. Preparing the correct records in advance and understanding the expected sequence helps applicants reduce delays and ensures their details are ready for the next stage of processing."
      highlights={[
        { title: 'Checklist clarity', description: 'We help confirm which records and forms are needed before the medical or ID step begins.' },
        { title: 'Process coordination', description: 'Our team supports a clear sequence so each appointment or requirement is easier to manage.' },
        { title: 'Follow-up support', description: 'We help answer questions and guide applicants through any additional requests that arise during processing.' },
      ]}
      process={[
        { title: 'Requirement review', detail: 'We review the applicant status and confirm what is required for medical and ID processing.' },
        { title: 'Document preparation', detail: 'The right identity, application, and supporting documents are organized and checked in advance.' },
        { title: 'Coordination', detail: 'The application flow is structured so steps are easier to follow and less prone to missing items.' },
        { title: 'Support after scheduling', detail: 'We remain available for any updates or additional information required by the process.' },
      ]}
      documents={[
        'Passport and visa-related records',
        'Recent ID or residency file copies',
        'Completed application forms and scheduling information',
        'Supporting personal records if requested by the authority',
        'Medical appointment confirmation details',
        'Any additional verification records needed during processing',
      ]}
      faq={[
        { question: 'Why is preparation important for medical and EID steps?', answer: 'The process is smoother when applicants have the needed documents ready and understand the required sequence before attending any appointment.' },
        { question: 'Can I get help with both stages together?', answer: 'Yes. A coordinated approach helps applicants understand how the medical step and Emirates ID process connect within the broader application flow.' },
        { question: 'What causes delays?', answer: 'Incomplete records, unclear appointment information, or missing supporting documents can slow the process. Early review helps reduce this risk.' },
      ]}
    />
  );
}
