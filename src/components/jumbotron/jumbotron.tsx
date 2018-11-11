import * as React from 'react';
import styles from './jumbotron.styles';

const Title: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);

const Subtitle: React.SFC<{ children: React.ReactNode }> = ({ children }) => (
  <p className={styles.subtitle}>{children}</p>
);

export class Jumbotron extends React.Component<
  { children: React.ReactNode },
  {}
> {
  static Title = Title;
  static Subtitle = Subtitle;

  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}
