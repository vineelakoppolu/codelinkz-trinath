import React from 'react';
import { colors, typographyPresets } from '@/theme';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

/**
 * SectionTitle - Reusable section header component
 */
export function SectionTitle({
  label,
  title,
  description,
  children,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <div
          className="inline-block mb-6 px-4 py-2 rounded-full uppercase tracking-wide"
          style={{
            backgroundColor: colors.accentSky,
            color: colors.primary,
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </div>
      )}

      <h2
        className={centered ? 'mx-auto' : ''}
        style={{
          ...typographyPresets.sectionHeading,
          color: colors.textPrimary,
          marginBottom: '24px',
          maxWidth: '800px',
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: colors.textSecondary,
            marginBottom: '48px',
            maxWidth: centered ? '600px' : 'auto',
            ...(centered && { marginLeft: 'auto', marginRight: 'auto' }),
          }}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
