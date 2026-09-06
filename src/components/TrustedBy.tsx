import { motion } from 'framer-motion';

const brands = [
  'Restaurant Brands',
  'Healthcare Systems',
  'Fortune 500',
  'Law Firms',
  'Tech Startups',
  'Consulting Firms',
];

const stats = [
  { value: '8B+', label: 'Transactions' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '40+', label: 'Industries' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function TrustedBy() {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-background-soft to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-700 text-text-muted uppercase tracking-wide">
            Trusted By Enterprise
          </span>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand}
              variants={itemVariants}
              className="flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent-blue/10 rounded-lg mx-auto mb-2 group-hover:from-primary/20 group-hover:to-accent-blue/20 transition-all"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                />
                <span className="text-xs text-text-muted font-600">{brand}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              className="text-center p-6 rounded-xl bg-card border border-borderLight"
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <motion.div
                className="text-4xl font-800 text-primary mb-1"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
