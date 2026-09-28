import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Power of Attorney (POA) | Brightlink Consulting',
  description: 'Power of attorney support for personal, family, and commercial decision-making with clear legal guidance in the UAE.',
};

export default function PowerOfAttorneyPage() {
  return (
    <ServicePageTemplate
      eyebrow="Legal representation"
      title="Power of Attorney (POA)"
      description="Support for preparing and managing a power of attorney for personal, family, and business matters, with clear legal coordination and document preparation."
      badge="Representative authority"
      overviewTitle="A practical approach to formal authority and representation"
      overviewText="A power of attorney can be used to grant another person authority to act on your behalf in matters such as property, family decisions, contracts, or business representation. The legal wording, scope of authority, and documentation must be prepared carefully so the arrangement is both clear and appropriate for the intended purpose."
      highlights={[
        { title: 'Scope planning', description: 'We help define the exact authority granted so the document matches the purpose and responsibilities involved.' },
        { title: 'Document preparation', description: 'Our team supports preparation of the required personal, legal, and identity records before finalization.' },
        { title: 'Clear legal review', description: 'We help ensure the wording and structure support the intended authority and reduce ambiguity.' },
      ]}
      process={[
        { title: 'Case review', detail: 'We assess the purpose of the POA, the parties involved, and the scope of authority required.' },
        { title: 'Documentation', detail: 'Identity, authority, and supporting records are prepared in a clear and consistent format.' },
        { title: 'Draft planning', detail: 'The legal structure and wording are arranged around the actual responsibilities being delegated.' },
        { title: 'Final review', detail: 'We help with final coordination so the document is ready for signature and use.' },
      ]}
      documents={[
        'Passport and ID copies of the principal and attorney',
        'Current address or residency records if required',
        'Description of powers to be granted and scope of authority',
        'Property, business, or family-related documents as applicable',
        'Witness or notarization details when required',
        'Declaration forms or supporting legal records',
      ]}
      faq={[
        { question: 'What is a power of attorney used for?', answer: 'It can be used for property matters, family representation, company transactions, or personal matters where one person may need to act on another’s behalf.' },
        { question: 'Does the authority need to be very specific?', answer: 'Yes. The scope should be clear so the document reflects the exact decisions and responsibilities being delegated.' },
        { question: 'Can I prepare one for family or business matters?', answer: 'Yes. POAs are commonly used for personal and commercial arrangements, and the drafting should align with the purpose and legal requirements.' },
      ]}
    />
  );
}
