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

export function darken(color: number[]): number[] {
  return color.map((c: number) => (c - 10 < 0 ? 0 : c - 10));
}

export function createPalette(useRgb?: boolean): any {
  const c1 = generateColor(
    [[0, 70], [230, 255]][Math.floor(Math.random() * 2)]
  );
  const c2 = generateColor([1, 255]);
  const white = [255, 255, 255];
  const palette = [
    c1,
    darken(c1),
    c2,
    isLight(c2) ? generateColor([1, 100]) : white,
    darken(c1),
    generateColor(isLight(c1) ? [1, 100] : [200, 255]),
    generateColor(isLight(c1) ? [90, 140] : [190, 235]),
    darken(c2)
  ];
  return useRgb ? palette : palette.map(rgbToHex);
}
