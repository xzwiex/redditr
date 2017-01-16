/*
 *
 * ThreadsListPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import selectThreadsListPage, { selectLoading, selectThreads } from './selectors';
import { FormattedMessage } from 'react-intl';
import { Input, Select, Icon, Row, Col } from 'antd';
import messages from './messages';
import { fetchThreads } from './actions';

import ThreadsList from '../../components/ThreadsList';

const SearchContainer = styled.div`
  margin-bottom: 16px;
`;

export class ThreadsListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const { routeParams: { subreddit = 'all' } } = this.props;
    this.props.fetchThreads({ subreddit });
  }
  render() {
    const { loading, threads} = this.props;
    const jsThreads = threads.toJS();

    return (
      <Row gutter={10}>
        <Col span={16}>
          <Helmet
            title="ThreadsListPage"
            meta={[
              { name: 'description', content: 'Description of ThreadsListPage' },
            ]}
            />
          {!loading && <ThreadsList data={jsThreads} />}
        </Col>
        <Col span={8}>Sidebar</Col>
      </Row>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  threads: selectThreads(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchThreads: (params) => fetchThreads(params, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsListPage);
