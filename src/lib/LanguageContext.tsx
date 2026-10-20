"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { Language, TranslationData } from './translations';
import { translations } from './translations';
import { blogPosts, localizeBlogPost } from './blogData';
import { isLocaleCode, languageLocales, localeCodes, localeHtmlLanguages, localeLanguages, localizedPath } from './locales';
import { getRouteSeo } from './seoContent';

const siteUrl = 'https://brightlinkconsulting.ae';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationData;
  isRTL: boolean;
  localizeHref: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; language: Language }> = ({ children, language }) => {
  const pathname = usePathname();
  const [activeLanguage, setActiveLanguage] = useState(language);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    const updateFromPathname = (currentPathname: string) => {
      const locale = currentPathname.split('/')[1]?.toLowerCase();
      if (locale && isLocaleCode(locale)) {
        setActiveLanguage(localeLanguages[locale]);
      }
    };

    updateFromPathname(pathname);
    const handlePopState = () => updateFromPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLanguages[languageLocales[activeLanguage]];
    document.documentElement.dir = activeLanguage === 'AR' ? 'rtl' : 'ltr';

    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments[0] && isLocaleCode(segments[0])) segments.shift();
    const path = `/${segments.join('/')}`.replace(/\/$/, '') || '/';
    const locale = languageLocales[activeLanguage];
    const blogSlug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : '';
    const blogPost = blogPosts.find((post) => post.slug === blogSlug);
    const blogMetadata = blogPost ? localizeBlogPost(blogPost, activeLanguage) : null;
    const title = blogMetadata
      ? `${blogMetadata.title} | Golden Visa Dubai`
      : getRouteSeo(path, locale).title;
    const description = blogMetadata?.excerpt ?? getRouteSeo(path, locale).description;
    const localizedUrl = (code: string) => `${siteUrl}/${code}${path === '/' ? '' : path}`;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', localizedUrl(locale));
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', localizedUrl(locale));

    for (const alternateLocale of localeCodes) {
      const languageCode = alternateLocale === 'zh' ? 'zh-CN' : alternateLocale;
      const link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${languageCode}"]`);
      link?.setAttribute('href', localizedUrl(alternateLocale));
    }
    document.querySelector<HTMLLinkElement>('link[rel="alternate"][hreflang="x-default"]')
      ?.setAttribute('href', localizedUrl('en'));
  }, [activeLanguage, pathname]);

  return (
    <LanguageContext.Provider
      value={{
        language: activeLanguage,
        setLanguage: setActiveLanguage,
        t: translations[activeLanguage],
        isRTL: activeLanguage === 'AR',
        localizeHref: (path: string) => localizedPath(path, activeLanguage),
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
