'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoHeader from '@/components/LogoHeader';
import { useTheme } from '@/components/ThemeProvider';
import { Typography, typographyClasses } from '@/components/Typography';

export default function Home() {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after a longer delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);

    // Staggered animations for other elements
    const addressTimer = setTimeout(() => {
      setAddressVisible(true);
    }, 1400);

    const messageTimer = setTimeout(() => {
      setMessageVisible(true);
    }, 1600);

    const buttonTimer = setTimeout(() => {
      setButtonVisible(true);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(addressTimer);
      clearTimeout(messageTimer);
      clearTimeout(buttonTimer);
    };
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
          <div className="max-w-2xl mx-auto">
            <LogoHeader 
              showLogo={true}
              showTitle={true}
              showSubtitle={true}
            />
            <p className={`text-lg mb-8 ${typographyClasses.contactInfo} tracking-[1px] text-center transition-all duration-1000 ease-out ${
              addressVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              3058 St Johns St, Port Moody
            </p>
            <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
              messageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className={`text-xl font-higuen mb-2 text-accent uppercase tracking-[2px]`}>
                Re-Opening Soon!
              </p>
              <p className={`text-base ${typographyClasses.contactInfo} tracking-[1px]`}>
                Follow us on{' '}
                <a 
                  href="https://instagram.com/paradizteahouse" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:text-accent-dark underline"
                >
                  Instagram
                </a>
                {' '}to learn about our newest updates!
              </p>
            </div>
          </div>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center text-center transition-all duration-1000 ease-out ${
            buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Link 
              href="/menu"
              className={`btn-primary text-lg px-8 py-3`}
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 