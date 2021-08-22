const { createSelector } = require('reselect');

const taskReducer = state => state.taskReducer;

export const getLoading = createSelector([taskReducer], state => {
  return state.isLoading;
});

export const getLoadingComplete = createSelector([taskReducer], state => {
  return state.isLoadingComplete;
});

export const getLoadingCreate = createSelector([taskReducer], state => {
  return state.isLoadingCreate;
});

export const getLoadingFirst = createSelector([taskReducer], state => {
  return state.isLoaidngFirst;
});

export const getTask = createSelector([taskReducer], state => {
  return state.list.filter(item => {
    // const isDeletedDataLength = item.data?.filter(o => o.is_deleted)?.length;
    // const dataLength = item.data?.length;
    return item.data?.length > 0;
  });
});

export default {
  getLoading,
  getTask,
  getLoadingComplete,
  getLoadingCreate,
  getLoadingFirst,
};
