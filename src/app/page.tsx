'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after a longer delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative">
      
      <div
        className="fixed top-0 left-0 h-screen pointer-events-none z-10"
        style={{
          backgroundImage: 'url(/img/frame.PNG)',
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          width: '10%',
          minWidth: '30px',
          maxWidth: '20px',
          left: '-5px'
        }}
      />
      
      <Navigation />

      <section className="min-h-screen flex items-center justify-center relative">
        <div className={`text-center z-10 transition-all duration-1200 ease-out pl-12 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="max-w-2xl mx-auto mb-12">
            <h1 className="text-5xl font-higuen mb-4 uppercase tracking-[6px]">PARADIZ</h1>
            <p className="text-lg font-brandon text-gray-600 mb-8 tracking-[2px]">Hookah Lounge & Tea House</p>
            <p className="text-lg mb-6">
              Experience the art of traditional hookah in a modern setting. Our premium selection of flavors and authentic Persian tea service creates the perfect atmosphere for relaxation and socializing.
            </p>
            <p className="text-lg mb-8">
              3058 St Johns St<br />
              Port Moody, BC V3H 2C5
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu"
              className="btn-primary text-lg px-8 py-3 persian-border"
            >
              View Menu
            </Link>
            <Link 
              href="/hours"
              className="btn-primary text-lg px-8 py-3 persian-border"
            >
              Location & Hours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 