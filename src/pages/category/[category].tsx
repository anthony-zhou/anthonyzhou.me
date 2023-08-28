import React from 'react';
import { getNumPostsByCategory, getSortedPostsData } from '@/lib/posts';
import HorizontalLine from '@/widgets/HorizontalLine';
import ArticleCard from '@/components/ArticleCard';
import Heading from '@/components/Heading';
import ArticleLayout from '@/components/layouts/ArticleLayout/ArticleLayout';

export default function CategoryPage({ posts, categoryCounts, category }:
{ posts: any[], categoryCounts: { [key: string]: number }, category: string }) {
  // capitalize the first letter of each word
  const formattedCategory = category.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <ArticleLayout categoryCounts={categoryCounts}>
      <div>
        <div className="py-10">
          <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
          <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting. </h1>
        </div>

        <Heading text={formattedCategory} />

        <div className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({
              id, date, title, image, preview,
            }) => (
              <ArticleCard title={title} url={`/posts/${id}`} date={date} preview={preview} image={image} />
            ))}
          </div>
        </div>
      </div>
      <HorizontalLine />
    </ArticleLayout>
  );
}

export async function getStaticPaths() {
  const categoryCounts = getNumPostsByCategory();
  return {
    paths: Object.keys(categoryCounts).map((category) => ({ params: { category } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }: { params: { category: string } }) {
  const posts = getSortedPostsData({ category });
  const categoryCounts = getNumPostsByCategory();

  return {
    props: {
      posts,
      categoryCounts,
      category,
    },
  };
}
