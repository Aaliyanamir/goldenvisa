import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'ILOE Insurance | Brightlink Consulting',
  description: 'ILOE insurance guidance with structured planning and clear support for applicants and residents in the UAE.',
};

export default function IloeInsurancePage() {
  return (
    <ServicePageTemplate
      eyebrow="Coverage guidance"
      title="ILOE Insurance"
      description="Support for understanding ILOE insurance requirements, coverage planning, and the documentation needed to move through the process with confidence."
      badge="Health coverage support"
      overviewTitle="A clear view of insurance requirements and coverage planning"
      overviewText="Insurance-related requirements can be part of broader residency, family, or visa processes, and the exact criteria often depend on the applicant profile and the route in question. A structured review helps clarify what documentation is needed, what is being covered, and how to approach the next step without confusion."
      highlights={[
        { title: 'Coverage review', description: 'We help clarify the type of insurance support being considered and the documents involved.' },
        { title: 'Process clarity', description: 'Applicants can better understand the requirements and the sequence of steps needed for a smoother experience.' },
        { title: 'Document guidance', description: 'Our team helps organize the information that supports the insurance or coverage request.' },
      ]}
      process={[
        { title: 'Requirement review', detail: 'We assess the applicant profile and understand the relevant insurance or coverage requirement in context.' },
        { title: 'Document mapping', detail: 'A checklist is prepared so the necessary personal and application records are easy to gather.' },
        { title: 'Planning', detail: 'The next step is organized around the application requirements and any related visa or residency process.' },
        { title: 'Support', detail: 'We remain available to help answer questions and guide the applicant through any final follow-up requirements.' },
      ]}
      documents={[
        'Passport and personal identification records',
        'Visa or residency details where relevant',
        'Applicant information and relationship details if applicable',
        'Any policy, coverage, or sponsorship information available',
        'Completed forms and declarations needed for the case',
        'Additional records requested by the relevant authority or insurer',
      ]}
      faq={[
        { question: 'Why is insurance guidance important?', answer: 'Because coverage requirements can be tied to broader application and residency procedures, and preparation helps avoid unnecessary delays or confusion.' },
        { question: 'Is the process the same for everyone?', answer: 'No. Insurance and coverage needs can vary depending on the applicant profile, status, and the route involved in the overall process.' },
        { question: 'Can this be coordinated with other services?', answer: 'Yes. Many applicants combine insurance-related steps with visa or residency processes, and a coordinated approach can make the path easier to manage.' },
      ]}
    />
  );
}
