import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';
import { localeCodes } from '@/lib/locales';

const siteUrl = 'https://brightlinkconsulting.ae';
const staticPaths = [
  '/',
  '/about',
  '/amer-center',
  '/attestation',
  '/blog',
  '/career',
  '/check-visa-status-uae',
  '/contact-us',
  '/dld-trustee-services',
  '/emirates-id',
  '/family-visa',
  '/golden-visa',
  '/iloe',
  '/legal-translation',
  '/maid-visa',
  '/near-me/visa-medical-emirates-id-location',
  '/near-me/visa-medical-emirates-id-locations',
  '/new-born',
  '/poa',
  '/pro-services',
  '/property-revaluation',
  '/property-visa',
  '/wills-last-testament',
];
const paths = [...staticPaths, ...blogPosts.map((post) => `/blog/${post.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return localeCodes.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === '/' ? '' : path}`,
      alternates: {
        languages: Object.fromEntries(
          localeCodes.map((alternateLocale) => [
            alternateLocale === 'zh' ? 'zh-CN' : alternateLocale,
            `${siteUrl}/${alternateLocale}${path === '/' ? '' : path}`,
          ]),
        ),
      },
    })),
  );
}
