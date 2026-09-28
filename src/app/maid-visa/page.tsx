import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Maid Visa | Brightlink Consulting',
  description: 'Maid visa guidance with document support, sponsorship review, and a structured application process.',
};

export default function MaidVisaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Household support"
      title="Maid Visa"
      description="A practical support pathway for household staff applications, designed to keep the documentation process organized and easy to follow."
      badge="Domestic staff support"
      overviewTitle="A clear process for household staff visa planning"
      overviewText="Maid visa applications involve sponsor documentation, personal record review, and compliance with general household and application requirements. A structured approach helps applicants and employers prepare the right records and reduce unnecessary delays in the process."
      highlights={[
        { title: 'Sponsor review', description: 'We assess the sponsorship context and confirm the documentation and process elements relevant to the case.' },
        { title: 'Checklist preparation', description: 'The required files and declaration records are mapped clearly so each step is easy to follow.' },
        { title: 'Process support', description: 'We help manage the flow of records and answer questions that arise during the application cycle.' },
      ]}
      process={[
        { title: 'Initial review', detail: 'We assess the employer and employee records that support the application route.' },
        { title: 'Document preparation', detail: 'The required identification, sponsorship, and personal records are organized into a clear checklist.' },
        { title: 'Application structure', detail: 'Records are prepared and checked before they are submitted for final handling.' },
        { title: 'Case follow-up', detail: 'We remain available to guide the family or sponsor through any requirement updates or next steps.' },
      ]}
      documents={[
        'Passport copies of the employee and sponsor',
        'Employment agreement or household sponsorship documents',
        'Identity and address verification records',
        'Medical or background-related paperwork if required',
        'Completed forms and supporting declarations',
        'Additional legal or personal documents when requested',
      ]}
      faq={[
        { question: 'Who is responsible for preparing the maid visa documents?', answer: 'Usually the sponsor or employer provides a significant part of the documentation, alongside the worker’s personal records. A clear checklist helps keep both sides aligned.' },
        { question: 'Are there common reasons for delays?', answer: 'Incomplete records, missing declarations, or unclear sponsorship information can slow the process. Early review helps reduce these issues.' },
        { question: 'Can I get support with the document list?', answer: 'Yes. A structured checklist is the best way to ensure the case stays organized and the application is complete before submission.' },
      ]}
    />
  );
}
