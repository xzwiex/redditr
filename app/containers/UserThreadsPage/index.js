/*
 *
 * UserThreadsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Input, Select, Icon, Row, Col } from 'antd';

import { fetchUserThreads } from './actions';
import { selectUserThreads, selectLoading } from './selectors';
import ThreadsList from '../../components/ThreadsList';

export class UserThreadsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    threads: PropTypes.object,
    loading: PropTypes.bool,
  }

  componentWillMount() {
     const { routeParams: { user } } = this.props;
     this.props.fetchUserThreads(user);
  }

  render() {
     const { loading, threads} = this.props;
    const jsThreads = threads.toJS();
    
    return (
      <Row gutter={10}>
        <Col span={16}>
          <Helmet
            title="UserThreadsPage"
            meta={[
              { name: 'description', content: 'Description of UserThreadsPage' },
            ]}
          />
          {!loading && <ThreadsList data={jsThreads} />}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  threads: selectUserThreads(),
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchUserThreads: (user) => fetchUserThreads({ user }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserThreadsPage);
