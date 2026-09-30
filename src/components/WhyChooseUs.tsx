import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Users } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'Deploy and go live in weeks, not months. Our onboarding process is battle-tested.',
    accent: '#00B2FE',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. End-to-end encryption. Role-based access control.',
    accent: '#1863BA',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    desc: '24/7 expert support. Quarterly business reviews. Real humans, not bots.',
    accent: '#0076CE',
  },
  {
    icon: CheckCircle2,
    title: 'Always Reliable',
    desc: '99.9% uptime SLA. Global infrastructure. Zero data loss guarantee.',
    accent: '#10B981',
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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: 'var(--background-soft)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-sm font-700 text-primary uppercase tracking-wide inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Why Codelink
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Built for{' '}
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Enterprise.
            </span>
            <br />
            Designed for Teams.
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="group glass-card hover:shadow-premium rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all"
                style={{ background: `${reason.accent}22` }}
                whileHover={{ scale: 1.08, rotate: 5 }}
              >
                <reason.icon className="w-6 h-6" style={{ color: reason.accent }} />
              </motion.div>
              <h3 className="text-lg font-700 text-text-primary mb-3">{reason.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
