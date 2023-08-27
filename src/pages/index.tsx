import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
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
  const [pageNumber, setPageNumber] = useState(1);
  const totalNumPages = Math.floor(allPostsData.length / 6);

  const movePage = (newPageNum: number) => {
    setPageNumber(newPageNum);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <Layout>
      <div>
        <div className="py-10">
          <div className="font-righteous mb-2"><h1 className="text-4xl">Anthony Zhou</h1></div>
          <h1 className="text-xl mb-5">Psychology, Economics, Programming, or anything interesting. </h1>
        </div>

        { pageNumber === 1
          ? (
            <>
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
            </>
          )
          : null}

        <Heading text="All Posts" />

        <div className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {allPostsData.slice((pageNumber - 1) * 6, pageNumber * 6).map(({
              id, date, title, image, preview, categories,
            }) => (
              <ArticleCard title={title} url={`/posts/${id}`} author="Anthony Zhou" date={date} preview={preview} image={image} categories={categories} />
            ))}
          </div>
        </div>

        <div className="mt-10 w-full border-b-[0.5px] border-gray-400 flex justify-center">
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-3xl -mb-[11px] text-[#eaeaea]"
          />
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex gap-2 font-bold text-sm">
            <button
              type="button"
              className="text-green-500 disabled:text-gray-400 hover:text-green-700 transition-colors"
              onClick={() => movePage(pageNumber - 1)}
              disabled={pageNumber === 1}
            >
              « Prev
            </button>
            {
            [...Array(5).keys()]
              .map((i) => (
                <button type="button" onClick={() => movePage(i + 1)} className="text-green-500 disabled:text-gray-400 hover:text-green-700 transition-colors" disabled={i + 1 === pageNumber}>
                  {i + 1}
                </button>
              ))
          }
            <button
              type="button"
              className="text-green-500 disabled:text-gray-400 hover:text-green-700 transition-colors"
              onClick={() => movePage(pageNumber + 1)}
              disabled={pageNumber === totalNumPages}
            >
              Next »

            </button>

          </div>
        </div>

        {/* <div className="mt-6">
          <h2 className="text-2xl font-bold">tutorials</h2>
          <div className="italic">things I&rsquo;ve learned</div>
          {tutorialsData.slice(0, 6).map(({
            id, date, title,
          }) => (
            <Link href={`/posts/${id}`} key={id}
            className="flex justify-between transition py-2 px-3 rounded-md hover:bg-gray-300">
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
