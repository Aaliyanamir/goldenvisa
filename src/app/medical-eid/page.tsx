import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Medical & EID | Golden Visa Dubai',
  description: 'Medical and Emirates ID support for clear scheduling, document prep, and smooth application coordination.',
};

export default function MedicalEidPage() {
  return <ServicePageTemplate title="Medical & EID" />;
}
