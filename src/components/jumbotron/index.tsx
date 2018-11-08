import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin: 20px 0;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
`;

const Container = styled.div`
  margin: 50px 0;
`;

export class Jumbotron extends React.Component<
  { children: React.ReactNode },
  {}
> {
  static Title = Title;
  static Subtitle = Subtitle;

  constructor(props) {
    super(props);
  }

  render() {
    return <Container>{this.props.children}</Container>;
  }
}
