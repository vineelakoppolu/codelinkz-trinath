import { motion } from 'framer-motion';
import { Award, Users, Zap, Globe } from 'lucide-react';
import { colors } from '@/theme';

const highlights = [
  {
    icon: Award,
    title: '10+ Scalable SaaS Products',
    description: 'Market-ready solutions serving enterprise and SMB segments across multiple industries.',
  },
  {
    icon: Globe,
    title: 'Multi-Industry Expertise',
    description: 'Proven track record across restaurants, healthcare, legal, HR, logistics, and more.',
  },
  {
    icon: Zap,
    title: 'Cloud-Ready Solutions',
    description: 'Deployed on AWS/Azure with auto-scaling, high availability, and disaster recovery built-in.',
  },
  {
    icon: Users,
    title: 'AI-Integrated Platforms',
    description: 'Machine learning and automation features that grow smarter with usage and data.',
  },
];

const stats = [
  { value: '500+', label: 'Enterprise Clients' },
  { value: '8B+', label: 'Transactions Monthly' },
  { value: '40+', label: 'Industries Served' },
  { value: '99.99%', label: 'Platform Uptime' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function KeyHighlights() {
  return (
    <section className="py-20 bg-backgroundSoft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-800 mb-4">Why We Stand Out</h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Our unique combination of technical excellence, industry expertise, and customer-centric approach.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-2xl border border-borderLight bg-white hover:border-primary/30 transition-all group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${colors.primary}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-700 mb-2">{item.title}</h3>
                    <p className="text-textSecondary text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-xl border border-borderLight bg-white text-center"
              whileHover={{ y: -4, boxShadow: `0 8px 16px ${colors.primary}10` }}
            >
              <div className="text-3xl font-800 mb-1" style={{ color: colors.primary }}>
                {stat.value}
              </div>
              <div className="text-xs text-textSecondary font-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
