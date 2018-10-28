import React, { Component } from 'react';
import Page from '../../components/page';
import { Consumer } from '../../context';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {state => (
          <Page title="Home">
            <button
              onClick={() =>
                state.dispatch({
                  type: 'UPDATE_NAME',
                  payload: 'new name'
                })
              }
            >
              {state.name}
            </button>
          </Page>
        )}
      </Consumer>
    );
  }
}
