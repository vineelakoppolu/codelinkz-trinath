import { motion } from 'framer-motion';
import { Code, Cloud, Brain, TrendingUp } from 'lucide-react';
import { colors } from '@/theme';

const whatWeDo = [
  {
    icon: Code,
    title: 'End-to-End Product Development',
    description: 'From idea to market, we build complete digital products with scalable architecture and best practices.',
  },
  {
    icon: Cloud,
    title: 'SaaS Product Engineering',
    description: 'Enterprise-grade SaaS platforms with multi-tenant architecture, subscriptions, and analytics dashboards.',
  },
  {
    icon: Brain,
    title: 'AI-Driven Automation',
    description: 'Intelligent automation systems that learn and adapt to reduce manual work and boost efficiency.',
  },
  {
    icon: TrendingUp,
    title: 'Business Process Optimization',
    description: 'Digital transformation and workflow automation to streamline operations and increase productivity.',
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
    transition: { duration: 0.5 },
  },
};

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-800 mb-4">What We Do</h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            We help businesses digitize, automate, and scale using cutting-edge technology and proven methodologies.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whatWeDo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-2xl border border-borderLight bg-white hover:border-primary/30 transition-all group"
                whileHover={{ y: -8, boxShadow: `0 16px 32px ${colors.primary}10` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${colors.primary}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-xl font-700 mb-2">{item.title}</h3>
                <p className="text-textSecondary">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
