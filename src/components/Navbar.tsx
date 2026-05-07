import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroButton } from './ui';
import { colors, shadows } from '@/theme';

const navLinks = [
  { label: 'Products', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Company', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${colors.borderLight}` : 'none',
        boxShadow: scrolled ? shadows.sm : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shadow-md transition-all group-hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
              }}
            >
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  color: 'white',
                }}
              >
                C
              </span>
            </div>
            <span
              className="hidden sm:inline text-lg tracking-tight transition-colors group-hover:text-primary"
              style={{
                fontWeight: 800,
                color: colors.primary,
              }}
            >
              Codelinkz
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: colors.textSecondary,
                  cursor: 'pointer',
                  position: 'relative',
                }}
                whileHover={{
                  color: colors.primary,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <HeroButton variant="glass" size="sm">
                Sign in
              </HeroButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
            >
              <HeroButton variant="primary" size="sm">
                Get Started
              </HeroButton>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{
              background: colors.backgroundSoft,
            }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" style={{ color: colors.textPrimary }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: colors.textPrimary }} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{
              background: colors.background,
              borderTop: `1px solid ${colors.borderLight}`,
            }}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'block',
                    padding: '12px 0',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: colors.textSecondary,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div
                className="pt-4 flex flex-col gap-2"
                style={{
                  borderTop: `1px solid ${colors.borderLight}`,
                  marginTop: '16px',
                }}
              >
                <HeroButton variant="glass" size="md" className="w-full">
                  Sign in
                </HeroButton>
                <HeroButton variant="primary" size="md" className="w-full">
                  Get Started
                </HeroButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
