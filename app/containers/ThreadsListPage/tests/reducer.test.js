import expect from 'expect';
import threadsListPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('threadsListPageReducer', () => {
  it('returns the initial state', () => {
    expect(threadsListPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
