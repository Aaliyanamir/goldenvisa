import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Golden Visa | Brightlink Consulting',
  description: 'Golden Visa guidance in the UAE with professional support for eligibility, planning, and documentation.',
};

export default function GoldenVisaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Residency strategy"
      title="Golden Visa"
      description="A tailored residency pathway designed to support long-term planning, qualification review, and efficient documentation for eligible applicants."
      badge="Long-term residency"
      overviewTitle="A clear approach to long-term UAE residency"
      overviewText="The Golden Visa route can open access to long-term residency opportunities for eligible entrepreneurs, investors, professionals, and skilled applicants. A successful outcome depends on careful eligibility planning, document preparation, and a complete understanding of the category-specific requirements."
      highlights={[
        { title: 'Qualification review', description: 'We look at the applicant profile and assess the strongest residency route before moving into formal preparation.' },
        { title: 'Strategic planning', description: 'We outline the documentation sequence, timelines, and key conditions to improve application readiness.' },
        { title: 'Submission support', description: 'Our team helps keep the process organized, reducing common delays from incomplete or misaligned records.' },
      ]}
      process={[
        { title: 'Profile assessment', detail: 'We review the candidate profile against current eligibility criteria and determine the most suitable route.' },
        { title: 'Document planning', detail: 'Applicants receive a checklist covering identity, qualification, investment, and supporting paperwork.' },
        { title: 'Formulation', detail: 'We help organize and validate the required records before they are presented for approval.' },
        { title: 'Support during the process', detail: 'Our advisors stay engaged to help answer any follow-up requirements that arise during review.' },
      ]}
      documents={[
        'Passport and current UAE residence records if applicable',
        'Educational or professional credential documents where relevant',
        'Proof of investment, business ownership, or category eligibility',
        'Employment or professional verification records',
        'Bank statements or financial evidence when required',
        'Supporting declaration forms and additional background documents',
      ]}
      faq={[
        { question: 'Who is eligible for the Golden Visa?', answer: 'Eligibility varies by category, including investment, profession, entrepreneurship, and other long-term residence pathways. A profile-based review helps clarify the best route.' },
        { question: 'Does the process require special documentation?', answer: 'Yes, supporting records often differ by category, and the requirements may include financial, professional, or personal evidence depending on the application route.' },
        { question: 'How early should I start planning?', answer: 'Starting early helps ensure documents are prepared correctly and that the applicant has time to respond to any additional authority requirements.' },
      ]}
    />
  );
}
