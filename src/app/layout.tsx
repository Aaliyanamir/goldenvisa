import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "UAE Golden Visa Dubai | 10-Year Residency & Legal Advisory",
  description: "Authorised private legal advisory for UAE 10-Year Golden Visa — Real Estate Investors, Senior Executives, Specialized Talents & Families. GDRFA & DLD facilitated. Fast-track 48–72h processing.",
  keywords: "UAE Golden Visa, Dubai Golden Visa 2026, 10 year residency UAE, GDRFA, DLD, real estate investor visa, UAE long term residency",
  icons: {
    icon: "/assets/images/Golden Visa-icon.png",
  },
  openGraph: {
    title: "UAE Golden Visa Dubai | 10-Year Residency Advisory",
    description: "Private legal facilitation for UAE Golden Visa. Property investors, executives, and global families. GDRFA & DLD authorized.",
    url: "https://goldenvisauae.net",
    siteName: "Golden Visa Dubai",
    locale: "en_US",
    type: "website",
  },
};

// ─── REPLACE THESE WITH YOUR REAL IDs ───
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID
const TAWKTO_PROPERTY_ID = "your_property_id"; // Replace with your Tawk.to property ID  
const TAWKTO_WIDGET_ID = "your_widget_id";     // Replace with your Tawk.to widget ID
// ────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

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
      <body className="min-h-screen bg-white text-slate-900 antialiased overflow-x-hidden">
        {children}

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
