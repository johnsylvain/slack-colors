import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Consumer } from '../../context';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  font-family: Rubik;
`;

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {state => (
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
