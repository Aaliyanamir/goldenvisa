import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Legal Translation | Brightlink Consulting',
  description: 'Professional legal translation support for UAE residents, families, and businesses needing accurate documentation.',
};

export default function TranslationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Documentation support"
      title="Legal Translation"
      description="Accurate translation support for legal, personal, and commercial records, helping clients present clear and reliable documentation when it matters most."
      badge="Certified document support"
      overviewTitle="Trusted translation support for official documentation"
      overviewText="Legal and personal documents often need to be translated with care, consistency, and an understanding of how the information will be used. Whether the requirement is for residence, family, business, or property-related records, well-managed translation support helps reduce errors and improve confidence in the process."
      highlights={[
        { title: 'Accurate review', description: 'We assess the document context and ensure the translation reflects the original intent and legal meaning.' },
        { title: 'Document-focused support', description: 'Files can be prepared for official use, personal recordkeeping, or submission to relevant authorities.' },
        { title: 'Clear communication', description: 'We help present the translated content in a structured and professional format for smoother handling.' },
      ]}
      process={[
        { title: 'Document review', detail: 'We assess the document type, purpose, and any authority-specific requirements before translation work begins.' },
        { title: 'Translation process', detail: 'Content is translated carefully with attention to legal wording, formatting, and clarity.' },
        { title: 'Quality check', detail: 'The final output is reviewed to confirm terminology, consistency, and completeness.' },
        { title: 'Delivery support', detail: 'We help coordinate the final document set and provide next-step guidance where needed.' },
      ]}
      documents={[
        'Original document copies and source files',
        'Passport, ID, or residence records when relevant',
        'Any reference materials or prior translated versions',
        'Purpose details for official or legal use',
        'Commercial, personal, or family documents requiring translation',
        'Additional declarations or notes if requested by the case',
      ]}
      faq={[
        { question: 'When is legal translation needed?', answer: 'It is commonly required for official records, family documentation, business paperwork, property files, and sponsorship-related submissions.' },
        { question: 'Does the document type affect the process?', answer: 'Yes. Legal, financial, personal, and property materials may each require a different level of precision and review.' },
        { question: 'Can support be tailored to my case?', answer: 'Yes. Translation plans can be aligned with the document purpose, authority requirements, and intended use.' },
      ]}
    />
  );
}
