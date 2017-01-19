/**
*
* ThreadListElement
*
*/

import React, { PropTypes } from 'react';

import { NODE_KINDS } from './constants';
import ThreadPost from '../ThreadPost';
import Comment from '../Comment';

function ThreadListElement(props) {
  const { kind } = props;
  switch (kind) {
    case NODE_KINDS.LINK:
      return <ThreadPost {...props} />;
    case NODE_KINDS.COMMENT:
      return <Comment {...props} />;
    default:
      return null;
  }
}

ThreadListElement.propTypes = {
  kind: PropTypes.oneOf(Object.values(NODE_KINDS)),
};

export default ThreadListElement;
