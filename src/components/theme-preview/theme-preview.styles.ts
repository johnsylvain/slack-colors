import { css } from 'emotion';
import { formatHsla } from '../../common/color';
import { theme } from '../../theme';

export default (palette: number[][]) => {
  const [
    columnBG,
    menuBGHover,
    activeItem,
    activeItemText,
    hoverItem,
    textColor,
    activePresence,
    mentionBadge
  ]: string[] = palette.map((color: number[]) => formatHsla(color));
  const textColorLight: string = formatHsla(palette[5], 0.8);
  const textColorLighter: string = formatHsla(palette[5], 0.5);

  return {
    window: css({
      backgroundColor: 'white',
      fontFamily: 'Lato',
      display: 'grid',
      borderRadius: '3px',
      color: textColor,
      overflow: 'hidden',
      boxShadow: theme.shadows.lg,
      gridTemplateColumns: '200px 1fr',
      minHeight: '400px',
      position: 'relative'
    }),

    windowHover: css({
      transition: '0.2s ease',

      '&:hover': {
        boxShadow: theme.shadows.xl
      }
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
      color: theme.colors.text,
      padding: theme.gutters.md,
      borderBottom: `1px solid #e8e8e8`
    }),

    clientBody: css({
      padding: theme.gutters.md,
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'column'
    }),

    clientFooter: css({
      padding: theme.gutters.md,
      paddingTop: 0
    }),

    paletteColors: css({
      color: theme.colors.text,
      marginBottom: theme.gutters.lg,
      lineHeight: 1.4,

      span: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.subtext,
        display: 'inline-block',
        marginBottom: theme.gutters.xs
      },

      a: {
        background: '#eaf5fc',
        color: '#0576b9',
        textDecoration: 'none',
        padding: '1px 2px',
        borderRadius: 2
      },

      div: {
        fontFamily: theme.fonts.monospace,
        background: '#f9f9f9',
        border: '1px solid rgba(0,0,0,.15)',
        borderRadius: 4,
        padding: theme.gutters.sm,
        fontSize: theme.fontSizes.sm
      }
    }),

    dateDivider: css({
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.sm,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.gutters.xs,
      margin: `0 ${-theme.gutters.md}px ${theme.gutters.md}px`,
      position: 'relative',

      span: {
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'white',
        display: 'inline-block',
        padding: `0 ${theme.gutters.sm}px`
      },

      '&:before': {
        content: '""',
        width: '100%',
        backgroundColor: '#e8e8e8',
        height: 1,
        top: 6,
        position: 'absolute'
      }
    }),

    message: css({
      display: 'flex',
      color: theme.colors.text,

      '&:not(:last-of-type)': {
        marginBottom: theme.gutters.sm
      },

      img: {
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

    messageTime: css({
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.normal,
      color: theme.colors.subtext
    }),

    messageContent: css({
      display: 'block'
    }),

    messageForm: css({
      width: '100%',
      border: '2px solid rgba(145,145,147,.7)',
      padding: theme.gutters.sm,
      borderRadius: '5px',
      outline: 0,
      fontSize: theme.fontSizes.md,
      fontFamily: theme.fonts.sansSerif
    }),

    teamMenu: css({
      margin: -theme.gutters.md,
      padding: theme.gutters.md,
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: menuBGHover
      }
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
      display: 'block'
    }),

    teamMenuUser: css({
      position: 'relative',
      marginLeft: '15px',
      fontSize: theme.fontSizes.md,
      color: textColorLight,

      '&:before': {
        content: '""',
        borderRadius: '50%',
        backgroundColor: activePresence,
        position: 'absolute',
        top: '50%',
        left: '-15px',
        width: '5px',
        height: '5px',
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

    listItem: css({
      padding: theme.gutters.xs,
      paddingLeft: theme.gutters.md,
      paddingRight: theme.gutters.md,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'none',

      '&:hover': {
        backgroundColor: hoverItem
      }
    }),

    listHeading: css({
      marginTop: theme.gutters.md,
      cursor: 'default',

      '&:hover': {
        backgroundColor: 'transparent !important',
        cursor: 'default'
      }
    }),

    listItemActive: css({
      background: activeItem,
      color: activeItemText,

      '&:hover': {
        backgroundColor: activeItem
      }
    }),

    listItemLabel: css({
      opacity: 0.7,
      display: 'inline-block',
      marginRight: theme.gutters.xs
    }),

    mentionBadge: css({
      color: 'white',
      backgroundColor: mentionBadge,
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.black,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      padding: `2px 7px`
    }),

    listItemUser: css({
      position: 'relative',
      paddingLeft: '30px !important',
      color: textColorLighter,
      display: 'flex',
      justifyContent: 'space-between',

      '&:before': {
        content: '""',
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: 15,
        width: '5px',
        height: '5px',
        transform: 'translateY(-50%)',
        border: `2px solid ${textColorLighter}`
      }
    }),

    listItemUserActive: css({
      color: textColorLight,

      '&:before': {
        borderColor: activePresence,
        backgroundColor: activePresence
      }
    })
  };
};
