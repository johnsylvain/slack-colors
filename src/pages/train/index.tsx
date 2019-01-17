import * as React from 'react';
import classNames from 'classnames';
import { KeyHandler } from '../../components/key-handler';
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

export class Train extends React.Component<{}, {}> {
  static contextType = Context;

  vote = (rating: number): (() => void) => (): void => {
    if (!this.context.votingDisabled) {
      this.context.actions.submitVote({
        palette: this.context.palettes[0],
        userRating: rating
      });
    }
  };

  reset = (): void => {
    this.context.actions.resetVotes();
  };

  render(): React.ReactNode {
    return (
      <Consumer>
        {(state: IContextState) => (
          <Page title="Train">
            <KeyHandler
              keyEventName="keyup"
              keyCode={37}
              onKeyHandle={this.vote(0)}
            />
            <KeyHandler
              keyEventName="keyup"
              keyCode={39}
              onKeyHandle={this.vote(1)}
            />

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
