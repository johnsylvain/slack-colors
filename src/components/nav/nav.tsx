import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ILink } from '../../interfaces';
import { Consumer } from '../../context';
import styles from './nav.styles';

export class Nav extends React.Component<
  {
    links: ILink[];
  },
  {}
> {
  render() {
    return (
      <Consumer>
        {(state: any) => (
          <nav className={styles.nav}>
            <div className={styles.brand}>Slack Colors</div>
            <ul className={styles.list}>
              {this.props.links.map(link => (
                <li key={link.to}>
                  <NavLink
                    exact
                    to={link.to}
                    activeClassName={styles.linkActive}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Consumer>
    );
  }
}
