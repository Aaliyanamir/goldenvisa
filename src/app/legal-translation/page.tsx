import type { Metadata } from 'next';
import { LegalTranslationPageContentWithFrame } from '@/components/service-pages/LegalTranslationPageContent';

export const metadata: Metadata = {
  title: 'Certified Legal Translation Dubai & UAE | MOJ Sworn Translators',
  description: 'Official MOJ certified legal translation in Dubai and UAE. Over 50+ languages supported with doorstep collection, express 24h delivery, and Dubai Courts approval.',
};

export default function TranslationPage() {
  return <LegalTranslationPageContentWithFrame />;
}

