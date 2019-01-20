import { css, keyframes } from 'emotion';
import { theme } from '../../theme';

const loader = keyframes`
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0) scale(0.7);
  }
`;

export default {
  loader: css({
    display: 'flex',
    justifyContent: 'center',

    div: {
      width: '1rem',
      height: '1rem',
      margin: '2rem 0.2rem',
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

  messages: css({
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.subtext,
    textAlign: 'center',
    overflow: 'hidden',
    height: 40,
    display: 'block',
    position: 'relative'
  }),

  message: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    transition:
      'transform 0.75s cubic-bezier(.74,.02,.27,1), opacity 0.5s 0s cubic-bezier(.74,.02,.27,1)',
    transform: 'translateY(100%)',
    opacity: 0
  }),

  messageActive: css({
    transition:
      'transform 0.75s cubic-bezier(.74,.02,.27,1), opacity 0.5s 0.25s cubic-bezier(.74,.02,.27,1)',
    opacity: 1
  })
};
