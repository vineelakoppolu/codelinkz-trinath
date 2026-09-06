import { ArrowRight, TrendingUp, Zap, Shield, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  GradientText,
  HeroButton,
  GlassCard,
  FloatingBadge,
  DashboardPreview,
  GlowBackground,
} from './ui';
import { colors, shadows, animations } from '@/theme';

const floatingMetrics = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    label: 'Revenue',
    value: '+24%',
    position: 'top-20 right-[5%]',
    delay: 0,
  },
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
  {
    icon: <Activity className="w-5 h-5" />,
    label: 'Automation',
    value: '85%',
    position: 'top-32 right-[10%]',
    delay: 0.6,
  },
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Premium background with glows */}
      <div className="absolute inset-0 -z-10">
        {/* Top left glow */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${colors.primary}15 0%, transparent 70%)`,
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
            background: `radial-gradient(circle, ${colors.accentBlue}10 0%, transparent 70%)`,
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
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
            background: colors.accentSky,
            border: `1px solid ${colors.borderLight}`,
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

        {/* Hero heading with gradient */}
        <motion.h1
          variants={itemVariants}
          className="break-words"
          style={{
            fontSize: 'clamp(32px, 8vw, 96px)',
            lineHeight: 'clamp(38px, 9vw, 108px)',
            fontWeight: 800,
            color: colors.textPrimary,
            marginBottom: '32px',
            letterSpacing: '-0.02em',
          }}
        >
          Transform{' '}
          <GradientText variant="primary">Operations</GradientText>
          <br />
          Across Your Entire
          <br />
          <GradientText variant="primary">Organization</GradientText>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(15px, 4vw, 18px)',
            lineHeight: '1.55',
            color: colors.textSecondary,
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
          <HeroButton variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Start Free Trial
          </HeroButton>
          <HeroButton variant="glass" size="lg">
            Watch Demo
          </HeroButton>
        </motion.div>

        {/* Key metrics strip */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-24"
        >
          {[
            { label: 'Users Served Globally', value: '10B+' },
            { label: '99.9%', value: 'Uptime SLA' },
            { label: '13.9x', value: 'Faster Deployment' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ translateY: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <GlassCard>
                <div className="px-6 py-4">
                  <div
                    style={{
                      fontSize: '12px',
                      color: colors.textMuted,
                      marginBottom: '8px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accentBlue} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Dashboard Preview */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full max-w-5xl mx-auto px-6 lg:px-8"
      >
        <motion.div
          whileHover={{ translateY: -8 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <DashboardPreview />
        </motion.div>
      </motion.div>
    </section>
  );
}
