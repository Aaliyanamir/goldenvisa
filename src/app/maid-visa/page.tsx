import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Maid Visa | Golden Visa Dubai',
  description: 'Maid visa guidance with document support, sponsorship review, and a structured application process.',
};

export default function MaidVisaPage() {
  return <ServicePageTemplate title="Maid Visa" />;
}
