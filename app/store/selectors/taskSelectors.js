const { createSelector } = require('reselect');

const taskReducer = state => state.taskReducer;

export const getLoading = createSelector([taskReducer], state => {
  return state.isLoading;
});

export const getLoadingComplete = createSelector([taskReducer], state => {
  return state.isLoadingComplete;
});

export const getTask = createSelector([taskReducer], state => {
  return state.list;
});

export default { getLoading, getTask, getLoadingComplete };
