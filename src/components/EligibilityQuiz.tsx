"use client";

import React, { useState } from 'react';
import { 
  X, ChevronRight, ChevronLeft, CheckCircle2, 
  Building2, Briefcase, Star, Users, MessageSquare,
  Calculator, Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EligibilityQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCalculator: () => void;
}

type Answer = string | null;

interface Question {
  id: string;
  question: string;
  subtitle?: string;
  options: { label: string; value: string; icon: React.FC<{ className?: string }> }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'q1',
    question: 'What best describes your situation?',
    subtitle: 'Select the option that matches you most closely.',
    options: [
      { label: 'I own / plan to buy property in UAE', value: 'investor', icon: Building2 },
      { label: 'I am a senior executive or director', value: 'executive', icon: Briefcase },
      { label: 'I am a doctor, scientist or specialist', value: 'talent', icon: Star },
      { label: 'I want to sponsor my family', value: 'family', icon: Users },
    ],
  },
  {
    id: 'q2',
    question: 'What is your approximate property or asset value in UAE?',
    subtitle: 'This helps us identify your exact visa category.',
    options: [
      { label: 'AED 2,000,000 or more', value: 'above_2m', icon: CheckCircle2 },
      { label: 'AED 750,000 – 1,999,999', value: 'mid', icon: CheckCircle2 },
      { label: 'Below AED 750,000', value: 'below', icon: CheckCircle2 },
      { label: 'No property — salary/talent based', value: 'none', icon: CheckCircle2 },
    ],
  },
  {
    id: 'q3',
    question: 'Do you have family members you wish to sponsor?',
    subtitle: 'Spouse, children and/or parents.',
    options: [
      { label: 'Yes — spouse and children', value: 'spouse_kids', icon: Users },
      { label: 'Yes — parents as well', value: 'full_family', icon: Users },
      { label: 'Only myself for now', value: 'solo', icon: CheckCircle2 },
    ],
  },
  {
    id: 'q4',
    question: 'How urgently do you need the visa processed?',
    options: [
      { label: 'Immediately — within 48–72 hours (VIP Fast-Track)', value: 'urgent', icon: Star },
      { label: 'Within 1–2 weeks (Standard)', value: 'standard', icon: CheckCircle2 },
      { label: 'Planning ahead — 1 month+', value: 'planning', icon: CheckCircle2 },
    ],
  },
  {
    id: 'q5',
    question: 'What is your nationality / passport country?',
    subtitle: 'All nationalities are eligible — this helps us give accurate guidance.',
    options: [
      { label: 'European (UK, EU, Russia, CIS)', value: 'european', icon: CheckCircle2 },
      { label: 'Asian / GCC / Middle Eastern', value: 'asian', icon: CheckCircle2 },
      { label: 'American / Canadian / Australian', value: 'american', icon: CheckCircle2 },
      { label: 'Other nationality', value: 'other', icon: CheckCircle2 },
    ],
  },
];

