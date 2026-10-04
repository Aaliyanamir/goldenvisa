import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'ILOE Insurance | Golden Visa Dubai',
  description: 'Understand UAE ILOE insurance categories, premiums, subscription steps and late-payment penalties.',
};

export default function IloePage() {
  return <ServicePageTemplate title="ILOE Insurance" />;
}
