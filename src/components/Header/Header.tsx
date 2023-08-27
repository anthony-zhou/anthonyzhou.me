import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchBar from '../SearchBar';

export default function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      console.log(currentScrollTop);
      console.log(`Last scroll${lastScrollTop}`);

      // If scrolling up
      if (currentScrollTop < lastScrollTop) {
        console.log('SCROLLING UP');
        setHeaderVisible(true);
      } else {
        console.log('SCROLLING DOWN');
        setHeaderVisible(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const links = [
    { href: '/', label: 'Writing' },
    { href: '/books', label: 'Bookshelf' },
    // { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className={`py-4 z-50 transition-transform sticky top-0 bg-white shadow-sm ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-10 flex justify-between">
        <Link href="/"><div className="font-righteous text-4xl">AZ</div></Link>
        <div className="flex space-x-12">
          {links.map(({ href, label }) => (
            <div className="flex flex-col justify-center">
              <Link href={href} key={`${href}${label}`} className="opacity-50 hover:opacity-100 transition-opacity">
                {label}
              </Link>
            </div>
          ))}
          <div className="flex flex-col justify-center">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
