import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Golden Visa | Golden Visa Dubai',
  description: 'Golden Visa guidance in the UAE with professional support for eligibility, planning, and documentation.',
};

export default function GoldenVisaPage() {
  return <ServicePageTemplate title="Golden Visa" />;
}
