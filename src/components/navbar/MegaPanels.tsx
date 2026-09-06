import { ArrowRight, ClipboardList, FileCheck, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors, logos } from '@/theme';
import {
  companyFeatured,
  companyItems,
  serviceColumns,
  technologyColumns,
} from '@/data/navigation';
import { FillItem } from './FillItem';

export function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-2">
        {serviceColumns.map((column, index) => (
          <div key={`${column.heading}-${index}`}>
            <ColumnHeading>{column.heading}</ColumnHeading>
            <div className="flex flex-col gap-1">
              {column.items.map((item) => (
                <FillItem key={item.title} {...item} dense onClick={onNavigate} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ServicesFooter onNavigate={onNavigate} />
    </div>
  );
}

export function TechnologyPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-2 pb-5">
      {technologyColumns.map((column) => (
        <div key={column.heading}>
          <ColumnHeading>{column.heading}</ColumnHeading>
          <div className="flex flex-col gap-1">
            {column.items.map((item) => (
              <FillItem key={item.title} {...item} dense onClick={onNavigate} />
            ))}
          </div>
          {column.cta && <WorkCta href={column.cta.href} title={column.cta.title} onNavigate={onNavigate} />}
        </div>
      ))}
    </div>
  );
}

export function CompanyPanel({ onNavigate }: { onNavigate: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1">
        {companyItems.map((item) => (
          <FillItem key={item.title} {...item} onClick={onNavigate} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          onNavigate();
          navigate(companyFeatured.href);
        }}
        className="relative overflow-hidden rounded-3xl text-left p-8 min-h-[260px] group"
        style={{ background: colors.gradientPrimary }}
      >
        <span className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_20%,#ffffff_0%,transparent_45%)]" />
        <span className="absolute -right-6 -bottom-10 h-40 w-40 rounded-3xl rotate-12 border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-6" />
        <span className="absolute right-10 bottom-10 h-28 w-20 rounded-2xl -rotate-6 border border-white/30 bg-white/15 backdrop-blur-md transition-transform duration-500 group-hover:translate-y-1 group-hover:rotate-3" />
        <img
          src={logos.footer}
          alt=""
          className="relative h-10 w-auto object-contain mb-6 rounded-md"
        />
        <h3 className="relative text-white text-2xl font-800 leading-tight mb-3">
          {companyFeatured.title}
        </h3>
        <p className="relative text-white/80 text-sm leading-relaxed mb-6 max-w-xs">
          {companyFeatured.description}
        </p>
        <span className="relative inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2 text-sm font-700 text-white group-hover:bg-white group-hover:text-[#1D68BE] transition-colors duration-300">
          {companyFeatured.cta}
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>
    </div>
  );
}

function ColumnHeading({ children }: { children: string }) {
  return (
    <div className="mb-2">
      <h3 className="text-[15px] font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {children}
      </h3>
      <div className="mt-2 h-px w-full bg-gradient-to-r from-[#00AEFE] via-[#1D68BE]/30 to-transparent" />
    </div>
  );
}

function ServicesFooter({ onNavigate }: { onNavigate: () => void }) {
  const navigate = useNavigate();
  const steps = [
    { icon: ClipboardList, label: '1. You Share the Requirements' },
    { icon: Users, label: '2. Get Access to the Talent Pool' },
    { icon: FileCheck, label: '3. Sign SLA & onboard experts' },
  ];

  return (
    <div
      className="mt-4 -mx-8 xl:-mx-12 px-8 xl:px-12 py-3.5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
      style={{
        background: 'var(--background-soft)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {steps.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: 'rgba(0, 174, 254, 0.12)', color: colors.primary }}
            >
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="text-[14px] font-semibold" style={{ color: colors.textSecondary }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          onNavigate();
          navigate('/services');
        }}
        className="header-cta-shine shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-semibold text-white"
        style={{ background: colors.gradientPrimary, boxShadow: '0 8px 20px rgba(29,104,190,0.25)' }}
      >
        Staff Augmentation
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function WorkCta({
  href,
  title,
  onNavigate,
}: {
  href: string;
  title: string;
  onNavigate: () => void;
}) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => {
        onNavigate();
        navigate(href);
      }}
      className="mt-4 w-full rounded-2xl px-4 py-4 text-left relative overflow-hidden group"
      style={{
        background: 'linear-gradient(135deg, rgba(0,174,254,0.12), rgba(29,104,190,0.1))',
        border: '1px solid rgba(0,174,254,0.22)',
      }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#1D68BE] to-[#00AEFE] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <span className="relative z-10 flex items-center justify-between">
        <span className="flex items-center gap-3">
          <img src={logos.header} alt="" className="h-8 w-auto object-contain" />
          <span className="text-[16px] font-semibold text-[#1D68BE] group-hover:text-white transition-colors">
            {title}
          </span>
        </span>
        <ArrowRight className="h-4 w-4 text-[#00AEFE] group-hover:text-white transition-colors" />
      </span>
    </button>
  );
}
