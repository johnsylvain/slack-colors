import * as React from 'react';
import Page from '../../components/page';
import { Consumer } from '../../context';

export class Train extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            <h1>Train AI.</h1>
          </Page>
        )}
      </Consumer>
    );
  }
}
