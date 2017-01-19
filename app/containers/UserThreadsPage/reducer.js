/*
 *
 * UserThreadsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  fetchUserThreads,
} from './actions';

const initialState = fromJS({
  threads: [],
  loading: false,
});

function userThreadsPageReducer(state = initialState, action) {
  console.log('action', action);

  switch (action.type) {
    case fetchUserThreads.REQUEST:
      return state
        .set('loading', true)
        .set('threads', fromJS([]));
    case fetchUserThreads.SUCCESS:
      return state
        .set('loading', false)
        .set('threads', fromJS(action.payload));
    default:
      return state;
  }
}

export default userThreadsPageReducer;
