import React, { Component } from 'react';
import { reducer } from './reducer';

export const Context = React.createContext('app');
export const { Consumer } = Context;

class Provider extends Component {
  state = {
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

export default Provider;
