/*
 *
 * ThreadsListPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  fetchThreads,
} from './actions';

const initialState = fromJS({
  loading: false,
  threads: [],
});

function threadsListPageReducer(state = initialState, action) {
  console.log('threadsListPageReducer', action);
  switch (action.type) {
    case fetchThreads.REQUEST:
      return state
        .set('loading', true)
        .set('threads', fromJS([]));
    case fetchThreads.SUCCESS:
      return state
        .set('loading', false)
        .set('threads', fromJS(action.payload));
    default:
      return state;
  }
}

export default threadsListPageReducer;
