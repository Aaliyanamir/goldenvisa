import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Wills & Last Testament | Brightlink Consulting',
  description: 'Will and testament support for asset planning, family clarity, and legal preparation in the UAE.',
};

export default function WillsLastTestamentPage() {
  return (
    <ServicePageTemplate
      eyebrow="Estate planning"
      title="Wills & Last Testament"
      description="Support for drafting and preparing a will in a way that reflects your personal wishes, family circumstances, and long-term planning priorities."
      badge="Estate planning support"
      overviewTitle="A clearer path to estate and family planning"
      overviewText="A will is a practical legal document that helps express your wishes regarding assets, guardianship, and family matters. The process requires careful thought about the legal wording, beneficiaries, and the forms needed to ensure the final document reflects your intent clearly and appropriately."
      highlights={[
        { title: 'Intent clarity', description: 'We support a clear structure for your wishes so they are expressed in a professional and understandable way.' },
        { title: 'Family-focused planning', description: 'We help organize beneficiary details and family arrangements in a consistent, legally coherent format.' },
        { title: 'Document readiness', description: 'Our guidance helps prepare the required records and review points before finalization.' },
      ]}
      process={[
        { title: 'Planning review', detail: 'We review the individual or family circumstances and the main matters to be addressed in the will.' },
        { title: 'Asset and beneficiary mapping', detail: 'The document structure is organized around your intended beneficiaries, assets, and specific wishes.' },
        { title: 'Draft preparation', detail: 'The will is drafted with clear wording to reduce confusion and ensure the structure is easy to follow.' },
        { title: 'Final coordination', detail: 'We help review the final version and support any signature or execution requirements.' },
      ]}
      documents={[
        'Passport and identity records of the testator',
        'Family or beneficiary information',
        'Asset and property records where relevant',
        'Details of guardianship or dependents if applicable',
        'Witness or signature information if required',
        'Any prior legal documents or declarations relevant to the matter',
      ]}
      faq={[
        { question: 'Why is a will important?', answer: 'A will helps clearly record your wishes and reduces uncertainty for family members, beneficiaries, and relevant legal processes.' },
        { question: 'Do I need support to draft it properly?', answer: 'Professional guidance helps ensure the wording is clear, the structure is appropriate, and the arrangement reflects your intent accurately.' },
        { question: 'Can the process be adapted to family circumstances?', answer: 'Yes. Each will may be tailored around beneficiaries, assets, dependents, and the family structure involved.' },
      ]}
    />
  );
}
