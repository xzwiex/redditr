/**
*
* ThreadListElement
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ImagePreview from '../ImagePreview';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const ContentContainer = styled.div`
  margin-left: 1em;
`;

function ThreadListElement(props) {
  const { preview, subreddit, title, url, created_utc, num_comments, score, author } = props;
  return (
    <Container>
      <ImagePreview {...preview} />
      <ContentContainer>
        <h2><a href={url} target="_blank">{title}</a></h2>
        <div>
          {author} in {subreddit} at {new Date(created_utc * 1000).toString()}
        </div>
        <div>
          {num_comments} - {score}
        </div>
      </ContentContainer>
    </Container>
  );
}

export default ThreadListElement;
