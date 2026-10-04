import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'ILOE Insurance | Golden Visa Dubai',
  description: 'ILOE insurance guidance with structured planning and clear support for applicants and residents in the UAE.',
};

export default function IloeInsurancePage() {
  return <ServicePageTemplate title="ILOE Insurance" />;
}
