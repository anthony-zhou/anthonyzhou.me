import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SearchBar from '../SearchBar';

export default function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchbarOpen, setSearchbarOpen] = useState(false); // for the searchbar
  const router = useRouter();

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      setSearchbarOpen(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop < lastScrollTop) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const links = [
    { href: '/', label: 'Writing' },
    { href: '/tutorials', label: 'Tutorials' },
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
              <Link href={href} key={`${href}${label}`} className={`opacity-50 hover:opacity-100 transition-opacity ${href === router.asPath ? '!opacity-100' : ''}`}>
                {label}
              </Link>
            </div>
          ))}

          <div className="flex flex-col justify-center">
            <Link href="https://github.com/anthony-zhou" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-md opacity-50 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center">
            <SearchBar open={searchbarOpen} setOpen={setSearchbarOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
