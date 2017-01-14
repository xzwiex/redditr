/*
 *
 * ThreadsListPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectThreadsListPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class ThreadsListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    fetch('https://www.reddit.com/r/all.json')
    .then((resp) => {
      return resp.json();
    }).then((r) => {
      console.log(r);
    });
  }
  render() {
    return (
      <div>
        <Helmet
          title="ThreadsListPage"
          meta={[
            { name: 'description', content: 'Description of ThreadsListPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = selectThreadsListPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsListPage);
