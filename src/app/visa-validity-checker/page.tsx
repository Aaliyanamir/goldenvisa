import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Visa Validity Checker | Golden Visa Dubai',
  description: 'Visa validity support and status review guidance for residents and applicants tracking UAE visa requirements.',
};

export default function VisaValidityCheckerPage() {
  return <ServicePageTemplate title="Visa Validity Checker" />;
}
