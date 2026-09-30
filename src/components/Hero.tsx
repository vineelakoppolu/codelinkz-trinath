import { ArrowRight, TrendingUp, Zap, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  GradientText,
  HeroButton,
  FloatingBadge,
  DashboardPreview,
} from './ui';
import ParticleEffectForHero from './ui/particle-effect-for-hero';
import { AnimatedText } from './ui/animated-underline-text-one';
import { colors } from '@/theme';

const floatingMetrics = [
  // {
  //   icon: <TrendingUp className="w-5 h-5" />,
  //   label: 'Revenue',
  //   value: '+24%',
  //   position: 'top-6 right-[6%]',
  //   delay: 0,
  // },
  {
    icon: <Zap className="w-5 h-5" />,
    label: 'Performance',
    value: '99.9%',
    position: 'bottom-40 left-[5%]',
    delay: 0.2,
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: 'Security',
    value: 'SOC 2',
    position: 'top-1/2 left-[12%]',
    delay: 0.4,
  },
  // {
  //   icon: <Activity className="w-5 h-5" />,
  //   label: 'Automation',
  //   value: '85%',
  //   position: 'top-28 right-[12%]',
  //   delay: 0.6,
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(165deg, #0B2545 0%, #123A66 46%, #0B2545 100%)' }}
    >
      <ParticleEffectForHero />

      {/* Premium background with glows */}
      <div className="absolute inset-0 -z-10">
        {/* Top left glow */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(0,178,254,0.35) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        {/* Bottom right glow */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(24,99,186,0.45) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            delay: 1,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        {/* Subtle grid overlay */}
        <div className="grid-overlay absolute inset-0" />
      </div>

      {/* Floating metric cards */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[140px] hidden overflow-hidden md:block">
        {floatingMetrics.map((metric, i) => (
          <motion.div
            key={i}
            className={`absolute ${metric.position}`}
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: `${metric.delay}s` }}
          >
            <FloatingBadge
              icon={metric.icon}
              label={metric.label}
              value={metric.value}
              variant="primary"
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Announcement badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(0,178,254,0.14)',
            border: '1px solid rgba(0,178,254,0.45)',
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ background: colors.primary }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: colors.primary,
              letterSpacing: '0.05em',
            }}
          >
            ENTERPRISE AI SAAS PLATFORM
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <AnimatedText
            className="w-full"
            textClassName="break-words text-[clamp(32px,8vw,96px)] leading-[clamp(38px,9vw,108px)] font-800 tracking-tight text-white"
            underlineClassName="text-[#00B2FE]"
            underlineDuration={1.6}
          >
            Transform <GradientText variant="primary">Operations</GradientText>
            <br />
            Across Your Entire
            <br />
            <GradientText variant="primary">Organization</GradientText>
          </AnimatedText>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(15px, 4vw, 18px)',
            lineHeight: '1.55',
            color: 'rgba(248,250,252,0.78)',
            marginBottom: '48px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Enterprise-grade operations platform built for modern organizations. Unify your workflows, automate repetitive tasks, and scale without limits. From healthcare to hospitality, retail to legal—one platform powers it all.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <HeroButton variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} className="hover:scale-105">
            Start Free Trial
          </HeroButton>
          <button
            type="button"
            className="px-8 py-4 text-lg font-700 rounded-full text-white border border-white/35 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-lg"
          >
            Watch Demo
          </button>
        </motion.div>

      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10"
      >
        <div
          className="rounded-[28px] p-4 sm:p-6"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.16)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.22)',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {[
              { value: '10B+', label: 'Users Served Globally' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '13.9x', label: 'Faster Deployment' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl px-4 py-4 text-center"
                style={{ background: '#FFFFFF' }}
              >
                <div className="text-[28px] sm:text-[32px] font-800 leading-none" style={{ color: '#1863BA' }}>
                  {stat.value}
                </div>
                <div className="mt-2 text-[12px] font-600 uppercase tracking-wide" style={{ color: '#515254' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <DashboardPreview />
        </div>
      </motion.div>
    </section>
  );
}
