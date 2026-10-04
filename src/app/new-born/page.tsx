import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Newborn Visa | Golden Visa Dubai',
  description: 'Prepare your newborn UAE residence application and track the 120-day deadline from birth.',
};

export default function NewBornPage() {
  return <ServicePageTemplate title="Newborn Visa" />;
}
