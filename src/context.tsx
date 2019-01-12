import * as React from 'react';
import { createPalette } from './common/helpers';
import { reducer } from './reducer';
import { IAction } from './interfaces';

const Context = React.createContext({});

export const { Consumer } = Context;

const initialPallets = new Array(4).fill(null).map(createPalette);

export class Provider extends React.Component {
  state: any = {
    name: 'slack-colors',
    palettes: initialPallets,
    trainingData: [],
    dispatch: (action: IAction) =>
      this.setState((state: any) => reducer(action, state))
  };

  render() {
    const {
      state,
      props: { children }
    } = this;
    return <Context.Provider value={state}>{children}</Context.Provider>;
  }
}
