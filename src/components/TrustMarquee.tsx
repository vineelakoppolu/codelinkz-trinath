import { motion } from 'framer-motion';
import ParticleEffectForHero from './ui/particle-effect-for-hero';
import { useTheme } from '@/theme/ThemeProvider';

const partners = [
  {
    name: 'InVision',
    src: 'https://quikallot-saas-dev.s3.ap-south-1.amazonaws.com/tenant_1/document_type-1783754604934.png',
    glow: '#F472B6',
  },
  {
    name: 'Luxer One',
    src: 'https://quikallot-saas-dev.s3.ap-south-1.amazonaws.com/tenant_1/document_type-1783754686106.png',
    glow: '#A78BFA',
  },
  {
    name: 'Mr Light',
    src: 'https://quikallot-saas-dev.s3.ap-south-1.amazonaws.com/tenant_1/document_type-1783754764453.png',
    glow: '#FBBF24',
  },
  {
    name: 'Pelican Solutions',
    src: 'https://quikallot-saas-dev.s3.ap-south-1.amazonaws.com/tenant_1/document_type-1783754804363.png',
    glow: '#34D399',
  },
  {
    name: 'TeamClean',
    src: 'https://quikallot-saas-dev.s3.ap-south-1.amazonaws.com/tenant_1/document_type-1783754996599.png',
    glow: '#38BDF8',
  },
  {
    name: 'Partner Logo',
    src: 'https://quikallot-saas-dev.s3.ap-south-1.amazonaws.com/tenant_1/document_type-1783755065747.png',
    glow: '#FB7185',
  },
];

const loop = [...partners, ...partners];

export default function TrustMarquee() {
  const { isDark } = useTheme();

  const sectionBg = isDark
    ? 'linear-gradient(135deg, #1a103c 0%, #2a1458 28%, #0f3d4c 62%, #1b2848 100%)'
    : 'linear-gradient(135deg, #FDF2F8 0%, #F5F3FF 32%, #ECFEFF 68%, #EFF6FF 100%)';

  const edgeLeft = isDark ? '#1a103c' : '#FDF2F8';
  const edgeRight = isDark ? '#1b2848' : '#EFF6FF';
  const headingColor = isDark ? 'rgba(255,255,255,0.88)' : '#334155';
  const cardBg = isDark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.88)';
  const cardShadow = isDark
    ? (glow: string) => `0 10px 24px rgba(15, 10, 40, 0.28), 0 0 0 1px rgba(255,255,255,0.35), 0 0 22px ${glow}33`
    : (glow: string) => `0 8px 20px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(255,255,255,0.9), 0 0 18px ${glow}40`;

  return (
    <section className="relative overflow-hidden py-10 md:py-12">
      <div className="absolute inset-0" style={{ background: sectionBg }} />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full blur-3xl"
        style={{ background: isDark ? 'rgba(244, 114, 182, 0.28)' : 'rgba(244, 114, 182, 0.35)' }}
      />
      <div
        className="pointer-events-none absolute right-[-3rem] top-6 h-44 w-44 rounded-full blur-3xl"
        style={{ background: isDark ? 'rgba(56, 189, 248, 0.26)' : 'rgba(56, 189, 248, 0.32)' }}
      />
      <div
        className="pointer-events-none absolute bottom-[-2rem] left-1/3 h-36 w-36 rounded-full blur-3xl"
        style={{ background: isDark ? 'rgba(251, 191, 36, 0.18)' : 'rgba(167, 139, 250, 0.28)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: isDark ? 0.4 : 0.35,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)'
            : 'radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <ParticleEffectForHero
        key={isDark ? 'trust-dark' : 'trust-light'}
        accentColor={isDark ? '#F472B6' : '#A78BFA'}
        particleColors={
          isDark
            ? ['#ffffff', '#F472B6', '#38BDF8', '#FBBF24', '#A78BFA', '#34D399']
            : ['#F472B6', '#38BDF8', '#A78BFA', '#FBBF24', '#34D399', '#FB7185']
        }
        density={isDark ? 1.05 : 0.85}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span
            className="hidden h-px w-16 sm:block"
            style={{ background: 'linear-gradient(90deg, transparent, #F472B6)' }}
          />
          <p
            className="text-center text-xs font-700 uppercase tracking-[0.22em]"
            style={{ color: headingColor }}
          >
            Trusted by leading enterprises
          </p>
          <span
            className="hidden h-px w-16 sm:block"
            style={{ background: 'linear-gradient(90deg, #38BDF8, transparent)' }}
          />
        </div>
      </div>

      <div className="relative z-10">
        <motion.div
          className="flex w-max gap-4 px-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="group relative flex h-[68px] min-w-[180px] items-center justify-center rounded-2xl px-6 transition-transform duration-300 hover:-translate-y-1 sm:h-[72px] sm:min-w-[200px]"
              style={{
                background: cardBg,
                boxShadow: cardShadow(partner.glow),
              }}
            >
              <span
                className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-80"
                style={{
                  background: `linear-gradient(90deg, transparent, ${partner.glow}, transparent)`,
                }}
              />
              <img
                src={partner.src}
                alt={partner.name}
                className="max-h-9 w-auto max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-11 sm:max-w-[160px]"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-14 sm:w-20"
          style={{ background: `linear-gradient(90deg, ${edgeLeft}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-14 sm:w-20"
          style={{ background: `linear-gradient(270deg, ${edgeRight}, transparent)` }}
        />
      </div>
    </section>
  );
}
