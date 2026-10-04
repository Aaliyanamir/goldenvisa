import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Property Visa | Golden Visa Dubai',
  description: 'Compare Dubai property investor, retirement and Golden Visa routes, check DLD document requirements, and get a clear property visa application guide.',
};

export default function PropertyVisaPage() {
  return <ServicePageTemplate title="Property Visa" />;
}
