import React from 'react';
import { motion } from 'framer-motion';
import { colors, typographyPresets } from '@/theme';
import { GlowBackground } from './GlowBackground';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  children?: React.ReactNode;
}

/**
 * PageHero - Premium hero section for all pages
 */
export function PageHero({
  title,
  subtitle,
  description,
  badge,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <GlowBackground />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {badge && (
          <motion.div
            className="inline-block mb-8 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              backgroundColor: colors.accentSky,
              color: colors.primary,
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          className="mb-6"
          style={{
            ...typographyPresets.heroHeading,
            color: colors.textPrimary,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.div
            className="mb-6"
            style={{
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 600,
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accentBlue} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.div>
        )}

        {description && (
          <motion.p
            style={{
              fontSize: '18px',
              lineHeight: '28px',
              color: colors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto 32px',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
}
