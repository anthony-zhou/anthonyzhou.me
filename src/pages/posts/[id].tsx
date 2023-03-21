import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

type PostProps = {
  postData: {
    title: string;
    date: string;
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
        <h1 className="text-3xl">{postData.title}</h1>

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
