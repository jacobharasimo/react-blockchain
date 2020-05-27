/*
 * HomePage
 *
 * This is the first thing users see of our homePage, at the '/' route
 */

import React, { useEffect } from 'react';
import { compose } from 'redux';
import { Flex, Box } from 'rebass';

import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { PriceTable } from '../../components/priceTable';
import { makeSelectIsLoading } from '../main/loadingSelector';
import {
  loadSymbolChoices,
  loadSymbolDetails,
  removeSymbolFromWatchList,
  setSortOrder,
} from './actions';
import {
  makeSelectActiveItems,
  makeSelectAvailableSymbols,
  makeSelectSortOrder,
} from './selectors';
import { SymbolSelector } from '../../components/symbolSelector';
import { setErrorRibbon } from '../main/actions';
import { TableSort } from '../../components/tableSort';

const key = 'home';

const HomePage = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const dispatch = useDispatch();
  const isPriceTableLoading = useSelector(makeSelectIsLoading('symbolDetails'));
  const isSymbolSelectorLoading = useSelector(
    makeSelectIsLoading('symbolChoices'),
  );
  const sortOrder = useSelector(makeSelectSortOrder);
  const availableSymbols = useSelector(makeSelectAvailableSymbols);
  const activeItems = useSelector(makeSelectActiveItems);

  const addSymbolToWatch = e => {
    if (activeItems.length < 10) {
      dispatch(loadSymbolDetails({ symbols: [e.target.value] }));
    } else {
      dispatch(
        setErrorRibbon({
          message:
            'You can only watch 10 at a time. Remove one first and try again.',
        }),
      );
    }
  };

  const sortList = e => {
    dispatch(setSortOrder({ sortOrder: e.target.value }));
  };

  const removeSymbolToWatch = symbol => {
    if (activeItems.length > 1) {
      dispatch(removeSymbolFromWatchList(symbol));
    } else {
      dispatch(
        setErrorRibbon({
          message:
            'You must have at least one item in the list. Add a second item and try again',
        }),
      );
    }
  };

  useEffect(() => {
    dispatch(loadSymbolChoices());
  }, []);

  return (
    <Flex flexDirection="column">
      <Box width={1} variant="container" my={2} data-elemet="wrap">
        <SymbolSelector
          isLoading={isSymbolSelectorLoading}
          list={availableSymbols}
          onSelect={addSymbolToWatch}
        />
      </Box>
      <Box variant="container" my={2}>
        <TableSort selected={sortOrder} onSort={sortList} />
      </Box>
      <Box variant="container" mt={2}>
        <PriceTable
          onRemoveItem={removeSymbolToWatch}
          items={activeItems}
          isLoading={isPriceTableLoading}
        />
      </Box>
    </Flex>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default compose(HomePage);
