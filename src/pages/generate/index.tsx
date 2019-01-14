import * as React from 'react';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page } from '../../components/page';
import { ThemePreview } from '../../components/theme-preview';
import { Consumer, Context } from '../../context';
import { theme } from '../../theme';

export class Generate extends React.Component {
  static contextType = Context;

  componentDidMount() {
    if (!this.context.generatedThemes.length) {
      this.context.dispatch({
        type: 'GENERATE_THEMES'
      });
    }
  }

  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            {this.context.generatedThemes.map(palette => (
              <div style={{ marginBottom: theme.gutters.lg }}>
                <ThemePreview palette={palette.theme} />
              </div>
            ))}
          </Page>
        )}
      </Consumer>
    );
  }
}
