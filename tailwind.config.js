/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D68BE',
        'primary-light': '#00AEFE',
        'primary-dark': '#155398',
        'accent-blue': '#00AEFE',
        'accent-cyan': '#00AEFE',
        'accent-sky': 'var(--accent-sky)',
        charcoal: '#54595E',
        background: 'var(--background)',
        'background-soft': 'var(--background-soft)',
        'bg-soft': 'var(--background-soft)',
        card: 'var(--card)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        surface: 'var(--surface)',
        borderLight: 'var(--border-light)',
      },
      borderRadius: {
        xl: '24px',
        lg: '18px',
      },
      boxShadow: {
        'blue-glow': '0 4px 20px rgba(29, 104, 190, 0.12)',
        'blue-glow-lg': '0 12px 40px rgba(29, 104, 190, 0.12)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.15s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
