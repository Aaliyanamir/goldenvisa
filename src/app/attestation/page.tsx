import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Attestation | Golden Visa Dubai',
  description: 'Document attestation support with clear review, checklist guidance, and process coordination.',
};

export default function AttestationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Document processing"
      title="Attestation"
      description="A structured service for document attestation planning, verification, and administrative coordination to help clients move through the process with more confidence."
      badge="Document verification"
      overviewTitle="A professional approach to attestation requirements"
      overviewText="Attestation is often a detail-sensitive process that depends on the document type, issuing authority, and final destination or requirement. Proper preparation and consistent review help clients avoid missing signatures, approvals, or supporting items that could slow the process down."
      highlights={[
        { title: 'Document review', description: 'We assess the record set, required verifications, and any missing elements before submission begins.' },
        { title: 'Checklist control', description: 'Documents are organized in a way that makes each stage of the attestation process easier to understand.' },
        { title: 'Progress coordination', description: 'We help guide the file through each phase and address any follow-up requirements that appear during review.' },
      ]}
      process={[
        { title: 'Document review', detail: 'We assess what the case requires and confirm whether the original papers are ready for the next step.' },
        { title: 'Verification checklist', detail: 'Supporting records and approvals are mapped clearly so the file remains complete and consistent.' },
        { title: 'Submission planning', detail: 'The attestation request is structured carefully to reduce avoidable back-and-forth.' },
        { title: 'Follow-up assistance', detail: 'We remain available for additional coordination, clarifications, and next-step communication.' },
      ]}
      documents={[
        'Original documents and certified copies',
        'Passport or identity documents where relevant',
        'Authorization or declaration forms if required',
        'Proof of purpose or supporting reference records',
        'Any required state or issuing authority paperwork',
        'Additional verification materials requested during processing',
      ]}
      faq={[
        { question: 'What does attestation usually involve?', answer: 'It typically involves verifying original records, confirming authority requirements, and ensuring the supporting paperwork is properly prepared for review.' },
        { question: 'Can missing paperwork delay the process?', answer: 'Yes. Missing signatures, incomplete records, or unclear supporting documents can delay attestation. Early review helps prevent this.' },
        { question: 'Do requirements change between document types?', answer: 'Yes. Different document categories can have different verification steps, so a tailored review is important before submission.' },
      ]}
    />
  );
}
