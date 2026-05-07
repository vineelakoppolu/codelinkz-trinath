// Color Tokens - Centralized premium color system
export const colors = {
  // Primary - Electric Blue
  primary: '#2563FF',
  primaryLight: '#4F8CFF',
  primaryDark: '#1247D6',

  // Accent - Sky/Cyan
  accentBlue: '#5BB6FF',
  accentSky: '#DCEEFF',

  // Backgrounds
  background: '#FFFFFF',
  backgroundSoft: '#F7FAFF',
  backgroundDark: '#0F172A',

  // Text
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  textLight: '#E2E8F0',

  // Borders
  borderSoft: '#E2E8F0',
  borderLight: 'rgba(37, 99, 255, 0.08)',

  // Status
  success: '#0EA5E9',
  warning: '#F59E0B',
  error: '#EF4444',

  // Gradients
  gradientPrimary: 'linear-gradient(135deg, #2563FF 0%, #4F8CFF 100%)',
  gradientAccent: 'linear-gradient(135deg, #5BB6FF 0%, #2563FF 100%)',
} as const;

export type Colors = typeof colors;
