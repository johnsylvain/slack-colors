import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  background: css({
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    height: 15,
    marginBottom: theme.gutters.md,
    transition: 'all 0.4s ease'
  }),

  loader: css({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.gutters.md,
    borderRadius: 4,
    height: 15,
    backgroundColor: theme.colors.primary,
    transition: 'all 0.4s ease',

    '*': {
      color: 'white'
    }
  }),

  loaderMessage: css({
    opacity: 0,
    transition: '0.4s ease',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    a: {
      fontWeight: theme.fontWeights.black
    }
  }),

  loaderMessageVisible: css({
    opacity: 1,
    pointerEvents: 'auto'
  }),

  loaderComplete: css({
    height: 50,

    div: {
      paddingRight: theme.gutters.md
    }
  })
};
