/**
*
* ImagePreview
*
*/

import React, { PropTypes } from 'react';
import { unescape } from 'lodash'
import { Icon } from 'antd';
import styled from 'styled-components';

const EmptyContainer = styled.div`
  width: 108px;
  height: 108px;
  background: #eee;
`;


function ImagePreview(props) {
  const { images } = props;
  if (images && images.length) {
    const image = images[0].resolutions.find((img) => img.width === 108) || images[0].source;
    const { url, width, height } = image;
    return <img src={unescape(url)} width={width} height={height} />;
  }
  return <EmptyContainer>
    <Icon type="file-text" style={{ width: '108px', heighht: '108px', fontSize: '90px', lineHeight: '108px' }} />
  </EmptyContainer>;

}

ImagePreview.propTypes = {
  images: PropTypes.array,
}

export default ImagePreview;
