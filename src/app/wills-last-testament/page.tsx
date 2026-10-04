import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Wills & Last Testament | Golden Visa Dubai',
  description: 'Will and testament support for asset planning, family clarity, and legal preparation in the UAE.',
};

export default function WillsLastTestamentPage() {
  return <ServicePageTemplate title="Wills & Last Testament" />;
}
