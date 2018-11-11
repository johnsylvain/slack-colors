import * as React from 'react';
import styles from './footer.styles';

export const Footer: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => <footer className={styles.footer}>{children}</footer>;
