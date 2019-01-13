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
    palettes: initialPallets,
    trainingData: loadState() || [],
    dispatch: (action: IAction) =>
      this.setState((state: IContextState) => {
        const newState = reducer(action, state);
        saveState(newState.trainingData);
        return newState;
      })
  };

  render() {
    const {
      state,
      props: { children }
    } = this;
    return <Context.Provider value={state}>{children}</Context.Provider>;
  }
}
