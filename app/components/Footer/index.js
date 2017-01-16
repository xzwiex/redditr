import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Layout } from 'antd';

import messages from './messages';

const AntdFoooter = Layout.Footer;

function Footer() {
  return (
    <AntdFoooter style={{ textAlign: 'center' }}>
      <FormattedMessage {...messages.footerText} />
    </AntdFoooter>
  );
}

export default Footer;
