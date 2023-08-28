import {
  readdirSync, readFileSync, existsSync, mkdirSync, writeFile,
} from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const formatDate = (date) => {
  const year = date.getFullYear();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  return `${day} ${monthName.slice(0, 3)} ${year}`;
};

const generateIndex = () => {
  const postsDirectory = './posts';

  const fileNames = readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.split('-').slice(3).join('-').replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const result = {
      ...matterResult.data,
      content: matterResult.content,
      image: matterResult.data.image.startsWith('/') ? matterResult.data.image : `/${matterResult.data.image}`,
      preview: `${matterResult.content.split(' ').slice(0, 25).join(' ')}...`,
      date: formatDate(new Date(matterResult.data.date)),
      isoDate: new Date(matterResult.data.date).toISOString(),
    };

    // Combine the data with the id
    return {
      id,
      ...result,
    };
  });

  const sortedData = allPostsData.sort((a, b) => {
    if (a.isoDate < b.isoDate) {
      return 1;
    }
    return -1;
  });

  return `const posts = ${JSON.stringify(sortedData)}
  
  export default posts;`;
};

if (!existsSync('index')) {
  mkdirSync('index');
}

writeFile('index/data.js', generateIndex(), (err) => {
  if (err) return console.log(err);
  return '';
});
