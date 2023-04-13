import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

type PostProps = {
  postData: {
    title: string;
    date: string;
    description: string;
    contentHtml: string;
  }
};

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
        <div className="text-2xl">{postData.description}</div>
        <div className="text-sm mb-4">
          Anthony Zhou |
          {' '}
          {postData.date}
        </div>

        <article className="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
