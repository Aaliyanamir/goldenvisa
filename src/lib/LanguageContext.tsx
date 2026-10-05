"use client";

import React, { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react';
import { Language, translations, TranslationData } from './translations';
import { SiteTranslationBridge } from '@/components/SiteTranslationBridge';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languageChangeEvent = 'golden-visa-language-change';

function subscribeToLanguage(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(languageChangeEvent, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(languageChangeEvent, callback);
  };
}

function getStoredLanguage(): Language {
  const saved = window.localStorage.getItem('golden_visa_lang') as Language | null;
  return saved && saved in translations ? saved : 'EN';
}

function getServerLanguage(): Language {
  return 'EN';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const language = useSyncExternalStore(subscribeToLanguage, getStoredLanguage, getServerLanguage);

  const setLanguage = useCallback((lang: Language) => {
    window.localStorage.setItem('golden_visa_lang', lang);
    window.dispatchEvent(new Event(languageChangeEvent));
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'ZH' ? 'zh-CN' : language.toLowerCase();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] || translations.EN,
        isRTL: language === 'AR',
      }}
    >
      <SiteTranslationBridge />
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
