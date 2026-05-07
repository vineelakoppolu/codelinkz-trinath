import React from 'react';
import { motion } from 'framer-motion';
import { colors, shadows } from '@/theme';

interface StatsCardProps {
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

/**
 * StatsCard - Premium statistics card
 */
export function StatsCard({
  label,
  value,
  description,
  icon,
  highlight = false,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="p-6 rounded-2xl"
      style={{
        background: highlight
          ? `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.accentBlue}10 100%)`
          : 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(20px)',
        border: highlight
          ? `2px solid ${colors.primary}30`
          : `1px solid ${colors.borderLight}`,
        boxShadow: highlight ? shadows.blueGlow : shadows.premium,
      }}
    >
      {icon && (
        <div
          className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
            color: 'white',
          }}
        >
          {icon}
        </div>
      )}

      <div
        className="font-700 mb-1"
        style={{
          fontSize: '24px',
          color: colors.primary,
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: colors.textSecondary,
          marginBottom: description ? '8px' : '0',
        }}
      >
        {label}
      </div>

      {description && (
        <p
          style={{
            fontSize: '13px',
            color: colors.textMuted,
            lineHeight: '20px',
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
