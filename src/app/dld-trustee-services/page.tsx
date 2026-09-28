import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'DLD Trustee Services | Brightlink Consulting',
  description: 'DLD trustee support for property documentation, title coordination, and structured compliance guidance in Dubai.',
};

export default function DldTrusteeServicesPage() {
  return (
    <ServicePageTemplate
      eyebrow="Property compliance"
      title="DLD Trustee Services"
      description="Guidance for property and title-related trustee services, helping clients organize documentation, review requirements, and manage formal steps with clarity."
      badge="Property title support"
      overviewTitle="A structured way to manage property-related trustee services"
      overviewText="Trustee services in the property context often involve legal and administrative steps that require careful document preparation and a clear understanding of the required records. Whether the matter involves title-related formalities or ownership structure support, a well-organized approach helps reduce stress and keeps the process clear."
      highlights={[
        { title: 'Case planning', description: 'We review the property and trustee-related requirements to clarify the documents and steps involved.' },
        { title: 'Documentation support', description: 'Our team helps organize the files and records needed for an efficient and consistent process.' },
        { title: 'Progress guidance', description: 'We assist with follow-up coordination so clients understand the next steps at each stage.' },
      ]}
      process={[
        { title: 'Requirement review', detail: 'We assess the service type and confirm the relevant property and identification documents.' },
        { title: 'Record preparation', detail: 'Files are prepared in a structured way to ensure they align with the required process.' },
        { title: 'Formal coordination', detail: 'The supporting paperwork is organized before moving into the next official action.' },
        { title: 'Follow-up', detail: 'We help manage any additional questions or adjustments needed after initial review.' },
      ]}
      documents={[
        'Title deed and property ownership records',
        'Passport and resident identity documentation',
        'Property-related declarations and legal forms',
        'Owner authority or representation documents where relevant',
        'Bank or transaction records if needed by the case',
        'Any additional compliance or follow-up records requested',
      ]}
      faq={[
        { question: 'What do DLD trustee services usually involve?', answer: 'They often include property record coordination, ownership-related formalities, and administrative steps tied to title or transfer processes.' },
        { question: 'Why is document preparation so important?', answer: 'Clear and complete records reduce delays and help ensure the formal steps proceed smoothly without avoidable corrections.' },
        { question: 'Can this support help with multiple property needs?', answer: 'Yes. The process can be tailored to the property matter involved, whether it relates to ownership records, title handling, or formal coordination.' },
      ]}
    />
  );
}
