import * as React from 'react';
import { createPalette } from './common/helpers';
import { reducer } from './reducer';
import { IAction, IContextState } from './interfaces';
import { saveState, loadState } from './local-storage';

const Context = React.createContext({});

export const { Consumer } = Context;

const initialPallets = new Array(4).fill(null).map(createPalette);

export class Provider extends React.Component {
  state: any = {
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
