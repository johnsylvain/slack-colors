import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ILink } from '../../interfaces';
import { Consumer } from '../../context';

const List = styled.li`
  list-style: none;

  > li {
    display: inline-block;

    &:not(:first-child) {
      margin-left: 10px;
    }

    a {
      color: #555;
      text-decoration: none;
    }
  }
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  font-size: 1em;
  border-radius: 50%;
  border: 3px solid palevioletred;
  color: palevioletred;
  font-weight: 700;
  margin-right: 15px;
`;

const NavElement = styled.nav`
  display: flex;
  margin: 30px 0;
  align-items: center;

  > div {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;

export class Nav extends React.Component<
  {
    links: ILink[];
  },
  {}
> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Consumer>
        {(state: any) => (
          <NavElement>
            <div>
              <Logo>dt</Logo> <span>{state.name}</span>
            </div>
            <List>
              {this.props.links.map(link => (
                <li key={link.to}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </List>
          </NavElement>
        )}
      </Consumer>
    );
  }
}
