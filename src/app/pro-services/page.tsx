import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'PRO Services | Golden Visa Dubai',
  description: 'PRO services support for document processing, renewals, and administrative coordination in the UAE.',
};

export default function ProServicesPage() {
  return (
    <ServicePageTemplate
      eyebrow="Administrative support"
      title="PRO Services"
      description="A reliable support service for document processing, pre-approval coordination, and administrative tasks that help clients manage business and residency requirements more efficiently."
      badge="Administrative support"
      overviewTitle="Streamlined support for document and government coordination"
      overviewText="PRO services are designed to help individuals and companies manage the administrative steps tied to approvals, renewals, record submissions, and correspondence with relevant departments. With proper planning and document control, the process can be managed more smoothly and with fewer interruptions."
      highlights={[
        { title: 'Document handling', description: 'We support the preparation and verification of files required for government and administrative processes.' },
        { title: 'Process coordination', description: 'Our team helps organize the sequence of requests so submissions remain clear and timely.' },
        { title: 'Ongoing admin support', description: 'We provide helpful guidance throughout the process to reduce uncertainty and improve responsiveness.' },
      ]}
      process={[
        { title: 'Requirement review', detail: 'We look at the requested service and the documents needed before any step is submitted.' },
        { title: 'Document collection', detail: 'Applicants or companies provide the required records in a structured and organized manner.' },
        { title: 'Submission tracking', detail: 'We help sequence the process and confirm each requirement is correctly prepared for submission.' },
        { title: 'Completion support', detail: 'We remain available for follow-up coordination and any additional requests that may arise during processing.' },
      ]}
      documents={[
        'Company or personal identification records',
        'Trade license and business registration documents if relevant',
        'Passport copies and current residency files',
        'Supporting declarations and proof-of-status records',
        'Application forms and administrative requests',
        'Any additional documents requested during processing',
      ]}
      faq={[
        { question: 'What are PRO services used for?', answer: 'PRO support commonly helps coordinate document handling, approvals, renewals, and government-related administrative tasks for individuals and businesses.' },
        { question: 'Why is document preparation important?', answer: 'Incomplete or inconsistent paperwork is one of the most common causes of delays. A structured checklist helps reduce errors and keeps the process moving.' },
        { question: 'Can this service support business and personal needs?', answer: 'Yes. PRO services can be relevant across both corporate and individual administrative requirements, depending on the request.' },
      ]}
    />
  );
}
