import * as React from 'react';
import { reducer } from './reducer';
import { IAction } from './interfaces';

const Context = React.createContext({});

export const { Consumer } = Context;

export class Provider extends React.Component {
  state: any = {
    name: 'slack-colors',
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
