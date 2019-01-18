import { run } from './common/neural-network';
import { createPalette, flatten } from './common/helpers';
import { IAction, IContextState } from './interfaces';

const CYCLE_THEMES = 'CYCLE_THEMES';
const GENERATE_THEMES = 'GENERATE_THEMES';
const RESET_VOTES = 'RESET_VOTES';
const REFRESH_THEMES = 'REFRESH_THEMES';

export function reducer(action: IAction, state: IContextState): any {
  switch (action.type) {
    case CYCLE_THEMES:
      return {
        ...state,
        votingDisabled: state.trainingData.length + 1 >= state.maxVotingLimit,
        palettes: [...state.palettes.slice(1), createPalette()],
        trainingData: [
          ...state.trainingData,
          {
            input: flatten(action.payload.palette).map(
              (num: number) => Math.round(num / 2.55) / 100
            ),
            output: [action.payload.userRating]
          }
        ]
      };
    case GENERATE_THEMES:
      return {
        ...state,
        generatedThemes: run(100_000, 10)
      };
    case RESET_VOTES:
      return {
        ...state,
        votingDisabled: false,
        generatedThemes: [],
        trainingData: []
      };
    case REFRESH_THEMES:
      return {
        ...state,
        generatedThemes: []
      };
    default:
      return state;
  }
}
