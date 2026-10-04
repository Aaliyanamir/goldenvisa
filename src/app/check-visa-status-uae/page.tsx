import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Check UAE Visa Status | Golden Visa Dubai',
  description: 'Learn how to check UAE visa validity on official ICP and GDRFA portals and estimate overstay fines.',
};

export default function CheckVisaStatusPage() {
  return <ServicePageTemplate title="Visa Validity Checker" />;
}
