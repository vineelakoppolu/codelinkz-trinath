import React from 'react';
import { colors } from '@/theme';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'blue-cyan';
}

/**
 * GradientText - Gradient text component for emphasis
 */
export function GradientText({
  children,
  className = '',
  variant = 'primary',
}: GradientTextProps) {
  const variants = {
    primary: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
    },
    accent: {
      background: `linear-gradient(135deg, ${colors.accentBlue} 0%, ${colors.primary} 100%)`,
    },
    'blue-cyan': {
      background: colors.gradientAccent,
    },
  };

  return (
    <span
      className={className}
      style={{
        ...variants[variant],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  );
}
