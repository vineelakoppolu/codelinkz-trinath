import React from 'react';
import { colors, shadows } from '@/theme';

interface HeroButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * HeroButton - Premium button component for CTAs
 */
export function HeroButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  icon,
}: HeroButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
      color: 'white',
      border: 'none',
      boxShadow: shadows.blueGlow,
    },
    secondary: {
      background: colors.background,
      color: colors.primary,
      border: `1px solid ${colors.borderSoft}`,
      boxShadow: shadows.sm,
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.6)',
      color: colors.textPrimary,
      border: `1px solid rgba(37, 99, 255, 0.1)`,
      backdropFilter: 'blur(12px)',
      boxShadow: 'none',
    },
  };

  const style = variants[variant];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-700 letter-spacing-[-0.3px]
        rounded-full
        transition-all duration-300
        flex items-center justify-center gap-2
        hover:shadow-lg hover:translate-y-[-2px]
        active:translate-y-0
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeStyles[size]}
        ${className}
      `}
      style={{
        ...style,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
