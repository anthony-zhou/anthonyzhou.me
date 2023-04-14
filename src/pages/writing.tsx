import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import lshape from '@/components/L.svg';
import { getSortedPostsData } from '@/lib/posts';

type WritingProps = {
  allPostsData: { date: string; title: string; id: string, categories: any[] }[];
};

export default function Writing({ allPostsData }: WritingProps) {
  return (
    <Layout>
      <div className="flex items-center">
        <Image src={lshape} alt="L-shaped" height={75} className="mt-0" />
        <h3 className="-mt-2 text-2xl font-bold">Writing</h3>
      </div>

      <div className="mb-3">Writing is thinking.</div>

      <div>
        <h1 className="text-xl font-bold">Essays</h1>
        {allPostsData.map(({
          id, date, title,
        }) => (
          <Link href={`/posts/${id}`} key={id} className="flex justify-between transition py-2 px-3 rounded-md hover:bg-gray-300">
            <h2>{title}</h2>
            <div className="w-32">{date}</div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
