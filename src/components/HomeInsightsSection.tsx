import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '@/lib/blogData';

export const HomeInsightsSection = () => (
  <section data-scroll-reveal className="bg-white px-5 py-20 sm:px-8 lg:py-24">
    <div className="mx-auto max-w-[1280px]">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#8A6A12]">
            <span className="h-px w-8 bg-[#B8860B]" /> The journal
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-[#1F1F1F] sm:text-4xl lg:text-5xl">
            Read the Latest UAE Golden Visa Insights
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#686868] sm:text-base">
            Practical reading on residency pathways, real estate and UAE document processes.
          </p>
        </div>
        <Link href="/blog" data-scroll-reveal className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#765800] transition hover:text-[#1F1F1F]">
          Explore all insights <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 3).map((post, index) => (
          <article key={post.id} data-scroll-reveal className={`group flex flex-col overflow-hidden rounded-[22px] border border-[#E7E4DC] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:shadow-[0_24px_60px_-40px_rgba(31,31,31,.4)] ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
            <Link href={`/blog/${post.slug}`} className="relative block aspect-[1.62] overflow-hidden bg-[#F1EFE9]" aria-label={`Read ${post.title}`}>
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-white backdrop-blur">
                {post.category}
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-center gap-2 text-xs font-medium text-[#807D75]">
                <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5" /> {post.readTime}
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#B8860B]" />
                <span>{post.day} {post.month} {post.year}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[#1F1F1F]">
                <Link href={`/blog/${post.slug}`} className="transition group-hover:text-[#80600A]">{post.title}</Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#686868]">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-[#765800]">
                Read article <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
