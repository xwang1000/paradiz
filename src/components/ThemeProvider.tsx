'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to determine theme based on local time
const getTimeBasedTheme = (): Theme => {
  const hour = new Date().getHours();
  // Light theme between 8am (8) and 4pm (16)
  // Dark theme between 4pm (16) and 8am (8)
  return (hour >= 8 && hour < 16) ? 'light' : 'dark';
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark'); // Default fallback

  useEffect(() => {
    // Check if user has a saved preference first
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedTheme) {
      // User has explicitly set a preference, use it
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // No saved preference, use time-based theme
      const timeBasedTheme = getTimeBasedTheme();
      setTheme(timeBasedTheme);
      document.documentElement.setAttribute('data-theme', timeBasedTheme);
      // Save the time-based theme so it persists
      localStorage.setItem('theme', timeBasedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 