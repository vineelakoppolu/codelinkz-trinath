import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const footerLinks = {
  Products: ['Restaurant OS', 'Healthcare', 'HRMS & Payroll', 'Legal', 'Revenue', 'Marketing'],
  Solutions: ['Enterprise', 'SMB', 'Franchises', 'Healthcare Chains', 'Law Firms', 'Startups'],
  Resources: ['Documentation', 'API Docs', 'Blog', 'Case Studies', 'Status', 'Support'],
  Company: ['About', 'Careers', 'Press', 'Partners', 'Contact', 'Legal'],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-text-primary via-text-primary to-black text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="py-12 mb-12 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              className="text-3xl md:text-4xl font-800 mb-4 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Stay Updated with Codelink
            </motion.h3>
            <motion.p
              className="text-white/70 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get the latest updates, insights, and best practices delivered to your inbox.
            </motion.p>

            <motion.form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent-blue rounded-lg text-white font-600 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                {!subscribed && <Send className="w-4 h-4" />}
              </motion.button>
            </motion.form>

            {subscribed && (
              <motion.p
                className="text-green-400 text-sm mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12 pb-12 border-b border-white/10 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="font-800 text-white text-lg">C</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-800 text-lg">Codelink</span>
                <span className="text-xs text-white/50">Enterprise Platform</span>
              </div>
            </motion.div>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Empowering businesses globally with intelligent, scalable SaaS solutions. Built in India, trusted worldwide.
            </p>
            <motion.div
              className="space-y-3 text-sm text-white/70"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:hello@codelink.in"
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                hello@codelink.in
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +91 98765 43210
              </motion.a>
              <motion.div
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/40 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                Bengaluru, India
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              viewport={{ once: true }}
            >
              <h4 className="font-700 text-sm mb-4 uppercase tracking-wide text-white/90">
                {category}
              </h4>
              <motion.ul
                className="space-y-2.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {links.map((link) => (
                  <motion.li key={link} variants={itemVariants}>
                    <motion.a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Copyright & Legal */}
          <motion.div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Codelink. All rights reserved.
            </p>
            <motion.div
              className="flex items-center gap-6 text-xs text-white/60 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 pl-4 md:pl-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {['Privacy', 'Terms', 'Cookies'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Github, label: 'GitHub' },
            ].map(({ Icon, label }, idx) => (
              <motion.a
                key={idx}
                href="#"
                aria-label={label}
                className="p-2.5 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        className="fixed bottom-8 right-8 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent-blue text-white text-xs font-600 z-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        Made in India 🚀
      </motion.div>
    </footer>
  );
}
