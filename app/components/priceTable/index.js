import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text, Button } from 'rebass';
import { Loader } from './loader';

const formatCurrency = number => {
  const currencyType = Object.keys(number)[0];
  const amount = number[currencyType].price;
  const locale = navigator.language;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyType,
  }).format(amount);
};

export const PriceTable = ({ isLoading, items, onRemoveItem }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (!items) {
    return <>Empty table</>;
  }

  return (
    <Flex width="1" flexWrap="wrap" alignItems="center">
      <Box order={1} width={[1 / 4]} variant="tableHead">
        <Text as="h3" bg="darkGrey" p={1}>
          CMC Rank
        </Text>
      </Box>
      {items.map((item, index) => (
        <Box
          key={`rank_${item.symbol}`}
          order={index + 2}
          width={[1 / 4]}
          variant="tableCell"
        >
          {item.cmc_rank}
        </Box>
      ))}

      <Box order={1} width={[1 / 4]} variant="tableHead">
        <Text as="h3" bg="darkGrey" p={1}>
          Symbol
        </Text>
      </Box>
      {items.map((item, index) => (
        <Box
          key={`symbol_${item.symbol}`}
          order={index + 2}
          width={[1 / 4]}
          variant="tableCell"
        >
          {item.symbol}
        </Box>
      ))}

      <Box order={1} width={[1 / 4]} variant="tableHead">
        <Text as="h3" bg="darkGrey" p={1}>
          Price
        </Text>
      </Box>
      {items.map((item, index) => (
        <Box
          key={`price_${item.symbol}`}
          order={index + 2}
          width={[1 / 4]}
          variant="tableCell"
          sx={{ borderRight: 'none' }}
        >
          {formatCurrency(item.quote)}
        </Box>
      ))}

      <Box order={1} width={[1 / 4]} variant="tableHead" pr={0}>
        <Text as="h3" bg="darkGrey" p={1}>
          Action
        </Text>
      </Box>
      {items.map((item, index) => (
        <Box
          key={`remove_${item.symbol}`}
          order={index + 2}
          width={[1 / 4]}
          variant="tableCell"
          sx={{ borderRight: 'none' }}
        >
          <Button onClick={() => onRemoveItem(item)}>Remove</Button>
        </Box>
      ))}
    </Flex>
  );
};

PriceTable.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.array,
  onRemoveItem: PropTypes.func.isRequired,
};

PriceTable.defaultProps = {
  isLoading: false,
  items: null,
};
