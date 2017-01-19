import { take, call, put, select, cancel } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { fetchUserThreads } from './actions';
import apiRequest from '../../utils/api.request';

export function* fetchUserThreadsHandler(data) {
  try {
    const response = yield call(apiRequest, `/user/${data.payload.user}.json`, {limit: 30, count: 0});
    yield put(fetchUserThreads.success(response.data.children));
  } catch (e) {
    yield put(fetchUserThreads.failure(e));
  }
}

export function* fetchUserThreadsSaga() {
  const watcher = yield call(takeEvery, fetchUserThreads.REQUEST, fetchUserThreadsHandler);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  // console.log('LOCATION_CHANGE', LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  fetchUserThreadsSaga,
];
