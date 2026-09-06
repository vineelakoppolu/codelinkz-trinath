/**
 * Official CodeLink SOLUTION brand colors — extracted from the logo.
 * Use these tokens everywhere. Do not introduce new brand hues.
 */
export const brand = {
  /** Light Blue / Cyan — C outer ring, O inner dot, i-dot */
  cyan: '#00AEFE',
  /** Dark Blue / Royal Blue — C inner, O ring, "deLink", TM */
  royal: '#1D68BE',
  /** Dark Slate Gray / Charcoal — "SOLUTION" subtext */
  charcoal: '#54595E',
  /** Background White */
  white: '#FFFFFF',
} as const;

export const brandRgb = {
  cyan: '0, 174, 254',
  royal: '29, 104, 190',
  charcoal: '84, 89, 94',
  white: '255, 255, 255',
} as const;

export const logos = {
  header: '/IMG-20260829-WA0000.jpg',
  footer: '/IMG-20260829-WA0001.jpg',
} as const;

export const royalAlpha = (alpha: number) => `rgba(${brandRgb.royal}, ${alpha})`;
export const cyanAlpha = (alpha: number) => `rgba(${brandRgb.cyan}, ${alpha})`;

export const colors = {
  // Primary — Royal Blue
  primary: brand.royal,
  primaryLight: brand.cyan,
  primaryDark: '#155398',

  // Accent — Cyan
  accentBlue: brand.cyan,
  accentSky: 'var(--accent-sky)',

  // Backgrounds follow light/dark CSS variables
  background: 'var(--background)',
  backgroundSoft: 'var(--background-soft)',
  backgroundDark: brand.royal,
  surface: 'var(--surface)',
  card: 'var(--card)',

  // Text
  textPrimary: 'var(--text-primary)',
  textSecondary: 'var(--text-secondary)',
  textMuted: 'var(--text-muted)',
  textLight: '#E8F7FF',

  // Borders
  borderSoft: 'var(--border-soft)',
  borderLight: 'var(--border-light)',

  // Status
  success: '#0EA5E9',
  warning: '#F59E0B',
  error: '#EF4444',

  // Gradients
  gradientPrimary: `linear-gradient(135deg, ${brand.royal} 0%, ${brand.cyan} 100%)`,
  gradientAccent: `linear-gradient(135deg, ${brand.cyan} 0%, ${brand.royal} 100%)`,
} as const;

export type Brand = typeof brand;
export type Logos = typeof logos;
export type Colors = typeof colors;
