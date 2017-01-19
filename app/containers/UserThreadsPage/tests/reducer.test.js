import expect from 'expect';
import userThreadsPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userThreadsPageReducer', () => {
  it('returns the initial state', () => {
    expect(userThreadsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
