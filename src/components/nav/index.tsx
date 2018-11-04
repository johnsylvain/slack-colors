import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
  display: inline-block;
`;

export class Nav extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/train">Train</Link>
          </ListItem>
          <ListItem>
            <Link to="/generate">Generate</Link>
          </ListItem>
        </ul>
      </nav>
    );
  }
}
