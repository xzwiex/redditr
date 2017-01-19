import { createSelector } from 'reselect';

/**
 * Direct selector to the userThreadsPage state domain
 */
const selectUserThreadsPageDomain = () => (state) => state.get('userThreadsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserThreadsPage
 */

const selectUserThreadsPage = () => createSelector(
  selectUserThreadsPageDomain(),
  (substate) => substate.toJS()
);


const selectUserThreads = () => createSelector(
  selectUserThreadsPageDomain(),
  (page) => page.get('threads')
);

const selectLoading = () => createSelector(
  selectUserThreadsPageDomain(),
  (page) => page.get('loading')
);

export default selectUserThreadsPage;
export {
  selectUserThreadsPageDomain,
  selectUserThreads,
  selectLoading
};
