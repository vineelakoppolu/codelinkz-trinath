import React from 'react';
import { colors, shadows, typographyPresets } from '@/theme';

interface MetricCardProps {
  icon?: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  gradient?: string;
}

/**
 * MetricCard - Card for displaying metrics and KPIs
 */
export function MetricCard({
  icon,
  value,
  label,
  description,
  gradient = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accentBlue} 100%)`,
}: MetricCardProps) {
  return (
    <div
      className="rounded-2xl p-6 backdrop-blur-sm"
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        border: `1px solid ${colors.borderLight}`,
        boxShadow: shadows.premium,
      }}
    >
      {icon && (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.accentBlue}10 100%)`,
            color: colors.primary,
          }}
        >
          {icon}
        </div>
      )}

      <div
        style={{
          ...typographyPresets.heroHeading,
          fontSize: '32px',
          lineHeight: '40px',
          background: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '8px',
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontSize: '14px',
          color: colors.textSecondary,
          fontWeight: 600,
          marginBottom: description ? '8px' : '0',
        }}
      >
        {label}
      </div>

      {description && (
        <p
          style={{
            fontSize: '12px',
            color: colors.textMuted,
            lineHeight: '18px',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
