import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Power of Attorney (POA) | Golden Visa Dubai',
  description: 'Power of attorney support for personal, family, and commercial decision-making with clear legal guidance in the UAE.',
};

export default function PowerOfAttorneyPage() {
  return <ServicePageTemplate title="Power of Attorney (POA)" />;
}
