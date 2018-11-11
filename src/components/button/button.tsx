import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './button.styles';

interface ButtonProps {
  primary?: boolean;
  href?: string;
  to?: string;
  onClick?: (e: any) => void;
  children?: React.ReactNode;
}

export const Button: React.SFC<ButtonProps> = ({ children, ...rest }) => {
  const Element = rest.href ? 'a' : rest.to ? Link : 'button';

  return (
    <Element className={styles.button} {...rest}>
      {children}
    </Element>
  );
};
