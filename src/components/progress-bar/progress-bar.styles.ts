import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  background: css({
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    height: 15,
    marginBottom: theme.gutters.lg,
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
    pointerEvents: 'none'
  }),

  loaderMessageVisible: css({
    opacity: 1,
    pointerEvents: 'auto'
  }),

  loaderComplete: css({
    height: 40
  })
};
