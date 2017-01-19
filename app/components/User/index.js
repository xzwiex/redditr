/**
*
* User
*
*/

import React from 'react';
import { Link } from 'react-router';


function User(props) {
  const { userName } = props;
  return (
    <Link to={`/u/${userName}`}>{userName}</Link>
  );
}

User.propTypes = {
  userName: React.PropTypes.string.isRequired,
};

export default User;
