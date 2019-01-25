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
    pick([[25, 36], [86, 98]])
  );
  const activeItem = pick([
    columnBG.isLight()
      ? columnBG.saturate(0.4).darken(0.5)
      : columnBG.saturate(0.4).lighten(0.5),
    columnBG.isLight()
      ? columnBG
          .rotate(pick([120, -120, 180]))
          .saturate(0.4)
          .darken(0.3)
      : columnBG
          .rotate(pick([120, 90, -90, 180]))
          .saturate(0.4)
          .lighten(0.2)
  ]);
  const mentionBadge = pick([
    generateHsl(pick([[0, 30], [330, 360]]), 85, [47, 71]),
    activeItem.isLight()
      ? activeItem.darken(0.2)
      : pick([activeItem, activeItem.rotate(pick([90, 120]))])
  ]);
  const activePresence = pick([
    generateHsl([90, 120], 70, [37, 54]),
    columnBG.isLight()
      ? columnBG.darken(0.45)
      : pick([white, columnBG.lighten(0.5)])
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
      columnBG.isLight() ? [10, 20] : [90, 98]
    ),
    activePresence,
    mentionBadge
  ].map((color: Color) => color.array());
}
