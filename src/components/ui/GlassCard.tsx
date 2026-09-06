import React from 'react';
import { colors, shadows } from '@/theme';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'subtle';
  onClick?: () => void;
}

/**
 * GlassCard - Premium glassmorphism card component
 * Uses frosted glass effect with backdrop blur
 */
export function GlassCard({
  children,
  className = '',
  variant = 'default',
  onClick,
}: GlassCardProps) {
  const baseStyles = `
    rounded-[24px]
    backdrop-blur-[20px]
    border border-white/40
    transition-all duration-300
    ${onClick ? 'cursor-pointer hover:shadow-lg' : ''}
  `;

  const variants = {
    default: `bg-white/72 shadow-[${shadows.premium}]`,
    elevated: `bg-white/80 shadow-[${shadows.premiumLg}]`,
    subtle: `bg-white/50 shadow-[${shadows.sm}]`,
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      style={{
        background: colors.card,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.borderLight}`,
        boxShadow: shadows.premium,
        borderRadius: '24px',
      }}
    >
      {children}
    </div>
  );
}
