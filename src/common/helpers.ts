const compose = (...fns: ((a: any) => any)[]) => (initialValue: any) =>
  fns.reduce((val, fn) => fn(val), initialValue);

const flatten = (array: any[]): any[] =>
  array.reduce((acc: any[], cur: any[]) => [...acc, ...cur], []);

export const formatPalette = compose(
  flatten,
  arr => arr.map((num: number) => Math.abs(Math.round(num / 2.55) / 100))
);

export function formatRgba([r, g, b]: number[], opacity: number = 1): string {
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function rgbToHex([r, g, b]: number[]): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function isLight(color: number[]): boolean {
  const [r, g, b] = color;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma > 150;
}

export function darken(color: number[], amount: number = 10): number[] {
  return color.map((c: number) => (c - amount < 0 ? 0 : c - amount));
}

export function generateColor(range: number[]): number[] {
  const [min, max] = range;
  return new Array(3)
    .fill(null)
    .map(() => Math.round(Math.random() * (max - min) + min));
}

export function createPalette(): number[][] {
  const c1 = generateColor(
    [[0, 70], [230, 255]][Math.floor(Math.random() * 2)]
  );
  const c2 = generateColor(isLight(c1) ? [70, 190] : [190, 255]);
  const white = [255, 255, 255];
  const palette = [
    c1,
    darken(c1),
    c2,
    isLight(c2) ? generateColor([1, 100]) : white,
    darken(c1),
    generateColor(isLight(c1) ? [30, 80] : [220, 240]),
    generateColor(isLight(c1) ? [90, 140] : [210, 245]),
    darken(c2, 20)
  ];
  return palette;
}
