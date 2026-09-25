"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Calculator, ArrowRight, ShieldCheck, 
  Send, User, Phone, Globe, ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
}

const PATHWAYS = [
  { value: 'Real Estate Investor (2M+ AED)', label: 'Real Estate Investor — AED 2,000,000+' },
  { value: 'Senior Executive (30K+ AED Salary)', label: 'Senior Executive & Director' },
  { value: 'Specialized Talent / Doctor / Scientist', label: 'Specialized Talent — Doctor, Scientist' },
  { value: 'Family Sponsorship Complete', label: 'Family & Dependant Sponsorship' },
  { value: 'Mainland / Freezone Company Setup', label: 'Company Incorporation' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator, onOpenMegaMenu }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [formName, setFormName] = useState('');
  const [formWhatsapp, setFormWhatsapp] = useState('');
  const [formNationality, setFormNationality] = useState('');
  const [formPurpose, setFormPurpose] = useState(PATHWAYS[0].value);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      // Set playback speed slightly faster (1.25x) for lively cinematic motion
      video.playbackRate = 1.25;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.warn("Autoplay muted video:", e);
        });
      }
    }
  }, []);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#D4AF37', '#C5A059', '#FFFFFF'],
    });

    const msg = `Good day,\n\nI would like to request a confidential consultation regarding the UAE 10-Year Golden Visa programme.\n\nApplicant Details:\n• Full Name: ${formName}\n• WhatsApp: ${formWhatsapp}\n• Nationality: ${formNationality || 'Not specified'}\n• Pathway: ${formPurpose}\n\nKindly assign a Senior Case Officer. Thank you.`;

    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/971503853305?text=${encoded}`, '_blank');
      setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <section
      className="relative w-full flex items-center justify-center border-b border-amber-500/15 overflow-hidden bg-[#090D16]"
      style={{ minHeight: '100svh' }}
    >
      {/* ─── Skyline Background Video (User Selected) ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/videos/skyline.mp4?v=2" type="video/mp4" />
          <source src="/assets/videos/skyline.mp4?v=2" type="video/mp4" />
        </video>

        {/* Balanced Dark Overlay: smooth & normal contrast for high readability without being pitch black */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.28) 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 45%, rgba(0,0,0,0.40) 100%)'
          }}
        />
      </div>

      {/* ─── Content ─── */}
      <div
        className="relative z-10 w-full"
        style={{ maxWidth: '1440px', margin: '0 auto', padding: '8rem 1rem 5rem' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative">

            {/* Subtle Golden/Amber Radial Background Glow behind Typography */}
            <div className="absolute -top-14 -left-14 w-[360px] sm:w-[520px] h-[360px] sm:h-[480px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-4">
              Dubai, United Arab Emirates — Authorised Legal Advisory
            </p>

            <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-serif text-white tracking-tight leading-[1.1] font-bold drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              UAE Long-Term Residency
              <br />
              <span className="gold-gradient-text italic font-serif font-extrabold drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                10-Year Golden Visa
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base lg:text-[1.05rem] text-slate-200 leading-relaxed max-w-xl font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Private legal facilitation for property investors, senior executives,
              entrepreneurs and global families seeking full UAE residency — 100% compliant
              with GDRFA and Dubai Land Department directives.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenCalculator}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl gold-btn text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-amber-500/20 group"
              >
                <Calculator className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Calculate Your Visa Fees</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={onOpenMegaMenu}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md"
              >
                <span>Explore All Services</span>
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/15 w-full max-w-sm sm:max-w-md">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tabular-nums drop-shadow-md">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Government Direct</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400 tabular-nums drop-shadow-md">9,800+</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Visas Approved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400 tabular-nums drop-shadow-md">48–72h</div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-tight">Fast-Track Available</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Consultation Form with Sleek Semi-Transparent Glass Look */}
          <div className="lg:col-span-5 w-full">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              style={{
                background: 'rgba(11,15,26,0.60)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}
            >
              <div className="h-0.5 w-full" style={{ background: 'linear-gradient(to right, transparent, #F59E0B, transparent)' }} />

              <div className="p-5 sm:p-7">
                <div className="mb-5">
                  <p className="text-[10px] font-bold tracking-[0.18em] text-amber-400 uppercase mb-1">
                    Confidential Enquiry
                  </p>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    Request a Free Evaluation
                  </h2>
                  <p className="text-[12px] text-slate-400 mt-1">
                    A senior case officer will respond within 2 hours.
                  </p>
                </div>

                <form onSubmit={handleConsultationSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-amber-400/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 focus:border-amber-400 text-white text-sm placeholder-slate-300 font-medium focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-1.5">WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-amber-400/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 000 0000"
                        value={formWhatsapp}
                        onChange={(e) => setFormWhatsapp(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 focus:border-amber-400 text-white text-sm placeholder-slate-300 font-medium focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-1.5">Nationality</label>
                    <div className="relative">
                      <Globe className="w-3.5 h-3.5 text-amber-400/80 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. United Kingdom, Russia, Germany"
                        value={formNationality}
                        onChange={(e) => setFormNationality(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 focus:border-amber-400 text-white text-sm placeholder-slate-300 font-medium focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-1.5">Residency Pathway</label>
                    <div className="relative">
                      <select
                        value={formPurpose}
                        onChange={(e) => setFormPurpose(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-white/25 focus:border-amber-400 text-white text-sm font-medium focus:outline-none transition-all appearance-none cursor-pointer pr-10"
                        style={{ background: '#111827' }}
                      >
                        {PATHWAYS.map((p) => (
                          <option key={p.value} value={p.value} style={{ background: '#111827' }}>
                            {p.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="w-full py-3.5 rounded-xl gold-btn font-extrabold text-[13px] uppercase tracking-widest text-slate-950 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-70 shadow-lg hover:shadow-amber-500/25 active:scale-[0.99]"
                    >
                      {submitted ? (
                        <span>Submitted — We Will Contact You</span>
                      ) : isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                          <span>Get Free Evaluation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>100% Confidential</span>
                  </span>
                  <span>Response within 2 hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
