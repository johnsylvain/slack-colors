import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  button: css({
    fontSize: theme.fontSizes.md,
    fontWeight: theme.fontWeights.bold,
    padding: '0.5em 1em',
    display: 'inline-block',
    textDecoration: 'none',
    border: `2px solid ${theme.colors.primary}`,
    borderRadius: '3px',
    outline: 0,
    cursor: 'pointer',
    transition: 'box-shadow 0.15s ease',
    backgroundColor: theme.colors.primary,
    color: 'white',

    '&:hover': {
      boxShadow: `0 4px 10px ${theme.colors.primary}77`
    }
  })
};
