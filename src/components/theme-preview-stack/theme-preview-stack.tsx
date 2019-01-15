import * as React from 'react';
import classNames from 'classnames';
import styles from './theme-preview-stack.styles';
import { ThemePreview } from '../theme-preview';
import { Button } from '../button';
import { Consumer } from '../../context';
import { IContextState } from '../../interfaces';

export class ThemePreviewStack extends React.Component<
  { palettes: string[][] },
  {}
> {
  render() {
    return (
      <Consumer>
        {(state: IContextState) => (
          <div className={styles.stack}>
            {this.props.palettes.map((p: any, index: number) => (
              <div
                key={p.join()}
                className={classNames(
                  styles.stackItem,
                  styles.stackItemPositions[index]
                )}
              >
                <ThemePreview palette={p}>
                  {state.votingDisabled && (
                    <ThemePreview.Overlay>
                      {index === 0 && (
                        <div>
                          <h2 className={styles.headline}>
                            Training complete! 👏
                          </h2>
                          <div className={styles.buttonGroup}>
                            <Button to="/generate">View results</Button>
                            <Button
                              secondary
                              onClick={state.actions.resetVotes}
                            >
                              Restart training
                            </Button>
                          </div>
                        </div>
                      )}
                    </ThemePreview.Overlay>
                  )}
                </ThemePreview>
              </div>
            ))}
          </div>
        )}
      </Consumer>
    );
  }
}
