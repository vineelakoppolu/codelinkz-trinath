import { motion } from 'framer-motion';
import { Building2, HeartPulse, Scale, Rocket, Briefcase, UtensilsCrossed } from 'lucide-react';

const brands = [
  { name: 'Restaurant Brands', icon: UtensilsCrossed, accent: '#F59E0B' },
  { name: 'Healthcare Systems', icon: HeartPulse, accent: '#10B981' },
  { name: 'Fortune 500', icon: Building2, accent: '#1863BA' },
  { name: 'Law Firms', icon: Scale, accent: '#0B2545' },
  { name: 'Tech Startups', icon: Rocket, accent: '#00B2FE' },
  { name: 'Consulting Firms', icon: Briefcase, accent: '#0076CE' },
];

const stats = [
  { value: '8B+', label: 'Transactions', accent: '#1863BA' },
  { value: '500+', label: 'Enterprise Clients', accent: '#00B2FE' },
  { value: '99.9%', label: 'Uptime SLA', accent: '#10B981' },
  { value: '40+', label: 'Industries', accent: '#0076CE' },
];

export default function TrustedBy() {
  return (
    <section className="section-padding" style={{ background: 'var(--section-wash)' }}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-700 uppercase tracking-[0.22em]" style={{ color: '#1863BA' }}>
            Trusted by enterprise
          </p>
          <h2 className="mt-3 text-3xl font-800 md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Teams that run on CodeLink
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => {
            const Icon = brand.icon;
            return (
              <motion.div
                key={brand.name}
                className="flex flex-col items-center gap-3 rounded-2xl border px-3 py-5 text-center"
                style={{ background: 'var(--card)', borderColor: 'var(--border-light)', boxShadow: '0 10px 24px rgba(11,37,69,0.05)' }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                  style={{ background: `linear-gradient(145deg, ${brand.accent}, #0B2545)` }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-700 leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {brand.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border px-4 py-6 text-center"
              style={{ background: 'var(--card)', borderColor: 'var(--border-light)' }}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto mb-3 h-1 w-10 rounded-full" style={{ background: stat.accent }} />
              <div className="text-3xl font-800" style={{ color: stat.accent }}>
                {stat.value}
              </div>
              <div className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
