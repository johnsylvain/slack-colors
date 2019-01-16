import * as React from 'react';
import styles from './jumbotron.styles';

interface CompoundComponentProps {
  children: React.ReactNode;
}

const Title: React.SFC<CompoundComponentProps> = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);

const Subtitle: React.SFC<CompoundComponentProps> = ({ children }) => (
  <p className={styles.subtitle}>{children}</p>
);

const CTA: React.SFC<CompoundComponentProps> = ({ children }) => (
  <div className={styles.ctaContainer}>{children}</div>
);

export class Jumbotron extends React.Component<CompoundComponentProps, {}> {
  static Title = Title;
  static Subtitle = Subtitle;
  static CTA = CTA;

  render(): React.ReactNode {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}
