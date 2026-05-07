import { motion } from 'framer-motion';
import { colors } from '@/theme';

const companies = [
  'Acme Corp',
  'TechFlow',
  'DataSync',
  'CloudMark',
  'FutureScale',
  'VelocityAI',
  'QuantumLabs',
  'ZenithPro',
];

export default function TrustMarquee() {
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 overflow-hidden bg-white border-y border-borderLight">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          className="text-center text-sm text-textSecondary mb-8 font-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          TRUSTED BY LEADING ENTERPRISES
        </motion.p>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 py-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedCompanies.map((company, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-lg border border-borderLight bg-backgroundSoft whitespace-nowrap flex-shrink-0"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: colors.primary }}
                />
                <span className="font-600 text-textPrimary">{company}</span>
              </div>
            ))}
          </motion.div>

          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
