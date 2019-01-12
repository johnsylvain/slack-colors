import { css } from 'emotion';
import { theme } from '../../theme';

export default (palette: string[]) => {
  const [
    columnBG,
    menuBGHover,
    activeItem,
    activeItemText,
    hoverItem,
    textColor,
    activePresence,
    mentionBadge
  ] = palette;

  return {
    window: css({
      fontFamily: 'Lato',
      display: 'grid',
      borderRadius: '3px',
      color: textColor,
      overflow: 'hidden',
      boxShadow: theme.shadows.lg,
      gridTemplateColumns: '200px 1fr'
    }),

    sidebar: css({
      background: columnBG,
      padding: theme.gutters.md
    }),

    content: css({
      padding: theme.gutters.md
    }),

    teamMenuName: css({
      fontWeight: theme.fontWeights.black,
      fontSize: theme.fontSizes.lg,
      display: 'block',
      marginBottom: theme.gutters.sm
    }),

    channelName: css({
      fontWeight: theme.fontWeights.black,
      fontSize: theme.fontSizes.lg,
      display: 'block',
    }),

    teamMenuUser: css({
      position: 'relative',
      marginLeft: '15px',
      fontSize: theme.fontSizes.md,

      '&:before': {
        content: '""',
        borderRadius: '50%',
        backgroundColor: activePresence,
        position: 'absolute',
        top: '50%',
        left: '-15px',
        width: '9px',
        height: '9px',
        transform: 'translateY(-50%)'
      }
    })
  }
};
