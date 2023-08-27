import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HorizontalLine from '@/widgets/HorizontalLine';
import { getFeaturedPostsData, getSortedPostsData } from '@/lib/posts';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import ArticleCard from '@/components/ArticleCard';
import FeaturedCard from '@/components/FeaturedCard';

type HomeProps = {
  allPostsData: { date: string; title: string; id: string, categories: any[],
    image: string, preview: string }[];
  featuredPostsData: { date: string; title: string; id: string, categories: any[],
    image: string, preview: string }[];
};

export default function Home({ allPostsData, featuredPostsData }: HomeProps) {
  const router = useRouter();

  const projects = [
    {
      emoji: '🦦',
      title: 'Snapnotes',
      description: 'AI-powered guided reader to read texts faster. Work in progress.',
      link: 'https://snapnotes.app',
    },
    {
      emoji: '🌲',
      title: 'TreeChat',
      description: 'A chat app that plants trees',
      link: 'https://treechat.org',
    },
    {
      emoji: '💬',
      title: 'Big & Mini',
      description: 'Platform to connect youth and seniors for 1:1 conversations',
      link: 'https://bigandmini.org',
    },
  ];

  return (
    <Layout>
      <div>
        <div className="py-10">
          <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
          <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting. NOTE: As of 8/26/23, I&apos;m currently migrating from Jekyll to Next.js so some features may be temporarily missing.  </h1>
        </div>

        <Heading text="Featured" />

        <div className="my-6 mb-10">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPostsData.map(({
              id, date, title, image, preview, categories,
            }) => (
              <FeaturedCard title={title} url={`/posts/${id}`} author="Anthony Zhou" date={date} preview={preview} image={image} categories={categories} />
            ))}
          </div>
        </div>

        <Heading text="All Posts" />

        <div className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {allPostsData.slice(0, 20).map(({
              id, date, title, image, preview, categories,
            }) => (
              <ArticleCard title={title} url={`/posts/${id}`} author="Anthony Zhou" date={date} preview={preview} image={image} categories={categories} />
            ))}
          </div>
        </div>

        {/* <div className="mt-6">
          <h2 className="text-2xl font-bold">tutorials</h2>
          <div className="italic">things I&rsquo;ve learned</div>
          {tutorialsData.slice(0, 6).map(({
            id, date, title,
          }) => (
            <Link href={`/posts/${id}`} key={id} className="flex justify-between transition py-2 px-3 rounded-md hover:bg-gray-300">
              <h2>{title}</h2>
              <div className="w-32">{date}</div>
            </Link>
          ))}
        </div> */}
      </div>
      <HorizontalLine />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const featuredPostsData = getFeaturedPostsData();
  const allPostsData = getSortedPostsData();
  // const tutorialsData = getSortedPostsData({ category: 'tutorials' });
  return {
    props: {
      allPostsData,
      featuredPostsData,
    },
  };
}
