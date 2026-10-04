import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Visa Medical & Emirates ID Locations | Golden Visa Dubai',
  description: 'Find DHA medical fitness and ICP Emirates ID appointment locations in Dubai.',
};

export default function VisaMedicalEmiratesIdLocationPage() {
  return <ServicePageTemplate title="Medical & EID" />;
}
