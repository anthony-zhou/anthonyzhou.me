import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layouts/Layout';
import { getAllFeedIds, getFeedData } from '@/lib/feed';
import CommentSection from '@/components/CommentSection';

type FeedPostProps = {
    postData: {
        title: string;
        date: string;
        author: string;
        text: string;
    }
};

export default function FeedPost({ postData }: FeedPostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title} | Anthony Zhou</title>
            </Head>
            <div className="py-10">
                <div className="font-righteous mb-2">
                    <h1 className="text-4xl">Anthony Zhou</h1>
                </div>
                <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting.</h1>
            </div>

            <article className="prose lg:prose-md">
                <h1>{postData.title}</h1>
                <p className="text-gray-500">
                    By {postData.author} | {postData.date}
                </p>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.text }}
                />
            </article>

            <div className="mt-8">
                <CommentSection
                    title={postData.title}
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                />
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllFeedIds();
    return {
        paths: paths.map((path) => ({ params: { id: path.params.id.split('/') } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string[] } }) {
    const postData = await getFeedData(params.id.join('/'));
    console.log(postData);
    return {
        props: {
            postData,
        },
    };
}