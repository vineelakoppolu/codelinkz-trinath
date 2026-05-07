import { Utensils, HeartPulse, Users, Scale, DollarSign, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle, FeatureCard } from './ui';
import { colors } from '@/theme';

const modules = [
  {
    icon: Utensils,
    title: 'Restaurant OS',
    desc: 'POS, inventory, table management, and kitchen operations.',
    gradient: `linear-gradient(135deg, ${colors.primary}15 0%, #FF6B6B20 100%)`,
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    desc: 'Appointments, EMR, billing, and patient engagement.',
    gradient: `linear-gradient(135deg, ${colors.primary}15 0%, #FF1493 20%, #FF69B420 100%)`,
  },
  {
    icon: Users,
    title: 'HRMS & Payroll',
    desc: 'Hire, manage, pay, and retain your workforce.',
    gradient: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.accentBlue}15 100%)`,
  },
  {
    icon: Scale,
    title: 'Legal Operations',
    desc: 'Case tracking, contracts, and client management.',
    gradient: `linear-gradient(135deg, ${colors.primary}15 0%, #10B98120 100%)`,
  },
  {
    icon: DollarSign,
    title: 'Revenue Platform',
    desc: 'Invoicing, subscriptions, and revenue analytics.',
    gradient: `linear-gradient(135deg, ${colors.primary}15 0%, #F59E0B20 100%)`,
  },
  {
    icon: Megaphone,
    title: 'Marketing Ops',
    desc: 'Multi-channel campaigns and customer engagement.',
    gradient: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accentBlue}15 100%)`,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 },
  },
};

export default function Modules() {
  return (
    <section style={{ padding: '120px 0', background: colors.background }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionTitle
          label="Enterprise Modules"
          title={
            <>
              Six Powerful <span style={{ color: colors.primary }}>Modules.</span>
              <br />
              Infinite Possibilities.
            </>
          }
          description="Mix and match enterprise-grade modules tailored to your business. Each module integrates seamlessly with your existing workflows."
        />

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {modules.map((mod, i) => (
            <motion.div key={mod.title} variants={itemVariants}>
              <FeatureCard
                icon={<mod.icon className="w-6 h-6" />}
                title={mod.title}
                description={mod.desc}
                gradient={mod.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
