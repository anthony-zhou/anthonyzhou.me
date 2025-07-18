import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  return `${day} ${monthName.slice(0, 3)} ${year}`;
};

export function getSortedPostsData(options?: { category: string }) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: any[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.split('-').slice(3).join('-').replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const result = {
      ...matterResult.data,
      image: matterResult.data.image.startsWith('/') ? matterResult.data.image : `/${matterResult.data.image}`,
      preview: `${matterResult.content
        .replace(/^>+\s*/gm, '') // Remove markdown blockquotes
        .split(' ')
        .slice(0, 25)
        .join(' ')}...`,
      date: formatDate(new Date(matterResult.data.date)),
      isoDate: new Date(matterResult.data.date).toISOString(),
    };

    // Combine the data with the id
    return {
      id,
      ...result,
    };
  });

  // Sort posts by date
  const sortedData = allPostsData.sort((a, b) => {
    if (a.isoDate < b.isoDate) {
      return 1;
    }
    return -1;
  });

  if (options?.category) {
    return sortedData.filter(({ categories: c }) => c.includes(options?.category));
  }
  return sortedData;
}

export function getFeaturedPostsData() {
  return getSortedPostsData().filter(({ featured }) => featured);
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.split('-').slice(3).join('-').replace(/\.md$/, ''),
    },
  }));
}

export async function getPostData(id: string) {
  // first find the post based on the ID
  const fileName = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(`${id}.md`))[0];
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const result = {
    ...matterResult.data,
    image: matterResult.data.image.startsWith('/') ? matterResult.data.image : `/${matterResult.data.image}`,
    date: formatDate(new Date(matterResult.data.date)),
    isoDate: new Date(matterResult.data.date).toISOString(),
  };

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...result,
  };
}

export function getNumPostsByCategory() {
  const sortedPosts = getSortedPostsData();

  return sortedPosts
    .map((post) => post.categories)
    .flat()
    .reduce((result, category) => ({
      ...result,
      [category]: (result[category] ?? 0) + 1,
    }), {});
}
