import React from 'react';
import Link from 'next/link';

type ArticleProps = {
  url: string,
  title: string,
  preview: string,
  date: string,
  image: string,
};

export default function ArticleCard({
  url, title, preview, date, image,
}: ArticleProps) {
  return (
    <Link href={url}>
      <div className="flex flex-col h-full border-[1px] border-[rgba(0,0,0,.125)] rounded-md">
        <img alt={title} src={image} className="w-full object-contain" />
        <div className="p-5 flex flex-col justify-between h-full">
          <div>
            <h1 className="font-bold text-[1.3rem]">{title}</h1>
            <p className="opacity-50 mt-2 text-[0.95rem]">{preview}</p>
            {/* <div className="flex gap-1">
              { categories.map((category) =>
                <span className="bg-slate-200 px-1
                rounded-xl opacity-50 hover:opacity-100 transition-opacity">{category}</span>)}
            </div> */}
            {/* <p className="opacity-50 mt-2">{preview}</p> */}

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
