import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { headers } from 'next/headers';
import { LanguageProvider } from '@/lib/LanguageContext';
import { SiteTranslationBridge } from '@/components/SiteTranslationBridge';
import { isLocaleCode, localeHtmlLanguages, localeLanguages, localeOpenGraphLanguages } from '@/lib/locales';
import { getRouteSeo } from '@/lib/seoContent';
import "./globals.css";
import "@/components/service-pages/service-pages.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = 'https://brightlinkconsulting.ae';

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get('x-site-locale') ?? 'en';
  const locale = isLocaleCode(localeHeader) ? localeHeader : 'en';
  const path = requestHeaders.get('x-site-path') ?? '/';
  const localizedUrl = (code: string) => `${siteUrl}/${code}${path === '/' ? '' : path}`;
  const seoContent = getRouteSeo(path, locale);

  return {
  title: seoContent.title,
  description: seoContent.description,
  keywords: seoContent.keywords || "UAE Golden Visa, Dubai Golden Visa 2026, 10 year residency UAE, GDRFA, DLD, real estate investor visa, UAE long term residency",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: localizedUrl(locale),
    languages: {
      en: localizedUrl('en'),
      ar: localizedUrl('ar'),
      ru: localizedUrl('ru'),
      de: localizedUrl('de'),
      es: localizedUrl('es'),
      fr: localizedUrl('fr'),
      tr: localizedUrl('tr'),
      'zh-CN': localizedUrl('zh'),
      'x-default': localizedUrl('en'),
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/site-icon.png",
  },
  openGraph: {
    title: seoContent.title,
    description: seoContent.description,
    url: localizedUrl(locale),
    siteName: "Golden Visa Dubai",
    locale: localeOpenGraphLanguages[locale],
    type: "website",
  },
  };
}

// ─── REPLACE THESE WITH YOUR REAL IDs ───
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID
const TAWKTO_PROPERTY_ID = "your_property_id"; // Replace with your Tawk.to property ID  
const TAWKTO_WIDGET_ID = "your_widget_id";     // Replace with your Tawk.to widget ID
// ────────────────────────────────────────

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get('x-site-locale') ?? 'en';
  const locale = isLocaleCode(localeHeader) ? localeHeader : 'en';
  const language = localeLanguages[locale];

  return (
    <html lang={localeHtmlLanguages[locale]} dir={language === 'AR' ? 'rtl' : 'ltr'} className={`${poppins.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* ─── Google Analytics 4 ─── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden">
        <LanguageProvider language={language}>
          {children}
          <SiteTranslationBridge />
        </LanguageProvider>

        {/* ─── Tawk.to Live Chat Widget ─── */}
        {/* Replace property_id and widget_id with your actual Tawk.to values from tawk.to dashboard */}
        <Script id="tawkto-chat" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/${TAWKTO_PROPERTY_ID}/${TAWKTO_WIDGET_ID}';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
