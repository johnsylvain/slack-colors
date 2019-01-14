import { css, keyframes } from 'emotion';
import { theme } from '../../theme';

const thumbsUp = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  20% {
    transform: translateY(6px) rotate(5deg) scale(0.9);
  }

  40% {
    transform: translateY(-6px) rotate(-5deg) scale(1.1);
  }

  80% {
    transform: translateY(-6px) rotate(-5deg) scale(1.1);
  }
`;
const thumbsDown = keyframes`
  0% {
    transform: rotateY(180deg) translateY(0px) rotate(0deg);
  }

  20% {
    transform: rotateY(180deg) translateY(-6px) rotate(-5deg) scale(0.9);
  }

  40% {
    transform: rotateY(180deg) translateY(6px) rotate(5deg) scale(1.1);
  }

  80% {
    transform: rotateY(180deg) translateY(6px) rotate(5deg) scale(1.1);
  }
`;

export default {
  button: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '70px',
    height: '70px',
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    border: 0,
    outline: 0,
    borderRadius: '50%',

    svg: {
      position: 'relative',
      transformOrigin: 'center'
    },

    '&:before': {
      content: "''",
      backgroundColor: theme.colors.primary,
      borderRadius: '50%',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.2
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.3
    }
  }),

  buttonYes: css({
    '&:focus svg': {
      animation: `${thumbsUp} 0.7s ease-out`
    }
  }),

  buttonNo: css({
    svg: {
      transform: 'rotateY(180deg)'
    },
    '&:focus svg': {
      animation: `${thumbsDown} 0.7s ease-out`
    }
  }),

  buttonGroup: css({
    display: 'flex',
    justifyContent: 'space-around'
  })
};
