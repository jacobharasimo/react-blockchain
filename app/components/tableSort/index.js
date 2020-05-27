import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@rebass/forms';
import { Flex, Box } from 'rebass';

export const TableSort = ({ onSort, selected }) => (
  <Flex justifyContent={['flex-start', 'flex-end']}>
    <Box alignItems="center" display="flex" width={[1, 1 / 12]}>
      Sort By
    </Box>
    <Box width={[1, 2 / 12]}>
      <Select onChange={onSort} value={selected}>
        <option value="rank">Rank</option>
        <option value="price">Price</option>
      </Select>
    </Box>
  </Flex>
);

TableSort.propTypes = {
  onSort: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};
