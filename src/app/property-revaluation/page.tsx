import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Property Revaluation | Golden Visa Dubai',
  description: 'Property revaluation support for owners who need a clearer understanding of current market value and documentation requirements.',
};

export default function PropertyRevaluationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Property assessment"
      title="Property Revaluation"
      description="A structured service for property owners who want to understand current valuation considerations, required records, and the steps involved in a revaluation review."
      badge="Asset assessment support"
      overviewTitle="A clearer view of property value and documentation needs"
      overviewText="Property revaluation is often relevant when owners need to review the current value of an asset for planning, financial decisions, or legal and administrative matters. A well-prepared approach helps ensure that ownership details, property records, and supporting information are aligned before any valuation process is considered."
      highlights={[
        { title: 'Value review', description: 'We help clarify the property context, ownership details, and any documentation needed for an accurate assessment.' },
        { title: 'Record preparation', description: 'Owners can organize title, location, and property information in a way that supports an efficient review.' },
        { title: 'Decision guidance', description: 'We help explain the next steps in a clear and manageable format for property owners.' },
      ]}
      process={[
        { title: 'Case review', detail: 'We assess the property type, ownership context, and the type of revaluation support needed.' },
        { title: 'Document collection', detail: 'The required records are listed clearly so the owner can prepare them in a structured way.' },
        { title: 'Assessment planning', detail: 'The property information is organized to support a clearer understanding of value-related considerations.' },
        { title: 'Follow-up', detail: 'We remain available to answer questions and provide next-step guidance once the file is prepared.' },
      ]}
      documents={[
        'Property title deed and ownership records',
        'Passport and identity records of the owner',
        'Recent property or floor plan documentation where available',
        'Mortgage or financial records if relevant to the case',
        'Existing valuation or property history documents',
        'Any supporting legal or administrative paperwork requested',
      ]}
      faq={[
        { question: 'Why is property revaluation useful?', answer: 'It can help owners gain a clearer view of the current property position for decision-making, planning, or administrative purposes.' },
        { question: 'Does every property need the same records?', answer: 'No. The relevant records can vary depending on ownership structure, property type, and the purpose of the revaluation review.' },
        { question: 'Can support help reduce confusion?', answer: 'Yes. A well-structured document checklist is one of the simplest ways to make the process smoother and easier to manage.' },
      ]}
    />
  );
}
