import * as React from 'react';
import Helmet from 'react-helmet';
import { Consumer } from '../../context';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { ILink, IContextState } from '../../interfaces';

import styles from './page.styles';

type PageProps = {
  children: React.ReactNode;
  title?: string;
};

export class Page extends React.Component<PageProps, {}> {
  links: ILink[] = [{ to: '/', text: 'Home' }, { to: '/train', text: 'Train' }];

  render() {
    return (
      <Consumer>
        {(state: IContextState) => (
          <div className={styles.page}>
            <Helmet>
              <title>
                {(this.props.title ? `${this.props.title} - ` : '') +
                  'Slack Colors'}
              </title>
            </Helmet>
            <Nav
              links={
                state.votingDisabled
                  ? [...this.links, { to: '/generate', text: 'Generate' }]
                  : this.links
              }
            />
            <div className={styles.body}>{this.props.children}</div>
            <Footer>
              <p>Built by John Sylvain</p>
              <p>&copy; {new Date().getFullYear()}</p>
            </Footer>
          </div>
        )}
      </Consumer>
    );
  }
}
