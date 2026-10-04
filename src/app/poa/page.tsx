import type { Metadata } from 'next';
import { ServicePageTemplate } from '@/components/service-pages/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Power of Attorney | Golden Visa Dubai',
  description: 'Plan a UAE power of attorney with legal drafting, translation and notarization guidance.',
};

export default function PoaPage() {
  return <ServicePageTemplate title="Power of Attorney (POA)" />;
}
