import React from 'react';
import { motion } from 'framer-motion';
import { colors, shadows } from '@/theme';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  highlight?: boolean;
  className?: string;
}

/**
 * ServiceCard - Premium service showcase card
 */
export function ServiceCard({
  icon,
  title,
  description,
  href,
  highlight = false,
  className = '',
}: ServiceCardProps) {
  return (
    <motion.a
      href={href || '#'}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`block group ${className}`}
    >
      <div
        className="rounded-2xl p-8 h-full transition-all duration-300"
        style={{
          background: highlight
            ? `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accentBlue}15 100%)`
            : 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(20px)',
          border: highlight
            ? `2px solid ${colors.primary}30`
            : `1px solid ${colors.borderLight}`,
          boxShadow: highlight ? shadows.blueGlow : shadows.premium,
        }}
      >
        {/* Icon */}
        {icon && (
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center text-xl group-hover:shadow-lg transition-shadow"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
              color: 'white',
            }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title */}
        <h3
          className="mb-3 font-700 group-hover:text-primary transition-colors"
          style={{
            fontSize: '18px',
            lineHeight: '26px',
            color: colors.textPrimary,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '14px',
            lineHeight: '22px',
            color: colors.textSecondary,
          }}
        >
          {description}
        </p>
      </div>
    </motion.a>
  );
}
