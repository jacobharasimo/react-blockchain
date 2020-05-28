import baseTheme from '@rebass/preset';
import { merge } from 'lodash';

const customTheme = {
  colors: {
    errorRed: '#f8d7da',
    darkRed: '#721c24',
  },
  variants: {
    container: {
      mx: 'auto',
      width: ['auto', '1170px'],
      px: [2, 0],
    },
    tableHead: {
      pr: '1px',
      mb: '1px',
    },
    tableCell: {
      p: 1,
      mb: '1px',
      pl: 3,
      borderRightStyle: 'solid',
      borderRightColor: 'black',
      borderRightWidth: '1px',
    },
  },
};
const theme = merge(baseTheme, customTheme);

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.info('theme: ', theme);
}
export default theme;
