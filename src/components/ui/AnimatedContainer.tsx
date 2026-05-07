import React from 'react';

interface AnimatedContainerProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'float' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * AnimatedContainer - Wrapper for Framer Motion animations
 * Note: Install framer-motion for full functionality
 */
export function AnimatedContainer({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  className = '',
}: AnimatedContainerProps) {
  return (
    <div
      className={`${className}`}
      style={{
        animation: `${animation} ${duration}s ease-out ${delay}s both`,
      }}
    >
      {children}
    </div>
  );
}
