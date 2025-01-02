import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HorizontalLine from '@/widgets/HorizontalLine';

import getSortedFeedData from '@/lib/feed';
import Layout from '@/components/layouts/Layout';
import profileImage from '@/components/profile.jpg';
import { getSortedPostsData } from '@/lib/posts';

type HomeProps = {
  feedData: {
    date: string; author: string; title: string;
    id: string, text: string, preview: string
  }[];
  posts: { date: string; author: string; title: string; id: string, text: string }[];
};

export default function Home({ feedData, posts }: HomeProps) {
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

        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <Image src={profileImage} alt="Anthony Zhou" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <h2 className="text-3xl">
              Hello, I&apos;m
              {' '}
              <span className="font-bold">Anthony</span>
              .
            </h2>
            <h3 className="text-lg">CS @ Columbia University &apos;25 | New York, NY</h3>

            <div>
              My goal is to build technology that
              addresses social challenges. My past projects have addressed challenges like
              {' '}
              <a className="text-blue-500" href="https://bigandmini.org/" target="_blank" rel="noopener noreferrer">loneliness</a>
              ,
              {' '}
              <a className="text-blue-500" href="/posts/air-quality-report" target="_blank" rel="noopener noreferrer">air pollution</a>
              , and
              {' '}
              <a className="text-blue-500" href="https://arxiv.org/abs/2405.00018" target="_blank" rel="noopener noreferrer">legacy climate model infrastructure</a>
              . Most recently, I led a product team
              {' '}
              <a className="text-blue-500" href="https://recruit.reazon.jp/en/business/r_and_d" target="_blank" rel="noopener noreferrer">in Tokyo</a>
              {' '}
              developing exercise technology for older adults.
              Informed by these experiences,
              I aim to study how technological progress can be harnessed for the public good.
            </div>
            <div className="flex justify-start mt-4">
              <a className="bg-black text-white px-4 py-2 rounded-md" href="/assets/zhou_cv.pdf" target="_blank" rel="noopener noreferrer">My CV</a>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-3xl font-bold mb-6">Recent Blog Posts</h2>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div>
              <div className="space-y-4">
                {posts.slice(0, 6).map((post) => (
                  <article key={post.id} className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500 w-24 shrink-0">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <a
                      href={`/posts/${post.id}`}
                      className="hover:text-gray-600 truncate"
                    >
                      {post.title}
                    </a>
                  </article>
                ))}

              </div>
              <p className="mt-12">
                For more informal writing, visit the
                <a href="/writing" className="text-blue-500">writing page</a>
                .
              </p>
            </div>
            <div>
              <img src="/assets/images/ochanomizu.jpg" className="h-80" alt="Ochanomizu" />
              <p className="text-gray-500 text-xs italic">A view from my morning commute.</p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2 className="text-3xl font-bold mb-6">Recent Essays</h2>
          <div className="space-y-4 flex flex-col gap-2">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">05/02/2024</span>
              <a href="https://scratchpad.anthonyzhou.com/blog/cognition/attention-neglect" className="text-black hover:text-gray-600" target="_blank" rel="noopener noreferrer">Attention and Attentional Neglect: Deficits in Attention Reveal How Attention Works</a>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">02/29/2024</span>
              <a href="https://scratchpad.anthonyzhou.com/blog/perception/synesthesia" className="text-black hover:text-gray-600" target="_blank" rel="noopener noreferrer">Synesthesia: Why Some Letters Look Red and Others Look Blue</a>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">05/05/2023</span>
              <a href="https://scratchpad.anthonyzhou.com/blog/history/kleiner-perkins-personality" className="text-black hover:text-gray-600" target="_blank" rel="noopener noreferrer">Personality in Venture Capital: Lessons from the Kleiner Perkins Story.</a>
            </div>
          </div>

          <p className="mt-8">
            For more academic writing, visit the
            <a href="https://scratchpad.anthonyzhou.com/" className="text-blue-500">scratchpad</a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Quotes and Links</h2>
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
                dangerouslySetInnerHTML={{ __html: post.preview }}
              />
              <div className="mt-4">
                <Link href={`/feed/${post.id}`} className="text-blue-500 hover:text-blue-700">
                  Read more...
                </Link>
              </div>
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
  const posts = getSortedPostsData();
  return {
    props: {
      feedData,
      posts,
    },
  };
}
