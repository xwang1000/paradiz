"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LogoHeaderProps {
  showLogo?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export default function LogoHeader({ 
  showLogo = true, 
  showTitle = true, 
  showSubtitle = true,
  className = ""
}: LogoHeaderProps) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    // Staggered fade-in animation sequence
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 200);

    const titleTimer = setTimeout(() => {
      setTitleVisible(true);
    }, 600);

    const subtitleTimer = setTimeout(() => {
      setSubtitleVisible(true);
    }, 1000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div
      className={`text-center ${className}`}
      style={{ width: '100%', position: 'relative', padding: '50px 20px' }}
    >
      {showLogo && (
        <div className="flex items-center justify-center mb-6 w-full relative mb-6" style={{ width: '100%', position: 'relative' }}>
          <Link href="/">
            <img
              src="/img/paradiz_logo.svg"
              alt="Paradiz Logo"
              className="md:h-full md:w-full h-auto w-auto transition-all duration-1000 ease-out"
              style={{ 
                width: '300px', 
                minWidth: '200px',
                height: 'auto',
                opacity: logoVisible ? 1 : 0,
                transform: logoVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
              }}
            />
          </Link>
        </div>
      )}
      
      {showTitle && (
        <h1 
          className={`text-5xl font-higuen mb-1 uppercase tracking-[6px] transition-all duration-1000 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Paradiz
        </h1>
      )}
      
      {showSubtitle && (
        <>
          <div 
            className={`transition-all duration-1000 ease-out ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontSize: '12px', letterSpacing: '3px', fontWeight: 300, textTransform: 'uppercase', fontFamily: 'Brandon Text, sans-serif' }}
          >
            Hookah Lounge & Tea House
          </div>
          <div
            className={`transition-all duration-1000 ease-out text-gray-400 text-xs mt-1 ${
              subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ fontWeight: 300, fontFamily: 'Brandon Text, sans-serif', letterSpacing: '2px' }}
          >
            Since 2012
          </div>
        </>
      )}
    </div>
  );
} 