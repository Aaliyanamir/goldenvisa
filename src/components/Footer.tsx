"use client";

import React from 'react';
import Image from 'next/image';
import { contactInfo } from '../lib/contactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faMessage,
  faPhone,
  faChevronRight,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
  faPinterestP,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

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
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/brightlinkconsulting.uae/', icon: faFacebookF },
    { label: 'Instagram', href: 'https://www.instagram.com/brightlink.consulting/', icon: faInstagram },
    { label: 'TikTok', href: 'https://www.tiktok.com/@brightlink.consulting', icon: faTiktok },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/brightlink-management-consultancy/', icon: faLinkedinIn },
    { label: 'YouTube', href: 'https://www.youtube.com/@brightlinkconsulting', icon: faYoutube },
    { label: 'Twitter / X', href: 'https://twitter.com/BRIGHTLINKCONS1', icon: faXTwitter },
    { label: 'Pinterest', href: 'https://www.pinterest.com/brightlinkconsulting/', icon: faPinterestP },
    { label: 'Telegram', href: 'https://t.me/brightlinkgroup', icon: faTelegram },
  ];

  return (
    <>
      {/* ─── Main Footer ─── */}
      <footer className="site-footer relative isolate overflow-hidden bg-[#121212] text-slate-300 text-xs pt-14 pb-6 px-4 sm:px-6 lg:px-10 border-t border-white/10">
        <div className="relative z-10 max-w-[1720px] mx-auto">

          {/* ─── Main Grid: Brand Left | Contact Right ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">

            {/* ── Column 1: Logo + Description + Social ── */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex flex-col items-start gap-2">
                <Image
                  src="/assets/images/Golden Visa Dubai.png"
                  alt="Golden Visa Dubai"
                  width={1812}
                  height={477}
                  sizes="190px"
                  loading="eager"
                  className="h-auto w-[190px]"
                />
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  UAE Residency &amp; Legal Consultancy
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-slate-300">
                {/* Phone 1 */}
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-[#C5A059]" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>

                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <FontAwesomeIcon icon={faMessage} className="h-3.5 w-3.5 text-[#D4AF37]" />
                  </div>
                  <span>Message us on WhatsApp</span>
                </a>

                {/* Phone 2 */}
                <a
                  href={contactInfo.officePhoneHref}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5 text-[#C5A059]" />
                  </div>
                  <span>{contactInfo.officePhone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contactInfo.generalEmail}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-[#C5A059]" />
                  </div>
                  <span>{contactInfo.generalEmail}</span>
                </a>

                {/* Inquiry Email */}
                <a
                  href={`mailto:${contactInfo.visaEmail}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-amber-500/40 transition-colors shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5 text-[#C5A059]" />
                  </div>
                  <span>{contactInfo.visaEmail}</span>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5 text-[#C5A059]" />
                  </div>
                  <div>
                    <span className="block">Monday – Friday: 9 AM – 6 PM</span>
                    <span className="block">Saturday: 10 AM – 5 PM</span>
                    <span className="block text-slate-500">Sunday: Closed</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5 text-[#C5A059]" />
                  </div>
                  <span className="leading-relaxed">
                    {contactInfo.address}
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
                    <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Tagline */}
              <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
                Golden Visa Dubai is your UAE partner for residency, business setup, and professional services, with clear guidance throughout.
              </p>

              {/* Compliance badge */}
              <div className="flex items-center gap-2 text-slate-400">
                <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4 shrink-0 text-[#C5A059]" />
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
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Home
                    </a>
                  </li>
                  <li>
                    <button onClick={onOpenMegaMenu} className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      All Services
                    </button>
                  </li>
                  <li>
                    <a href="#roadmap" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Visa Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      FAQ
                    </a>
                  </li>
                  <li>
                    <button onClick={onNavigateToBlog} className="hover:text-amber-300 text-amber-400/90 font-semibold transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      News &amp; Blog
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenCalculator} className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Visa Fee Calculator
                    </button>
                  </li>
                  <li>
                    <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
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
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Dubai Golden Visa
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Property Visa (AED 2M+)
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Executive Visa (C-Suite)
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Talent &amp; Scientist Visa
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Family Sponsorship Visa
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      Document Attestation
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      VIP PRO Concierge
                    </a>
                  </li>
                </ul>
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
              Brightlink Management Consultancy LLC is an independent private consultancy licensed by Dubai DET (License No. 1053387), and is not a government authority. All approvals, licences, visas, certificates, and government documents are issued by the relevant UAE authorities.
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
