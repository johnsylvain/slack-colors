import { css, keyframes } from 'emotion';
import { theme } from '../../theme';

const loader = keyframes`
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`;

export default {
  loader: css({
    display: 'flex',
    justifyContent: 'center',

    div: {
      width: '1rem',
      height: '1rem',
      margin: '3rem 0.2rem',
      background: theme.colors.primary,
      borderRadius: '50%',
      animation: `${loader} 0.6s infinite alternate`,

      '&:nth-child(2)': {
        animationDelay: '0.2s'
      },

      '&:nth-child(3)': {
        animationDelay: '0.4s'
      }
    }
  }),

  message: css({
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.subtext,
    textAlign: 'center'
  })
};
