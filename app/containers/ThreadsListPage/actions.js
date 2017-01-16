/*
 *
 * ThreadsListPage actions
 *
 */
import { createAction } from 'redux-saga-actions';
 import {
  FETCH_THREADS,
} from './constants';

// create action 
export const fetchThreads = createAction(FETCH_THREADS);


