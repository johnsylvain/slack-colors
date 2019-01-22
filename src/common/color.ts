import Color from 'color';
import { pick } from './util';

export const formatHsla = (hsl: number[], opacity: number = 1): string =>
  Color.hsl(hsl)
    .fade(1 - opacity)
    .string();

export const hslToHex = (hsl: number[]) => Color.hsl(hsl).hex();

function generateHsl(
  hue: number[] = [0, 360],
  saturation: number,
  lightness: number[] = [0, 1]
): Color {
  const [hMin, hMax] = hue;
  const [lMin, lMax] = lightness;

  return Color.hsl(
    Math.round(Math.random() * (hMax - hMin) + hMin),
    saturation,
    Math.random() * (lMax - lMin) + lMin
  );
}

export function createPaletteHsl(): number[][] {
  const white = Color.hsl([0, 100, 100]);
  const saturation = Math.random() * (30 - 15) + 15;

  const columnBG = generateHsl(
    undefined,
    saturation,
    pick([[25, 35], [90, 99]])
  );
  const activeItem = pick([
    generateHsl(
      undefined,
      saturation,
      columnBG.isLight() ? [30, 40] : [90, 98]
    ),
    columnBG.isLight()
      ? columnBG.rotate(pick([90, 180])).darken(0.2)
      : columnBG.rotate(pick([90, 180])).lighten(0.2)
  ]);
  const mentionBadge = pick([
    activeItem.isLight()
      ? activeItem.darken(0.2).saturate(0.5)
      : pick([activeItem.saturate(0.5), activeItem.rotate(90).saturate(0.5)])
  ]);
  const activePresence = pick([
    generateHsl([90, 120], saturation, [47, 64]),
    columnBG.isLight() ? columnBG.darken(0.45) : white
  ]);

  return [
    columnBG,
    columnBG.isLight() ? columnBG.darken(0.04) : columnBG.lighten(0.08),
    activeItem,
    activeItem.isLight() ? generateHsl(undefined, saturation, [10, 20]) : white,
    columnBG.isLight() ? columnBG.darken(0.04) : columnBG.lighten(0.08),
    generateHsl(
      undefined,
      saturation,
      columnBG.isLight() ? [10, 20] : [89, 98]
    ),
    activePresence,
    mentionBadge
  ].map(({ color }: Color) => color);
}
