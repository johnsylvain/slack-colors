const spacingUnit = 10;

const gutters = {
  xs: spacingUnit / 2,
  sm: spacingUnit,
  md: spacingUnit * 1.5,
  lg: spacingUnit * 4,
  xl: spacingUnit * 7
};

const colors = {
  primary: '#4C9689',
  text: '#2c2d30',
  subtext: '#555',
  border: '#dcdcdc'
};

const shadows = {
  lg: '0 6px 25px rgba(0,0,0,0.18)',
  xl: '0 8px 35px rgba(0,0,0,0.23)'
};

export const theme = {
  colors,
  gutters,
  shadows,
  fonts: {
    sansSerif:
      'Lato,"Avenir Next",Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
    monospace:
      '"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace'
  },
  fontSizes: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 28
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    black: 900
  }
};
