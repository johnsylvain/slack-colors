import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  footer: css({
    fontSize: theme.fontSizes.sm,
    color: theme.colors.subtext

    p: {
      marginBottom: theme.gutters.sm
    }
  })
};
