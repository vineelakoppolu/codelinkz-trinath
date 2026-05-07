// Typography Tokens - Premium enterprise type system
export const typography = {
  // Font families
  fontFamily: {
    base: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"Monaco", "Courier New", monospace',
  },

  // Font sizes
  fontSize: {
    xs: { size: '12px', lineHeight: '16px' },
    sm: { size: '14px', lineHeight: '20px' },
    base: { size: '16px', lineHeight: '24px' },
    lg: { size: '18px', lineHeight: '28px' },
    xl: { size: '20px', lineHeight: '28px' },
    '2xl': { size: '24px', lineHeight: '32px' },
    '3xl': { size: '30px', lineHeight: '36px' },
    '4xl': { size: '36px', lineHeight: '44px' },
    '5xl': { size: '48px', lineHeight: '56px' },
    '6xl': { size: '60px', lineHeight: '72px' },
    '7xl': { size: '72px', lineHeight: '84px' },
    '8xl': { size: '96px', lineHeight: '108px' },
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0em',
    wide: '0.02em',
    wider: '0.05em',
  },
} as const;

// Typography presets
export const typographyPresets = {
  // Hero Heading - 72px bold
  heroHeading: {
    fontSize: '72px',
    lineHeight: '84px',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },

  // Section Heading - 48px bold
  sectionHeading: {
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },

  // Card Heading - 20px bold
  cardHeading: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },

  // Body text - 16px normal
  bodyText: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: '0em',
  },

  // Small text - 14px normal
  smallText: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0em',
  },

  // Badge - 12px semibold
  badge: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
  },
} as const;

export type Typography = typeof typography;
