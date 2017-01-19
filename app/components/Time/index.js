/**
*
* Time
*
*/

import React from 'react';
import moment from 'moment';

const MAX_RELATIVE_TIME = 4 * 60 * 60 * 1000; // 4 hours
const DATE_FORMAT = 'DD MMMM YYYY hh:mm';

function Time(props) {
  const now = new Date().getTime();

  const { time } = props;
  const timeMs = time * 1000;

  const timeDelta = now - timeMs;
  const momentTime = moment(timeMs);

  return (
    <span>
      { timeDelta > MAX_RELATIVE_TIME ? momentTime.format(DATE_FORMAT) : momentTime.fromNow() }
    </span>
  );
}

Time.propTypes = {
  time: React.PropTypes.number.isRequired,
};

export default Time;
