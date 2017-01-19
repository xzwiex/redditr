/**
*
* Comment
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { PostContainer, PostContentContainer } from '../CssComponents';
import ImagePreview from '../ImagePreview';
import User from '../User';

function Comment(props) {
  const { preview, link_title, link_url, body, author, subreddit, created_utc, score } = props;
  return (
    <PostContainer>
      <ImagePreview {...preview} />
      <PostContentContainer>
        <h4><a href={link_url} target="_blank">{link_title}</a></h4>
        <div>
          <User userName={author} /> in {subreddit} at {new Date(created_utc * 1000).toString()}
        </div>
        <div>
          {body}
        </div>
        <div>
          {score}
        </div>
      </PostContentContainer>
    </PostContainer>
  );
}

export default Comment;
