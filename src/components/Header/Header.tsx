import React from 'react';
import Link from 'next/link';

export default function Header() {
  const links = [
    { href: '/writing', label: 'Writing' },
    { href: '/books', label: 'Books' },
    // { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="py-4 border-b-2">
      <div className="container mx-auto flex justify-between">
        <Link href="/"><div className="font-righteous text-4xl">AZ</div></Link>
        <div className="flex space-x-12">
          {links.map(({ href, label }) => (
            <div className="flex flex-col justify-center">
              <Link href={href} key={`${href}${label}`} className="opacity-50 hover:opacity-100 transition-opacity">
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
