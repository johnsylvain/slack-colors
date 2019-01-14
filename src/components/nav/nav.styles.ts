import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  brand: css({
    fontWeight: theme.fontWeights.black,
    fontSize: theme.fontSizes.lg,

    '&:before': {
      content: '""',
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginRight: '10px',
      backgroundColor: theme.colors.primary
    }
  }),

  nav: css({
    display: 'flex',
    margin: '30px 0',
    alignItems: 'center',

    '> div': {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center'
    }
  }),

  list: css({
    listStyle: 'none',

    '> li': {
      display: 'inline-block',
      fontSize: theme.fontSizes.md,

      '&:not(:first-child)': {
        marginLeft: '10px'
      },

      a: {
        color: theme.colors.subtext,
        textDecoration: 'none'
      }
    }
  })
};
