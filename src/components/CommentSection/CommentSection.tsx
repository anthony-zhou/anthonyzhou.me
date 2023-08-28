import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

function CommentSection({ url, title } : { url: string, title: string }) {
  const disqusShortname = 'anthonyzhou';

  const disqusConfig = {
    url,
    identifier: title, // Single post id
    title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}

export default CommentSection;
