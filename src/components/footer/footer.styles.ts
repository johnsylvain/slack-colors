import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  footer: css({
    fontSize: theme.fontSizes.sm,
    color: theme.colors.subtext,
    padding: `${theme.gutters.md}px 0`,

    p: {
      marginBottom: theme.gutters.sm
    }
  })
};
