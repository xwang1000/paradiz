'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const AnimatedLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = logo.getBoundingClientRect();
      
      // Calculate mouse position relative to logo center
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      
      // Apply rotation based on mouse position
      const rotateX = y * 10; // Tilt up/down
      const rotateY = -x * 10; // Tilt left/right
      
      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    logo.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      logo.removeEventListener('mousemove', handleMouseMove);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={logoRef}
      className="relative w-48 h-48 transition-transform duration-200 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Image
        src="/img/paradiz_logo.svg"
        alt="Paradiz Logo"
        fill
        className="object-contain drop-shadow-lg"
        priority
      />
    </div>
  );
};

export default AnimatedLogo; 