import type { Metadata } from 'next';
import { DldTrusteePageContent } from '@/components/service-pages/DldTrusteePageContent';

export const metadata: Metadata = {
  title: 'DLD Trustee Services | Golden Visa Dubai',
  description: 'Prepare for Dubai property sales, gift transfers, title deed services and mortgage registration or release with a transaction-specific DLD trustee checklist.',
};

export default function DldTrusteeServicesPage() {
  return <DldTrusteePageContent />;
}
