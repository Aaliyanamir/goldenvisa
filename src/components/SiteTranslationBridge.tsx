'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import type { Language } from '@/lib/translations';

interface TranslationResponse {
  translations?: string[];
}

interface TextRecord {
  source: string;
  current: string;
}

const languageTargets: Partial<Record<Language, string>> = {
  AR: 'ar',
  DE: 'de',
  ES: 'es',
  FR: 'fr',
  RU: 'ru',
  TR: 'tr',
  ZH: 'zh-CN',
};
const translationCache = new Map<string, string>();
const textRecords = new WeakMap<Text, TextRecord>();
const attributeRecords = new WeakMap<Element, Map<string, TextRecord>>();
const translatableAttributeNames = ['placeholder', 'title', 'aria-label', 'alt'] as const;

function collectTextNodes(root: Node) {
  const nodes: Text[] = [];
  if (root instanceof Text) {
    if (
      root.data.trim()
      && root.parentElement
      && !root.parentElement.closest('script, style, noscript, textarea, input, [contenteditable="true"], [data-no-translate], [translate="no"], .notranslate')
    ) {
      nodes.push(root);
    }
    return nodes;
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const text = node as Text;
    const parent = text.parentElement;
    if (
      parent
      && text.data.trim()
      && !parent.closest('script, style, noscript, textarea, input, [contenteditable="true"], [data-no-translate], [translate="no"], .notranslate')
    ) {
      nodes.push(text);
    }
    node = walker.nextNode();
  }

  return nodes;
}

function attributesForTranslation(element: Element) {
  const attributes: string[] = [...translatableAttributeNames];
  if (element instanceof HTMLInputElement && ['button', 'submit', 'reset'].includes(element.type)) {
    attributes.push('value');
  }
  if (element instanceof HTMLMetaElement) {
    const key = element.getAttribute('name') ?? element.getAttribute('property');
    if (['description', 'og:title', 'og:description', 'twitter:title', 'twitter:description'].includes(key ?? '')) {
      attributes.push('content');
    }
  }
  return attributes;
}

function collectTranslatableElements(root: Node) {
  const elements: Element[] = [];
  const selector = '[placeholder], [title], [aria-label], [alt], input[type="button"][value], input[type="submit"][value], input[type="reset"][value], meta[name="description"][content], meta[property="og:title"][content], meta[property="og:description"][content], meta[name="twitter:title"][content], meta[name="twitter:description"][content]';
  if (root instanceof Element && root.matches(selector)) {
    elements.push(root);
  }
  if (root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_NODE || root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    (root as ParentNode).querySelectorAll(selector).forEach((element) => elements.push(element));
  }
  return elements;
}

function splitIntoBatches<T>(items: T[], size: number) {
  const batches: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    batches.push(items.slice(index, index + size));
  }
  return batches;
}

