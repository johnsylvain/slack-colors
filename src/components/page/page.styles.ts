import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  page: css({
    maxWidth: '768px',
    margin: '0 auto',
    paddingLeft: theme.gutters.md,
    paddingRight: theme.gutters.md,
    fontFamily: theme.fonts.sansSerif,
    color: theme.colors.text,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }),

  body: css({
    flexGrow: 1,
    position: 'relative'
  })
};
