import * as React from 'react';
import styles from './loader.styles';

export const Loader: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div>
    <div className={styles.loader}>
      <div />
      <div />
      <div />
    </div>
    <h2 className={styles.message}>{children}</h2>
  </div>
);
