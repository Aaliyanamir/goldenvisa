import type { Language } from './translations';

const localizedCopy = new Map<Language, Set<string>>();

function collectStrings(value: unknown, target: Set<string>) {
  if (typeof value === 'string') {
    if (value.trim()) target.add(value.trim());
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, target));
    return;
  }
  if (value && typeof value === 'object') {
    Object.values(value).forEach((item) => collectStrings(item, target));
  }
}

export function registerLocalizedCopy(language: Language, value: unknown) {
  const strings = localizedCopy.get(language) ?? new Set<string>();
  collectStrings(value, strings);
  localizedCopy.set(language, strings);
}

export function isRegisteredLocalizedCopy(language: Language, value: string) {
  return localizedCopy.get(language)?.has(value.trim()) ?? false;
}
