import { createActions } from 'redux-actions';

export const {
  loadSymbolDetails,
  loadedSymbolDetails,
  errorSymbolDetails,
} = createActions(
  'LOAD_SYMBOL_DETAILS',
  'LOADED_SYMBOL_DETAILS',
  'ERROR_SYMBOL_DETAILS',
);

export const {
  clearWatchList,
  removeSymbolFromWatchList,
  setSortOrder,
} = createActions(
  'CLEAR_WATCH_LIST',
  'REMOVE_SYMBOL_FROM_WATCH_LIST',
  'SET_SORT_ORDER',
);

export const {
  loadSymbolChoices,
  loadedSymbolChoices,
  errorSymbolChoices,
} = createActions(
  'LOAD_SYMBOL_CHOICES',
  'LOADED_SYMBOL_CHOICES',
  'ERROR_SYMBOL_CHOICES',
);
