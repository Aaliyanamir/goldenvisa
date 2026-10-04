import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Family Visa | Golden Visa Dubai',
  description: 'Family visa support in the UAE with clear guidance, document review, and efficient application support.',
};

export default function FamilyVisaPage() {
  return <ServicePageTemplate title="Family Visa" />;
}
