import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type ColorMode = 'light' | 'dark';

const STORAGE_KEY = 'codelink-theme';

type ThemeContextValue = {
  theme: ColorMode;
  isDark: boolean;
  setTheme: (theme: ColorMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: ColorMode) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ColorMode>(() => {
    if (typeof document === 'undefined') return 'light';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  const value = useMemo<ThemeContextValue>(() => {
    const setTheme = (next: ColorMode) => {
      setThemeState(next);
      applyTheme(next);
    };

    return {
      theme,
      isDark: theme === 'dark',
      setTheme,
      toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
