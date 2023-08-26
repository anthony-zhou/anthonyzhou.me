import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faFacebookF, faLinkedin, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

type PostProps = {
  postData: {
    title: string;
    date: string;
    description: string;
    contentHtml: string;
    image: string;
  }
};

export default function Post({ postData }: PostProps) {
  // const router = useRouter();

  const url = window.location.href;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="py-10">
        <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
        <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting.</h1>
      </div>

      <div className="grid md:grid-cols-11 gap-4">
        <div className="order-2 md:order-1 md:col-span-2">
          <div className="sticky top-16">
            <div className="flex flex-col justify-between text-center opacity-40">
              <div className="flex flex-col gap-3">
                <p>Share</p>
                <a href={`https://twitter.com/intent/tweet?text=${postData.title}&url=${url}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-xl"
                  />
                </a>
                <a href={`https://facebook.com/sharer.php?u=${url}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-xl"
                  />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-xl"
                  />
                </a>
              </div>
              <div className="h-0.5 w-8 bg-gray-400 mx-auto my-4" />
              <p>N comments</p>
            </div>

          </div>
        </div>
        <article className="order-1 md:order-2 md:col-span-9 -flex-1">
          <h1 className="text-4xl font-bold">{postData.title}</h1>
          <img className="my-4" src={postData.image} alt={postData.description} />
          <article className="prose-lg font-merriweather" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
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
