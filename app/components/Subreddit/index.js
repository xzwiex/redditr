/**
*
* Subreddit
*
*/

import React from 'react';
import { Link } from 'react-router';


function Subreddit(props) {
  const { subreddit } = props;
  return (
    <Link to={`/r/${subreddit}`}>{subreddit}</Link>
  );
}

Subreddit.propTypes = {
  subreddit: React.PropTypes.string.isRequired,
};

export default Subreddit;
