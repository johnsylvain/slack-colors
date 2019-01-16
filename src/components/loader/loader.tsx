import * as React from 'react';
import styles from './loader.styles';

type LoaderProps = { children?: React.ReactNode };

export const Loader: React.SFC<LoaderProps> = ({ children }) => (
  <div>
    <div className={styles.loader}>
      <div />
      <div />
      <div />
    </div>
    <h2 className={styles.message}>{children}</h2>
  </div>
);
