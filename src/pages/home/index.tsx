import * as React from 'react';
import Page from '../../components/page';
import { Consumer } from '../../context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {(state: any) => (
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
