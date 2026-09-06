import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const integrations = [
  {
    name: 'Payment Gateways',
    items: ['Stripe', 'Razorpay', 'PayPal', 'Square'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Accounting',
    items: ['QuickBooks', 'Xero', 'Wave', 'FreshBooks'],
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Communication',
    items: ['Slack', 'Twilio', 'SendGrid', 'WhatsApp Business'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Analytics',
    items: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Tableau'],
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Cloud Storage',
    items: ['AWS', 'Google Cloud', 'Azure', 'Dropbox'],
    color: 'from-pink-400 to-pink-600',
  },
  {
    name: 'E-Commerce',
    items: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'],
    color: 'from-indigo-400 to-indigo-600',
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

export default function Integrations() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-soft to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Seamless <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">Integrations</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with 100+ popular business tools and platforms. Customize your workflow without limitations.
          </motion.p>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {integrations.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="relative h-full p-8 bg-card rounded-2xl border border-borderLight hover:border-primary transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Category Name */}
                  <motion.h3
                    className={`text-2xl font-800 mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {category.name}
                  </motion.h3>

                  {/* Items List */}
                  <motion.div
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        variants={itemVariants}
                        className="flex items-center gap-3 group/item"
                      >
                        <motion.div
                          className={`flex-shrink-0 p-1 rounded-full bg-gradient-to-r ${category.color}`}
                          whileHover={{ scale: 1.2 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 font-500 transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="text-sm font-600 text-primary hover:text-accent-blue flex items-center gap-2 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Learn more
                      <span>→</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Integration */}
        <motion.div
          className="relative p-12 bg-gradient-to-r from-primary/10 via-accent-blue/10 to-primary/10 rounded-2xl border border-primary/20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-800 mb-2 text-gray-900">
                Need a Custom Integration?
              </h3>
              <p className="text-gray-700 max-w-xl">
                Our robust API and webhook system make it easy to build custom integrations with any platform. We have comprehensive documentation and dedicated support for API integration.
              </p>
            </div>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent-blue text-white font-700 rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all flex-shrink-0 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore API Docs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
