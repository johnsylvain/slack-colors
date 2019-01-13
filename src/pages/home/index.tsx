import * as React from 'react';
import { Page } from '../../components/page';
import { Consumer } from '../../context';

import { Button } from '../../components/button';
import { Jumbotron } from '../../components/jumbotron';
import { css } from 'emotion';
import { theme } from '../../theme';

const styles = {
  buttonContainer: css({
    '> *:not(:last-child)': {
      marginRight: theme.gutters.sm
    }
  })
};

export class Home extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            <Jumbotron>
              <Jumbotron.Title>Personalized Slack themes. 🎨</Jumbotron.Title>
              <Jumbotron.Subtitle>
                Leverage the power of Machine Learning to make Slack
                one-of-a-kind.
              </Jumbotron.Subtitle>
              <div className={styles.buttonContainer}>
                <Button to="/train">Get started</Button>
                {state.trainingData.length > 10 && (
                  <Button to="/generate">Your themes</Button>
                )}
              </div>
            </Jumbotron>
          </Page>
        )}
      </Consumer>
    );
  }
}
