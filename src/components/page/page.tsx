import * as React from 'react';
import Helmet from 'react-helmet';

import { Consumer } from '../../context';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { ILink } from '../../interfaces';

import styles from './page.styles';

type PageProps = {
  children: React.ReactNode;
  title?: string;
};

const links: ILink[] = [
  { to: '/', text: 'Home' },
  { to: '/train', text: 'Train' }
];

export class Page extends React.Component<PageProps, {}> {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <div className={styles.page}>
            <Helmet>
              <title>{state.name}</title>
            </Helmet>
            <Nav links={links} />
            {this.props.children}
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
