import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { Consumer } from '../../context';
import { Nav } from '../nav';
import { ILink } from '../../interfaces';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-family: Rubik;
  color: #212121;
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
          </Container>
        )}
      </Consumer>
    );
  }
}
