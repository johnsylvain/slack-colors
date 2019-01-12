import { createPalette, hexToRgb } from './common/helpers';
import { IAction, IContextState } from './interfaces';

const CYCLE_THEMES = 'CYCLE_THEMES';

export function reducer(action: IAction, state: IContextState): IContextState {
  switch (action.type) {
    case CYCLE_THEMES:
      return {
        ...state,
        palettes: [...state.palettes.slice(1), createPalette()],
        trainingData: [
          ...state.trainingData,
          {
            input: action.payload.palette
              .map(hexToRgb)
              .reduce((acc: number[], cur: number[]) => [...acc, ...cur], []),
            output: action.payload.userRating
          }
        ]
      };
    default:
      return state;
  }
}
