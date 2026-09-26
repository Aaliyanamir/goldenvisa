"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import {
  Phone, Mail, MapPin, Clock,
  ChevronRight, ShieldCheck, Handshake
} from 'lucide-react';

interface FooterProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  onNavigateToBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCalculator,
  onOpenMegaMenu,
  onNavigateToBlog,
}) => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'TikTok',
      href: 'https://tiktok.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.53V6.78a4.85 4.85 0 0 1-1.02-.09z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon fill="#2A2A2A" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
        </svg>
      ),
    },
    {
      label: 'Twitter / X',
      href: 'https://x.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Pinterest',
      href: 'https://pinterest.com',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Telegram',
      href: 'https://t.me',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
  ];

  const paymentPartners = [
    { label: 'Apple Pay', bg: '#000000', text: 'Apple\nPay' },
    { label: 'Visa', bg: '#1A1F71', text: 'VISA' },
    { label: 'Mastercard', bg: '#EB001B', text: '●●' },
    { label: 'PayPal', bg: '#003087', text: 'PayPal' },
    { label: 'Stripe', bg: '#635BFF', text: 'stripe' },
  ];

  return (
    <>
      {/* ─── Persistent B2B Referral / Executive Partnership Banner ─── */}
      <aside
        aria-label="Executive Partnership Program"
        className="bg-gradient-to-r from-amber-100/80 via-amber-50 to-amber-100/80 dark:from-[#1A1E2C] dark:via-[#232323] dark:to-[#1A1E2C] border-t border-b border-amber-300 dark:border-amber-500/20 py-8 px-4 sm:px-6 lg:px-10 text-slate-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-[1720px] mx-auto text-center flex flex-col items-center gap-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/80 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/25 text-amber-950 dark:text-amber-400 text-[10px] font-black uppercase tracking-widest">
            <Handshake className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" />
            <span>B2B Partner Program</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif">
            Grow Together With Our B2B Referral Program
          </h2>

          <p className="max-w-2xl text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Partner with Golden Visa Dubai through our structured B2B and Corporate Referral Program. Refer clients who need Golden Visa, Family Visa, Attestation, or PRO services and earn tiered commissions with dedicated partner support.
          </p>

          <a
            href={`https://wa.me/971503853305?text=${encodeURIComponent("Hello Partnership Desk, I would like to apply for the Golden Visa Dubai B2B Referral Partner Program.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl gold-btn font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-transform"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            <span>Become a Referral Partner →</span>
          </a>
        </div>
      </aside>

      {/* ─── Main Footer ─── */}
      <footer className="bg-[#1A1A1A] text-slate-300 text-xs pt-14 pb-6 px-4 sm:px-6 lg:px-10 border-t border-white/10">
        <div className="max-w-[1720px] mx-auto">

          {/* ─── Main Grid: Brand Left | Contact Right ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">

            {/* ── Column 1: Logo + Description + Social ── */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-gradient-to-tr from-amber-400/20 to-amber-200/5 border border-amber-400/30 flex items-center justify-center p-1.5 shrink-0">
                  <Image
                    src="/assets/images/Golden Visa-icon.png"
                    alt="Golden Visa Dubai Logo"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <span className="text-xl font-black text-white tracking-tight block font-serif leading-tight">
                    GOLDEN VISA <span className="text-[#C5A059] italic">DUBAI</span>
                  </span>
                  <span className="text-[10px] text-amber-300/80 font-semibold uppercase tracking-wider block mt-0.5">
                    UAE Residency &amp; Legal Consultancy
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    In Trustee For
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-slate-300">
                {/* Phone 1 */}
                <a
                  href="tel:+971503853305"
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <span>+971 50 385 3305</span>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+971503853305"
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <span>+971 50 385 3305</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@goldenvisauae.net"
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <span>info@goldenvisauae.net</span>
                </a>

                {/* Inquiry Email */}
                <a
                  href="mailto:visa@goldenvisauae.net"
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <span>visa@goldenvisauae.net</span>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="block">Monday – Saturday: 9 AM – 6 PM</span>
                    <span className="block text-slate-500">Sunday: Closed</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <span className="leading-relaxed">
                    Zalfa Building, 2nd Street,<br />
                    Al Garhoud, Dubai, United Arab Emirates
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-amber-500/30 transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Tagline */}
              <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
                Golden Visa Dubai, your trusted UAE partner for residency facilitation, professional document clearing, and government liaison services — delivering close guidance every step of the way.
              </p>

              {/* Compliance badge */}
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Compliant with UAE GDRFA &amp; ICP Directives</span>
              </div>
            </div>

            {/* ── Column 2: Navigation + Visa Programs ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {/* Quick Links */}
              <div>
                <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                  Quick Navigation
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Home
                    </a>
                  </li>
                  <li>
                    <button onClick={onOpenMegaMenu} className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      All Services
                    </button>
                  </li>
                  <li>
                    <a href="#roadmap" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Visa Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      FAQ
                    </a>
                  </li>
                  <li>
                    <button onClick={onNavigateToBlog} className="hover:text-amber-300 text-amber-400/90 font-semibold transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      News &amp; Blog
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenCalculator} className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Visa Fee Calculator
                    </button>
                  </li>
                  <li>
                    <a href={`https://wa.me/971503853305`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Golden Visa Services */}
              <div>
                <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                  Golden Visa Services
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Dubai Golden Visa
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Property Visa (AED 2M+)
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Executive Visa (C-Suite)
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Talent &amp; Scientist Visa
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Family Sponsorship Visa
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      Document Attestation
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-amber-500/60 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      VIP PRO Concierge
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ─── Payment Partners Strip ─── */}
          <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider shrink-0">
              Our Payment Partners &amp; Networks
            </span>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {/* Apple Pay */}
              <div className="h-8 px-3 bg-black rounded-md flex items-center justify-center border border-white/20">
                <span className="text-white text-[10px] font-black tracking-tight leading-none">
                  <span className="font-light">⌘</span> Pay
                </span>
              </div>
              {/* Visa */}
              <div className="h-8 px-3 bg-[#1A1F71] rounded-md flex items-center justify-center border border-white/20">
                <span className="text-white text-sm font-black italic tracking-tight">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="h-8 px-3 bg-white rounded-md flex items-center justify-center gap-0.5 border border-white/20">
                <div className="w-5 h-5 rounded-full bg-[#EB001B] opacity-90" />
                <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-90 -ml-2" />
              </div>
              {/* PayPal */}
              <div className="h-8 px-3 bg-white rounded-md flex items-center justify-center border border-white/20">
                <span className="text-[#003087] text-[10px] font-black tracking-tight">Pay<span className="text-[#009cde]">Pal</span></span>
              </div>
              {/* American Express */}
              <div className="h-8 px-3 bg-[#007BC1] rounded-md flex items-center justify-center border border-white/20">
                <span className="text-white text-[10px] font-black tracking-tighter">AMEX</span>
              </div>
              {/* Stripe */}
              <div className="h-8 px-3 bg-[#635BFF] rounded-md flex items-center justify-center border border-white/20">
                <span className="text-white text-[10px] font-black tracking-wider">stripe</span>
              </div>
            </div>
          </div>

          {/* ─── Legal Links Row ─── */}
          <div className="py-4 flex items-center justify-center gap-3 flex-wrap text-slate-500 text-[11px] border-b border-white/10">
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>

          {/* ─── Copyright ─── */}
          <div className="pt-5 text-center text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Golden Visa Dubai. All Rights Reserved
          </div>

          {/* ─── Legal Disclaimers ─── */}
          <div className="mt-5 pt-5 border-t border-white/10 space-y-3 text-[10px] sm:text-[11px] text-slate-600 leading-relaxed">
            <p>
              Golden Visa Dubai is an independent private consultancy and trusted professional services provider, authorised by the Dubai Department of Economy and Tourism (DET). License No: 1097307. We are not a government authority and are not affiliated with any UAE government entity. All final approvals, licences, visas, certifications, and government documents are issued by the relevant UAE authorities. Our packages may include Brightlink Meta Partners services. Terms and conditions of third-party services may apply.
            </p>
            <p>
              <strong className="text-slate-500">Privacy:</strong> We respect your privacy and handle personal information and documents with appropriate care. Information is used for the purpose of providing and facilitating the services requested and is handled in accordance with applicable regulations.
            </p>
            <p>
              <strong className="text-slate-500">Third-Party Disclaimer:</strong> This website is not affiliated with, sponsored by, or endorsed by Google LLC Meta Platforms, Inc. (Facebook) or their subsidiaries. Any references to third-party companies, platforms, trademarks, or services are only for identification or informative purposes only.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};
