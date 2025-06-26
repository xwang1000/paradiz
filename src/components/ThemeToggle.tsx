'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in the toggle button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-2 rounded-full transition-all duration-1000 ease-out hover:scale-110 bg-transparent outline-none focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      aria-label="Toggle theme"
      style={{ minWidth: 64 }}
    >
      <div
        className={`relative w-16 h-8 flex items-center px-2 transition-colors duration-300 rounded-full ${
          theme === 'dark' ? 'bg-[#23243a]' : 'bg-gray-200'
        }`}
      >
        {/* Thumb with only the active icon */}
        <span
          className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 bg-turquoise ${
            theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          {theme === 'dark' ? (
            <Moon size={16} className="text-white" />
          ) : (
            <Sun size={16} className="text-white" />
          )}
        </span>
      </div>
    </button>
  );
} 