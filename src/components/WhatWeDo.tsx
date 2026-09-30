import { motion } from 'framer-motion';
import { Code, Cloud, Brain, TrendingUp } from 'lucide-react';

const whatWeDo = [
  {
    icon: Code,
    title: 'End-to-End Product Development',
    description: 'From idea to market, we build complete digital products with scalable architecture and best practices.',
    accent: '#1863BA',
  },
  {
    icon: Cloud,
    title: 'SaaS Product Engineering',
    description: 'Enterprise-grade SaaS platforms with multi-tenant architecture, subscriptions, and analytics dashboards.',
    accent: '#00B2FE',
  },
  {
    icon: Brain,
    title: 'AI-Driven Automation',
    description: 'Intelligent automation systems that learn and adapt to reduce manual work and boost efficiency.',
    accent: '#0076CE',
  },
  {
    icon: TrendingUp,
    title: 'Business Process Optimization',
    description: 'Digital transformation and workflow automation to streamline operations and increase productivity.',
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
    transition: { duration: 0.5 },
  },
};

export default function WhatWeDo() {
  return (
    <section className="py-20" style={{ background: 'var(--background-soft)' }}>
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
                className="p-8 rounded-2xl border transition-all group overflow-hidden relative"
                style={{ background: 'var(--card)', borderColor: 'var(--border-light)' }}
                whileHover={{ y: -8, boxShadow: `0 18px 36px ${item.accent}2e` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: item.accent }} />
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}18` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.accent }} />
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
