import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors, logos } from '@/theme';

const footerSections = {
  Products: [
    { label: 'Restolinkz', href: '/products' },
    { label: 'Crmlinkz', href: '/products' },
    { label: 'Hrlinkz', href: '/products' },
    { label: 'Advocatelinkz', href: '/products' },
    { label: 'Poslinkz', href: '/products' },
    { label: 'Sociallinkz', href: '/products' },
  ],
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
    { label: 'AI Solutions', href: '/services' },
    { label: 'Custom Software', href: '/services' },
  ],
  Technologies: [
    { label: 'Cloud-Native', href: '/technologies' },
    { label: 'AI & Machine Learning', href: '/technologies' },
    { label: 'Open APIs', href: '/technologies' },
    { label: 'Mobile & Edge', href: '/technologies' },
  ],
  Company: [
    { label: 'About Us', href: '/company' },
    { label: 'Careers', href: '/company' },
    { label: 'Contact', href: '/company' },
    { label: 'Blog', href: '/' },
  ],
  Partnership: [
    { label: 'Channel Partner', href: '/partners' },
    { label: 'Technology Partner', href: '/partners' },
    { label: 'Implementation Partner', href: '/partners' },
    { label: 'Affiliate Partner', href: '/partners' },
  ],
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
  const navigate = useNavigate();

  return (
    <footer className="bg-[var(--background)] text-[var(--text-primary)] border-t" style={{ borderColor: 'var(--border-light)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section - Brand & Metrics */}
        <motion.div
          className="py-16 border-b border-borderLight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={() => navigate('/')}
                className="flex items-center mb-6 bg-transparent border-none cursor-pointer p-0"
                whileHover={{ scale: 1.03 }}
                aria-label="CodeLink SOLUTION home"
              >
                <img
                  src={logos.footer}
                  alt="CodeLink SOLUTION"
                  className="h-16 w-auto object-contain rounded-lg"
                />
              </motion.button>
              <p className="text-textSecondary leading-relaxed max-w-sm">
                Building the next generation of enterprise SaaS solutions with innovative technology, world-class design, and unmatched support.
              </p>
            </motion.div>

            {/* Brand Metrics */}
            <motion.div className="grid grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[
                { value: '500+', label: 'Enterprise Clients' },
                { value: '8B+', label: 'Transactions/mo' },
                { value: '40+', label: 'Industries' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-4 rounded-xl border border-borderLight bg-card"
                >
                  <div className="font-800 text-lg" style={{ color: colors.primary }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-textSecondary">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Links Section */}
        <motion.div
          className="py-16 border-b border-borderLight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(footerSections).map(([category, links]) => (
              <motion.div key={category} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h4 className="font-700 text-sm mb-4 text-textPrimary uppercase tracking-wider">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, idx) => (
                    <motion.li key={idx} whileHover={{ x: 4 }}>
                      <button
                        onClick={() => navigate(link.href)}
                        className="text-sm text-textSecondary hover:text-primary transition-colors flex items-center gap-2 group bg-transparent border-none cursor-pointer p-0"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact & Social Section */}
        <motion.div
          className="py-16 border-b border-borderLight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="font-700 text-sm mb-6 text-textPrimary uppercase tracking-wider">Get in Touch</h4>
              <div className="space-y-4">
                <a href="mailto:info@codelinksolution.com" className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-textSecondary group-hover:text-primary transition-colors">Email</div>
                    <div className="text-sm font-500">info@codelinksolution.com</div>
                  </div>
                </a>
                <a href="tel:+919876543210" className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-textSecondary group-hover:text-primary transition-colors">Phone</div>
                    <div className="text-sm font-500">+91 9876543210</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-textSecondary">Address</div>
                    <div className="text-sm font-500">Bangalore, India</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-700 text-sm mb-6 text-textPrimary uppercase tracking-wider">Connect With Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, label: 'Twitter', href: '#' },
                  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { Icon: Github, label: 'GitHub', href: '#' },
                ].map(({ Icon, label, href }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    className="p-3 rounded-lg border border-borderLight hover:border-primary bg-card hover:bg-card transition-all group"
                    whileHover={{ y: -4, boxShadow: `0 8px 16px ${colors.primary}20` }}
                  >
                    <Icon className="w-5 h-5 text-textSecondary group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-textSecondary">© {new Date().getFullYear()} Codelink Solution. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-textSecondary">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="text-borderLight">•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <span className="text-borderLight">•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
