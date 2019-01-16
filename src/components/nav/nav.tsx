import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ILink, IContextState } from '../../interfaces';
import { Consumer } from '../../context';
import styles from './nav.styles';

type NavProps = {
  links: ILink[];
};

export class Nav extends React.Component<NavProps, {}> {
  render() {
    return (
      <Consumer>
        {(state: IContextState) => (
          <nav className={styles.nav}>
            <div className={styles.brand}>Slack Colors</div>
            <ul className={styles.list}>
              {this.props.links.map((link: ILink) => (
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
