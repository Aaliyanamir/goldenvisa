'use client';

import { useEffect, useState } from 'react';
import { isRegisteredLocalizedCopy } from '@/lib/localizedCopyRegistry';
import { useLanguage } from '@/lib/LanguageContext';
import type { Language } from '@/lib/translations';

interface TranslationResponse {
  translations?: string[];
  error?: string;
}

interface CopyRecord {
  source: string;
  current: string;
}

interface TranslationTask {
  source: string;
  apply: (value: string) => void;
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

const textRecords = new WeakMap<Text, CopyRecord>();
const attributeRecords = new WeakMap<Element, Map<string, CopyRecord>>();
const translatedCopy = new Map<string, string>();
const translatableAttributes = ['placeholder', 'title', 'aria-label', 'alt'] as const;
const translatableSelector = [
  '[placeholder]', '[title]', '[aria-label]', '[alt]',
  'input[type="button"][value]', 'input[type="submit"][value]', 'input[type="reset"][value]',
  'meta[name="description"][content]', 'meta[property="og:title"][content]',
  'meta[property="og:description"][content]', 'meta[name="twitter:title"][content]',
  'meta[name="twitter:description"][content]',
].join(', ');
const excludedTextSelector = [
  'script', 'style', 'noscript', 'textarea', 'input', 'output',
  '[aria-live]',
  '[contenteditable="true"]', '[data-user-content]', '[data-no-translate]',
  '[translate="no"]', '.notranslate',
].join(', ');

const failureMessages: Record<Language, string> = {
  EN: 'Automatic translation could not be completed. Please try again.',
  AR: 'تعذرت الترجمة التلقائية. يرجى المحاولة مرة أخرى.',
  RU: 'Не удалось выполнить автоматический перевод. Попробуйте ещё раз.',
  DE: 'Die automatische Übersetzung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut.',
  ES: 'No se pudo completar la traducción automática. Inténtelo de nuevo.',
  FR: 'La traduction automatique n’a pas pu aboutir. Veuillez réessayer.',
  TR: 'Otomatik çeviri tamamlanamadı. Lütfen tekrar deneyin.',
  ZH: '自动翻译未能完成，请重试。',
};

function shouldTranslate(value: string) {
  return value.trim().length > 1 && /\p{L}/u.test(value);
}

function collectTextNodes(root: Node) {
  const nodes: Text[] = [];
  if (
    root instanceof Text
    && shouldTranslate(root.data)
    && root.parentElement
    && !root.parentElement.closest(excludedTextSelector)
  ) {
    return [root];
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const text = node as Text;
    if (
      shouldTranslate(text.data)
      && text.parentElement
      && !text.parentElement.closest(excludedTextSelector)
    ) {
      nodes.push(text);
    }
    node = walker.nextNode();
  }
  return nodes;
}

function collectElements(root: Node) {
  const elements: Element[] = [];
  if (root instanceof Element && root.matches(translatableSelector)) elements.push(root);
  if (root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_NODE || root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    (root as ParentNode).querySelectorAll(translatableSelector).forEach((element) => elements.push(element));
  }
  return elements;
}

function attributesFor(element: Element) {
  const attributes: string[] = [...translatableAttributes];
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

async function requestTranslations(language: Language, tasks: TranslationTask[]) {
  const cacheKey = (source: string) => `${language}:${source}`;
  const pending = tasks.filter((task) => !translatedCopy.has(cacheKey(task.source)));
  for (let index = 0; index < pending.length; index += 40) {
    const batch = pending.slice(index, index + 40);
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetLanguage: languageTargets[language],
        texts: batch.map(({ source }) => source),
      }),
    });
    const result = await response.json() as TranslationResponse;
    if (!response.ok || !result.translations || result.translations.length !== batch.length) {
      throw new Error(result.error || `Translation request failed (${response.status}).`);
    }
    batch.forEach(({ source }, batchIndex) => {
      const translated = result.translations?.[batchIndex];
      if (typeof translated === 'string' && translated.trim()) {
        translatedCopy.set(cacheKey(source), translated);
      }
    });
  }
  return tasks.map((task) => translatedCopy.get(cacheKey(task.source)) ?? task.source);
}

