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
  const textColorLight = `${textColor}aa`;
  const textColorLighter = `${textColor}77`;

  return {
    window: css({
      fontFamily: 'Lato',
      display: 'grid',
      borderRadius: '3px',
      color: textColor,
      overflow: 'hidden',
      boxShadow: theme.shadows.lg,
      gridTemplateColumns: '200px 1fr',
      minHeight: '400px'
    }),

    sidebar: css({
      background: columnBG,
      padding: theme.gutters.md
    }),

    client: css({
      display: 'flex',
      flexDirection: 'column',
      borderLeft: `1px solid #e8e8e8`
    }),

    clientHeader: css({
      padding: theme.gutters.md,
      borderBottom: `1px solid #e8e8e8`
    }),

    clientBody: css({
      padding: theme.gutters.md,
      flexGrow: 1,
      display: 'flex',
      alignItems: 'flex-end'
    }),

    clientFooter: css({
      padding: theme.gutters.md,
      paddingTop: 0
    }),

    message: css({
      display: 'flex',
      color: '#2c2d30',

      'img': {
        width: 40,
        height: 40,
        borderRadius: 4,
        marginRight: theme.gutters.sm
      }
    }),

    messageUser: css({
      display: 'block',
      fontWeight: theme.fontWeights.bold,
      marginBottom: theme.gutters.xs
    }),

    messageContent: css({
      display: 'block'
    }),

    messageForm: css({
      width: '100%',
      border: `2px solid ${textColorLighter}`,
      padding: theme.gutters.sm,
      borderRadius: '5px',
      outline: 0,
      fontSize: theme.fontSizes.md,
      fontFamily: theme.fonts.sansSerif
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
      marginLeft: '20px',
      fontSize: theme.fontSizes.md,
      color: textColorLight,

      '&:before': {
        content: '""',
        borderRadius: '50%',
        backgroundColor: activePresence,
        position: 'absolute',
        top: '50%',
        left: '-20px',
        width: '7px',
        height: '7px',
        transform: 'translateY(-50%)',
        border: `2px solid ${activePresence}`
      }
    }),

    list: css({
      marginTop: theme.gutters.md,
      color: textColorLight,
      marginLeft: -theme.gutters.md,
      marginRight: -theme.gutters.md
    }),

    listHeading: css({
      marginTop: theme.gutters.md,
      cursor: 'default',

      ':hover': {
        backgroundColor: columnBG
      }
    }),

    listItem: css({
      padding: theme.gutters.xs,
      paddingLeft: theme.gutters.md,
      paddingRight: theme.gutters.md,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'none',

      ':hover': {
        backgroundColor: hoverItem
      }
    }),

    listItemActive: css({
      background: activeItem,
      color: activeItemText,

      ':hover': {
        backgroundColor: activeItem
      }
    }),

    listItemLabel: css({
      opacity: 0.7,
      display: 'inline-block',
      marginRight: theme.gutters.xs,
    }),

    mentionBadge: css({
      color: activeItemText,
      backgroundColor: mentionBadge,
      fontSize: theme.fontSizes.sm,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: `2px 7px`
    }),

    listItemUser: css({
      position: 'relative',
      paddingLeft: '35px',
      color: textColorLighter,
      display: 'flex',
      justifyContent: 'space-between',

      '&:before': {
        content: '""',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: 15,
        width: '7px',
        height: '7px',
        transform: 'translateY(-50%)',
        border: `2px solid ${textColorLighter}`
      }
    }),

    listItemUserActive: css({
      color: textColorLight,

      '&:before': {
        borderColor: activePresence,
        backgroundColor: activePresence,
      }
    })
  }
};
