/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563FF',
        'primary-light': '#4F8CFF',
        'primary-dark': '#1247D6',
        'accent-cyan': '#5BB6FF',
        'accent-sky': '#DCEEFF',
        'bg-soft': '#F7FAFF',
        'text-muted': '#94A3B8',
      },
      borderRadius: {
        xl: '24px',
        lg: '18px',
      },
      boxShadow: {
        'blue-glow': '0 4px 20px rgba(37, 99, 255, 0.12)',
        'blue-glow-lg': '0 12px 40px rgba(37, 99, 255, 0.12)',
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
