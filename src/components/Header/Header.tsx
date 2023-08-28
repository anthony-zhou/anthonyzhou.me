import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';

export default function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <div className={`py-4 z-50 transition-transform fixed top-0 left-0 right-0 bg-white shadow-sm ${headerVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-10 flex justify-between">
        <a href="/"><div className="font-righteous text-4xl">AZ</div></a>

        <div className="flex items-center md:hidden">
          <button className="border-[1px] rounded-sm py-2 px-3 flex items-center" type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-xl text-gray-400"
            />
          </button>
        </div>
        <div className="hidden md:flex md:flex-row z-50 bg-white gap-6">

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
      {/* Separate menu just for mobile (inelegant but works) */}
      <div className={`flex flex-col z-50 bg-white gap-6 container mx-auto px-10 transition-all duration-150 overflow-clip ${menuOpen ? 'h-auto pt-6' : 'h-0'}`}>

        {links.map(({ href, label }) => (
          <div className="flex flex-col justify-center">
            <Link href={href} key={`${href}${label}`} className={`opacity-50 hover:opacity-100 transition-opacity ${href === router.asPath ? '!opacity-100' : ''}`} onClick={() => setMenuOpen(false)}>
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
  );
}
