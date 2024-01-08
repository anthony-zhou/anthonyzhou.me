import React from 'react';
import Link from 'next/link';

export default function Footer({ categoryCounts }: { categoryCounts: { [key: string]: number } }) {
  return (
    <div className="flex justify-between pb-10">
      <div className="text-sm">
        {/* Contact:
        {' '}
        <a href="mailto:anthony.zhou03@gmail.com">anthony.zhou03@gmail.com</a> */}
      </div>
      <div
        className="text-center grid grid-cols-12"
        style={{
          backgroundImage: "url('/jumbotron.jpg')",
          backgroundSize: 'cover',
        }}
      >
        <div className="md:col-span-4 col-span-12 bg-black opacity-80 text-white flex flex-col justify-center">
          <p className="text-3xl">
            Explore
            {' '}
            <span className="md:inline hidden">→</span>
          </p>

        </div>
        <div className="md:col-span-8 col-span-12 py-12">
          {/* Social media links */}
          {Object.keys(categoryCounts).map((category) => (
            <Link className="text-sm bg-[#222] text-white p-1 px-2 m-1 rounded-full inline-block whitespace-nowrap" href={`/category/${category}`}>
              {category}
              {' '}
              (
              {categoryCounts[category]}
              )
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
