import React from 'react';
import { Box, Text } from 'rebass';

export const Header = () => (
  <Box flex="0 0 auto" bg="grey" p={[1, 2]}>
    <Text as="h1" color="white">
      Crypro Price Watcher
    </Text>
  </Box>
);
