import { motion } from 'framer-motion';
import { Zap, Lock, TrendingUp, Users } from 'lucide-react';
import { colors } from '@/theme';

const benefits = [
  {
    icon: Zap,
    title: 'Faster Time to Market',
    description:
      'Our accelerated development process and proven frameworks get your product live in months, not years. Launch faster and capture market opportunities before competitors.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description:
      'Bank-level security with compliance for GDPR, SOC 2, and industry standards. Your data is protected with encryption, access controls, and regular audits.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Scale',
    description:
      'Cloud-native architecture that grows with you. Handle millions of transactions daily with auto-scaling, zero-downtime deployments, and 99.99% uptime.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Your success is our priority. Get a dedicated account manager, prioritized support, and regular check-ins to ensure your platform delivers value.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WhyCodelink() {
  return (
    <section className="py-20 bg-background-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-800 mb-4">Why Choose Codelink</h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that drive growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-2xl border border-borderLight bg-card hover:border-primary/30 transition-all group"
                whileHover={{ y: -8, boxShadow: `0 20px 25px ${colors.primary}15` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${colors.primary}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: colors.primary }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-700 mb-3">{benefit.title}</h3>
                    <p className="text-textSecondary leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.primaryLight}10 100%)` }}
        >
          <p className="text-textSecondary mb-4">Ready to transform your business?</p>
          <button
            className="px-8 py-3 rounded-lg font-600 text-white transition-all hover:shadow-lg hover:scale-105"
            style={{ background: colors.primary }}
          >
            Get Started with a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
