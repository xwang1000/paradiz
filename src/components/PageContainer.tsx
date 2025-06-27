import React from "react";

export default function PageContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <main className={`max-w-4xl mx-auto px-4 py-12 overflow-x-hidden pl-10 lg:pl-0 ${className}`}>
      <div
        className="fixed top-0 left-0 h-screen pointer-events-none z-0"
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
      {children}
    </main>
  );
} 