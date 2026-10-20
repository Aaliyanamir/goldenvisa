"use client";

import React from 'react';
import Image from 'next/image';
import { contactInfo } from '../lib/contactInfo';
import { useLanguage } from '../lib/LanguageContext';
import { localizedPath } from '../lib/locales';
import { siteText } from '../lib/siteCopy';
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
  const { language } = useLanguage();
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
                  src="/assets/images/Golden Visa Dubai.webp"
                  alt="Golden Visa Dubai"
                  width={1812}
                  height={477}
                  sizes="190px"
                  loading="lazy"
                  className="h-auto w-[190px]"
                />
                <span className="text-[10px] text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider">
                  {siteText(language, 'footerDescriptor')}
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
                  <span>{siteText(language, 'footerMessage')}</span>
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
                    <span className="block">{siteText(language, 'footerWeekdays')}</span>
                    <span className="block">{siteText(language, 'footerSaturday')}</span>
                    <span className="block text-slate-500">{siteText(language, 'footerSunday')}</span>
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
                {siteText(language, 'footerTagline')}
              </p>

              {/* Compliance badge */}
              <div className="flex items-center gap-2 text-slate-400">
                <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4 shrink-0 text-[#C5A059]" />
                <span>{siteText(language, 'footerCompliance')}</span>
              </div>
            </div>

            {/* ── Column 2: Navigation + Visa Programs ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {/* Quick Links */}
              <div>
                <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                  {siteText(language, 'footerQuickNav')}
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li>
                    <a href={localizedPath('/', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerHome')}
                    </a>
                  </li>
                  <li>
                    <button onClick={onOpenMegaMenu} className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerAllServices')}
                    </button>
                  </li>
                  <li>
                    <a href={localizedPath('/#roadmap', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerRoadmap')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/#faq', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerFaq')}
                    </a>
                  </li>
                  <li>
                    <button onClick={onNavigateToBlog} className="hover:text-amber-300 text-amber-400/90 font-semibold transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerBlog')}
                    </button>
                  </li>
                  <li>
                    <button onClick={onOpenCalculator} className="hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer text-left">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerCalc')}
                    </button>
                  </li>
                  <li>
                    <a href={contactInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerContact')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Golden Visa Services */}
              <div>
                <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-5 pb-2 border-b border-white/10">
                  {siteText(language, 'footerGoldenServices')}
                </h4>
                <ul className="space-y-3 text-slate-300">
                  <li>
                    <a href={localizedPath('/golden-visa', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerGoldenVisa')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/property-visa', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerPropertyVisa')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/golden-visa', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerExecutiveVisa')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/golden-visa', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerTalentVisa')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/family-visa', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerFamilyVisa')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/attestation', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerAttestation')}
                    </a>
                  </li>
                  <li>
                    <a href={localizedPath('/pro-services', language)} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                      <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 shrink-0 text-amber-500/60 transition-transform group-hover:translate-x-0.5" />
                      {siteText(language, 'footerPro')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ─── Legal Links Row ─── */}
          <div className="py-4 flex items-center justify-center gap-3 flex-wrap text-slate-500 text-[11px] border-b border-white/10">
            <a href={localizedPath('/', language)} className="hover:text-white transition-colors">{siteText(language, 'footerTerms')}</a>
            <span className="text-white/20">|</span>
            <a href={localizedPath('/', language)} className="hover:text-white transition-colors">{siteText(language, 'footerPrivacy')}</a>
            <span className="text-white/20">|</span>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">{siteText(language, 'footerSitemap')}</a>
            <span className="text-white/20">|</span>
            <a href={localizedPath('/', language)} className="hover:text-white transition-colors">{siteText(language, 'footerRefund')}</a>
          </div>

          {/* ─── Copyright ─── */}
          <div className="pt-5 text-center text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Golden Visa Dubai. {siteText(language, 'footerAllRightsReserved')}
          </div>

          {/* ─── Legal Disclaimers ─── */}
          <div className="mt-5 pt-5 border-t border-white/10 space-y-3 text-[10px] sm:text-[11px] text-slate-600 leading-relaxed">
            <p>
              {siteText(language, 'footerDisclaimerDesc')}
            </p>
            <p>
              <strong className="text-slate-500">{siteText(language, 'footerPrivacyTitle')}</strong> {siteText(language, 'footerPrivacyDesc')}
            </p>
            <p>
              <strong className="text-slate-500">{siteText(language, 'footerThirdPartyTitle')}</strong> {siteText(language, 'footerThirdPartyDesc')}
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};
