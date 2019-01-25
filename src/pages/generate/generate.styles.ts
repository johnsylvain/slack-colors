import { css } from 'emotion';
import { theme } from '../../theme';

export default {
  button: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    border: 0,
    outline: 0,
    borderRadius: '50%',

    img: {
      position: 'relative',
      transformOrigin: 'center',
      width: 15,
      height: 15,
      pointerEvents: 'none',
      transition: '0.3s ease'
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
    },

    '&:hover': {
      img: {
        transform: 'rotate(360deg)'
      }
    }
  }),

  center: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute'
  }),

  header: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.gutters.md,

    h2: {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.lg
    },

    div: {
      display: 'flex',
      alignItems: 'center',
      color: theme.colors.subtext
    },

    button: {
      display: 'inline-flex',
      marginLeft: theme.gutters.md,
      position: 'relative',
      span: {
        position: 'absolute',
        color: theme.colors.subtext,
        fontFamily: theme.fonts.sansSerif,
        fontSize: theme.fontSizes.sm,
        fontWeight: theme.fontWeights.bold,
        opacity: 0,
        transition: '0.2s ease',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: -1000,
        transform: 'translateX(-40px)'
      },
      '&:hover span': {
        transform: 'translateX(-70px)',
        opacity: 1
      }
    }
  })
};
