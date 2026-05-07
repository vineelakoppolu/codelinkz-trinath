import React from 'react';
import { colors } from '@/theme';

interface GlowBackgroundProps {
  variant?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'center' | 'full';
  intensity?: 'light' | 'medium' | 'strong';
  children?: React.ReactNode;
}

/**
 * GlowBackground - Decorative glow background element
 */
export function GlowBackground({
  variant = 'center',
  intensity = 'medium',
  children,
}: GlowBackgroundProps) {
  const positionStyles = {
    topLeft: {
      top: '-200px',
      left: '-200px',
      width: '600px',
      height: '600px',
    },
    topRight: {
      top: '-200px',
      right: '-200px',
      width: '600px',
      height: '600px',
    },
    bottomLeft: {
      bottom: '-200px',
      left: '-200px',
      width: '600px',
      height: '600px',
    },
    bottomRight: {
      bottom: '-200px',
      right: '-200px',
      width: '600px',
      height: '600px',
    },
    center: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '800px',
      height: '800px',
    },
    full: {
      inset: 0,
      width: '100%',
      height: '100%',
    },
  };

  const intensityStyles = {
    light: { opacity: 0.15 },
    medium: { opacity: 0.25 },
    strong: { opacity: 0.35 },
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute pointer-events-none rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, ${colors.accentBlue})`,
          ...positionStyles[variant],
          ...intensityStyles[intensity],
        }}
      />
      {children}
    </div>
  );
}
