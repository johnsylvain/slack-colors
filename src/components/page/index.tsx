import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Consumer } from '../../context';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-family: Rubik;
`;

interface IPropTypes {
  children: React.ReactNode;
  title: string;
}

export default class Page extends React.Component<IPropTypes> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Container>
            <Helmet>
              <title>{state.name}</title>
            </Helmet>
            {this.props.children}
          </Container>
        )}
      </Consumer>
    );
  }
}
