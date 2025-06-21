'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoHeader from '@/components/LogoHeader';
import { useTheme } from 'next-themes';
import { Typography, typographyClasses } from '@/components/Typography';

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
      
      <section className="min-h-screen flex items-center justify-center relative">
        <div className={`z-10 transition-all duration-1200 ease-out pl-12 lg:pl-0 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="max-w-2xl mx-auto mb-12">
            <LogoHeader 
              showLogo={true}
              showTitle={true}
              showSubtitle={true}
            />
            <p className={`text-lg mb-8 ${typographyClasses.contactInfo} tracking-[1px]`}>
              3058 St Johns St<br />
              Port Moody, BC V3H 2C5
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu"
              className={`btn-primary text-lg px-8 py-3 persian-border ${typographyClasses.button}`}
            >
              View Menu
            </Link>
            <Link 
              href="/hours"
              className={`btn-primary text-lg px-8 py-3 persian-border ${typographyClasses.button}`}
            >
              Location & Hours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 