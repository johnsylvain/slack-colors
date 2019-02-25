import * as React from 'react';
import classNames from 'classnames';
import styles from './theme-preview-stack.styles';
import { ThemePreview } from '../theme-preview';
import { Button } from '../button';
import { Consumer } from '../../context';
import { IContextState } from '../../interfaces';

type ThemePreviewStackProps = { palettes: string[][] };

export class ThemePreviewStack extends React.Component<
  ThemePreviewStackProps,
  {}
> {
  render(): React.ReactNode {
    return (
      <Consumer>
        {(state: IContextState) => (
          <div className={styles.stack}>
            {this.props.palettes.map((palette: any, index: number) => (
              <div
                key={palette.join()}
                className={classNames(
                  styles.stackItem,
                  styles.stackItemPositions[index]
                )}
              >
                <ThemePreview palette={palette}>
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
