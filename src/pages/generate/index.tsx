import * as React from 'react';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page } from '../../components/page';
import { ThemePreview } from '../../components/theme-preview';
import { Consumer, Context } from '../../context';
import { theme } from '../../theme';
import { train } from '../../common/neural-network';
import { Loader } from '../../components/loader';

export class Generate extends React.Component {
  static contextType = Context;

  componentDidMount() {
    if (!this.context.generatedThemes.length) {
      train(this.context.trainingData).then(() => {
        this.context.actions.generateThemes();
      });
    }
  }

  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            {this.context.generatedThemes.length ? (
              this.context.generatedThemes.map(palette => (
                <div
                  key={palette.theme.join()}
                  style={{ marginBottom: theme.gutters.lg }}
                >
                  <ThemePreview showPaletteColors palette={palette.theme} />
                </div>
              ))
            ) : (
              <Loader>Generating your themes.</Loader>
            )}
          </Page>
        )}
      </Consumer>
    );
  }
}
