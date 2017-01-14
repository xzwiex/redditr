import { createSelector } from 'reselect';

/**
 * Direct selector to the threadsListPage state domain
 */
const selectThreadsListPageDomain = () => (state) => state.get('threadsListPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ThreadsListPage
 */

const selectThreadsListPage = () => createSelector(
  selectThreadsListPageDomain(),
  (substate) => substate.toJS()
);

export default selectThreadsListPage;
export {
  selectThreadsListPageDomain,
};
