import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import HorizontalLine from '@/widgets/HorizontalLine';
import Resources from '@/components/HomePage/Resources';
import { getSortedPostsData } from '@/lib/posts';

type HomeProps = {
  allPostsData: { date: string; title: string; id: string }[];
};

export default function Home({ allPostsData }: HomeProps) {
  const router = useRouter();

  return (
    <Layout>
      <div className="md:flex space-x-10 justify-between">
        <div className="flex flex-col justify-start">
          <h1 className="text-5xl font-display mb-10 mt-10">Anthony Zhou</h1>
          <p>Psychology, Economics, Programming, or anything interesting.</p>
        </div>
        <Image className="rounded-3xl" src="/images/claymation_piano.png" alt="Claymation piano with bookshelf in background." width={260} height={260} />
      </div>
      <HorizontalLine />
      <div>
        <h2 className="text-2xl font-display text-center">Latest</h2>
        <table className="w-full">
          <tbody>
            {allPostsData.map(({ id, date, title }) => (
              <tr key={id} onClick={() => router.push(`posts/${id}`)}>
                <td width="15%">{date}</td>
                <td width="15%">Philosophy</td>
                <td>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-display text-center">My Favorites</h2>
        <p>Favorite blog posts go here.</p>
      </div>
      <HorizontalLine />
      <Resources />
      <HorizontalLine />
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
