/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { handleActions } from 'redux-actions';
import {
  clearWatchList,
  loadedSymbolDetails,
  loadedSymbolChoices,
  loadSymbolChoices,
  removeSymbolFromWatchList,
  setSortOrder,
} from './actions';

// The initial state of the Main
export const initialState = {
  activeItems: null,
  availableSymbols: null,
  sortOrder: 'rank',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = handleActions(
  {
    [setSortOrder]: produce((draft, action) => {
      draft.sortOrder = action.payload.sortOrder;
      return draft;
    }),
    [removeSymbolFromWatchList]: produce((draft, action) => {
      draft.activeItems = draft.activeItems.filter(
        item => item.id !== action.payload.id,
      );
      return draft;
    }),
    [clearWatchList]: produce(draft => {
      draft.activeItems = initialState.activeItems;
      return draft;
    }),
    [loadedSymbolDetails]: produce((draft, action) => {
      if (!draft.activeItems) {
        draft.activeItems = [];
      }

      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const property in action.payload.symbol) {
        draft.activeItems.push(action.payload.symbol[property]);
      }

      return draft;
    }),
    [loadSymbolChoices]: produce(draft => {
      draft.availableSymbols = initialState.availableSymbols;
      return draft;
    }),
    [loadedSymbolChoices]: produce((draft, action) => {
      draft.availableSymbols = action.payload.choices;
      return draft;
    }),
  },
  initialState,
);

export default homeReducer;
