import * as React from 'react';
import { Link } from 'react-router-dom';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Page } from '../../components/page';
import { ThemePreviewStack } from '../../components/theme-preview-stack';
import { ProgressBar } from '../../components/progress-bar';
import { Consumer, Context } from '../../context';
import { IContextState } from '../../interfaces';
import styles from './train.styles';

export class Train extends React.Component {
  static contextType = Context;

  vote = (rating: number) => () => {
    this.context.actions.submitVote({
      palette: this.context.palettes[0],
      userRating: rating
    });
  };

  render() {
    return (
      <Consumer>
        {(state: IContextState) => (
          <Page>
            <ProgressBar
              current={state.trainingData.length}
              max={state.maxVotingLimit}
            >
              Training complete! View your results{' '}
              <Link to="/generate">here</Link>
            </ProgressBar>
            <ThemePreviewStack palettes={state.palettes} />
            <div className={styles.buttonGroup}>
              <button
                disabled={state.votingDisabled}
                onClick={this.vote(0)}
                className={classNames(styles.button, styles.buttonNo)}
              >
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button
                disabled={state.votingDisabled}
                onClick={this.vote(1)}
                className={classNames(styles.button, styles.buttonYes)}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </div>
          </Page>
        )}
      </Consumer>
    );
  }
}
