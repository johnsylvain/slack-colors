import * as React from 'react';
import { Page } from '../../components/page';
import { Consumer } from '../../context';

import { Button } from '../../components/button';
import { Jumbotron } from '../../components/jumbotron';

export class Home extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            <Jumbotron>
              <Jumbotron.Title>
                Create personalized code color themes.
              </Jumbotron.Title>
              <Jumbotron.Subtitle>
                Support for VSCode, iTerm2, Terminal, and Atom.
              </Jumbotron.Subtitle>
              <Button to="/train">Get started</Button>
            </Jumbotron>
          </Page>
        )}
      </Consumer>
    );
  }
}
