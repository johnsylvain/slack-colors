import * as React from 'react';
import Page from '../../components/page';
import { Consumer } from '../../context';

export class Home extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
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
