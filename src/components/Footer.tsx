"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import { 
  Building2, Phone, Mail, MapPin, 
  ShieldCheck, ArrowUpRight 
} from 'lucide-react';

interface FooterProps {
  onOpenCalculator: () => void;
  onOpenMegaMenu: () => void;
  onNavigateToBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCalculator, 
  onOpenMegaMenu,
  onNavigateToBlog 
}) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0F172A] text-slate-300 text-xs pt-16 pb-28 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden p-1.5 bg-amber-500/10 border border-amber-500/30">
                <Image 
                  src="/assets/images/Golden Visa-icon.png" 
                  alt="Golden Visa Emblem" 
                  width={48} 
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight block">
                  GOLDEN VISA <span className="text-[#C5A059] font-serif italic">UAE</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Sovereign Residency Portal
                </span>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Official sovereign facilitation desk for UAE 10-Year Golden Visas, property residency approvals, family sponsorship, and corporate business formation in Dubai.
            </p>

            <div className="pt-2">
              <span className="text-slate-400 text-xs block">
                Copyright &copy; goldenvisauae.net
              </span>
            </div>
          </div>

          {/* Column 2: Get in Touch (Exact Details from User Screenshot) */}
          <div>
            <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3.5 text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Zalfa building 2nd street<br />
                  Al Garhoud, Dubai UAE
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:info@goldenvisauae.net" className="hover:text-white transition-colors">
                  info@goldenvisauae.net
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+971503853305" className="hover:text-white font-semibold transition-colors">
                  +971 50 385 3305
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: HELP (Exact Details from User Screenshot + Blog) */}
          <div>
            <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-4">
              HELP & RESOURCES
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#C5A059] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#C5A059] transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <button 
                  onClick={onNavigateToBlog} 
                  className="hover:text-[#C5A059] transition-colors text-left font-semibold text-amber-300/90 cursor-pointer"
                >
                  Latest News & Blogs
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#C5A059] transition-colors text-left cursor-pointer">
                  Eligibility Criteria
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Links (Exact Details from User Screenshot) */}
          <div>
            <h4 className="text-[#C5A059] font-extrabold uppercase tracking-wider text-xs mb-4">
              Links
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#C5A059] transition-colors text-left cursor-pointer">
                  Golden Visa Sharjah
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#C5A059] transition-colors text-left cursor-pointer">
                  Golden Visa Ajman
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#C5A059] transition-colors text-left cursor-pointer">
                  Golden Visa Property Dubai UAE
                </button>
              </li>
              <li>
                <button onClick={onOpenCalculator} className="hover:text-[#C5A059] transition-colors text-left cursor-pointer">
                  Student Golden Visa
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Government Accredited PRO & Sovereign Residency Liaison Service</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">ICP & GDRFA Schedule</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
