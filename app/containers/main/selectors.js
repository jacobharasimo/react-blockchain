/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomepage = state => {
  if (state && state.global) {
    return state.global;
  }
  return initialState;
};

export const makeSelectErrorMessage = createSelector(
  selectHomepage,
  state => state.errorMessages,
);
