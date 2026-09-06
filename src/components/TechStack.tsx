import { motion } from 'framer-motion';

const stack = [
  { category: 'Infrastructure', items: ['AWS / GCP', 'Kubernetes', 'Multi-Region', 'Global CDN'] },
  { category: 'Security', items: ['SOC 2 Type II', 'End-to-End Encryption', 'RBAC', 'Audit Logs'] },
  { category: 'Integrations', items: ['REST API', 'GraphQL', 'Webhooks', '150+ Native'] },
  { category: 'Data', items: ['Real-time Analytics', 'Custom Reports', 'Data Export', 'GDPR'] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function TechStack() {
  return (
    <section className="section-padding bg-background">
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
            Architecture
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Enterprise-Grade{' '}
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Built on a modern, scalable foundation trusted by the world's leading enterprises.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stack.map((cat) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
              className="group glass-card hover:shadow-premium rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-sm font-700 text-primary uppercase tracking-wide mb-5 group-hover:text-accent-blue transition-colors">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-text-muted mb-6">Compliant with global standards</p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI DSS'].map((cert, idx) => (
              <motion.div
                key={cert}
                variants={statsVariants}
                className="px-4 py-2 rounded-lg bg-gradient-to-br from-primary/5 to-accent-blue/5 border border-primary/10 group hover:border-primary/30 transition-colors"
              >
                <span className="text-xs font-700 text-text-secondary group-hover:text-primary transition-colors">
                  {cert}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
