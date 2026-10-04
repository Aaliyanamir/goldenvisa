import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Property Revaluation | Golden Visa Dubai',
  description: 'Property revaluation support for owners who need a clearer understanding of current market value and documentation requirements.',
};

export default function PropertyRevaluationPage() {
  return <ServicePageTemplate title="Property Revaluation" />;
}
