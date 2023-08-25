import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ArticleProps = {
  url: string,
  title: string,
  preview: string,
  author: string,
  date: string,
  image: string,
  categories: string[]
};

export default function FeaturedCard({
  url, title, preview, author, date, image, categories,
}: ArticleProps) {
  return (
    <Link href={url}>
      <div className="flex h-full border-2 border-gray-100 rounded-md">
        <div className="h-full">
          <img alt={title} src={image} className="h-full object-cover" />
        </div>
        <div className="p-5 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-xl">{title}</h1>
            {/* <div className="flex gap-1">
              { categories.map((category) => <span className="bg-slate-200 px-1 rounded-xl opacity-50 hover:opacity-100 transition-opacity">{category}</span>)}
            </div> */}
            <p className="opacity-50 mt-2">{preview}</p>

          </div>

          {/* <p>{author}</p> */}
          <div className="flex justify-between">
            <p className="opacity-40">{date}</p>

          </div>
        </div>
      </div>
    </Link>
  );
}
