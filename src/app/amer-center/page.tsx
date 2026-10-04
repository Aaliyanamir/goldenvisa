import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Amer Center | Golden Visa Dubai',
  description: 'Amer Center guidance with clear preparation support for visa and documentation steps in the UAE.',
};

export default function AmerCenterPage() {
  return <ServicePageTemplate title="Amer Center" />;
}
