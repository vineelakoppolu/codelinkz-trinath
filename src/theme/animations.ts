// Animation Tokens - Smooth premium animations
export const animations = {
  // Timing functions
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easInOutQuint: 'cubic-bezier(0.83, 0, 0.17, 1)',

  // Durations (ms)
  duration: {
    fast: 150,
    base: 300,
    slow: 500,
    slower: 800,
  },

  // Preset animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: 'easeOut' },
  },

  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  pulse: {
    animate: {
      opacity: [1, 0.8, 1],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  stagger: {
    container: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
    item: {
      variants: {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
          },
        },
      },
    },
  },
} as const;

export type Animations = typeof animations;
