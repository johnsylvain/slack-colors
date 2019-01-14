import * as React from 'react';
import { createPalette } from './common/helpers';
import { reducer } from './reducer';
import { saveState, loadState } from './local-storage';
import { IAction, IContextState } from './interfaces';

const initialPallets = new Array(4).fill(null).map(createPalette);

export const Context = React.createContext({});
export const { Consumer } = Context;

export class Provider extends React.Component {
  state: IContextState = {
    votingDisabled: false,
    palettes: initialPallets,
    trainingData: loadState('trainingData') || [],
    generatedThemes: loadState('generatedThemes') || [],
    dispatch: (action: IAction) =>
      this.setState((state: IContextState) => {
        let newState = reducer(action, state);
        console.log(newState);
        saveState('trainingData', newState.trainingData);
        saveState('generatedThemes', newState.generatedThemes);
        return newState;
      })
  };

  constructor(props) {
    super(props);

    this.state.votingDisabled = this.state.trainingData.length >= 20;
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