export function SiteTranslationBridge() {
  const { language } = useLanguage();
  const [translationFailure, setTranslationFailure] = useState<{ language: Language; message: string } | null>(null);

  useEffect(() => {
    const targetLanguage = languageTargets[language];

    let disposed = false;
    const observerOwnedChanges = new WeakMap<Text, number>();
    const observerOwnedAttributes = new WeakMap<Element, Map<string, number>>();
    const pendingNodes = new Set<Text>();
    const pendingAttributes = new Set<Element>();
    let observerTimer: ReturnType<typeof setTimeout> | undefined;
    let translationUnavailable = false;
    const setTranslatedText = (node: Text, value: string) => {
      if (node.data === value) return;
      observerOwnedChanges.set(node, (observerOwnedChanges.get(node) ?? 0) + 1);
      node.data = value;
    };
    const setTranslatedAttribute = (element: Element, name: string, value: string) => {
      if (element.getAttribute(name) === value) return;
      const changes = observerOwnedAttributes.get(element) ?? new Map<string, number>();
      changes.set(name, (changes.get(name) ?? 0) + 1);
      observerOwnedAttributes.set(element, changes);
      element.setAttribute(name, value);
    };

    const translateNodes = async (nodes: Text[], force = false) => {
      if (translationUnavailable) return;
      const work: Array<{ node: Text; source: string }> = [];

      for (const node of nodes) {
        const record = textRecords.get(node);
        const source = record && node.data === record.current ? record.source : node.data;
        if (!source.trim()) continue;

        textRecords.set(node, { source, current: source });
        setTranslatedText(node, source);

        if (language === 'EN') continue;
        if (!force && record && record.source === source && record.current === node.data
          && translationCache.has(`${language}:${source}`)) {
          const cached = translationCache.get(`${language}:${source}`);
          if (cached !== undefined && node.data !== cached) {
            setTranslatedText(node, cached);
            textRecords.set(node, { source, current: cached });
          }
          continue;
        }
        work.push({ node, source });
      }

      if (!targetLanguage || disposed || !work.length) return;
      const uncached = work.filter(({ source }) => !translationCache.has(`${language}:${source}`));
      const cacheHits = work.filter(({ source }) => translationCache.has(`${language}:${source}`));
      for (const { node, source } of cacheHits) {
        const cached = translationCache.get(`${language}:${source}`);
        if (cached === undefined || disposed) continue;
        setTranslatedText(node, cached);
        textRecords.set(node, { source, current: cached });
      }

      if (language === 'EN') return;
      for (const batch of splitIntoBatches(uncached, 40)) {
        if (disposed) return;
        try {
          const response = await fetch('/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              targetLanguage,
              texts: batch.map(({ source }) => source),
            }),
          });
          const result = await response.json() as TranslationResponse & { error?: string };
          if (!response.ok || !result.translations || result.translations.length !== batch.length) {
            throw new Error(result.error || `Translation request failed (${response.status}).`);
          }

          batch.forEach(({ node, source }, index) => {
            const translated = result.translations?.[index];
            if (typeof translated !== 'string') return;
            translationCache.set(`${language}:${source}`, translated);
            if (disposed || !node.isConnected) return;
            setTranslatedText(node, translated);
            textRecords.set(node, { source, current: translated });
          });
        } catch (error) {
          if (disposed) return;
          translationUnavailable = true;
          pendingNodes.clear();
          console.error('Site-wide translation could not be completed.', error);
          setTranslationFailure({
            language,
            message: 'Automatic translation is unavailable for some content. Please try again later.',
          });
          return;
        }
      }

      if (!disposed) {
        setTranslationFailure((failure) => failure?.language === language ? null : failure);
      }
    };

    const translateAttributes = async (elements: Element[]) => {
      if (translationUnavailable) return;
      const work: Array<{ element: Element; name: string; source: string }> = [];

      for (const element of elements) {
        if (element.closest('[data-no-translate], [translate="no"], .notranslate')) continue;
        const records = attributeRecords.get(element) ?? new Map<string, TextRecord>();
        attributeRecords.set(element, records);
        for (const name of attributesForTranslation(element)) {
          const current = element.getAttribute(name);
          if (!current?.trim()) continue;
          const record = records.get(name);
          const source = record && current === record.current ? record.source : current;
          if (current !== source) setTranslatedAttribute(element, name, source);
          records.set(name, { source, current: source });
          work.push({ element, name, source });
        }
      }

      if (disposed || !work.length) return;
      await translateNodes(work.map(({ source }) => document.createTextNode(source)), true);
      if (translationUnavailable || disposed) return;

      for (const { element, name, source } of work) {
        if (language === 'EN') {
          setTranslatedAttribute(element, name, source);
          attributeRecords.get(element)?.set(name, { source, current: source });
          continue;
        }
        const translated = translationCache.get(`${language}:${source}`);
        if (translated === undefined || !element.isConnected) continue;
        setTranslatedAttribute(element, name, translated);
        attributeRecords.get(element)?.set(name, { source, current: translated });
      }
    };

    const observeNewContent = (records: MutationRecord[]) => {
      if (translationUnavailable) return;
      for (const record of records) {
        if (record.type === 'attributes' && record.target instanceof Element && record.attributeName) {
          const changes = observerOwnedAttributes.get(record.target);
          const ownChangeCount = changes?.get(record.attributeName) ?? 0;
          if (ownChangeCount > 0) {
            if (ownChangeCount === 1) changes?.delete(record.attributeName);
            else changes?.set(record.attributeName, ownChangeCount - 1);
            continue;
          }
          pendingAttributes.add(record.target);
          continue;
        }
        if (record.type === 'characterData' && record.target instanceof Text) {
          const ownChangeCount = observerOwnedChanges.get(record.target) ?? 0;
          if (ownChangeCount > 0) {
            if (ownChangeCount === 1) observerOwnedChanges.delete(record.target);
            else observerOwnedChanges.set(record.target, ownChangeCount - 1);
            continue;
          }
          pendingNodes.add(record.target);
          continue;
        }
        record.addedNodes.forEach((node) => {
          collectTextNodes(node).forEach((text) => pendingNodes.add(text));
          collectTranslatableElements(node).forEach((element) => pendingAttributes.add(element));
        });
      }

      if (observerTimer) clearTimeout(observerTimer);
      observerTimer = setTimeout(() => {
        if (translationUnavailable) return;
        void translateNodes([...pendingNodes]);
        void translateAttributes([...pendingAttributes]);
        pendingNodes.clear();
        pendingAttributes.clear();
      }, 120);
    };

    const observer = new MutationObserver(observeNewContent);
    if (language === 'EN') {
      void translateNodes(collectTextNodes(document.documentElement), true);
      void translateAttributes(collectTranslatableElements(document.documentElement));
      return () => {
        disposed = true;
      };
    }

    observer.observe(document.documentElement, {
      childList: true,
      characterData: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['placeholder', 'title', 'aria-label', 'alt', 'value', 'content'],
    });
    void translateNodes(collectTextNodes(document.documentElement), true);
    void translateAttributes(collectTranslatableElements(document.documentElement));

    return () => {
      disposed = true;
      observer.disconnect();
      if (observerTimer) clearTimeout(observerTimer);
    };
  }, [language]);

  if (!translationFailure || translationFailure.language !== language) return null;

  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-[100] w-[min(92vw,34rem)] -translate-x-1/2 rounded-lg border border-amber-300 bg-[#201a0d] px-4 py-3 text-center text-sm font-medium text-amber-50 shadow-xl"
    >
      {translationFailure.message}
    </div>
  );
}
