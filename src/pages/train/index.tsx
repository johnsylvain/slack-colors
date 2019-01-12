import * as React from 'react';
import { Page } from '../../components/page';
import { ThemePreview } from '../../components/theme-preview'
import { Consumer } from '../../context';

export class Train extends React.Component {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            <ThemePreview palette={['#F8F8FA', '#F8F8FA', '#2D9EE0', '#FFFFFF', '#FFFFFF', '#383F45', '#60D156', '#DC5960']} />
          </Page>
        )}
      </Consumer>
    );
  }
}
