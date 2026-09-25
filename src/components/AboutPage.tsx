"use client";

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck, Award, Users, Star, TrendingUp,
  CheckCircle2, MapPin, Phone, Mail, ArrowRight,
  Building2, Clock, Globe2, HeartHandshake, Sparkles, BadgeCheck
} from 'lucide-react';

interface AboutPageProps {
  onOpenCalculator: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCalculator }) => {
  const stats = [
    { value: '15+', label: 'Years of Experience', icon: Award },
    { value: '4.9★', label: 'Client Rating', icon: Star },
    { value: '2,400+', label: 'Visas Approved', icon: BadgeCheck },
    { value: '98%', label: 'Approval Success Rate', icon: TrendingUp },
  ];

  const strengths = [
    {
      icon: ShieldCheck,
      title: 'Officially Licensed',
      desc: 'Authorised by the Dubai Department of Economy & Tourism (DET). License No: 1097307.',
    },
    {
      icon: Globe2,
      title: 'Global Client Base',
      desc: 'Clients from 90+ nationalities across Europe, Asia, Americas, and the Gulf trust us for UAE residency.',
    },
    {
      icon: Clock,
      title: 'VIP 48–72h Fast-Track',
      desc: 'Dedicated priority processing pathway for high-net-worth individuals and corporate executives.',
    },
    {
      icon: HeartHandshake,
      title: 'Family-First Approach',
      desc: 'We handle complete family unit applications — spouses, children, parents — in a single coordinated process.',
    },
    {
      icon: Building2,
      title: 'DLD & GDRFA Direct Access',
      desc: 'Direct liaison with Dubai Land Department and GDRFA, bypassing public queues entirely.',
    },
    {
      icon: Users,
      title: 'Dedicated Case Officer',
      desc: 'Every client gets a named senior case officer who manages the file from start to Emirates ID delivery.',
    },
  ];

  const teamMembers = [
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Senior Immigration Consultant',
      exp: '12 Years',
      badge: 'GDRFA Accredited',
      avatar: '/assets/images/Golden Visa-icon.png',
    },
    {
      name: 'Sarah Wellington',
      role: 'Executive Visa Specialist',
      exp: '9 Years',
      badge: 'MOHRE Fast-Lane Expert',
      avatar: '/assets/images/Golden Visa-icon.png',
    },
    {
      name: 'Dr. Khalid Ibrahim',
      role: 'Legal PRO & Document Consultant',
      exp: '15 Years',
      badge: 'MOFA Certified',
      avatar: '/assets/images/Golden Visa-icon.png',
    },
  ];

  const certifications = [
    'Dubai DET Licensed Business',
    'GDRFA Authorised Partner',
    'ICP Registered Consultant',
    'Dubai Land Department (DLD) Registered',
    'MOHRE Certified Agency',
    'Ministry of Justice Approved Translator',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#07090F] text-slate-900 dark:text-white">

      {/* ── Hero Banner ── */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-10 bg-[#0D1117] text-white overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A05933_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
        {/* Amber glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1720px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                <span>About Golden Visa Dubai</span>
              </div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight text-white">
                About <span className="text-[#C5A059] font-serif italic">Brightlink</span> —<br />
                Your Trusted UAE<br />
                <span className="text-[#C5A059]">Consultancy</span>
              </h1>
              <p className="mt-6 text-slate-300 text-base leading-relaxed max-w-xl">
                Golden Visa Dubai is the UAE's premier residency facilitation partner. We have successfully guided over 2,400 investors, entrepreneurs, executives, and families to secure their 10-Year UAE Golden Visa — with a 98% approval success rate.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenCalculator}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
                  Calculate My Visa Fees
                </button>
                <a
                  href="https://wa.me/971503853305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Speak to a Consultant
                </a>
              </div>
            </div>

            {/* Right: Logo card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[320px] sm:w-[380px]">
                <div className="rounded-3xl bg-gradient-to-br from-[#1A1E2C] to-[#0D1117] border border-amber-500/20 p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center p-2 shrink-0">
                      <Image src="/assets/images/Golden Visa-icon.png" alt="Golden Visa Dubai" width={64} height={64} className="object-contain" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white font-serif">GOLDEN VISA</div>
                      <div className="text-[#C5A059] font-black text-xl font-serif italic">DUBAI</div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">UAE Residency & Legal Consultancy</div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {certifications.slice(0, 4).map((cert, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>Al Garhoud, Dubai, United Arab Emirates</span>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-[#C5A059] text-slate-950 text-xs font-black shadow-lg">
                  DET Licensed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="py-14 px-4 sm:px-6 lg:px-10 bg-[#FAF9F6] dark:bg-[#0B0F19] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const IconComp = s.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 mb-4">
                    <IconComp className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Strong Foundation ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#07090F]">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image / visual */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-[#0D1117] to-[#1A1E2C] p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/3 border border-white/8">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-300 leading-tight font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl bg-emerald-600 text-white shadow-xl">
                <div className="text-xl font-black">1,520</div>
                <div className="text-[10px] font-bold opacity-90">Applications This Year</div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-[#8C6D2D] dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-5">
                <Award className="w-3.5 h-3.5" />
                Officially Licensed for Government Applications
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                A Strong Foundation Builds a{' '}
                <span className="gold-gradient-text font-serif italic">Strong Foundation</span>
              </h2>
              <p className="mt-5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Founded with a singular mission — to make UAE Golden Visa obtainment seamless and stress-free — our consultancy has built deep institutional relationships with GDRFA, ICP, Dubai Land Department, and MOHRE. Every file we handle is backed by our 98% approval track record.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Whether you are a property investor from London, a senior executive relocating from Singapore, or a family seeking permanent UAE residency, our dedicated case officers handle everything — from first document audit to final Emirates ID delivery at your door.
              </p>
              <div className="mt-7 space-y-2.5">
                {[
                  'Direct government portal access — no middlemen, no delays',
                  'VIP medical and biometric fast-track (48–72 hours)',
                  'Complete family sponsorship in a single coordinated application',
                  'Door-to-door Emirates ID collection and delivery service',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={onOpenCalculator}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-md"
              >
                <span>Calculate My Fees</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Strength in Numbers ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 bg-[#F8F9FA] dark:bg-[#0B0F19] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-[1720px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 text-[#8C6D2D] dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Our Strength in Numbers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Clients Choose <span className="gold-gradient-text font-serif italic">Golden Visa Dubai</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Trusted by investors, executives, medical professionals, and families across 90+ nationalities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s, i) => {
              const IconComp = s.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white dark:bg-[#0E1320] border border-slate-200 dark:border-white/10 hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-800/40 text-[#C5A059] w-fit mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partner Trusted Section ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 bg-[#0D1117] text-white">
        <div className="max-w-[1720px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
                <HeartHandshake className="w-3.5 h-3.5" />
                Your Trusted Partner for Business, Residency & Professional Services in the UAE
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Your Goals Matter to Us —<br />
                <span className="text-[#C5A059] font-serif italic">Zero Compromise</span>
              </h2>
              <p className="mt-5 text-slate-300 text-sm leading-relaxed">
                From the moment you contact us to the day you receive your physical Emirates ID, our team is your dedicated liaison — managing every interaction with GDRFA, ICP, DLD, and MOHRE on your behalf. No queues. No confusion. No delays.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Nationalities Served', value: '90+' },
                  { label: 'Avg. Approval Time', value: '4 Days' },
                  { label: 'Family Files', value: '800+' },
                  { label: 'Partner Agents', value: '120+' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl font-black text-[#C5A059]">{item.value}</div>
                    <div className="text-xs text-slate-400 font-semibold mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={onOpenCalculator}
                  className="px-6 py-3.5 rounded-xl gold-btn font-extrabold text-xs uppercase tracking-wider cursor-pointer shadow-lg flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
                  Start My Application
                </button>
                <a
                  href="https://wa.me/971503853305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Team Cards */}
            <div className="space-y-4">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 overflow-hidden">
                    <Image src={member.avatar} alt={member.name} width={56} height={56} className="object-contain p-2" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-sm">{member.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{member.role}</div>
                    <div className="text-[10px] text-[#C5A059] font-semibold mt-1">{member.badge}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-lg font-black text-[#C5A059]">{member.exp}</div>
                    <div className="text-[10px] text-slate-500">Experience</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA Banner ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 bg-white dark:bg-[#07090F] border-t border-slate-200 dark:border-white/10">
        <div className="max-w-[1720px] mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-[#0D1117] to-[#1A1E2C] p-10 sm:p-14 border border-amber-500/20 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A05933_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                Start Your Dubai Business With Confidence
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Top Consultancy with{' '}
                <span className="text-[#C5A059] font-serif italic">Full Services</span>{' '}
                and Dedicated Support
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                From Golden Visa to Emirates ID to PRO services — we handle everything, so you can focus on building your life and business in the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={onOpenCalculator}
                  className="px-8 py-4 rounded-xl gold-btn font-extrabold text-sm uppercase tracking-wider cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
                  Calculate My Fees — Free
                </button>
                <a
                  href="https://wa.me/971503853305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +971 50 385 3305
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>98% Approval Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>2,400+ Visas Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>VIP 48–72h Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
