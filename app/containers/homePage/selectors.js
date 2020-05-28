/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomepage = state => {
  if (state && state.home) {
    return state.home;
  }
  return initialState;
};

export const makeSelectSortOrder = createSelector(
  selectHomepage,
  state => state.sortOrder,
);

export const makeSelectActiveItems = createSelector(selectHomepage, state => {
  const { sortOrder } = state;
  if (state.activeItems && state.activeItems.length) {
    switch (sortOrder) {
      case 'price':
        return state.activeItems
          .slice()
          .sort((a, b) => (a.quote.USD.price > b.quote.USD.price ? 1 : -1));
      default:
        // used for 'rank'
        return state.activeItems
          .slice()
          .sort((a, b) => (a.cmc_rank > b.cmc_rank ? -1 : 1));
    }
  }
  return state.activeItems;
});

export const makeSelectAvailableSymbols = createSelector(
  selectHomepage,
  state => {
    if (state.availableSymbols && state.activeItems) {
      const unique = state.availableSymbols.filter(
        obj => !state.activeItems.some(obj2 => obj.id === obj2.id),
      );
      return unique;
    }
    return state.availableSymbols;
  },
);
