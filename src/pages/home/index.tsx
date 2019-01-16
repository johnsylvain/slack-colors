import * as React from 'react';
import { Consumer } from '../../context';
import { Page } from '../../components/page';
import { Button } from '../../components/button';
import { Jumbotron } from '../../components/jumbotron';
import { IContextState } from '../../interfaces';

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Consumer>
        {(state: IContextState) => (
          <Page>
            <Jumbotron>
              <Jumbotron.Title>Personalized Slack themes. 🎨</Jumbotron.Title>
              <Jumbotron.Subtitle>
                Leverage the power of AI to make Slack one-of-a-kind.
              </Jumbotron.Subtitle>
              <Jumbotron.CTA>
                <Button to="/train">Get started</Button>
                {state.votingDisabled && (
                  <Button to="/generate">Your themes</Button>
                )}
              </Jumbotron.CTA>
            </Jumbotron>
          </Page>
        )}
      </Consumer>
    );
  }
}
