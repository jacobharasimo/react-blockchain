import React from 'react';
import { Box, Text } from 'rebass';

const Footer = () => {
  const date = new Date();
  return (
    <Box p={2}>
      <Text>All Rights Reserved &copy;{date.getFullYear()}</Text>
    </Box>
  );
};

export default Footer;
