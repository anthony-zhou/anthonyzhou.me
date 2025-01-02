import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const feedDirectory = path.join(process.cwd(), 'feed');

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  return `${day} ${monthName.slice(0, 3)} ${year}`;
};

export default async function getSortedFeedData() {
  const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
    const files = fs.readdirSync(dirPath);
    let allFiles: string[] = arrayOfFiles;

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        allFiles = getAllFiles(fullPath, allFiles);
      } else {
        allFiles.push(fullPath);
      }
    });

    return allFiles;
  };

  const fileNames = getAllFiles(feedDirectory);
  const allFeedData: any[] = await Promise.all(fileNames.map(async (fullPath) => {
    // Remove ".md" from file name to get id
    const id = path.relative(feedDirectory, fullPath).replace(/\.md$/, '');

    // Read markdown file as string
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const result = {
      ...matterResult.data,
      date: formatDate(new Date(matterResult.data.date)),
      isoDate: new Date(matterResult.data.date).toISOString(),
    };

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    const preview = contentHtml.match(/<(\w+)[^>]*>([\s\S]*?)<\/\1>/)?.[0] || contentHtml;
    // console.log(preview);
    return {
      id,
      ...result,
      text: contentHtml,
      preview,
    };
  }));

  // Sort feed by date
  return allFeedData.sort((a, b) => {
    if (a.isoDate < b.isoDate) {
      return 1;
    }
    return -1;
  });
}

export function getAllFeedIds() {
  const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
    const files = fs.readdirSync(dirPath);
    let allFiles: string[] = arrayOfFiles;

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        allFiles = getAllFiles(fullPath, allFiles);
      } else {
        allFiles.push(fullPath);
      }
    });

    return allFiles;
  };

  const fileNames = getAllFiles(feedDirectory);
  return fileNames.map((fullPath) => ({
    params: {
      id: path.relative(feedDirectory, fullPath).replace(/\.md$/, ''),
    },
  }));
}

export async function getFeedData(id: string) {
  const fullPath = path.join(feedDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    text: contentHtml,
    ...matterResult.data,
    date: formatDate(new Date(matterResult.data.date)),
  };
}
