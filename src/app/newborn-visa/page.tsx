import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Newborn Visa | Golden Visa Dubai',
  description: 'Newborn visa guidance with a clear process for eligibility, documents, and family-based application support.',
};

export default function NewbornVisaPage() {
  return <ServicePageTemplate title="Newborn Visa" />;
}
