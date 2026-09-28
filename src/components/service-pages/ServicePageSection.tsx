import React from 'react';

export function ServiceSectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D5B5] bg-[#F8F1DF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8C6D2D]">
        <span className="h-2 w-2 rounded-full bg-[#C5A059]" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h2>
    </div>
  );
}

export function ServiceInfoCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#E9E2D2] bg-white p-6 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.26)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(197,160,89,0.34)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F1DF] text-[#8C6D2D]">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
