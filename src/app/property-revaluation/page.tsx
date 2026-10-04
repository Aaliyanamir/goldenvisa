import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'DLD Property Valuation Certificate | Golden Visa Dubai',
  description: 'Prepare for a Dubai Land Department property valuation for visa eligibility, gifting, mortgage refinancing, court matters or asset review.',
};

export default function PropertyRevaluationPage() {
  return <ServicePageTemplate title="Property Revaluation" />;
}
