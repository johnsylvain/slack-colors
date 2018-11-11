import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  page: css({
    maxWidth: '768px',
    margin: '0 auto',
    fontFamily: theme.fonts.sansSerif,
    color: theme.colors.text
  })
};
