"use client";

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  X, CheckCircle2, FileText, ArrowRight, ShieldCheck, 
  Sparkles, Building2, UserCheck, HeartHandshake, Award 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface VisaCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Currency = 'AED' | 'USD' | 'EUR' | 'GBP';
type CategoryKey = 'investor' | 'executive' | 'talent' | 'family';

export const VisaCalculatorModal: React.FC<VisaCalculatorModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  const [category, setCategory] = useState<CategoryKey>('investor');
  const [propertyValue, setPropertyValue] = useState<number>(2500000);
  const [salary, setSalary] = useState<number>(35000);
  const [dependents, setDependents] = useState<number>(1);
  const [isVipSpeed, setIsVipSpeed] = useState<boolean>(true);
  const [currency, setCurrency] = useState<Currency>('AED');

  const rates: Record<Currency, number> = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215,
  };

  const currencySymbols: Record<Currency, string> = {
    AED: 'AED',
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  const calculatedFees = useMemo(() => {
    let govFee = 0;
    let medicalFee = 0;
    let emiratesIdFee = 0;
    let conciergeFee = 0;

    switch (category) {
      case 'investor':
        govFee = 2750;
        medicalFee = 750;
        emiratesIdFee = 1150;
        conciergeFee = 3200;
        break;
      case 'executive':
        govFee = 2850;
        medicalFee = 750;
        emiratesIdFee = 1150;
        conciergeFee = 2900;
        break;
      case 'talent':
        govFee = 2650;
        medicalFee = 750;
        emiratesIdFee = 1150;
        conciergeFee = 3100;
        break;
      case 'family':
        govFee = 1450 * Math.max(1, dependents);
        medicalFee = 750 * Math.max(1, dependents);
        emiratesIdFee = 570 * Math.max(1, dependents);
        conciergeFee = 1500 + 600 * Math.max(1, dependents);
        break;
    }

    if (category !== 'family' && dependents > 0) {
      govFee += dependents * 1350;
      medicalFee += dependents * 700;
      emiratesIdFee += dependents * 570;
      conciergeFee += dependents * 750;
    }

    if (isVipSpeed) {
      conciergeFee += 1850;
      medicalFee += 450;
    }

    const totalAED = govFee + medicalFee + emiratesIdFee + conciergeFee;
    const rate = rates[currency];

    return {
      gov: Math.round(govFee * rate),
      medical: Math.round(medicalFee * rate),
      id: Math.round(emiratesIdFee * rate),
      concierge: Math.round(conciergeFee * rate),
      total: Math.round(totalAED * rate),
      totalAED,
    };
  }, [category, propertyValue, salary, dependents, isVipSpeed, currency]);

  if (!isOpen) return null;

  const triggerWhatsApp = () => {
    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#C5A059', '#10B981', '#0F172A']
    });

    const msg = `Hello VIP Concierge Team, I would like to proceed with the UAE 10-Year Golden Visa application.
Details:
- Category: ${t.calculator.categories[category]}
- Dependents: ${dependents}
- Priority: ${isVipSpeed ? 'VIP Express 48-72h' : 'Standard'}
- Estimated Total: ${currencySymbols[currency]} ${calculatedFees.total.toLocaleString()} (${currency})
Please assign an Executive Case Officer.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/971500000000?text=${encoded}`, '_blank');
  };

  const handleDownloadPDF = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
    });
    alert(`Official Quote #${Math.floor(100000 + Math.random() * 900000)} Generated!\nEstimated Total: ${currencySymbols[currency]} ${calculatedFees.total.toLocaleString()}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        {/* Header Bar */}
        <div className="relative px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[#C5A059]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold tracking-tight text-slate-900">{t.calculator.modalTitle}</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  LIVE 2026 TARIFFS
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{t.calculator.subtitle}</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Currency Switcher */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-semibold text-slate-600">Currency:</span>
            <div className="flex gap-1.5">
              {(['AED', 'USD', 'EUR', 'GBP'] as Currency[]).map((cur) => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-3.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    currency === cur
                      ? 'gold-btn shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>

          {/* Visa Category Selector */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3">
              1. {t.calculator.visaCategory}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { key: 'investor' as CategoryKey, icon: Building2, title: t.calculator.categories.investor, desc: t.calculator.categories.investorDesc },
                { key: 'executive' as CategoryKey, icon: UserCheck, title: t.calculator.categories.executive, desc: t.calculator.categories.executiveDesc },
                { key: 'talent' as CategoryKey, icon: Award, title: t.calculator.categories.talent, desc: t.calculator.categories.talentDesc },
                { key: 'family' as CategoryKey, icon: HeartHandshake, title: t.calculator.categories.family, desc: t.calculator.categories.familyDesc },
              ].map((item) => {
                const IconComponent = item.icon;
                const isSelected = category === item.key;
                return (
                  <div
                    key={item.key}
                    onClick={() => setCategory(item.key)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected
                        ? 'border-[#C5A059] bg-[#FAF7F2] shadow-sm ring-1 ring-[#C5A059]'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl mt-0.5 ${isSelected ? 'bg-amber-100 text-[#8C6D2D]' : 'bg-slate-100 text-slate-600'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#8C6D2D]" />}
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dynamic Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category === 'investor' && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-600 font-semibold">{t.calculator.propValue}</span>
                  <span className="text-sm font-extrabold text-[#8C6D2D]">AED {propertyValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000000"
                  max="15000000"
                  step="250000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>Min: 2,000,000 AED</span>
                  <span>15,000,000+ AED</span>
                </div>
              </div>
            )}

            {category === 'executive' && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-slate-600 font-semibold">{t.calculator.monthlySalary}</span>
                  <span className="text-sm font-extrabold text-[#8C6D2D]">AED {salary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="120000"
                  step="5000"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                  <span>Min: 30,000 AED</span>
                  <span>120,000+ AED</span>
                </div>
              </div>
            )}

            {/* Dependents Counter */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-xs text-slate-600 font-semibold">{t.calculator.dependents}</span>
                <span className="text-sm font-extrabold text-[#8C6D2D]">{dependents} {dependents === 1 ? 'Person' : 'Persons'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setDependents(num)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                      dependents === num
                        ? 'border-[#C5A059] bg-[#FAF7F2] text-[#8C6D2D]'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Speed Priority */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-600 font-semibold mb-2.5">{t.calculator.processingSpeed}</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setIsVipSpeed(false)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                    !isVipSpeed
                      ? 'border-slate-400 bg-white text-slate-900 font-bold'
                      : 'border-slate-200 bg-white text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <div className="font-bold text-slate-900">Standard</div>
                  <div className="text-[10px] text-slate-500">7-10 Days</div>
                </button>
                <button
                  onClick={() => setIsVipSpeed(true)}
                  className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all ${
                    isVipSpeed
                      ? 'border-[#C5A059] bg-[#FAF7F2] text-[#8C6D2D] font-bold ring-1 ring-[#C5A059]'
                      : 'border-slate-200 bg-white text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <div className="font-bold text-[#8C6D2D] flex items-center gap-1">
                    <span>VIP Express</span>
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  </div>
                  <div className="text-[10px] text-[#8C6D2D]/70">48-72 Hours</div>
                </button>
              </div>
            </div>
          </div>

          {/* Breakdown Section */}
          <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200">
            <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">{t.calculator.breakdownTitle}</h4>
              <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Official Tariff Verified
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>{t.calculator.govFee}</span>
                <span className="font-bold text-slate-900">{currencySymbols[currency]} {calculatedFees.gov.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>{t.calculator.medicalFitness}</span>
                <span className="font-bold text-slate-900">{currencySymbols[currency]} {calculatedFees.medical.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>{t.calculator.emiratesId}</span>
                <span className="font-bold text-slate-900">{currencySymbols[currency]} {calculatedFees.id.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>{t.calculator.vipConcierge}</span>
                <span className="font-bold text-[#8C6D2D]">{currencySymbols[currency]} {calculatedFees.concierge.toLocaleString()}</span>
              </div>
            </div>

            {/* Total Row */}
            <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block font-semibold">{t.calculator.totalEst}</span>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  {currencySymbols[currency]} {calculatedFees.total.toLocaleString()}
                  <span className="text-xs font-semibold text-slate-500 ml-1.5">({currency})</span>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Fixed Pricing Guarantee
                </span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 italic">{t.calculator.legalNote}</p>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-white flex flex-col sm:flex-row gap-3">
          <button
            onClick={triggerWhatsApp}
            className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <span>{t.calculator.instantWhatsapp}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleDownloadPDF}
            className="py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#C5A059]" />
            <span>{t.calculator.pdfQuote}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
