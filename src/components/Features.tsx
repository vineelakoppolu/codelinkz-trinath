import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Powered Automation',
    desc: 'Automate repetitive tasks, predict trends, and scale effortlessly.',
    icon: '🤖',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Real-Time Insights',
    desc: 'Custom dashboards and analytics for every department.',
    icon: '📊',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Universal API',
    desc: 'REST, GraphQL, and Webhooks for seamless integrations.',
    icon: '🔌',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Multi-Tenant Architecture',
    desc: 'Support unlimited companies and teams within one platform.',
    icon: '🏢',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function Features() {
  return (
    <section className="section-padding bg-bg-soft">
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
            Platform Features
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-800 mt-4 text-text-primary leading-tight">
            Everything You Need{' '}
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              To Scale
            </span>
          </h2>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card hover:shadow-premium rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-32 bg-gradient-to-br ${feature.gradient} opacity-15 group-hover:opacity-25 transition-opacity`} />
              <div className="p-8">
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-700 text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
