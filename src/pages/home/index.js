import React, { Component } from 'react';
import { Consumer } from '../../context';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Consumer>{({ state }) => <div>{state.name}</div>}</Consumer>;
  }
}
