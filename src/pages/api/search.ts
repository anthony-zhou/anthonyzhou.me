// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import data from '../../../index/data.js';

type Data = {
  posts: any[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { query } = req.query;

  if (typeof query !== 'string') {
    res.status(400);
    return;
  }

  // loop through posts searching for the query term

  const relevantPosts = data.filter((post) => post.title.includes(query)
    || post.description.includes(query)
    || post.content.includes(query));

  res.status(200).json({ posts: relevantPosts });
}
