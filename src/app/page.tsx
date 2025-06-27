'use client';
import PageContainer from '@/components/PageContainer';
import Link from 'next/link';
import LogoHeader from '@/components/LogoHeader';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentDay, setCurrentDay] = useState<number | null>(null);
  useEffect(() => {
    setCurrentDay(new Date().getDay()); // 0=Sunday, 1=Monday, ...
  }, []);

  return (
    <PageContainer>
      <LogoHeader showLogo={true} showTitle={true} showSubtitle={true} />
      <div className="flex flex-col items-center gap-8 mt-8 min-w-[300px] text-center w-full">
        {/* <p className="text-lg font-brandon leading-relaxed mb-4">
          Experience premium hookah and artisan tea in Port Moody, BC. Vancouver's premier hookah lounge and Middle Eastern tea house.
        </p> */}
        <Link href="/menu" className="btn-primary text-lg px-8 py-3">
          View Menu
        </Link>
        
        <div className="mt-12 w-full max-w-md">
          <div className="space-y-3">
            <div>
              <p className="text-base font-brandon">3058 St Johns St, Port Moody</p>
            </div>
            <div>
              <h3 className="text-lg font-brandon font-semibold mb-1">Reservations</h3>
              <p className="text-base font-brandon">(604) 724-7235</p>
            </div>
            <div>
              <h3 className="text-lg font-brandon font-semibold mb-1">Follow Us on Instagram</h3>
              <a 
                href="https://instagram.com/paradizteahouse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-base font-brandon text-teal hover:text-teal-dark transition-colors"
              >
                @paradizteahouse
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full max-w-md">
          <h2 className="text-2xl font-higuen font-bold mb-4 uppercase tracking-[2px]">Hours</h2>
          <div className="space-y-2 text-base font-brandon">
            {[
              { label: 'Monday', hours: '5pm - 1am' },
              { label: 'Tuesday', hours: '5pm - 1am' },
              { label: 'Wednesday', hours: '5pm - 1am' },
              { label: 'Thursday', hours: '5pm - 1am' },
              { label: 'Friday', hours: '6pm - 2am' },
              { label: 'Saturday', hours: '6pm - 2am' },
              { label: 'Sunday', hours: '5pm - 1am' },
            ].map((day, idx) => {
              const dayToGetDay = [1,2,3,4,5,6,0];
              return (
                <div
                  key={day.label}
                  className={`flex justify-between w-full rounded transition-colors items-center ${
                    currentDay === dayToGetDay[idx]
                      ? 'bg-teal text-creme font-bold shadow px-6 py-3 my-2'
                      : 'px-2 py-1'
                  }`}
                >
                  <span>{day.label}</span>
                  <span>{day.hours}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* <div className="mt-12">
          <h2 className="text-2xl font-higuen font-bold mb-2 uppercase tracking-[2px]">About Us</h2>
          <h3 className="text-lg font-brandon mb-2">A modern haven for hookah and tea lovers</h3>
          <p className="text-base font-brandon leading-relaxed">
            Paradiz Teahouse &amp; Hookah Lounge is a contemporary retreat where tradition meets modern comfort. We offer a unique blend of authentic hookah experiences and premium tea selections in a luxurious setting.<br /><br />
            Our mission is to create a welcoming space where guests can relax, socialize, and enjoy the finest flavors in an elegant atmosphere.
          </p>
        </div> */}
      </div>
    </PageContainer>
  );
} 