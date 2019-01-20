import { IRgbPalette } from '../interfaces';

export const flatten = (arr: any[]): any[] =>
  arr.reduce((acc: any[], cur: any[]) => [...acc, ...cur], []);

export function rgbToHex([r, g, b]: number[]): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function formatRgba([r, g, b]: number[], opacity: number = 1): string {
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function generateColor(range: number[]): number[] {
  const [min, max] = range;
  return new Array(3)
    .fill(null)
    .map(() => Math.round(Math.random() * (max - min) + min));
}

function isLight(color: number[]): boolean {
  const [r, g, b] = color;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma > 170;
}

function darken(color: number[], amount: number = 10): number[] {
  return color.map((c: number) => (c - amount < 0 ? 0 : c - amount));
}

function triadColor(color: number[]): number[] {
  return [color[2], ...color.slice(0, 2)];
}

function shiftHue(color: number[], weights: number[] = [0, 0, 0]): number[] {
  return color.map((value: number, index: number) =>
    value + weights[index] > 255 ? 255 : value + weights[index]
  );
}

export function createPalette(): IRgbPalette {
  const columnBG = generateColor(
    [[20, 100], [230, 255]][Math.floor(Math.random() * 2)]
  );
  const activeItem = generateColor(isLight(columnBG) ? [70, 160] : [190, 235]);
  const mentionBadge = isLight(activeItem)
    ? darken(triadColor(activeItem), 50)
    : activeItem;
  const white = [255, 255, 255];

  const palette = [
    columnBG,
    darken(columnBG),
    activeItem,
    isLight(activeItem) ? generateColor([0, 70]) : white,
    darken(columnBG),
    generateColor(isLight(columnBG) ? [30, 80] : [230, 245]),
    [
      generateColor(isLight(columnBG) ? [90, 140] : [210, 245]),
      mentionBadge,
      shiftHue(generateColor(isLight(columnBG) ? [90, 140] : [210, 245]), [
        0,
        30,
        0
      ]),
      !isLight(columnBG) ? darken(columnBG, -60) : darken(columnBG, 50)
    ][Math.floor(Math.random() * 4)],
    mentionBadge
  ];
  return palette;
}
