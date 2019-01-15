import * as React from 'react';
import classNames from 'classnames';
import { Page } from '../../components/page';
import { ThemePreviewStack } from '../../components/theme-preview-stack';
import { ProgressBar } from '../../components/progress-bar';
import { Consumer, Context } from '../../context';
import { IContextState } from '../../interfaces';
import styles from './train.styles';
// @ts-ignore
import thumbsUp from '../../assets/thumbs-up.svg';
// @ts-ignore
import thumbsDown from '../../assets/thumbs-down.svg';
// @ts-ignore
import refresh from '../../assets/refresh.svg';

export class Train extends React.Component {
  static contextType = Context;

  vote = (rating: number) => () => {
    this.context.actions.submitVote({
      palette: this.context.palettes[0],
      userRating: rating
    });
  };

  reset = () => {
    this.context.actions.resetVotes();
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
              <span>Training complete!</span>
            </ProgressBar>
            <ThemePreviewStack palettes={state.palettes} />
            <div className={styles.buttonGroup}>
              <button
                disabled={state.votingDisabled}
                onClick={this.vote(0)}
                className={classNames(styles.button, styles.buttonNo)}
              >
                <img src={thumbsDown} alt="" />
              </button>

              <button
                disabled={state.votingDisabled}
                onClick={this.vote(1)}
                className={classNames(styles.button, styles.buttonYes)}
              >
                <img src={thumbsUp} alt="" />
              </button>
            </div>
          </Page>
        )}
      </Consumer>
    );
  }
}
