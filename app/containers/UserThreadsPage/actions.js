/*
 *
 * UserThreadsPage actions
 *
 */

import { createAction } from 'redux-saga-actions';
 import {
  FETCH_USER_THREADS,
} from './constants';

// create action 
export const fetchUserThreads = createAction(FETCH_USER_THREADS);


