import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Button } from 'rebass';

export const ErrorRibbon = ({ message, onClose }) => (
  <Flex
    role="alert"
    width={1}
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
    }}
    bg="errorRed"
    p={2}
    alignItems="center"
    color="darkRed"
  >
    <Box flex="1 1 auto">{message}</Box>
    <Box>
      <Button variant="outline" onClick={onClose}>
        &times;
      </Button>
    </Box>
  </Flex>
);

ErrorRibbon.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
