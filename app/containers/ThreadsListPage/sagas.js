import { take, call, put, select, cancel } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fetchThreads } from './actions';
import apiRequest from '../../utils/api.request';

export function* fetchThreadsHandler(data) {
  try {
    const response = yield call(apiRequest, `/r/${data.payload.subreddit}.json`, {limit: 30, count: 0});
    yield put(fetchThreads.success(response.data.children));
  } catch (e) {
    yield put(fetchThreads.failure(e));
  }
}

export function* fetchThreadsSaga() {
  const watcher = yield call(takeEvery, fetchThreads.REQUEST, fetchThreadsHandler);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  fetchThreadsSaga,
];
