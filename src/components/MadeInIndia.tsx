import { motion } from 'framer-motion';

const stats = [
  { value: '23+', label: 'States Covered' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '40+', label: 'Industries' },
  { value: '8B+', label: 'Transactions' },
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

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function MadeInIndia() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="glass-card rounded-3xl p-12 lg:p-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Flag */}
          <motion.div
            className="flex justify-center gap-0 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="w-8 h-2 bg-orange-500 rounded-l-full"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.span
              className="w-8 h-2 bg-white border border-blue-100"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
            />
            <motion.span
              className="w-8 h-2 bg-emerald-500 rounded-r-full"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-800 text-text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Made in India.
          </motion.h2>
          <motion.h3
            className="text-4xl lg:text-5xl font-800 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Built for the world.
          </motion.h3>

          <motion.p
            className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Engineered in India with deep understanding of GST, TDS, and local regulations.
            Global quality, local expertise, Indian pricing.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{ scale: 1.05, y: -4 }}
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
        </motion.div>
      </div>
    </section>
  );
}
