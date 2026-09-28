import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Family Visa | Golden Visa Dubai',
  description: 'Family visa support in the UAE with clear guidance, document review, and efficient application support.',
};

export default function FamilyVisaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Family residence"
      title="Family Visa"
      description="Support for a smooth family residence process, from document readiness to application guidance and follow-up planning for a more efficient experience."
      badge="Residency planning"
      overviewTitle="A structured path for family relocation and residence support"
      overviewText="Whether you are applying for a spouse, parent, child, or dependent residence visa, the process requires careful coordination of documents, eligibility checks, and submission timelines. We help simplify each stage, so you can move forward with confidence and clarity."
      highlights={[
        { title: 'Eligibility review', description: 'We review the applicant profile, sponsor relationship, and general requirements before submission begins.' },
        { title: 'Document guidance', description: 'Our team helps structure the required files and outlines the supporting evidence needed for a cleaner application.' },
        { title: 'Application coordination', description: 'We support the preparation and filing process to reduce avoidable delays and administrative gaps.' },
      ]}
      process={[
        { title: 'Initial review', detail: 'We assess the visa category, sponsor status, and documentation checklist before formal preparation.' },
        { title: 'Document collection', detail: 'Applicants receive a clear list of required records, identity proofs, and supporting paperwork.' },
        { title: 'Submission', detail: 'The paperwork is arranged in the correct order to help the process move forward without repeated corrections.' },
        { title: 'Follow-up support', detail: 'We remain available to address updates, queries, and next steps during the application cycle.' },
      ]}
      documents={[
        'Valid passport copies and residency documents',
        'Passport-size photographs in the required format',
        'Salary certificate or proof of sponsor eligibility',
        'Marriage or birth certificates where applicable',
        'Medical screening records when required by authority guidelines',
        'Completed application forms and supporting declarations',
      ]}
      faq={[
        { question: 'Who can apply for a family visa in the UAE?', answer: 'Eligibility depends on the sponsor type, current residence status, and the relationship being applied for. A clear review helps determine the most suitable category and required document set.' },
        { question: 'How long does the process usually take?', answer: 'Timing can vary based on the visa type, document readiness, and authority review stages. Early preparation generally helps keep the process on track.' },
        { question: 'Can family members apply together?', answer: 'Yes, eligible dependents may often be processed under a coordinated plan, depending on the individual case and sponsor conditions.' },
      ]}
    />
  );
}
