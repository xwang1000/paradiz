"use client";
import { menu } from '@/data/menu';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Leaf } from 'lucide-react';
import LogoHeader from '@/components/LogoHeader';

export default function MenuPage() {
  const maxH = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 300; // fallback for SSR
  const [logoSize, setLogoSize] = useState({ height: maxH, width: maxH * 1.0 });
  const aspectRatio = 1.0; // Set your logo's aspect ratio here (width / height)
  const [isFixed, setIsFixed] = useState(false);
  const logoBoxRef = useRef<HTMLDivElement>(null);
  const [smallLogoOpacity, setSmallLogoOpacity] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [noticeVisible, setNoticeVisible] = useState(false);

  // Helper function to identify vegetarian items
  const isVegetarian = (itemName) => {
    const vegetarianItems = [
      'Mixed Fruit & Nuts',
      'Veggie Samosa',
      'Salad',
      'Fries',
      'Chips',
      'Peanut Butter Pretzels',
      'Popcorn',
      'Mixed Nuts',
      'Baklava',
      'Cheesecake',
      'Ice Cream',
      'Mini Cream Puffs',
      'Mochi Ice Cream Trio'
    ];
    return vegetarianItems.includes(itemName);
  };

  useEffect(() => {
    // Set initial width based on aspect ratio
    setLogoSize({ height: maxH, width: maxH * aspectRatio });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minH = 80; // px
      const t = Math.min(1, scrollY / 120);
      const newH = maxH - (maxH - minH) * t;
      setLogoSize({ height: newH, width: newH * aspectRatio });
      setIsFixed(scrollY > 80);
      
      // Calculate when to show small logo (past middle of large logo)
      if (logoBoxRef.current) {
        const logoRect = logoBoxRef.current.getBoundingClientRect();
        const logoMiddle = logoRect.top + logoRect.height / 2;
        const shouldShow = window.scrollY > logoMiddle;
        
        if (shouldShow) {
          setSmallLogoOpacity(1);
        } else {
          setSmallLogoOpacity(0);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-item-id');
            if (itemId) {
              setVisibleItems(prev => new Set([...Array.from(prev), itemId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const items = document.querySelectorAll('[data-item-id]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Fade in notice after a delay
  useEffect(() => {
    const noticeTimer = setTimeout(() => {
      setNoticeVisible(true);
    }, 1200);

    return () => clearTimeout(noticeTimer);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 overflow-x-hidden pl-12 lg:pl-0">
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
      
      {/* Small logo that fades in/out */}
      <div 
        className="fixed bottom-6 right-6 z-[9999] pointer-events-auto"
        style={{ 
          opacity: smallLogoOpacity,
          transition: 'opacity 0.5s ease-in-out',
          pointerEvents: smallLogoOpacity > 0 ? 'auto' : 'none'
        }}
      >
        <Link href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
          <img
            src="/img/paradiz_logo_creme.svg"
            alt="Paradiz Logo"
            className="hover:opacity-60 transition-all duration-300 ease-in-out"
            style={{ width: 70, height: 70, transformOrigin: 'center' }}
          />
        </Link>
      </div>

      <div
        ref={logoBoxRef}
        className="flex items-center justify-center mb-6 w-full relative"
        style={{ width: '100%', position: 'relative', padding: '50px' }}
      >
        <LogoHeader 
          showLogo={true}
          showTitle={true}
          showSubtitle={true}
        />
      </div>

      {menu.map((cat, i) => (
        <section key={cat.category + i} className="mb-10">
          <h2 
            className={`text-2xl font-higuen mb-4 text-accent uppercase transition-all duration-500 ease-out ${
              visibleItems.has(`category-${cat.category}`) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            data-item-id={`category-${cat.category}`}
          >
            {cat.category}
          </h2>
          {/* Notice */}
          {cat.items && cat.items[0]?.isNotice ? (
            <div className={`text-accent font-brandon text-center mb-4 transition-all duration-1000 ease-out ${
              noticeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {cat.items[0].name}
            </div>
          ) : null}

          {/* Food & Drinks special layout */}
          {cat.category === 'Food & Drinks' ? (
            <>
              {/* First row: Tea, Coffee, Cold Drinks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
                {cat.subcategories?.filter(sub => ['Tea', 'Coffee', 'Cold Drinks'].includes(sub.name)).map((sub, j) => (
                  <div key={sub.name + j}>
                    <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                      <h3 
                        className={`text-sm font-brandon-bold uppercase tracking-[1px] text-accent transition-all duration-500 ease-out ${
                          visibleItems.has(`subcategory-${cat.category}-${sub.name}`) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        data-item-id={`subcategory-${cat.category}-${sub.name}`}
                      >
                        {sub.name}
                      </h3>
                      {sub.price && (
                        <span 
                          className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                            visibleItems.has(`price-${cat.category}-${sub.name}`) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-4'
                          }`}
                          data-item-id={`price-${cat.category}-${sub.name}`}
                        >
                          {sub.price}
                        </span>
                      )}
                      {sub.note && (
                        <span className="ml-2 text-sm text-gray-700">{sub.note}</span>
                      )}
                    </div>
                    <ul className="">
                      {sub.items.map((item, k) => {
                        const itemId = `${cat.category}-${sub.name}-${item.name}`;
                        return (
                          <li 
                            key={item.name + k} 
                            className={`mb-1 transition-all duration-500 ease-out ${
                              visibleItems.has(itemId) 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${k * 50}ms` }}
                            data-item-id={itemId}
                          >
                            <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                              <span className="font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1">
                                {item.name}
                                {isVegetarian(item.name) && (
                                  <Leaf className="w-4 h-4 text-green-600" />
                                )}
                              </span>
                              {item.price && <>
                                <span className="flex-1 border-b-2 border-dotted border-accent mx-2 block md:hidden"></span>
                                <span className="text-base font-brandon-bold uppercase tracking-wide text-accent">{item.price}</span>
                              </>}
                              {item.flavors && (
                                <span className="text-sm text-gray-500">({item.flavors})</span>
                              )}
                            </div>
                            {item.note && (
                              <div className="text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase">{item.note}</div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Second row: Food, Snacks, Dessert */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {cat.subcategories?.filter(sub => ['Food', 'Snacks', 'Dessert'].includes(sub.name)).map((sub, j) => (
                  <div key={sub.name + j}>
                    <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                      <h3 
                        className={`text-sm font-brandon-bold uppercase tracking-[1px] text-accent transition-all duration-500 ease-out ${
                          visibleItems.has(`subcategory-${cat.category}-${sub.name}`) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        data-item-id={`subcategory-${cat.category}-${sub.name}`}
                      >
                        {sub.name}
                      </h3>
                      {sub.price && (
                        <span 
                          className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                            visibleItems.has(`price-${cat.category}-${sub.name}`) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-4'
                          }`}
                          data-item-id={`price-${cat.category}-${sub.name}`}
                        >
                          {sub.price}
                        </span>
                      )}
                      {sub.note && (
                        <span className="ml-2 text-sm text-gray-700">{sub.note}</span>
                      )}
                    </div>
                    <ul className="">
                      {sub.items.map((item, k) => {
                        const itemId = `${cat.category}-${sub.name}-${item.name}`;
                        return (
                          <li 
                            key={item.name + k} 
                            className={`mb-1 transition-all duration-500 ease-out ${
                              visibleItems.has(itemId) 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${k * 50}ms` }}
                            data-item-id={itemId}
                          >
                            <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                              <span className="font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1">
                                {item.name}
                                {isVegetarian(item.name) && (
                                  <Leaf className="w-4 h-4 text-green-600" />
                                )}
                              </span>
                              {item.price && <>
                                <span className="flex-1 border-b-2 border-dotted border-accent mx-2 block md:hidden"></span>
                                <span className="text-base font-brandon-bold uppercase tracking-wide text-accent">{item.price}</span>
                              </>}
                              {item.flavors && (
                                <span className="text-sm text-gray-500">({item.flavors})</span>
                              )}
                            </div>
                            {item.note && (
                              <div className="text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase">{item.note}</div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ) : (
          /* Subcategories (default layout) */
          cat.subcategories?.map((sub, j) => (
            <div key={sub.name + j} className="mb-6">
              {sub.name === 'Single Flavours' ? (
                <>
                  <div className="flex items-baseline mb-2">
                    <h3 
                      className={`text-sm font-brandon-bold uppercase tracking-[1px] text-accent transition-all duration-500 ease-out ${
                        visibleItems.has(`subcategory-${cat.category}-${sub.name}`) 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      data-item-id={`subcategory-${cat.category}-${sub.name}`}
                    >
                      {sub.name}
                    </h3>
                    {sub.price && (
                      <span 
                        className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                          visibleItems.has(`price-${cat.category}-${sub.name}`) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        data-item-id={`price-${cat.category}-${sub.name}`}
                      >
                        {sub.price}
                      </span>
                    )}
                    {sub.note && (
                      <span className="ml-2 text-sm text-gray-700">{sub.note}</span>
                    )}
                  </div>
                  <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-0 ml-0">
                    {sub.items.map((item, k) => {
                      const itemId = `${cat.category}-${sub.name}-${item.name}`;
                      return (
                        <li 
                          key={item.name + k} 
                          className={`mb-1 transition-all duration-500 ease-out ${
                            visibleItems.has(itemId) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-4'
                          }`}
                          style={{ transitionDelay: `${k * 50}ms` }}
                          data-item-id={itemId}
                        >
                          <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                            <span className="font-medium font-brandon-bold uppercase tracking-[1px] text-sm flex items-center gap-1">
                              {item.name}
                              {isVegetarian(item.name) && (
                                <Leaf className="w-4 h-4 text-green-600" />
                              )}
                              {item.note && (
                                <span className="text-gray-700 ml-1 whitespace-nowrap font-brandon lowercase">{item.note}</span>
                              )}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : sub.name === 'Mix Flavors' ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* First Column - Mix Flavors */}
                  <div>
                    <div className="flex items-baseline mb-2">
                      <h3 
                        className={`text-sm font-brandon-bold uppercase tracking-[1px] text-accent transition-all duration-500 ease-out ${
                          visibleItems.has(`subcategory-${cat.category}-${sub.name}`) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        data-item-id={`subcategory-${cat.category}-${sub.name}`}
                      >
                        {sub.name}
                      </h3>
                      {sub.price && (
                        <span 
                          className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                            visibleItems.has(`price-${cat.category}-${sub.name}`) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-4'
                          }`}
                          data-item-id={`price-${cat.category}-${sub.name}`}
                        >
                          {sub.price}
                        </span>
                      )}
                      {sub.note && (
                        <span className="ml-2 text-sm text-gray-700">{sub.note}</span>
                      )}
                    </div>
                    <ul className="">
                      {sub.items.map((item, k) => {
                        const itemId = `${cat.category}-${sub.name}-${item.name}`;
                        return (
                          <li 
                            key={item.name + k} 
                            className={`mb-1 transition-all duration-500 ease-out ${
                              visibleItems.has(itemId) 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: `${k * 50}ms` }}
                            data-item-id={itemId}
                          >
                            <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                              <span className="font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1">
                                {item.name}
                                {isVegetarian(item.name) && (
                                  <Leaf className="w-4 h-4 text-green-600" />
                                )}
                              </span>
                              {item.price && <>
                                <span className="flex-1 border-b-2 border-dotted border-accent mx-2 block md:hidden"></span>
                                <span className="text-base font-brandon-bold uppercase tracking-wide text-accent">{item.price}</span>
                              </>}
                              {item.flavors && (
                                <span className="text-sm text-gray-500">({item.flavors})</span>
                              )}
                            </div>
                            {item.note && (
                              <div className="text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase">{item.note}</div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  {/* Second Column - Premium Mix and Special Add-on */}
                  <div>
                    {cat.subcategories?.filter(s => s.name === 'Premium Mix' || s.name === 'Special Add-on').map((rightSub, idx) => (
                      <div key={rightSub.name + idx} className={idx > 0 ? "mt-6" : ""}>
                        <div className="flex items-baseline w-full mb-2">
                          <h3 
                            className={`text-sm font-brandon-bold uppercase tracking-[1px] text-accent transition-all duration-500 ease-out ${
                              visibleItems.has(`subcategory-${cat.category}-${rightSub.name}`) 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-4'
                            }`}
                            data-item-id={`subcategory-${cat.category}-${rightSub.name}`}
                          >
                            {rightSub.name}
                          </h3>
                          <div className="flex items-baseline ml-2">
                            {rightSub.price && (
                              <span 
                                className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                                  visibleItems.has(`price-${cat.category}-${rightSub.name}`) 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-4'
                                }`}
                                data-item-id={`price-${cat.category}-${rightSub.name}`}
                              >
                                {rightSub.price}
                              </span>
                            )}
                            {rightSub.note && (
                              <span className="ml-2 text-sm text-gray-700">{rightSub.note}</span>
                            )}
                          </div>
                        </div>
                        <ul className="">
                          {rightSub.items.map((item, k) => {
                            const itemId = `${cat.category}-${rightSub.name}-${item.name}`;
                            return (
                              <li 
                                key={item.name + k} 
                                className={`mb-1 transition-all duration-500 ease-out ${
                                  visibleItems.has(itemId) 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-4'
                                }`}
                                style={{ transitionDelay: `${k * 50}ms` }}
                                data-item-id={itemId}
                              >
                                <div className="flex flex-wrap items-baseline gap-2 w-full">
                                  <span className="font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1">
                                    {item.name}
                                    {isVegetarian(item.name) && (
                                      <Leaf className="w-4 h-4 text-green-600" />
                                    )}
                                    {item.price && (
                                      <span className="text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 md:hidden">{item.price}</span>
                                    )}
                                  </span>
                                  {item.price && (
                                    <span className="text-base font-brandon-bold uppercase tracking-wide text-accent hidden md:inline">{item.price}</span>
                                  )}
                                  {item.flavors && (
                                    <span className="text-sm text-gray-500">({item.flavors})</span>
                                  )}
                                </div>
                                {item.note && (
                                  <div className="text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase">{item.note}</div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {/* Third Column - Empty */}
                  <div></div>
                </div>
              ) : sub.name === 'Premium Mix' || sub.name === 'Special Add-on' ? (
                // Skip these as they're handled in the 3-column layout above
                null
              ) : (
                <>
                  <div className="flex items-baseline mb-2">
                    <h3 
                      className={`text-sm font-brandon-bold uppercase tracking-[1px] text-accent transition-all duration-500 ease-out ${
                        visibleItems.has(`subcategory-${cat.category}-${sub.name}`) 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      data-item-id={`subcategory-${cat.category}-${sub.name}`}
                    >
                      {sub.name}
                    </h3>
                    {sub.price && (
                      <span 
                        className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                          visibleItems.has(`price-${cat.category}-${sub.name}`) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        data-item-id={`price-${cat.category}-${sub.name}`}
                      >
                        {sub.price}
                      </span>
                    )}
                    {sub.note && (
                      <span className="ml-2 text-sm text-gray-700">{sub.note}</span>
                    )}
                  </div>
                  <ul className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-0 ml-0">
                    {sub.items.map((item, k) => {
                      const itemId = `${cat.category}-${sub.name}-${item.name}`;
                      return (
                        <li 
                          key={item.name + k} 
                          className={`mb-1 transition-all duration-500 ease-out ${
                            visibleItems.has(itemId) 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-4'
                          }`}
                          style={{ transitionDelay: `${k * 50}ms` }}
                          data-item-id={itemId}
                        >
                          <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                            <span className="font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1">
                              {item.name}
                              {isVegetarian(item.name) && (
                                <Leaf className="w-4 h-4 text-green-600" />
                              )}
                            </span>
                            {item.price && <>
                              <span className="flex-1 border-b-2 border-dotted border-accent mx-2 block md:hidden"></span>
                              <span className="text-base font-brandon-bold uppercase tracking-wide text-accent">{item.price}</span>
                            </>}
                            {item.flavors && (
                              <span className="text-sm text-gray-500">({item.flavors})</span>
                            )}
                          </div>
                          {item.note && (
                            <div className="text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase">{item.note}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          ))
        )}

        {/* Items for categories without subcategories */}
        {cat.items && !cat.items[0]?.isNotice && (
          <ul className="">
            {cat.items.map((item, k) => {
              const itemId = `${cat.category}-${item.name}`;
              return (
                <li 
                  key={item.name + k} 
                  className={`mb-1 transition-all duration-500 ease-out ${
                    visibleItems.has(itemId) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${k * 50}ms` }}
                  data-item-id={itemId}
                >
                  <div className="flex flex-wrap items-baseline gap-2 justify-between w-full">
                    <span className="font-medium font-brandon-bold uppercase tracking-[1px] flex items-center gap-1">
                      {item.name}
                      {isVegetarian(item.name) && (
                        <Leaf className="w-4 h-4 text-green-600" />
                      )}
                    </span>
                    {item.price && (
                      <span 
                        className={`text-base font-brandon-bold uppercase tracking-wide text-accent ml-2 transition-all duration-500 ease-out ${
                          visibleItems.has(`price-${cat.category}-${item.name}`) 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        data-item-id={`price-${cat.category}-${item.name}`}
                      >
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.note && (
                    <div className="text-sm text-gray-700 ml-0 mt-0 font-brandon lowercase">{item.note}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    ))}
    
    {/* Legend */}
    <div className="mt-12 pt-8 border-t border-gray-200 text-center">
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <Leaf className="w-4 h-4 text-green-600" />
        <span className="font-brandon">Vegetarian option</span>
      </div>
    </div>
    </main>
  );
} 