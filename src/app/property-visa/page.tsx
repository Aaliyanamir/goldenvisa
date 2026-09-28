import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Property Visa | Brightlink Consulting',
  description: 'Property visa guidance for eligible investors seeking a clear application journey and document support.',
};

export default function PropertyVisaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Investor route"
      title="Property Visa"
      description="A focused support pathway for investors seeking clarity on property-linked residency planning, documentation requirements, and application readiness."
      badge="Investment support"
      overviewTitle="A practical route for property-based residence planning"
      overviewText="The property visa pathway is designed for eligible investors who meet the governing requirements tied to property ownership and related conditions. Understanding the documentation standards and preparing the right evidence early helps reduce uncertainty and keeps the process organized."
      highlights={[
        { title: 'Eligibility assessment', description: 'We review the property profile, ownership conditions, and general case suitability before the process begins.' },
        { title: 'Paperwork coordination', description: 'Our team helps outline the documents needed to align with the application route and supporting standards.' },
        { title: 'Application monitoring', description: 'We guide the process through each stage so applicants remain informed about the next required step.' },
      ]}
      process={[
        { title: 'Case review', detail: 'We assess the property ownership context and the route most relevant to the applicant profile.' },
        { title: 'Document mapping', detail: 'A documentation checklist is prepared to confirm what is required before submission.' },
        { title: 'Submission preparation', detail: 'Applications are structured carefully to reduce missing items and avoid unnecessary back-and-forth.' },
        { title: 'Progress tracking', detail: 'We remain available to handle follow-ups and answer requirement-based queries during the process.' },
      ]}
      documents={[
        'Passport and identification records',
        'Property title or ownership evidence',
        'Deed and title documents when required',
        'Bank or financial records depending on application circumstances',
        'Supporting personal declarations and consent forms',
        'Any additional documentation requested during review',
      ]}
      faq={[
        { question: 'What does property visa eligibility depend on?', answer: 'It generally depends on the property ownership structure, associated investment value, and the relevant authority criteria. Each case should be reviewed individually.' },
        { question: 'Is a property purchase enough on its own?', answer: 'Not always. While property ownership may be a key factor, the overall qualifying conditions and required documentation still need to be reviewed carefully.' },
        { question: 'Can I apply with assistance?', answer: 'Yes. Professional guidance helps ensure the information, documents, and process flow align with the relevant requirement set.' },
      ]}
    />
  );
}
