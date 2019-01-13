import * as React from 'react';
import { Link } from 'react-router-dom';
import { ILink } from '../../interfaces';
import { Consumer } from '../../context';
import styles from './nav.styles';

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
          <nav className={styles.nav}>
            <div className={styles.brand}>Slack Colors</div>
            <ul className={styles.list}>
              {this.props.links.map(link => (
                <li key={link.to}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Consumer>
    );
  }
}
