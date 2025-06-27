"use client";
import { useState, useEffect } from 'react';
import { PageHeading, PageSubtitle, SectionHeading, Typography, typographyClasses } from '@/components/Typography';

export default function Hours() {
  const [currentDay, setCurrentDay] = useState<string>('');

  useEffect(() => {
    // Get current day in Vancouver, Canada timezone
    const vancouverTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Vancouver",
      weekday: "long"
    });
    setCurrentDay(vancouverTime);
  }, []);

  const hoursData = [
    { day: 'Monday', hours: '5:00 PM - 1:00 AM' },
    { day: 'Tuesday', hours: '5:00 PM - 1:00 AM' },
    { day: 'Wednesday', hours: '5:00 PM - 1:00 AM' },
    { day: 'Thursday', hours: '5:00 PM - 1:00 AM' },
    { day: 'Friday', hours: '6:00 PM - 2:00 AM' },
    { day: 'Saturday', hours: '6:00 PM - 2:00 AM' },
    { day: 'Sunday', hours: '6:00 PM - 1:00 AM' }
  ];

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 overflow-x-hidden pl-10 lg:pl-0 space-y-16">
      {/* Welcome Section */}
      <section className="bg-teal text-creme py-20 text-center">
        <PageHeading className="text-creme">Hours</PageHeading>
        <PageSubtitle className="text-creme">Visit us during our operating hours</PageSubtitle>
      </section>

      {/* Hours Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="card">
          <SectionHeading>Operating Hours</SectionHeading>
          <div className="space-y-4">
            {hoursData.map((item, index) => {
              const isToday = currentDay === item.day;
              return (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                    isToday 
                      ? 'bg-teal text-creme shadow-lg transform scale-105' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${isToday ? 'text-creme' : ''} ${typographyClasses.contactInfo}`}>
                      {item.day}
                    </span>
                    {isToday && (
                      <span className={typographyClasses.todayBadge}>
                        TODAY
                      </span>
                    )}
                  </div>
                  <span className={`${isToday ? 'text-creme' : 'text-gray-600'} ${typographyClasses.contactInfo}`}>
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 