import React from 'react';
import PropTypes from 'prop-types';
import { Label, Select } from '@rebass/forms';
import { Flex, Box } from 'rebass';

import { Loader } from './loader';

export const SymbolSelector = ({ isLoading, list, onSelect }) => {
  if (isLoading || !list) {
    return (
      <Flex>
        <Box width={1}>
          <Loader />
        </Box>
      </Flex>
    );
  }

  return (
    <Flex justifyContent="center">
      <Box flex="0 1 auto" pr={3} alignItems="center" display="flex">
        <Label htmlFor="crypto-symbol">Crypto Symbol</Label>
      </Box>
      <Box flex="1 1 auto" alignSelf="auto">
        <Select
          onChange={onSelect}
          id="crypto-symbol"
          name="crypto-symbol"
          defaultValue="Please Select"
        >
          <option>Please Select</option>
          {list.map(item => (
            <option key={item.slug} value={item.symbol}>
              {item.name}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
};

SymbolSelector.propTypes = {
  list: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

SymbolSelector.defaultProps = {
  list: null,
  isLoading: false,
};
