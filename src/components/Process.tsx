import { motion } from 'framer-motion';

const steps = [
  { num: '1', title: 'Discovery', desc: 'We understand your business, workflows, and goals.' },
  { num: '2', title: 'Custom Setup', desc: 'Configure the platform to match your needs perfectly.' },
  { num: '3', title: 'Onboarding', desc: 'Live training for your team to ensure adoption.' },
  { num: '4', title: 'Scale & Grow', desc: 'Continuous support and quarterly business reviews.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function Process() {
  return (
    <section className="section-padding bg-background-soft">
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
            Implementation
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            From Discovery to{' '}
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-20px)] h-0.5 bg-gradient-to-r from-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />
              )}

              <motion.div
                className="glass-card hover:shadow-premium rounded-2xl p-8 relative z-10 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center mb-5 text-white font-700 text-lg"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {step.num}
                </motion.div>
                <h3 className="text-lg font-700 text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
