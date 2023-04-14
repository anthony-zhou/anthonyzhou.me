import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import HorizontalLine from '@/widgets/HorizontalLine';
import { getSortedPostsData } from '@/lib/posts';
import Footer from '@/components/Footer';

type HomeProps = {
  allPostsData: { date: string; title: string; id: string, categories: any[] }[];
  tutorialsData: { date: string; title: string; id: string, categories: any[] }[];
};

export default function Home({ allPostsData, tutorialsData }: HomeProps) {
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
      <div className="text-[#4B4B4B]">
        <div className="mb-5 mt-5">I study computer science and cognitive science at Columbia University in New York.</div>
        <div className="mb-2">here are some of my projects:</div>

        <div className="ml-10">
          {projects.map(({
            emoji, title, description, link,
          }) => (
            <Link target="_blank" href={link} className="group">
              <div className="flex rounded-md px-5 py-5 bg-gray-300 transition bg-opacity-0 group-hover:bg-opacity-50">
                <div className="mr-1">{emoji}</div>
                <div className="font-bold w-32">{title}</div>
                <div className="">{description}</div>
              </div>
            </Link>
          ))}

        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">essays</h2>
          <div className="italic">what I&rsquo;ve been thinking about lately</div>

          {allPostsData.slice(0, 6).map(({
            id, date, title,
          }) => (
            <Link href={`/posts/${id}`} key={id} className="flex justify-between transition py-2 px-3 rounded-md hover:bg-gray-300">
              <h2>{title}</h2>
              <div className="w-32">{date}</div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
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
        </div>
      </div>
      <HorizontalLine />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const tutorialsData = getSortedPostsData({ category: 'tutorials' });
  return {
    props: {
      allPostsData,
      tutorialsData,
    },
  };
}
