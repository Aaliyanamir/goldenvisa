"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationData } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('EN');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('golden_visa_lang', lang);
      document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang.toLowerCase();
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('golden_visa_lang') as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
      document.documentElement.dir = saved === 'AR' ? 'rtl' : 'ltr';
      document.documentElement.lang = saved.toLowerCase();
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] || translations.EN,
        isRTL: language === 'AR',
      }}
    >
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
