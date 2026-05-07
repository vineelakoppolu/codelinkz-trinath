import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

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
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12 pb-12 border-b border-white/10"
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
                className="w-8 h-8 bg-gradient-to-br from-primary to-accent-blue rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <span className="font-800 text-lg">Codelink</span>
            </motion.div>
            <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xs">
              Enterprise SaaS platform for restaurants, healthcare, HR, legal, revenue, and marketing operations.
            </p>
            <motion.div
              className="space-y-2 text-sm text-white/70"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <Mail className="w-4 h-4" />
                hello@codelink.in
              </motion.div>
              <motion.div
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </motion.div>
              <motion.div
                className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <MapPin className="w-4 h-4" />
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
                      className="text-sm text-white/70 hover:text-white transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Codelink. All rights reserved.
          </p>
          <motion.div
            className="flex items-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center gap-6 text-xs text-white/60"
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
      </div>
    </footer>
  );
}
