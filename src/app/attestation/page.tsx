import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Attestation | Golden Visa Dubai',
  description: 'Document attestation support with clear review, checklist guidance, and process coordination.',
};

export default function AttestationPage() {
  return <ServicePageTemplate title="Attestation" />;
}
