import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'PRO Services | Golden Visa Dubai',
  description: 'PRO services support for document processing, renewals, and administrative coordination in the UAE.',
};

export default function ProServicesPage() {
  return <ServicePageTemplate title="PRO Services" />;
}
