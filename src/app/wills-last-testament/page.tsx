import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Wills & Last Testament in Dubai | Golden Visa Dubai',
  description: 'Compare DIFC and Dubai Courts will registration, plan guardianship and asset instructions, and prepare for a UAE wills consultation.',
};

export default function WillsLastTestamentPage() {
  return <ServicePageTemplate title="Wills & Last Testament" />;
}
