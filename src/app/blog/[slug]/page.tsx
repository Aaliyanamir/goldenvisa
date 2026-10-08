import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock,
  Copy,
  FileCheck,
  FileText,
  Gavel,
  Globe,
  HelpCircle,
  MessageSquare,
  Phone,
  Printer,
  Share2,
  ShieldCheck,
  Sparkles,
  User,
} from 'lucide-react';
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

  // Find 3 related posts
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <StandalonePageFrame currentView="blog">
      <main className="min-h-screen bg-[#FAF9F6] pb-20 pt-[calc(var(--site-header-offset)+2rem)] text-[#15140F] dark:bg-[#07090F] dark:text-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8C6D2D] transition-colors hover:text-amber-800 dark:text-[#D4AF37]"
            >
              <ArrowLeft size={16} /> Back to All Publications
            </Link>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
              <span>Category:</span>
              <span className="rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold text-[#8C6D2D] dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-[#D4AF37]">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Main Card */}
          <article className="overflow-hidden rounded-3xl border border-[#E8D5B5] bg-white shadow-xl dark:border-white/10 dark:bg-[#111827]">
            {/* Hero Banner Image */}
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-[#1a1712]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1280px) 1152px, 100vw"
                className="object-cover opacity-75"
              />
              {/* Subtle top darkening */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
              {/* Bottom readable fade — white-tinted luxury */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#15140F]/85 via-[#15140F]/20 to-transparent" />
              {/* Thin gold shimmer line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10 sm:right-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-amber-200">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C5A059]/50 bg-white/10 px-3 py-1 text-xs backdrop-blur-md text-[#F0D784]">
                    <BadgeCheck size={14} className="text-[#D4AF37]" /> Verified Official Guidance 2026
                  </span>
                </div>
                <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-[#FDFBF7] px-6 py-4 dark:border-white/10 dark:bg-[#151D2A] sm:px-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300 sm:text-sm">
                <span className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8C6D2D] font-bold text-white text-xs">
                    {post.author.charAt(0)}
                  </div>
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} className="text-[#C5A059]" />
                  {post.readTime}
                </span>
                <span>
                  Published: {post.day} {post.month} {post.year}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello, I have a question regarding this article: ${post.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
                >
                  <MessageSquare size={14} /> Ask Expert
                </a>
              </div>
            </div>

            {/* Article Content Layout Grid */}
            <div className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-12">
              {/* Sticky Sidebar Table of Contents */}
              <aside className="lg:col-span-4">
                <div className="sticky top-[calc(var(--site-header-offset)+2rem)] rounded-2xl border border-[#E8D5B5] bg-[#FDFBF7] p-6 dark:border-white/10 dark:bg-[#1A2332]">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8C6D2D] dark:text-[#D4AF37]">
                    <BookOpen size={15} /> Article Sections
                  </div>
                  <nav className="mt-4 flex flex-col gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <a href="#overview" className="flex items-center gap-2 transition-colors hover:text-[#8C6D2D] dark:hover:text-[#D4AF37]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] text-[#8C6D2D] dark:bg-amber-500/20 dark:text-[#D4AF37]">1</span>
                      Executive Summary
                    </a>
                    <a href="#eligibility" className="flex items-center gap-2 transition-colors hover:text-[#8C6D2D] dark:hover:text-[#D4AF37]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] text-[#8C6D2D] dark:bg-amber-500/20 dark:text-[#D4AF37]">2</span>
                      Official 2026 Criteria
                    </a>
                    <a href="#documents" className="flex items-center gap-2 transition-colors hover:text-[#8C6D2D] dark:hover:text-[#D4AF37]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] text-[#8C6D2D] dark:bg-amber-500/20 dark:text-[#D4AF37]">3</span>
                      Required Document List
                    </a>
                    <a href="#procedure" className="flex items-center gap-2 transition-colors hover:text-[#8C6D2D] dark:hover:text-[#D4AF37]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] text-[#8C6D2D] dark:bg-amber-500/20 dark:text-[#D4AF37]">4</span>
                      Step-by-Step Sequence
                    </a>
                    <a href="#consultation" className="flex items-center gap-2 transition-colors hover:text-[#8C6D2D] dark:hover:text-[#D4AF37]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] text-[#8C6D2D] dark:bg-amber-500/20 dark:text-[#D4AF37]">5</span>
                      Expert Legal Assistance
                    </a>
                  </nav>

                  {/* Sidebar Advisory Card */}
                  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/70 p-4 dark:border-amber-500/30 dark:bg-amber-500/10">
                    <h4 className="text-xs font-extrabold uppercase text-[#765719] dark:text-[#D4AF37]">Need Assistance?</h4>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Our senior immigration advisors verify document pre-clearance within 2 hours.</p>
                    <a
                      href={contactInfo.phoneHref}
                      className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#8C6D2D] py-2 text-xs font-bold text-white transition-colors hover:bg-[#735820]"
                    >
                      <Phone size={13} /> Call {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <div className="lg:col-span-8">
                {/* Executive Summary Box */}
                <section id="overview" className="rounded-2xl border border-[#E8D5B5] bg-[#FDFBF7] p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#8C6D2D] dark:text-[#D4AF37]">
                    <Sparkles size={16} /> Executive Summary
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-slate-800 dark:text-slate-200 sm:text-lg font-medium">
                    {post.excerpt}
                  </p>
                </section>

                {/* Section 2: Official 2026 Criteria */}
                <section id="eligibility" className="mt-10">
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    1. Official 2026 Rules & Regulatory Benchmarks
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    Under the latest directives issued by federal UAE immigration and local government authorities (GDRFA, DLD, MOHRE), candidates seeking approval under <strong>{post.title}</strong> must align with standardized verification protocols.
                  </p>

                  <div className="mt-5 grid gap-3">
                    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#1A2332]">
                      <CheckCircle2 size={18} className="mt-0.5 text-[#C5A059] flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Minimum Financial & Qualification Threshold</h4>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Strict adherence to government-mandated valuation certificates or accredited salary contracts.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#1A2332]">
                      <CheckCircle2 size={18} className="mt-0.5 text-[#C5A059] flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">MOFA & Embassy Attestation Protocol</h4>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">All foreign educational, civil, or corporate papers must be fully verified and e-stamped by MOFA UAE.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#1A2332]">
                      <CheckCircle2 size={18} className="mt-0.5 text-[#C5A059] flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Continuous Residency Benefits</h4>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Exemption from the standard 6-month stay requirement abroad, retaining full residency rights.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Required Document List */}
                <section id="documents" className="mt-10">
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    2. Document Checklist & Submission Requirements
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    To ensure 100% first-time approval without government rejections, ensure the following official paperwork is prepared:
                  </p>

                  <div className="mt-4 rounded-2xl border border-[#E8D5B5] bg-[#FAF8F3] p-5 dark:border-white/10 dark:bg-[#151D2A]">
                    <ul className="grid gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      <li className="flex items-center gap-2">
                        <FileCheck size={15} className="text-[#8C6D2D] dark:text-[#D4AF37]" /> Copy of Passport valid for at least 6 months
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck size={15} className="text-[#8C6D2D] dark:text-[#D4AF37]" /> Current UAE Residence Visa & Emirates ID (if already resident)
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck size={15} className="text-[#8C6D2D] dark:text-[#D4AF37]" /> Official DLD Title Deed / MOHRE Contract / DHA Professional License
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck size={15} className="text-[#8C6D2D] dark:text-[#D4AF37]" /> Attested Educational Degrees & MOJ Legal Arabic Translation
                      </li>
                      <li className="flex items-center gap-2">
                        <FileCheck size={15} className="text-[#8C6D2D] dark:text-[#D4AF37]" /> UAE Comprehensive Health Insurance Coverage Certificate
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 4: Step-by-Step Sequence */}
                <section id="procedure" className="mt-10">
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    3. Application Workflow & Timeline
                  </h2>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#1A2332]">
                      <span className="text-xs font-extrabold text-[#8C6D2D] dark:text-[#D4AF37]">STEP 01</span>
                      <h4 className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">Document Audit & Pre-Clearance</h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Our legal team reviews your eligibility documents against government portal rules.</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#1A2332]">
                      <span className="text-xs font-extrabold text-[#8C6D2D] dark:text-[#D4AF37]">STEP 02</span>
                      <h4 className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">Government Nomination Filing</h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Submission to GDRFA, DLD Trustee, or relevant Ministry for official initial approval.</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#1A2332]">
                      <span className="text-xs font-extrabold text-[#8C6D2D] dark:text-[#D4AF37]">STEP 03</span>
                      <h4 className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">VIP Medical & Emirates ID</h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Escorted priority medical fitness screening and biometrics capture.</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#1A2332]">
                      <span className="text-xs font-extrabold text-[#8C6D2D] dark:text-[#D4AF37]">STEP 04</span>
                      <h4 className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">Golden Visa Stamping & Delivery</h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Final 10-Year Golden Visa issuance and physical Emirates ID doorstep delivery.</p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Advisory CTA Box */}
                <section id="consultation" className="mt-12 rounded-3xl border border-[#E8D5B5] bg-gradient-to-br from-[#15140F] to-[#211F1A] p-8 text-white shadow-xl dark:border-amber-500/30">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#D4AF37]">
                    <ShieldCheck size={18} /> Official Legal Advisory
                  </div>
                  <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Ready to initiate your UAE Golden Visa application?
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    Get an instant document eligibility check and itemized fee quotation from our senior case managers.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello Golden Visa Dubai, I am interested in applying for: ${post.title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6D2D] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:from-[#d4af37] hover:to-[#9f7d36]"
                    >
                      <MessageSquare size={16} /> Consult on WhatsApp <ArrowRight size={16} />
                    </a>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white transition-colors hover:bg-white/20"
                    >
                      Book In-Person Meeting
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Related Articles Grid */}
          <section className="mt-16">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                Related Legal Insights
              </h3>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8C6D2D] hover:text-amber-800 dark:text-[#D4AF37]">
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <div key={item.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:border-[#C5A059] dark:border-white/10 dark:bg-[#111827]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-xs">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Clock size={13} className="text-[#C5A059]" />
                      <span>{item.readTime}</span>
                    </div>
                    <h4 className="mt-2 line-clamp-2 text-base font-bold text-slate-900 transition-colors group-hover:text-[#8C6D2D] dark:text-white">
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </StandalonePageFrame>
  );
}
