const compose = (...fns: ((a: any) => any)[]) => (initialValue: any) =>
  fns.reduce((val, fn) => fn(val), initialValue);

export const flatten = (array: any[]): any[] =>
  array.reduce((acc: any[], cur: any[]) => [...acc, ...cur], []);

function rgbToHex([r, g, b]: number[]): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateHsl(
  lightness: number[] = [0, 1],
  saturation: number = Math.random()
): number[] {
  const [lMin, lMax] = lightness;
  // const [sMin, sMax] = saturation;

  return [
    Math.round(Math.random() * 360),
    // Math.random() * (sMax - sMin) + sMin,
    saturation,
    Math.random() * (lMax - lMin) + lMin
  ];
}

export function formatHsl([h, s, l]: number[], opacity: number = 1): string {
  return `hsla(${h}deg, ${s * 100}%, ${l * 100}%, ${opacity})`;
}

function hslToRgb(hsl: number[]) {
  const [h, s, l] = hsl;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)].map((n: number) => Math.round(n * 2.55 * 100));
}

function isLight(color: number[]): boolean {
  const [h, s, l] = color;
  return l > 0.6;
}

function darken(color: number[]): number[] {
  const [h, s, l] = color;
  return [h, s, l - 0.03];
}

export const hslToHex = compose(
  hslToRgb,
  rgbToHex
);

export function createPalette(): any {
  const saturation = Math.random() * (0.94 - 0.39) + 0.39;
  const white = [0, 1, 1];
  const columnBG = generateHsl(
    [[0.1, 0.25], [0.93, 0.98]][Math.floor(Math.random() * 2)],
    saturation
  );
  const activeItem = generateHsl(
    isLight(columnBG) ? [0.3, 0.45] : [0.79, 0.95],
    saturation
  );

  return [
    columnBG,
    darken(columnBG),
    activeItem,
    isLight(activeItem) ? generateHsl([0, 0.2], saturation) : white,
    darken(columnBG),
    generateHsl(isLight(columnBG) ? [0.05, 0.18] : [0.89, 0.99], saturation),
    generateHsl(isLight(columnBG) ? [0.25, 0.5] : [0.8, 0.9], saturation),
    activeItem
  ];
}
