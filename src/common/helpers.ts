import { IRgbPalette } from '../interfaces';

export const flatten = (arr: any[]): any[] =>
  arr.reduce((acc: any[], cur: any[]) => [...acc, ...cur], []);

export function rgbToHex([r, g, b]: number[]): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function formatRgba([r, g, b]: number[], opacity: number = 1): string {
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function generateColor(range: number[]): number[] {
  const [min, max] = range;
  return new Array(3)
    .fill(null)
    .map(() => Math.round(Math.random() * (max - min) + min));
}

export function isLight(color: number[]): boolean {
  const [r, g, b] = color;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma > 150;
}

export function darken(color: number[], amount: number = 10): number[] {
  return color.map((c: number) => (c - amount < 0 ? 0 : c - amount));
}

export function createPalette(): IRgbPalette {
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
    c2
  ];
  return palette;
}
