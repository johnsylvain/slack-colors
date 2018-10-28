import * as React from 'react';
import { reducer } from './reducer';

const Context = React.createContext('app');
export const { Consumer } = Context;

export default class Provider extends React.Component {
  state: any = {
    name: 'Dev Themes!',
    dispatch: action => this.setState(state => reducer(action, state))
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      state,
      props: { children }
    } = this;
    return <Context.Provider value={state}>{children}</Context.Provider>;
  }
}
