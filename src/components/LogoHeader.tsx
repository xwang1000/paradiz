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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`text-center ${className}`}>
      {showLogo && (
        <div className="flex items-center justify-center mb-6 w-full relative" style={{ height: '50vh', width: '100%', position: 'relative', padding: '50px' }}>
          <Link href="/">
            <img
              src="/img/paradiz_logo_creme.svg"
              alt="Paradiz Logo"
              className="md:h-full md:w-full h-auto w-auto"
              style={{ maxHeight: '100%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </Link>
        </div>
      )}
      
      {showTitle && (
        <h1 
          className={`text-5xl font-higuen mb-1 uppercase tracking-[6px] transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Paradiz
        </h1>
      )}
      
      {showSubtitle && (
        <div 
          className={`text-lg font-brandon font-medium uppercase tracking-[2px] transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Hookah Lounge & Tea House
        </div>
      )}
    </div>
  );
} 