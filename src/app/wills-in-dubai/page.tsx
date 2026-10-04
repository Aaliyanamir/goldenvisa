import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Wills in Dubai | Golden Visa Dubai',
  description: 'One complete guide to DIFC and Dubai Courts wills, guardianship planning, estate assets and the registration process.',
};

export default function WillsInDubaiPage() {
  return <ServicePageTemplate title="Wills & Last Testament" />;
}
