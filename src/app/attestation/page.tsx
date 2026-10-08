import type { Metadata } from 'next';
import { AttestationPageContent } from '@/components/service-pages/AttestationPageContent';

export const metadata: Metadata = {
  title: 'Attestation | Golden Visa Dubai',
  description: 'Document attestation support with clear review, checklist guidance, and process coordination.',
};

export default function AttestationPage() {
  return <AttestationPageContent />;
}