function getResult(answers: Record<string, Answer>) {
  const q1 = answers['q1'];
  const q2 = answers['q2'];
  const q4 = answers['q4'];

  if (q1 === 'investor' && q2 === 'above_2m') {
    return {
      title: 'You Qualify for the 10-Year Real Estate Investor Visa',
      subtitle: 'Your property value meets the AED 2,000,000 DLD threshold for a direct 10-year Golden Visa.',
      tag: 'High Eligibility',
      color: 'from-amber-500 to-yellow-400',
      points: [
        'Direct DLD title deed route — no salary requirement',
        'Full family sponsorship included',
        'Off-plan & mortgaged properties accepted',
        q4 === 'urgent' ? 'VIP Fast-Track: Emirates ID in 48–72 hours' : 'Standard processing: 7–10 working days',
      ],
    };
  }
  if (q1 === 'executive') {
    return {
      title: 'You Qualify for the 10-Year Executive Leadership Visa',
      subtitle: 'Senior executives and C-Suite directors with AED 30,000+ salary and attested degree qualify directly.',
      tag: 'High Eligibility',
      color: 'from-blue-500 to-indigo-500',
      points: [
        'MOHRE contract + degree attestation required',
        'ICP high-priority approval channel',
        'Family sponsorship included',
        'Priority UAE bank account activation',
      ],
    };
  }
  if (q1 === 'talent') {
    return {
      title: 'You Qualify for the Specialized Talent 10-Year Visa',
      subtitle: 'Licensed doctors, scientists, AI innovators and cultural leaders recognized by UAE ministries.',
      tag: 'High Eligibility',
      color: 'from-emerald-500 to-teal-500',
      points: [
        'Ministerial council fast-lane nomination',
        'Comprehensive family coverage',
        'VIP medical screening arrangement',
        'Subsidized premier health tier',
      ],
    };
  }
  return {
    title: 'You Are Likely Eligible for a UAE Golden Visa',
    subtitle: 'Based on your answers, our team can identify the exact pathway that matches your profile.',
    tag: 'Eligible — Confirm with Expert',
    color: 'from-amber-500 to-yellow-400',
    points: [
      'Multiple eligible pathways available for your profile',
      'Free confidential case evaluation within 2 hours',
      'No obligation — just expert guidance',
      'Available in 8 languages',
    ],
  };
}

export const EligibilityQuiz: React.FC<EligibilityQuizProps> = ({ isOpen, onClose, onOpenCalculator }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const totalSteps = QUESTIONS.length;
  const currentQ = QUESTIONS[step];
  const progress = ((step) / totalSteps) * 100;
  const result = getResult(answers);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (step < totalSteps - 1) {
      setTimeout(() => setStep(step + 1), 220);
    } else {
      setTimeout(() => {
        setShowResult(true);
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#D4AF37', '#C5A059', '#10B981', '#FFFFFF'],
        });
      }, 220);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#090D16] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase mb-0.5">
              Eligibility Check
            </p>
            <h3 className="text-base font-bold text-white">UAE Golden Visa — Free Assessment</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!showResult ? (
          <div className="p-6">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Step {step + 1} of {totalSteps}
                </span>
                <span className="text-[11px] text-slate-400">{Math.round(((step + 1) / totalSteps) * 100)}% complete</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((step + 1) / totalSteps) * 100}%`,
                    background: 'linear-gradient(to right, #D4AF37, #C5A059)',
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-slate-900 leading-snug">{currentQ.question}</h4>
              {currentQ.subtitle && (
                <p className="text-sm text-slate-500 mt-1">{currentQ.subtitle}</p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt) => {
                const Icon = opt.icon;
                const isSelected = answers[currentQ.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(opt.value)}
                    className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                      isSelected
                        ? 'border-amber-400 bg-amber-50 text-slate-900'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 text-slate-700'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-amber-100 text-[#8C6D2D]' : 'bg-slate-100 text-slate-500 group-hover:bg-amber-100/60 group-hover:text-[#8C6D2D]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold">{opt.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-amber-400 ml-auto shrink-0 transition-colors" />
                  </button>
                );
              })}
            </div>

            {/* Back button */}
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-5 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
        ) : (
          /* Result Screen */
          <div className="p-6">
            {/* Result card */}
            <div className={`rounded-2xl p-5 bg-gradient-to-br ${result.color} mb-5`}>
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-white/20 rounded-xl shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-[10px] font-black tracking-widest text-white/70 uppercase">{result.tag}</span>
                  <h4 className="text-base font-bold text-white leading-snug mt-0.5">{result.title}</h4>
                  <p className="text-xs text-white/80 mt-1 leading-relaxed">{result.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Points */}
            <div className="mb-6 space-y-2">
              {result.points.map((point, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/971503853305?text=${encodeURIComponent('Hello, I just completed the UAE Golden Visa eligibility quiz on your website and would like to request a free consultation. My result: ' + result.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl gold-btn font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                onClick={onClose}
              >
                <MessageSquare className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Claim Free Consultation via WhatsApp</span>
              </a>

              <button
                onClick={() => { onOpenCalculator(); onClose(); }}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Calculator className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Calculate Exact Fees</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-500 text-sm hover:bg-slate-50 cursor-pointer transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
