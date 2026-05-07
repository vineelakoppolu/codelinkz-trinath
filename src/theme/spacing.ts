// Spacing Tokens - 4px-based scale
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '80px',
  '6xl': '96px',
  '7xl': '120px',
  '8xl': '160px',
} as const;

// Border Radius Tokens
export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '18px',
  xl: '24px',
  '2xl': '32px',
  full: '999px',
} as const;

// Shadow Tokens - Premium shadows
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 16px -2px rgba(0, 0, 0, 0.12)',
  xl: '0 12px 32px -4px rgba(0, 0, 0, 0.14)',
  '2xl': '0 20px 48px -8px rgba(0, 0, 0, 0.16)',

  // Blue glow shadows
  blueGlow: '0 4px 20px rgba(37, 99, 255, 0.12)',
  blueGlowLg: '0 12px 40px rgba(37, 99, 255, 0.12)',

  // Premium shadows
  premium: '0 8px 32px rgba(0, 0, 0, 0.06)',
  premiumLg: '0 16px 48px rgba(0, 0, 0, 0.08)',
} as const;

export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
