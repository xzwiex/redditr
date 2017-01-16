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

const selectThreads = () => createSelector(
  selectThreadsListPageDomain(),
  (page) => page.get('threads')
);

const selectLoading = () => createSelector(
  selectThreadsListPageDomain(),
  (page) => page.get('loading')
);

export default selectThreadsListPage;
export {
  selectThreadsListPageDomain,
  selectThreads,
  selectLoading,
};
