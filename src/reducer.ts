import { train, run } from './neural-network';
import { createPalette, hexToRgb } from './common/helpers';
import { IAction, IContextState } from './interfaces';

const CYCLE_THEMES = 'CYCLE_THEMES';
const GENERATE_THEMES = 'GENERATE_THEMES';

export function reducer(action: IAction, state: IContextState): any {
  switch (action.type) {
    case CYCLE_THEMES:
      const palette = action.payload.palette
        .map(hexToRgb)
        .reduce((acc: number[], cur: number[]) => [...acc, ...cur], [])
        .map((num: number) => Math.abs(Math.round(num / 2.55) / 100));

      return {
        ...state,
        votingDisabled: state.trainingData.length + 1 >= 20,
        palettes: [...state.palettes.slice(1), createPalette()],
        trainingData: [
          ...state.trainingData,
          {
            input: palette,
            output: [action.payload.userRating]
          }
        ]
      };
    case GENERATE_THEMES:
      train(state.trainingData);
      return {
        ...state,
        generatedThemes: run()
      };
    default:
      return state;
  }
}
