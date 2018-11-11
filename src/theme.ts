const spacingUnit = 10;
export const rootFontSize = 14;

const gutters = {
  xs: spacingUnit / 2,
  sm: spacingUnit,
  md: spacingUnit * 2,
  lg: spacingUnit * 4,
  xl: spacingUnit * 7
};

const colors = {
  primary: '#63cdda',
  text: '#212121',
  subtext: '#555',
  border: '#dcdcdc'
};

const rem = (px: number) => `${Math.round(px / rootFontSize * 100) / 100}rem`;

const theme = {
  colors,
  gutters,
  fonts: {
    sansSerif:
      '"Avenir Next",Avenir,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif',
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
    bold: 500,
    black: 700
  }
};

export { rem, theme };
