import { motion } from 'framer-motion';

const companies = [
  { name: 'Acme Corp', mark: 'AC' },
  { name: 'TechFlow', mark: 'TF' },
  { name: 'DataSync', mark: 'DS' },
  { name: 'CloudMark', mark: 'CM' },
  { name: 'FutureScale', mark: 'FS' },
  { name: 'VelocityAI', mark: 'VA' },
  { name: 'QuantumLabs', mark: 'QL' },
  { name: 'ZenithPro', mark: 'ZP' },
];

const accents = ['#1863BA', '#00B2FE', '#0076CE', '#0B2545'];

export default function TrustMarquee() {
  const loop = [...companies, ...companies];

  return (
    <section className="relative overflow-hidden border-y py-14" style={{ background: 'var(--background-soft)', borderColor: 'var(--border-light)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="hidden h-px w-16 sm:block" style={{ background: 'linear-gradient(90deg, transparent, #00B2FE)' }} />
          <p className="text-center text-xs font-700 uppercase tracking-[0.22em]" style={{ color: 'var(--text-secondary)' }}>
            Trusted by leading enterprises
          </p>
          <span className="hidden h-px w-16 sm:block" style={{ background: 'linear-gradient(90deg, #1863BA, transparent)' }} />
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="flex w-max gap-4 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((company, idx) => {
            const accent = accents[idx % accents.length];
            return (
              <div
                key={`${company.name}-${idx}`}
                className="flex h-[72px] min-w-[220px] items-center gap-3 rounded-2xl border px-4 transition-transform duration-300 hover:-translate-y-1"
                style={{ background: 'var(--card)', borderColor: 'var(--border-light)', boxShadow: '0 10px 24px rgba(11,37,69,0.06)' }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-800 text-white"
                  style={{ background: `linear-gradient(135deg, ${accent}, #00B2FE)` }}
                >
                  {company.mark}
                </div>
                <span className="text-[15px] font-700" style={{ color: 'var(--text-primary)' }}>
                  {company.name}
                </span>
              </div>
            );
          })}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20" style={{ background: 'linear-gradient(90deg, var(--background-soft), transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20" style={{ background: 'linear-gradient(270deg, var(--background-soft), transparent)' }} />
      </div>
    </section>
  );
}
