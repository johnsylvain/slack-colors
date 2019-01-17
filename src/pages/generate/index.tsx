import * as React from 'react';
import { Page } from '../../components/page';
import { ThemePreview } from '../../components/theme-preview';
import { Loader } from '../../components/loader';
import { Stagger } from '../../components/stagger';
import { train } from '../../common/neural-network';
import { Context } from '../../context';
// @ts-ignore
import refresh from '../../assets/refresh.svg';
import { theme } from '../../theme';
import styles from './generate.styles';
import { hslToHex } from '../../common/helpers';

export class Generate extends React.Component<{}, {}> {
  static contextType = Context;

  componentDidMount(): void {
    if (!this.context.generatedThemes.length) {
      train(this.context.trainingData).then(() => {
        this.context.actions.generateThemes();
      });
    }
  }

  refresh = (): void => {
    this.context.actions.refreshThemes();
    train(this.context.trainingData).then(() => {
      this.context.actions.generateThemes();
    });
  };

  render(): React.ReactNode {
    return (
      <Page title="Generate">
        {this.context.generatedThemes.length ? (
          <div>
            <div className={styles.header}>
              <h2>Your themes.</h2>
              <div>
                <button className={styles.button} onClick={this.refresh}>
                  <span>Refresh themes</span>
                  <img src={refresh} alt="" />
                </button>
              </div>
            </div>
            <Stagger>
              {this.context.generatedThemes.map((palette: any) => (
                <div
                  key={palette.theme.join()}
                  style={{ marginBottom: theme.gutters.lg }}
                >
                  <ThemePreview showPaletteColors palette={palette.theme} />
                </div>
              ))}
            </Stagger>
          </div>
        ) : (
          <Loader>Generating your themes.</Loader>
        )}
      </Page>
    );
  }
}
