/**
*
* ThreadPost
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import ImagePreview from '../ImagePreview';
import User from '../User';
import { PostContainer, PostContentContainer } from '../CssComponents';
import Time from '../Time';
import Subreddit from '../Subreddit';

function ThreadPost(props) {
  const { preview, subreddit, title, url, created_utc, num_comments, score, author } = props;
  return (
    <PostContainer>
      <ImagePreview {...preview} />
      <PostContentContainer>
        <h2><a href={url} target="_blank">{title}</a></h2>
        <div>
          <User userName={author} /> in <Subreddit subreddit={subreddit} /> <Time time={created_utc} />
        </div>
        <div>
          {num_comments} - {score}
        </div>
      </PostContentContainer>
    </PostContainer>
  );
}

export default ThreadPost;
