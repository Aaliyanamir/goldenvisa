import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Emirates ID | Golden Visa Dubai',
  description: 'Emirates ID guidance with document organization, renewal support, and application readiness planning.',
};

export default function EmiratesIdPage() {
  return <ServicePageTemplate title="Emirates ID" />;
}
