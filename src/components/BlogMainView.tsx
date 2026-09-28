"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { blogPosts, BlogPost } from '@/lib/blogData';
import { contactInfo } from '@/lib/contactInfo';
import { ArrowRight, BookOpen, Clock, MessageSquare, Search, ShieldCheck, Sparkles, User, X } from 'lucide-react';

interface BlogMainViewProps {
  onOpenCalculator: () => void;
}

export const BlogMainView: React.FC<BlogMainViewProps> = ({ onOpenCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!selectedPost) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedPost(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPost]);

  const categories = ['All', 'Golden Visa', 'Real Estate', 'Corporate', 'Regulations'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-white to-[#FAF9F6] dark:from-[#07090F] dark:via-[#0E1320] dark:to-[#07090F]">
      
      {/* Editorial Blog Header Banner */}
      <section className="relative pt-10 pb-12 px-4 sm:px-6 lg:px-8 bg-[#F8F5EE] text-slate-900 overflow-hidden border-b border-[#E8D5B5] dark:bg-[#0F172A] dark:text-white dark:border-amber-500/20">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#C5A05933_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#765719] dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-5 shadow-lg shadow-amber-500/10">
            <BookOpen className="w-3.5 h-3.5" />
            <span>UAE Sovereign Insights & Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Latest News & <span className="gold-gradient-text font-serif italic font-bold">Insights</span>
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Authoritative regulatory updates, executive immigration legal analyses, and sovereign wealth residency strategies in Dubai and the UAE.
          </p>

          {/* Search Bar & Quick Categories */}
          <div className="mt-8 w-full max-w-xl relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-500 dark:text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles on Golden Visas, DLD rules, corporate tax..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white hover:bg-white focus:bg-white border border-slate-300 text-slate-900 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-amber-500/20 transition-all dark:bg-white/10 dark:hover:bg-white/15 dark:focus:bg-white/20 dark:border-white/20 dark:text-white dark:placeholder-slate-400 dark:focus:ring-0"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'gold-btn shadow-md text-slate-950 font-extrabold'
                    : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 dark:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Blog Cards Grid (Screenshot Reference Precision with Modern Agency Polish) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-white/10">
          <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            Showing <span className="text-slate-900 dark:text-white font-extrabold">{filteredPosts.length}</span> Published Articles
          </div>
          <button
            onClick={onOpenCalculator}
            className="text-xs font-bold text-[#8C6D2D] hover:text-amber-800 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Need Custom Fee Guidance?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3-Column Luxury Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group relative bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#C5A059] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Image Frame with Date Badge and Official Brand Watermark */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20"></div>

                  {/* Golden Visa UAE Corner Badge (Matching user reference layout) */}
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold text-amber-300">
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                    <span>GV UAE</span>
                  </div>

                  {/* Golden Date Stamp Badge (Matching Reference Screenshot: Day on Top, Month on Bottom) */}
                  <div className="absolute bottom-3 right-3 z-10 w-12 h-14 rounded-xl bg-gradient-to-b from-[#DFBE74] to-[#C5A059] text-slate-950 flex flex-col items-center justify-center font-black shadow-lg shadow-black/30 border border-amber-200">
                    <span className="text-lg leading-none font-black">{post.day}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider leading-none mt-1">{post.month}</span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {post.category}
                  </div>
                </div>

                {/* Article Card Content */}
                <div className="p-6">
                  
                  {/* Author Line */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-3">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{post.author}</span>
                    <span className="text-slate-300">•</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-[#8C6D2D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                </div>

              </div>

              {/* Card Footer / Action */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-extrabold text-[#8C6D2D] hover:text-amber-800 flex items-center gap-1.5 transition-all cursor-pointer group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenCalculator}
                  className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Calculate Fees
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Bottom Fast-Track Consultation Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E8D5B5] dark:border-white/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-50 text-[#C5A059] border border-amber-200">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Have Questions About Your Golden Visa Eligibility?</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Connect with our senior case manager for immediate pre-clearance assistance.</p>

          {selectedPost && (
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6">
              <button
                type="button"
                aria-label="Close article details"
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              />

              <article
                role="dialog"
                aria-modal="true"
                aria-labelledby="article-dialog-title"
                className="relative z-10 flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#E8D5B5] bg-white text-slate-900 shadow-2xl dark:border-white/10 dark:bg-[#111827] dark:text-white"
              >
                <header className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-3.5 dark:border-white/10 sm:px-6">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#8C6D2D] dark:text-amber-400">Article details</p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{selectedPost.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    aria-label="Close article details"
                    className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </header>

                <div className="min-h-0 flex-1 overflow-y-auto">
                  <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      fill
                      sizes="(min-width: 672px) 640px, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="px-5 py-5 sm:px-7 sm:py-6">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-[#C5A059]" />{selectedPost.author}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#C5A059]" />{selectedPost.readTime}</span>
                      <span>{selectedPost.day} {selectedPost.month} {selectedPost.year}</span>
                    </div>

                    <h2 id="article-dialog-title" className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-3xl">
                      {selectedPost.title}
                    </h2>

                    <section className="mt-5 rounded-xl border border-[#E8D5B5] bg-[#FDFBF7] p-4 dark:border-white/10 dark:bg-white/5 sm:p-5">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#8C6D2D] dark:text-amber-400">Article summary</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{selectedPost.excerpt}</p>
                    </section>

                    <p className="mt-4 text-xs leading-6 text-slate-500 dark:text-slate-400">
                      Requirements can vary by applicant and may change with UAE authority guidance. Confirm current criteria and documents before applying.
                    </p>
                  </div>
                </div>

                <footer className="flex shrink-0 flex-col gap-2 border-t border-slate-200 bg-white/95 p-4 dark:border-white/10 dark:bg-[#111827]/95 sm:flex-row sm:justify-end sm:px-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPost(null);
                      onOpenCalculator();
                    }}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg gold-btn px-4 text-sm font-bold text-slate-950"
                  >
                    Calculate fees <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={`${contactInfo.whatsappHref}?text=${encodeURIComponent(`Hello Golden Visa Dubai, I have a question about: ${selectedPost.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
                  >
                    <MessageSquare className="h-4 w-4" /> Ask about this article
                  </a>
                </footer>
              </article>
            </div>
          )}
            </div>
          </div>
          <button
            onClick={onOpenCalculator}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl gold-btn text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Launch Fee Estimator</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </section>

    </div>
  );
};
