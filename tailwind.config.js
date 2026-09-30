/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1863BA',
        'primary-light': '#00B2FE',
        'primary-dark': '#0B2545',
        'accent-blue': '#00B2FE',
        'accent-cyan': '#00B2FE',
        deep: '#0B2545',
        logo: '#0076CE',
        success: '#10B981',
        warning: '#F59E0B',
        'accent-sky': 'var(--accent-sky)',
        charcoal: '#515254',
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
        'blue-glow': '0 4px 20px rgba(24, 99, 186, 0.16)',
        'blue-glow-lg': '0 12px 40px rgba(24, 99, 186, 0.2)',
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
