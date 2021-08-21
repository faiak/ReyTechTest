const { createSelector } = require('reselect');

const modalReducer = state => state.modalReducer;

export const get = createSelector([modalReducer], state => {
  return state;
});
