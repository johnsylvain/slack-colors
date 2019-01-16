import * as React from 'react';
import Helmet from 'react-helmet';
import { Consumer } from '../../context';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { ILink, IContextState } from '../../interfaces';
// @ts-ignore
import favicon from '../../assets/favicon.ico';

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
              <link rel="shortcut icon" type="image/x-icon" href={favicon} />
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
              <p>
                Built with ☕️ by{' '}
                <a href="https://johnsylvain.me" target="_blank">
                  John Sylvain
                </a>
              </p>
              <p>&copy; {new Date().getFullYear()}</p>
            </Footer>
          </div>
        )}
      </Consumer>
    );
  }
}
