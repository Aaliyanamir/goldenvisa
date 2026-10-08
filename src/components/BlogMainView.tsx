'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/blogData';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Filter,
  Globe,
  Landmark,
  Mail,
  Search,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp,
  User,
  X,
} from 'lucide-react';
import { contactInfo } from '@/lib/contactInfo';

interface BlogMainViewProps {
  onOpenCalculator: () => void;
}

export const BlogMainView: React.FC<BlogMainViewProps> = ({ onOpenCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emailSubscribed, setEmailSubscribed] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');

  const categories = ['All', 'Golden Visa', 'Real Estate', 'Corporate', 'Regulations'];
  const trendingTags = ['10-Year Golden Visa', 'DLD Property Rules', 'Mortgaged Property NOC', 'MOJ Legal Translation', 'Family Visa Sponsoring'];

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#15140F] dark:bg-[#07090F] dark:text-[#FAF9F6]">
      {/* ── LUXURY HERO SECTION — White & Warm Brown Mix ──────── */}
      <section className="relative overflow-hidden border-b border-[#E8D5B5] bg-gradient-to-br from-[#FFFEF9] via-[#FDF8EE] to-[#F9F1DC] px-4 pb-16 pt-[calc(var(--site-header-offset)+2rem)] text-[#15140F] shadow-sm sm:px-6 lg:px-8">
        {/* Warm gold glow orbs */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C5A059]/12 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        {/* Subtle warm dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#8C6D2D_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* Bottom gold shimmer border */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/50 bg-white/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#8C6D2D] shadow-sm backdrop-blur-md">
              <Award className="h-3.5 w-3.5 text-[#C5A059]" />
              <span>UAE Sovereign Insights & Legal Journal</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-50/80 px-3.5 py-1 text-xs font-bold text-emerald-700 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Official 2026 GDRFA, DLD & MOHRE Regulations Verified</span>
            </div>
          </div>

          {/* Main Hero Title */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-black tracking-tight text-[#15140F] sm:text-6xl lg:text-7xl leading-[1.08]">
              Authoritative Guidance on <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#8C6D2D] via-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent">
                Golden Visas & UAE Laws
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#5A4A2A] sm:text-base font-medium">
              Executive legal briefings, property investment guidelines, corporate residency structures, and official document attestation procedures in Dubai and the UAE.
            </p>

            {/* Search Bar — warm white glass */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative flex items-center rounded-2xl border border-[#C5A059]/50 bg-white/90 p-2 shadow-[0_4px_24px_rgba(197,160,89,0.18)] backdrop-blur-xl transition-all focus-within:border-[#C5A059] focus-within:ring-2 focus-within:ring-[#C5A059]/25">
                <Search className="pointer-events-none absolute left-5 h-5 w-5 text-[#C5A059]" />
                <input
                  type="text"
                  placeholder="Search 50+ guides on Golden Visas, DLD property NOCs, Wills, Attestation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-3 pl-12 pr-10 text-sm font-medium text-[#15140F] placeholder-[#9B8B6E] focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="mr-2 cursor-pointer text-[#9B8B6E] hover:text-[#15140F]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="hidden flex-shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6D2D] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:from-[#d4af37] sm:flex"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Fee Calculator</span>
                </button>
              </div>

              {/* Trending Tags */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-[#8C6D2D]">
                <span className="inline-flex items-center gap-1 font-extrabold uppercase tracking-wider text-[#8C6D2D]">
                  <TrendingUp className="h-3.5 w-3.5" /> Trending:
                </span>
                {trendingTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearchQuery(tag)}
                    className="cursor-pointer rounded-lg border border-[#C5A059]/40 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-[#765719] transition-colors hover:border-[#C5A059] hover:bg-amber-50"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar — warm cream cards */}
          <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-[#E8D5B5] bg-white/70 p-5 shadow-sm backdrop-blur-md sm:grid-cols-4 lg:gap-6">
            <div className="flex items-center gap-3.5 border-r border-[#E8D5B5] pr-4 last:border-r-0">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-[#C5A059]/40 text-[#8C6D2D]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#15140F] sm:text-xl">50+</div>
                <div className="text-[11px] font-medium text-[#7A6040]">Official Legal Guides</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-r border-[#E8D5B5] pr-4 last:border-r-0">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-[#C5A059]/40 text-[#8C6D2D]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#15140F] sm:text-xl">100%</div>
                <div className="text-[11px] font-medium text-[#7A6040]">UAE Law Compliant</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-r border-[#E8D5B5] pr-4 last:border-r-0">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-[#C5A059]/40 text-[#8C6D2D]">
                <Landmark className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#15140F] sm:text-xl">AED 2M+</div>
                <div className="text-[11px] font-medium text-[#7A6040]">Property Visa Criteria</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 border border-[#C5A059]/40 text-[#8C6D2D]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-black text-[#15140F] sm:text-xl">24/7</div>
                <div className="text-[11px] font-medium text-[#7A6040]">WhatsApp Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection Filter Bar */}
      <section className="sticky top-[var(--site-header-offset)] z-30 border-b border-[#E8D5B5] bg-[#F8F5EE]/95 px-4 py-3.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#07090F]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#8C6D2D] dark:text-[#D4AF37] sm:inline-flex">
              <Filter className="h-3.5 w-3.5" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#C5A059] to-[#8C6D2D] text-white shadow-md'
                    : 'border border-[#E8D5B5] bg-white text-slate-700 hover:bg-amber-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Showing <span className="font-extrabold text-slate-900 dark:text-white">{filteredPosts.length}</span> Articles
          </div>
        </div>
      </section>

      {/* Featured Spotlight Story (Top Feature) */}
      {selectedCategory === 'All' && !searchQuery && featuredPost && (
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#8C6D2D] dark:text-[#D4AF37]">
            <Sparkles className="h-4 w-4" /> Feature Spotlight
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-[#E8D5B5] bg-white shadow-xl transition-all hover:border-[#C5A059] dark:border-white/10 dark:bg-[#111827]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative aspect-[16/10] bg-slate-900 lg:aspect-auto lg:col-span-7 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full border border-amber-300/40 bg-black/60 px-3 py-1 text-xs font-bold text-amber-200 backdrop-blur-md">
                  {featuredPost.category}
                </span>
                <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center rounded-xl border border-amber-200 bg-gradient-to-b from-[#DFBE74] to-[#C5A059] px-3 py-1.5 font-black text-slate-950 shadow-lg">
                  <span className="text-xl font-black leading-none">{featuredPost.day}</span>
                  <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wider leading-none">{featuredPost.month}</span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-[#C5A059]" />
                      {featuredPost.author}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#C5A059]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-[#8C6D2D] dark:text-white sm:text-3xl">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-white/10">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#8C6D2D] transition-all hover:gap-3 hover:text-amber-800 dark:text-[#D4AF37]"
                  >
                    <span>Read Featured Story</span>
                    <ArrowRight className="h-4 w-4 text-[#C5A059]" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenCalculator}
                    className="cursor-pointer text-xs font-bold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Check Eligibility
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* 3-Column Luxury Card Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059] hover:shadow-xl dark:border-white/10 dark:bg-[#111827]"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />

                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-lg border border-amber-500/40 bg-black/60 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur-md">
                      <Sparkles className="h-3 w-3 text-[#D4AF37]" />
                      <span>GV UAE</span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 flex h-14 w-12 flex-col items-center justify-center rounded-xl border border-amber-200 bg-gradient-to-b from-[#DFBE74] to-[#C5A059] font-black text-slate-950 shadow-lg">
                      <span className="text-lg font-black leading-none">{post.day}</span>
                      <span className="mt-1 text-[10px] font-bold uppercase tracking-wider leading-none">{post.month}</span>
                    </div>

                    <div className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-900 shadow-xs backdrop-blur-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <User className="h-3.5 w-3.5 text-[#C5A059]" />
                      <span>{post.author}</span>
                      <span className="text-slate-300">•</span>
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#8C6D2D] dark:text-white">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4 dark:border-white/10">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#8C6D2D] transition-all hover:gap-2 hover:text-amber-800 dark:text-[#D4AF37]"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#C5A059]" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenCalculator}
                    className="cursor-pointer text-[11px] font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    Calculate Fees
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#E8D5B5] bg-white p-12 text-center dark:border-white/10 dark:bg-[#111827]">
            <Search className="mx-auto h-10 w-10 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">No articles found</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Try adjusting your search query or filter settings.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#8C6D2D] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#735820]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <div className="mt-16 rounded-3xl border border-[#E8D5B5] bg-gradient-to-br from-[#15140F] to-[#211F1A] p-8 text-white shadow-xl dark:border-amber-500/20 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#D4AF37]">
                <Mail className="h-3.5 w-3.5" /> UAE Legal Briefing
              </div>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Stay updated on <span className="text-[#D4AF37]">UAE Golden Visa & Legal Laws</span>
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Get weekly sovereign intelligence, DLD property updates, and GDRFA immigration policy alerts delivered straight to your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              {emailSubscribed ? (
                <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-emerald-300">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                  <span className="text-sm font-bold">Thank you! You are now subscribed to UAE Legal Briefings.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate email..."
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-xs text-white placeholder-slate-400 focus:border-[#C5A059] focus:outline-none sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="inline-flex flex-shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6D2D] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:from-[#d4af37] hover:to-[#9f7d36]"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Fast-Track Consultation Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#E8D5B5] bg-white p-8 shadow-lg dark:border-white/10 dark:bg-[#111827] md:flex-row">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3.5 text-[#C5A059] dark:border-amber-500/30 dark:bg-amber-500/10">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Have Questions About Your Golden Visa Eligibility?</h4>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">Connect with our senior case manager for immediate pre-clearance assistance.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenCalculator}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#8C6D2D] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:from-[#d4af37] hover:to-[#9f7d36] md:w-auto"
          >
            <span>Launch Fee Estimator</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
