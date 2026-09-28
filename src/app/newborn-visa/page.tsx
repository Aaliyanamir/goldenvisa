import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Newborn Visa | Brightlink Consulting',
  description: 'Newborn visa guidance with a clear process for eligibility, documents, and family-based application support.',
};

export default function NewbornVisaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Family support"
      title="Newborn Visa"
      description="Guidance for newborn residence applications, focusing on preparation, family documentation, and a clear process for essential records and follow-up steps."
      badge="Parent-child support"
      overviewTitle="Making the newborn visa process clearer and more organized"
      overviewText="A newborn residence application often requires a careful review of family records, birth documentation, and sponsor information. With the right preparation and a well-structured checklist, parents can move through the process with greater confidence and fewer delays."
      highlights={[
        { title: 'Case review', description: 'We assess family status, sponsorship context, and required supporting documents before filing starts.' },
        { title: 'Checklist support', description: 'Applicants receive a clear list of documents and submission items to keep the process well organized.' },
        { title: 'Follow-up guidance', description: 'We help address updates or additional requirements as the application progresses.' },
      ]}
      process={[
        { title: 'Eligibility check', detail: 'We confirm the relationship, sponsor status, and the documents needed for the newborn case.' },
        { title: 'Documentation', detail: 'Birth records and family proof are prepared in the correct format and sequence for review.' },
        { title: 'Submission planning', detail: 'We structure the application so each required item is presented clearly and consistently.' },
        { title: 'Progress support', detail: 'Our team remains available for follow-up clarifications and next-step planning where needed.' },
      ]}
      documents={[
        'Birth certificate of the newborn',
        'Passport copies of parents and sponsorship records',
        'Family relationship proof documents',
        'Sponsor residency or employment evidence if required',
        'Completed application forms and declarations',
        'Any additional records requested during review',
      ]}
      faq={[
        { question: 'What documents are usually needed for a newborn visa?', answer: 'The exact file set depends on the family circumstances and sponsorship route, but it commonly includes birth records, parent documentation, and personal identity evidence.' },
        { question: 'Can the process be handled as a family application?', answer: 'Yes, when the family profile supports it, the process can often be managed in a coordinated way to keep the paperwork organized and consistent.' },
        { question: 'Is early preparation important?', answer: 'Yes. Early preparation helps avoid missing documents or back-and-forth requests, which can slow down the procedure.' },
      ]}
    />
  );
}
