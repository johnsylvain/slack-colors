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
                Personalized Slack themes.
              </Jumbotron.Title>
              <Jumbotron.Subtitle>
                Leverage the magic of Machine Learning to make Slack your own.
              </Jumbotron.Subtitle>
              <Button to="/train">Get started</Button>
            </Jumbotron>
          </Page>
        )}
      </Consumer>
    );
  }
}
