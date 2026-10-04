import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'DLD Trustee Services | Golden Visa Dubai',
  description: 'DLD trustee support for property documentation, title coordination, and structured compliance guidance in Dubai.',
};

export default function DldTrusteeServicesPage() {
  return <ServicePageTemplate title="DLD Trustee Services" />;
}
