import * as React from 'react';
import { createPaletteHsl } from './common/color';
import { reducer } from './reducer';
import { saveState, loadState } from './common/local-storage';
import { IAction, IContextState } from './interfaces';

const initialPallets = Array.from({ length: 4 }).map(createPaletteHsl);

export const Context = React.createContext({});
export const { Consumer } = Context;

export class Provider extends React.Component<{}, IContextState> {
  state: IContextState = {
    maxVotingLimit: 45,
    votingDisabled: false,
    palettes: initialPallets,
    trainingData: loadState('trainingData') || [],
    generatedThemes: loadState('generatedThemes') || [],
    actions: {
      submitVote: vote =>
        this.dispatch({ type: 'CYCLE_THEMES', payload: vote }),
      generateThemes: () => this.dispatch({ type: 'GENERATE_THEMES' }),
      resetVotes: () => this.dispatch({ type: 'RESET_VOTES' }),
      refreshThemes: () => this.dispatch({ type: 'REFRESH_THEMES' })
    }
  };

  dispatch = (action: IAction) =>
    this.setState((state: IContextState) => {
      let newState = reducer(action, state);
      saveState('trainingData', newState.trainingData);
      saveState('generatedThemes', newState.generatedThemes);
      return newState;
    });

  constructor(props) {
    super(props);

    this.state.votingDisabled =
      this.state.trainingData.length >= this.state.maxVotingLimit;
  }

  render(): React.ReactNode {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
