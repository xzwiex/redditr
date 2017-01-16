/**
*
* ThreadsList
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ThreadsListElement from '../ThreadListElement';

const Container = styled.div`
  background: white;
  margin-bottom: 1.5em;
  box-shadow: 0 0 2px 0px rgba(0,0,0,.3);
  border-radius: 4px;
  padding: 1em;
`;

function ThreadsList(props) {  
  return (
    <div>
      {props.data.map((thread) => 
        <Container key={thread.data.id} >
          <ThreadsListElement {...thread.data} />
        </Container>
      )}
    </div>
  );
}

ThreadsList.propTypes = {
  data: PropTypes.array,
};

export default ThreadsList;
