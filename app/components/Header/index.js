import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout } from 'antd';

const AntdHeader = Layout.Header; 

import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AntdHeader style={{marginBottom: '20px', color: 'white', textTransform: 'uppercase'}}>
        Redditr
      </AntdHeader>
    );
  }
}

export default Header;
