import React from 'react';
import Head from 'next/head';
import HorizontalLine from '@/widgets/HorizontalLine';

import getSortedFeedData from '@/lib/feed';
import Layout from '@/components/layouts/Layout';

type HomeProps = {
  feedData: { date: string; author: string; title: string; id: string, text: string }[];
};

export default function Home({ feedData }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Home | Anthony Zhou</title>
      </Head>
      <div>
        <div className="py-10">
          <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
          <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting. </h1>
        </div>

        <div>
          {feedData.map((post) => (
            <div className="mb-4" key={post.id}>
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">
                By
                {' '}
                <strong>{post.author}</strong>
                {' '}
                |
                {' '}
                {post.date}
              </p>
              <article
                className="prose prose-sm font-merriweather mt-4"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: post.text }}
              />
              <HorizontalLine />
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const feedData = await getSortedFeedData();
  return {
    props: {
      feedData,
    },
  };
}
