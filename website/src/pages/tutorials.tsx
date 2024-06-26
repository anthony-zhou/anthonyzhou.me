import React from 'react';
import Head from 'next/head';
import { getNumPostsByCategory, getSortedPostsData } from '@/lib/posts';
import HorizontalLine from '@/widgets/HorizontalLine';
import ArticleCard from '@/components/ArticleCard';
import Heading from '@/components/Heading';
import ArticleLayout from '@/components/layouts/ArticleLayout/ArticleLayout';

export default function Tutorials({ tutorialsData, categoryCounts }: { tutorialsData: any[],
  categoryCounts: { [key: string]: number } }) {
  return (
    <ArticleLayout categoryCounts={categoryCounts}>
      <Head>
        <title>Tutorials | Anthony Zhou</title>
      </Head>
      <div>
        <div className="py-10">
          <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
          <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting. </h1>
        </div>

        <Heading text="Tutorials" />

        <div className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorialsData.map(({
              id, date, title, image, preview,
            }) => (
              <ArticleCard key={title} title={title} url={`/posts/${id}`} date={date} preview={preview} image={image} />
            ))}
          </div>
        </div>
      </div>
      <HorizontalLine />
    </ArticleLayout>
  );
}

export async function getStaticProps() {
  const tutorialsData = getSortedPostsData({ category: 'tutorials' });
  const categoryCounts = getNumPostsByCategory();

  return {
    props: {
      tutorialsData,
      categoryCounts,
    },
  };
}
