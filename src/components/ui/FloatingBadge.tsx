import React from 'react';
import { colors } from '@/theme';

interface FloatingBadgeProps {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

/**
 * FloatingBadge - Small floating badge for hero cards
 */
export function FloatingBadge({
  icon,
  label,
  value,
  variant = 'primary',
}: FloatingBadgeProps) {
  const variants = {
    primary: {
      bg: colors.accentSky,
      textColor: colors.primary,
      border: colors.borderLight,
    },
    secondary: {
      bg: `${colors.backgroundSoft}`,
      textColor: colors.textSecondary,
      border: colors.borderSoft,
    },
    accent: {
      bg: `rgba(91, 182, 255, 0.1)`,
      textColor: colors.accentBlue,
      border: `rgba(91, 182, 255, 0.2)`,
    },
  };

  const style = variants[variant];

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-md backdrop-blur-sm"
      style={{
        background: `rgba(255, 255, 255, 0.72)`,
        border: `1px solid ${colors.borderLight}`,
        backdropFilter: 'blur(20px)',
      }}
    >
      {icon && (
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: style.bg,
            color: style.textColor,
          }}
        >
          {icon}
        </div>
      )}
      <div>
        <div className="text-xs text-text-muted">{label}</div>
        {value && (
          <div
            className="text-sm font-700"
            style={{ color: style.textColor }}
          >
            {value}
          </div>
        )}
      </div>
    </div>
  );
}
