import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  title: css({
    fontSize: theme.fontSizes.xl * 1.5,
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.gutters.sm
  }),

  subtitle: css({
    fontSize: theme.fontSizes.lg,
    marginBottom: theme.gutters.md
  }),

  container: css({
    margin: `${theme.gutters.xl}px 0`
  })
};
