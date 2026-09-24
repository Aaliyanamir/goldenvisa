"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { blogPosts, BlogPost } from '@/lib/blogData';
import { 
  Calendar, Clock, User, ArrowRight, Sparkles, 
  Search, Filter, ChevronRight, Award, ShieldCheck,
  Building, BookOpen
} from 'lucide-react';

interface BlogMainViewProps {
  onOpenCalculator: () => void;
}

export const BlogMainView: React.FC<BlogMainViewProps> = ({ onOpenCalculator }) => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Golden Visa', 'Real Estate', 'Corporate', 'Regulations'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-white to-[#FAF9F6]">
      
      {/* Editorial Blog Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white overflow-hidden border-b border-amber-500/20">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C5A05944_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-5 shadow-lg shadow-amber-500/10">
            <BookOpen className="w-3.5 h-3.5" />
            <span>UAE Sovereign Insights & Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Latest News & <span className="gold-gradient-text font-serif italic font-bold">Insights</span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
            Authoritative regulatory updates, executive immigration legal analyses, and sovereign wealth residency strategies in Dubai and the UAE.
          </p>

          {/* Search Bar & Quick Categories */}
          <div className="mt-8 w-full max-w-xl relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles on Golden Visas, DLD rules, corporate tax..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-all backdrop-blur-md"
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
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
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
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing <span className="text-slate-900 font-extrabold">{filteredPosts.length}</span> Published Articles
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
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#C5A059] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Image Frame with Date Badge and Official Brand Watermark */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
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
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                    <User className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{post.author}</span>
                    <span className="text-slate-300">•</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#8C6D2D] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                </div>

              </div>

              {/* Card Footer / Action */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => alert(`Opening article: "${post.title}"\nFull legal analysis is available for client review.`)}
                  className="text-xs font-extrabold text-[#8C6D2D] hover:text-amber-800 flex items-center gap-1.5 transition-all cursor-pointer group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenCalculator}
                  className="text-[11px] font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                >
                  Calculate Fees
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* Bottom Fast-Track Consultation Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#E8D5B5] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-50 text-[#C5A059] border border-amber-200">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Have Questions About Your Golden Visa Eligibility?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Connect with our senior case manager for immediate pre-clearance assistance.</p>
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
