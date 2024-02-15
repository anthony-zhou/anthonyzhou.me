import React from 'react';
import Link from 'next/link';

type ArticleProps = {
  url: string,
  title: string,
  preview: string,
  date: string,
  image: string,
};

export default function FeaturedCard({
  url, title, preview, date, image,
}: ArticleProps) {
  return (
    <Link href={url}>
      <div className="grid grid-cols-12 h-full border-[1px] border-[rgba(0,0,0,.125)] rounded-md">
        <div className="h-full col-span-12 lg:col-span-5">
          <img alt={title} src={image} className="h-full object-cover rounded-t-md lg:rounded-tr-none lg:rounded-bl-md" />
        </div>
        <div className="p-5 flex flex-col h-full justify-between gap-8 col-span-12 lg:col-span-7">
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
