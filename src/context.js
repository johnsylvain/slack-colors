import React, { Component } from 'react';

export const Context = React.createContext('app');
export const { Consumer } = Context;

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Dev Themes!'
    };
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
