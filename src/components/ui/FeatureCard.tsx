import React from 'react';
import { colors, shadows } from '@/theme';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
  onClick?: () => void;
}

/**
 * FeatureCard - Card for displaying features
 */
export function FeatureCard({
  icon,
  title,
  description,
  gradient = `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accentBlue}10 100%)`,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl p-8 backdrop-blur-sm
        transition-all duration-300
        ${onClick ? 'cursor-pointer hover:shadow-lg hover:translate-y-[-4px] group' : ''}
      `}
      style={{
        background: colors.card,
        border: `1px solid ${colors.borderLight}`,
        boxShadow: shadows.premium,
      }}
    >
      {icon && (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
          style={{
            background: gradient,
          }}
        >
          <div style={{ color: colors.primary, fontSize: '24px' }}>
            {icon}
          </div>
        </div>
      )}

      <h3
        style={{
          fontSize: '20px',
          fontWeight: 700,
          color: colors.textPrimary,
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '14px',
          lineHeight: '20px',
          color: colors.textSecondary,
        }}
      >
        {description}
      </p>
    </div>
  );
}
