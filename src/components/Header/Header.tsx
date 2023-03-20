import React from 'react';
import Link from 'next/link';

export default function Header() {
  const links = [
    { href: '/', label: 'Writing' },
    { href: '/books', label: 'Books' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="flex justify-between">
      <div>Logo</div>
      <div className="flex">
        {links.map(({ href, label }) => (
          <Link href={href} key={`${href}${label}`}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
