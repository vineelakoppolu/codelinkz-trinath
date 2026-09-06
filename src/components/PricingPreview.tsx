import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹4,999',
    period: 'per month',
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 10 users',
      '5 GB storage',
      'Basic analytics',
      'Email support',
      'Single module access',
      'Monthly reporting',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '₹14,999',
    period: 'per month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 50 users',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Multiple module access',
      'Real-time reporting',
      'API access',
      'Custom integrations',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large-scale operations',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Real-time analytics',
      '24/7 dedicated support',
      'All modules included',
      'Custom development',
      'White-label options',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    popular: false,
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

export default function PricingPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-soft to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Simple, Transparent <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">Pricing</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect plan for your business. No hidden fees. Cancel anytime.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="px-4 py-1 bg-gradient-to-r from-primary to-accent-blue text-white text-xs font-700 rounded-full">
                    MOST POPULAR
                  </span>
                </motion.div>
              )}

              <motion.div
                className={`relative h-full p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-accent-blue/5 shadow-xl'
                    : 'border-borderLight bg-card hover:border-primary'
                }`}
                whileHover={!plan.popular ? { y: -5 } : undefined}
              >
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-800 text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-4xl font-800 bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {plan.period}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    className={`w-full py-3 rounded-lg font-700 transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent-blue text-white hover:shadow-lg hover:shadow-primary/50'
                        : 'bg-background-soft text-text-primary hover:bg-accent-sky'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-6"></div>

                {/* Features */}
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      variants={itemVariants}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        className="flex-shrink-0 p-1 rounded-full bg-primary/20"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="w-5 h-5 text-primary" />
                      </motion.div>
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Need a detailed comparison of all features?
          </p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-700 hover:text-accent-blue transition-colors"
            whileHover={{ x: 4 }}
          >
            View Full Pricing
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
