import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/theme/ThemeProvider';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="group fixed bottom-5 right-4 z-[70] flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border shadow-lg transition-all duration-300 lg:bottom-auto lg:right-0 lg:top-1/2 lg:h-auto lg:w-auto lg:-translate-y-1/2 lg:justify-start lg:rounded-l-full lg:rounded-r-none lg:border-r-0 lg:py-3 lg:pl-3 lg:pr-2.5 lg:hover:pr-4"
      style={{
        background: 'var(--card)',
        borderColor: 'var(--border-soft)',
        boxShadow: '0 12px 32px var(--shadow-blue)',
      }}
    >
      {isDark ? (
        <Moon className="h-5 w-5 shrink-0 text-[#00B2FE]" />
      ) : (
        <Sun className="h-5 w-5 shrink-0 text-[#1863BA]" />
      )}
      <span className="hidden max-w-0 overflow-hidden lg:inline whitespace-nowrap text-sm font-semibold text-[var(--text-primary)] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[4.5rem] group-hover:opacity-100">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
