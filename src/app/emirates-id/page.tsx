import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Emirates ID | Golden Visa Dubai',
  description: 'Emirates ID guidance with document organization, renewal support, and application readiness planning.',
};

export default function EmiratesIdPage() {
  return (
    <ServicePageTemplate
      eyebrow="Identity services"
      title="Emirates ID"
      description="Practical support for Emirates ID applications, renewals, and document preparation to help applicants stay organized and informed throughout the process."
      badge="Identity support"
      overviewTitle="A straightforward approach to Emirates ID applications"
      overviewText="The Emirates ID process requires attention to personal records, supporting photos, and key document checks. By organizing the necessary items early and understanding the applicable requirements, applicants can move through the process with less confusion and fewer delays."
      highlights={[
        { title: 'Document readiness', description: 'We help confirm which records are required and ensure they are complete before submission.' },
        { title: 'Application review', description: 'Our team supports a clear review of forms, identity files, and supporting paperwork before approval steps begin.' },
        { title: 'Process clarity', description: 'We help applicants understand what happens next, minimizing uncertainty during each stage of the procedure.' },
      ]}
      process={[
        { title: 'Profile review', detail: 'We confirm the applicant status, application type, and required documentation set.' },
        { title: 'Document check', detail: 'Identity records, photographs, and supporting documents are reviewed for completeness and format.' },
        { title: 'Submission preparation', detail: 'The application is organized so the relevant materials are ready to be presented in the correct order.' },
        { title: 'Ongoing support', detail: 'We remain available for updates, clarifications, and next-step guidance as the file is processed.' },
      ]}
      documents={[
        'Passport and residency details',
        'Current UAE visa copy if applicable',
        'Recent passport-size photographs in the required format',
        'Any existing ID records or renewal history',
        'Application forms and declarations',
        'Additional verification records requested during review',
      ]}
      faq={[
        { question: 'Do I need a separate appointment for Emirates ID?', answer: 'The process may involve specific application steps, depending on the case and authority requirements. A complete review helps clarify the necessary flow before starting.' },
        { question: 'What if my documents are incomplete?', answer: 'Missing or unclear records can delay the application. Early review reduces this risk by identifying gaps before submission.' },
        { question: 'Can I renew without complications?', answer: 'Yes, when the supporting documents are prepared correctly and the required records are reviewed in advance, the renewal process becomes much smoother.' },
      ]}
    />
  );
}
