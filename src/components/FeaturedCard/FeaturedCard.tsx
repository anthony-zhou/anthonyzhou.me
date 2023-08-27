import React from 'react';
import Link from 'next/link';

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
  console.log(author, categories);

  return (
    <Link href={url}>
      <div className="flex h-full border-[1px] border-[rgba(0,0,0,.125)] rounded-md">
        <div className="h-full">
          <img alt={title} src={image} className="h-full object-cover" />
        </div>
        <div className="p-5 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-[1.3rem]">{title}</h1>
            <p className="opacity-50 mt-2 text-[0.95rem]">{preview}</p>

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
