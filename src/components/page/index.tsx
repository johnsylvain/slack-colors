import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Consumer } from '../../context';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { ILink } from '../../interfaces';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-family: Avenir Next, Avenir;
  color: ${props => props.theme.text};
`;

type PageProps = {
  children: React.ReactNode;
  title?: string;
};

const links: ILink[] = [
  { to: '/', text: 'Home' },
  { to: '/train', text: 'Train' }
];

export default class Page extends React.Component<PageProps, {}> {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Container>
            <Helmet>
              <title>{state.name}</title>
            </Helmet>
            <Nav links={links} />
            {this.props.children}
            <Footer>
              <p>Built by John Sylvain</p>
              <p>&copy; {new Date().getFullYear()}</p>
            </Footer>
          </Container>
        )}
      </Consumer>
    );
  }
}
