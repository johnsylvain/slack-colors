import * as React from 'react';
import styles from './footer.styles';

type FooterProps = { children: React.ReactNode };

export const Footer: React.SFC<FooterProps> = ({ children }) => (
  <footer className={styles.footer}>{children}</footer>
);
