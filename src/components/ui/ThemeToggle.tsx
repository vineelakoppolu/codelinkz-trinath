import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/theme/ThemeProvider';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="group fixed right-0 top-1/2 z-[70] flex -translate-y-1/2 items-center overflow-hidden rounded-l-full border border-r-0 py-3 pl-3 pr-2.5 shadow-lg transition-all duration-300 hover:pr-4"
      style={{
        background: 'var(--card)',
        borderColor: 'var(--border-soft)',
        boxShadow: '0 12px 32px var(--shadow-blue)',
      }}
    >
      {isDark ? (
        <Moon className="h-5 w-5 shrink-0 text-[#00AEFE]" />
      ) : (
        <Sun className="h-5 w-5 shrink-0 text-[#1D68BE]" />
      )}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-[var(--text-primary)] opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[4.5rem] group-hover:opacity-100">
        {isDark ? 'Dark' : 'Light'}
      </span>
    </button>
  );
}
