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
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-x-hidden">
      <GlowBackground />

      <div className="w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center relative z-10">
        {badge && (
          <motion.div
            className="inline-block mb-5 sm:mb-8 px-4 py-2 rounded-full"
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
          className="mb-4 sm:mb-6 break-words"
          style={{
            ...typographyPresets.heroHeading,
            fontSize: 'clamp(32px, 8vw, 72px)',
            lineHeight: 'clamp(38px, 9.2vw, 84px)',
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
            className="mb-4 sm:mb-6 break-words"
            style={{
              fontSize: 'clamp(16px, 4.4vw, 24px)',
              lineHeight: '1.35',
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
              fontSize: 'clamp(15px, 4vw, 18px)',
              lineHeight: '1.55',
              color: colors.textSecondary,
              maxWidth: '600px',
              margin: '0 auto 24px',
              padding: '0 2px',
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
