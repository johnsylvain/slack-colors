import React, { Component } from 'react';
import Page from '../../components/page';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Page title="Home">welcome home</Page>;
  }
}
