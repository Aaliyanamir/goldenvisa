import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Amer Center | Brightlink Consulting',
  description: 'Amer Center guidance with clear preparation support for visa and documentation steps in the UAE.',
};

export default function AmerCenterPage() {
  return (
    <ServicePageTemplate
      eyebrow="Visa facilitation"
      title="Amer Center"
      description="Support to simplify application preparation for visa-related services that require accurate records, clear communication, and efficient follow-up."
      badge="Application support"
      overviewTitle="Clear preparation for visa support processes"
      overviewText="Amer Center procedures often require careful document organization and an understanding of the specific application requirements tied to the service being requested. Professional support helps applicants prepare the necessary files in a timely and organized way, reducing the risk of missing information or avoidable delays."
      highlights={[
        { title: 'Application guidance', description: 'We help assess what is required before entering the formal process and identify any missing elements.' },
        { title: 'Document review', description: 'Our team guides applicants on the records needed for consistency, accuracy, and easier follow-up.' },
        { title: 'Progress support', description: 'We remain available to assist with updates or additional steps that may arise during the review cycle.' },
      ]}
      process={[
        { title: 'Service review', detail: 'We review the exact request and identify the files and forms relevant to the process.' },
        { title: 'Document preparation', detail: 'Applicants receive a checklist outlining the supporting paperwork and identity records needed.' },
        { title: 'Submission readiness', detail: 'Files are organized to make the process clearer and easier for the next stage of handling.' },
        { title: 'Case follow-up', detail: 'We help respond to additional requests and keep the process moving with less uncertainty.' },
      ]}
      documents={[
        'Passport and identity documents',
        'Current visa or residency records if applicable',
        'Relevant application forms and declarations',
        'Personal or sponsor records as required by the case',
        'Supporting documents for family or dependency requirements',
        'Any additional authority-requested paperwork',
      ]}
      faq={[
        { question: 'What type of support is helpful before an Amer Center appointment?', answer: 'Having a clear checklist of required documents and understanding the case type ahead of time helps keep the process smoother and more efficient.' },
        { question: 'Do all cases require the same numbers of records?', answer: 'No. The necessary files vary by case type, sponsor status, and personal circumstances, so a case-by-case review is the most reliable approach.' },
        { question: 'Can this help reduce delays?', answer: 'Yes. Careful preparation and document review are among the best ways to reduce missing-information delays and improve processing flow.' },
      ]}
    />
  );
}
