import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import { StandalonePageFrame } from '@/components/StandalonePageFrame';
import { blogPosts } from '@/lib/blogData';
import { contactInfo } from '@/lib/contactInfo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: 'Article not found | Golden Visa Dubai' };
  return {
    title: `${post.title} | Golden Visa Dubai`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <StandalonePageFrame currentView="blog">
      <main className="min-h-screen bg-[#F8F7F3] px-4 pb-16 pt-[calc(var(--site-header-offset)+2rem)] text-slate-900 dark:bg-[#0B0F19] dark:text-white sm:px-6">
        <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#E8D5B5] bg-white shadow-xl dark:border-white/10 dark:bg-[#111827]">
          <div className="relative aspect-[16/8] w-full bg-slate-900">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-full border border-amber-300/50 bg-black/55 px-3 py-1.5 text-xs font-bold text-amber-200 backdrop-blur sm:bottom-7 sm:left-8">{post.category}</span>
          </div>

          <div className="px-5 py-7 sm:px-9 sm:py-9">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#8C6D2D] transition-colors hover:text-amber-800">
              <ArrowLeft size={16} />All articles
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5"><User size={15} className="text-[#C5A059]" />{post.author}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={15} className="text-[#C5A059]" />{post.readTime}</span>
              <span>{post.day} {post.month} {post.year}</span>
            </div>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">{post.title}</h1>
            <section className="mt-7 rounded-xl border border-[#E8D5B5] bg-[#FDFBF7] p-5 dark:border-white/10 dark:bg-white/5 sm:p-7">
              <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#8C6D2D] dark:text-amber-400">Article overview</h2>
              <p className="mt-3 text-base leading-8 text-slate-700 dark:text-slate-300">{post.excerpt}</p>
            </section>
            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Requirements depend on your circumstances and the latest guidance from the relevant UAE authority. Before applying, confirm your route, current documents, official charges and processing sequence for your case.
            </p>
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 dark:border-white/10 sm:flex-row">
              <Link href="/blog" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5">
                Browse more articles <ArrowRight size={15} />
              </Link>
              <a
                href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello Golden Visa Dubai, I have a question about: ${post.title}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#8C6D2D] px-5 text-sm font-bold text-white transition-colors hover:bg-[#735820]"
              >
                Ask about this topic <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </article>
      </main>
    </StandalonePageFrame>
  );
}
