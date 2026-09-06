import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { colors } from '@/theme';

export default function CTABanner() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="rounded-3xl p-12 md:p-16 text-center overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
          }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'rgba(255, 255, 255, 0.3)' }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-800 text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's Turn Your Vision Into Reality
            </motion.h2>

            <motion.p
              className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Whether you need to build a new product, scale an existing platform, or transform your technology stack, our team is ready to help you succeed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-3 rounded-lg font-600 text-primary bg-white transition-all hover:shadow-xl hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 rounded-lg font-600 text-white border-2 border-white transition-all hover:bg-white/10 flex items-center gap-2">
                View Case Studies <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/20 text-blue-100 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>🚀 Average project delivery in 4-6 months | 💯 100% satisfaction guarantee | ✨ Dedicated support post-launch</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
