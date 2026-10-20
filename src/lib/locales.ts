import type { Language } from '@/lib/translations';

export const localeCodes = ['en', 'ar', 'ru', 'de', 'es', 'fr', 'tr', 'zh'] as const;

export type LocaleCode = (typeof localeCodes)[number];

export const localeLanguages: Record<LocaleCode, Language> = {
  en: 'EN',
  ar: 'AR',
  ru: 'RU',
  de: 'DE',
  es: 'ES',
  fr: 'FR',
  tr: 'TR',
  zh: 'ZH',
};

export const languageLocales: Record<Language, LocaleCode> = {
  EN: 'en',
  AR: 'ar',
  RU: 'ru',
  DE: 'de',
  ES: 'es',
  FR: 'fr',
  TR: 'tr',
  ZH: 'zh',
};

export const localeHtmlLanguages: Record<LocaleCode, string> = {
  en: 'en',
  ar: 'ar',
  ru: 'ru',
  de: 'de',
  es: 'es',
  fr: 'fr',
  tr: 'tr',
  zh: 'zh-CN',
};

export const localeOpenGraphLanguages: Record<LocaleCode, string> = {
  en: 'en_US',
  ar: 'ar_AE',
  ru: 'ru_RU',
  de: 'de_DE',
  es: 'es_ES',
  fr: 'fr_FR',
  tr: 'tr_TR',
  zh: 'zh_CN',
};

export function isLocaleCode(value: string): value is LocaleCode {
  return localeCodes.includes(value as LocaleCode);
}

export function localizedPath(pathname: string, language: Language) {
  if (
    !pathname ||
    pathname.startsWith('#') ||
    pathname.startsWith('http://') ||
    pathname.startsWith('https://') ||
    pathname.startsWith('mailto:') ||
    pathname.startsWith('tel:')
  ) {
    return pathname;
  }
  const segments = pathname.split('/');
  const firstSegment = segments[1]?.toLowerCase();
  if (firstSegment && isLocaleCode(firstSegment)) segments.splice(1, 1);
  const path = segments.join('/') || '/';
  const prefix = `/${languageLocales[language]}`;
  return path === '/' ? prefix : `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
}
