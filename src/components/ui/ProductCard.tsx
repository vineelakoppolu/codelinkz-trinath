import React from 'react';
import { motion } from 'framer-motion';
import { colors, shadows } from '@/theme';

interface ProductCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  gradient?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * ProductCard - Premium product showcase card
 */
export function ProductCard({
  icon,
  title,
  description,
  features,
  gradient = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%)`,
  onClick,
  className = '',
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div
        className="rounded-2xl p-8 h-full transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.borderLight}`,
          boxShadow: shadows.premium,
        }}
      >
        {/* Icon container */}
        {icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-2xl"
            style={{
              background: gradient,
              opacity: 0.15,
            }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title */}
        <h3
          className="mb-4 font-700"
          style={{
            fontSize: '20px',
            lineHeight: '28px',
            color: colors.textPrimary,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="mb-6"
          style={{
            fontSize: '16px',
            lineHeight: '24px',
            color: colors.textSecondary,
          }}
        >
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="space-y-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-2"
                style={{
                  fontSize: '14px',
                  color: colors.textSecondary,
                }}
              >
                <span
                  className="mt-1"
                  style={{
                    color: colors.primary,
                    fontSize: '14px',
                  }}
                >
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
