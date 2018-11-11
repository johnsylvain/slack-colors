import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  logo: css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2em',
    height: '2em',
    fontSize: '1em',
    borderRadius: '50%',
    border: `3px solid ${theme.colors.primary}`,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.black,
    marginRight: '15px'
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
