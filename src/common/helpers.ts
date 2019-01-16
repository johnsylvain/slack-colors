const compose = (...fns) => initialValue =>
  fns.reduce((val, fn) => fn(val), initialValue);

export function decimalToHex(input: number[]): string[] {
  const rgb = input.map(n => Math.floor(n * 2.55 * 100));
  const r = new Array(Math.ceil(rgb.length / 3))
    .fill(null)
    .map((_, i: number) => rgb.slice(i * 3, i * 3 + 3));
  return r.map(rgbToHex);
}

export function hexToRgb(hex: string): number[] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
      ]
    : null;
}

export function rgbToHex([r, g, b]: number[]): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function generateHsl(contraints: any = { lightness: [0, 1] }): number[] {
  const {
    lightness: [min, max]
  } = contraints;

  return [
    Math.round(Math.random() * 360),
    Math.random(),
    Math.random() * (max - min) + min
  ];
}

function hslToRgb(hsl) {
  const [h, s, l] = hsl;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)].map((n: number) => Math.round(n * 2.55 * 100));
}

function isLight(color: number[]): boolean {
  const [h, s, l] = color;
  return l > 0.5;
}

function darken(color: number[]): number[] {
  const [h, s, l] = color;
  return [h, s, l - 0.08];
}

const hslToHex = compose(
  hslToRgb,
  rgbToHex
);

export function createPalette(useHsl?: boolean): any {
  const c1 = generateHsl({
    lightness: [[0, 0.2], [0.8, 0.99]][Math.floor(Math.random() * 2)]
  });
  const c2 = generateHsl({ lightness: isLight(c1) ? [0.2, 0.4] : [0.85, 1] });
  const white = [0, 1, 1];

  const palette = [
    c1,
    darken(c1),
    c2,
    isLight(c2) ? generateHsl({ lightness: [0, 0.3] }) : white,
    darken(c1),
    generateHsl({ lightness: isLight(c1) ? [0, 0.3] : [0.8, 0.99] }),
    generateHsl({ lightness: isLight(c1) ? [0.1, 0.3] : [0.8, 0.95] }),
    c2
  ];

  return useHsl ? palette : palette.map(hslToHex);
}