export function SiteTranslationBridge() {
  const { language } = useLanguage();
  const [failedLanguage, setFailedLanguage] = useState<Language | null>(null);

  useEffect(() => {
    let disposed = false;
    let working = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let failureShown = false;
    const pendingNodes = new Set<Text>();
    const pendingElements = new Set<Element>();

    const applyText = (node: Text, translated: string, source: string) => {
      if (!node.isConnected) return;
      const record = textRecords.get(node);
      const currentSource = record && node.data === record.current ? record.source : node.data;
      if (currentSource !== source) return;
      if (node.data === translated) {
        textRecords.set(node, { source, current: translated });
        return;
      }
      node.data = translated;
      textRecords.set(node, { source, current: translated });
    };

    const applyAttribute = (element: Element, name: string, translated: string, source: string) => {
      if (!element.isConnected) return;
      const record = attributeRecords.get(element)?.get(name);
      const current = element.getAttribute(name);
      const currentSource = record && current === record.current ? record.source : current;
      if (currentSource !== source) return;
      if (current === translated) {
        const records = attributeRecords.get(element) ?? new Map<string, CopyRecord>();
        records.set(name, { source, current: translated });
        attributeRecords.set(element, records);
        return;
      }
      element.setAttribute(name, translated);
      const records = attributeRecords.get(element) ?? new Map<string, CopyRecord>();
      records.set(name, { source, current: translated });
      attributeRecords.set(element, records);
    };

    const flush = async () => {
      if (working || disposed) return;
      working = true;
      try {
        while (!disposed && (pendingNodes.size || pendingElements.size)) {
          const tasks: TranslationTask[] = [];
          for (const node of pendingNodes) {
            const record = textRecords.get(node);
            const current = node.data;
            const source = record && current === record.current ? record.source : current;
            if (!shouldTranslate(source)) continue;
            if (language === 'EN' || isRegisteredLocalizedCopy(language, source)) {
              applyText(node, source, source);
              continue;
            }
            tasks.push({ source, apply: (translated) => applyText(node, translated, source) });
          }
          pendingNodes.clear();

          for (const element of pendingElements) {
            if (element.closest('[data-no-translate], [translate="no"], .notranslate')) continue;
            const records = attributeRecords.get(element) ?? new Map<string, CopyRecord>();
            attributeRecords.set(element, records);
            for (const name of attributesFor(element)) {
              const current = element.getAttribute(name);
              if (!shouldTranslate(current ?? '')) continue;
              const record = records.get(name);
              const source = record && current === record.current ? record.source : current ?? '';
              if (language === 'EN' || isRegisteredLocalizedCopy(language, source)) {
                applyAttribute(element, name, source, source);
                continue;
              }
              tasks.push({ source, apply: (translated) => applyAttribute(element, name, translated, source) });
            }
          }
          pendingElements.clear();

          if (tasks.length && language !== 'EN') {
            const uniqueTasks = [...new Map(tasks.map((task) => [task.source, task])).values()];
            const results = await requestTranslations(language, uniqueTasks);
            if (disposed) return;
            const translatedBySource = new Map(uniqueTasks.map((task, index) => [task.source, results[index]]));
            tasks.forEach((task) => {
              const translated = translatedBySource.get(task.source);
              if (translated !== undefined) task.apply(translated);
            });
          }
          setFailedLanguage(null);
        }
      } catch (error) {
        if (!disposed) {
          failureShown = true;
          pendingNodes.clear();
          pendingElements.clear();
          console.error('Site-wide translation could not be completed.', error);
          setFailedLanguage(language);
        }
      } finally {
        working = false;
        if (!disposed && !failureShown && (pendingNodes.size || pendingElements.size)) void flush();
      }
    };

    const scheduleFlush = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => void flush(), 80);
    };

    const observer = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'attributes' && record.target instanceof Element) {
          pendingElements.add(record.target);
        } else if (record.type === 'characterData' && record.target instanceof Text) {
          pendingNodes.add(record.target);
        } else {
          record.addedNodes.forEach((node) => {
            collectTextNodes(node).forEach((text) => pendingNodes.add(text));
            collectElements(node).forEach((element) => pendingElements.add(element));
          });
        }
      }
      scheduleFlush();
    });

    if (language !== 'EN') {
      observer.observe(document.documentElement, {
        childList: true,
        characterData: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['placeholder', 'title', 'aria-label', 'alt', 'value', 'content'],
      });
    }
    collectTextNodes(document.documentElement).forEach((text) => pendingNodes.add(text));
    collectElements(document.documentElement).forEach((element) => pendingElements.add(element));
    void flush();

    return () => {
      disposed = true;
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [language]);

  if (!failedLanguage || failedLanguage !== language) return null;
  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-[100] w-[min(92vw,34rem)] -translate-x-1/2 rounded-lg border border-amber-300 bg-[#201a0d] px-4 py-3 text-center text-sm font-medium text-amber-50 shadow-xl"
    >
      {failureMessages[language]}
    </div>
  );
}
