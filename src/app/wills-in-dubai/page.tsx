import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Wills in Dubai | Golden Visa Dubai',
  description: 'Compare Dubai Courts and DIFC will registration routes and plan asset and guardianship provisions.',
};

export default function WillsInDubaiPage() {
  return <ServicePageTemplate title="Wills & Last Testament" />;
}
