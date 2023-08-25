import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ArticleProps = {
  url: string,
  title: string,
  preview: string,
  author: string,
  date: string,
  image: string
};

export default function ArticleCard({
  url, title, preview, author, date, image,
}: ArticleProps) {
  return (
    <Link href={url}>
      <div className="flex flex-col h-full border-2 border-gray-100 rounded-md">
        <img alt={title} src={image} className="w-full object-contain" />
        <div className="p-5 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <p className="opacity-50">{preview}</p>
          </div>
          {/* <p>{author}</p> */}
          <p className="opacity-40">{date}</p>
        </div>
      </div>
    </Link>
  );
}
