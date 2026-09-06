// Centralized theme tokens - Export all
export {
  brand,
  brandRgb,
  logos,
  royalAlpha,
  cyanAlpha,
  colors,
  type Brand,
  type Logos,
  type Colors,
} from './colors';
export { spacing, borderRadius, shadows, type Spacing, type BorderRadius, type Shadows } from './spacing';
export { typography, typographyPresets, type Typography } from './typography';
export { animations, type Animations } from './animations';
export { ThemeProvider, useTheme, type ColorMode } from './ThemeProvider';

// Combined theme object
import { brand, logos, colors } from './colors';
import { spacing, borderRadius, shadows } from './spacing';
import { typography, typographyPresets } from './typography';
import { animations } from './animations';

export const theme = {
  brand,
  logos,
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
  typographyPresets,
  animations,
} as const;

export type Theme = typeof theme;
