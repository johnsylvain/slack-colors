import * as React from 'react';
import Page from '../../components/page';
import { Consumer } from '../../context';

export class Generate extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            <h1>Your themes.</h1>
          </Page>
        )}
      </Consumer>
    );
  }
}
