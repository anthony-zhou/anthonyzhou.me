import React from 'react';
import Link from 'next/link';
import HorizontalLine from '@/widgets/HorizontalLine';

export default function Header() {
  const links = [
    { href: '/', label: 'Writing' },
    { href: '/books', label: 'Books' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <div className="flex justify-between pt-8">
        <div>Logo</div>
        <div className="flex space-x-12">
          {links.map(({ href, label }) => (
            <Link href={href} key={`${href}${label}`} className="opacity-50 hover:opacity-100 transition-opacity">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <HorizontalLine />
    </>
  );
}
