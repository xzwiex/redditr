/**
*
* Content
*
*/

import React from 'react';

import { Layout } from 'antd';
const AntdContent = Layout.Content;


function Content(props) {
  return (
    <AntdContent style={{margin: '0 50px'}}>
      {React.Children.toArray(props.children)}
    </AntdContent>
  );
}

export default Content;
