import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-background-soft">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent-blue opacity-90" />
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -20, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            className="relative z-10 p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl lg:text-6xl font-800 text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Operations?
            </motion.h2>
            <motion.p
              className="text-lg text-white/90 max-w-xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join 500+ enterprise customers already using Codelink. Start your free trial today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="flex items-center gap-2 bg-white text-primary font-700 px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(29, 104, 190, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full text-white font-700 border-2 border-white/30 hover:border-white/50 backdrop-blur transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.8)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            <motion.p
              className="text-white/80 text-sm mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              No credit card required. Takes 2 minutes to set up.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
