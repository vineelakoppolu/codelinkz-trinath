// Centralized theme tokens - Export all
export { colors, type Colors } from './colors';
export { spacing, borderRadius, shadows, type Spacing, type BorderRadius, type Shadows } from './spacing';
export { typography, typographyPresets, type Typography } from './typography';
export { animations, type Animations } from './animations';

// Combined theme object
import { colors } from './colors';
import { spacing, borderRadius, shadows } from './spacing';
import { typography, typographyPresets } from './typography';
import { animations } from './animations';

export const theme = {
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
  typographyPresets,
  animations,
} as const;

export type Theme = typeof theme;
