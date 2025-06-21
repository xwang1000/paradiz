'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-higuen hover:opacity-80 transition-opacity">
          Paradiz Hookah Lounge
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="theme-switch"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="menu-button md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-16 right-4 z-50 menu-container md:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="menu-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about-us" className="menu-item" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/menu" className="menu-item" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="/hours" className="menu-item" onClick={() => setIsMenuOpen(false)}>Hours</Link>
            <Link href="/contact" className="menu-item" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
} 