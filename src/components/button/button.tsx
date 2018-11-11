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

export const Button: React.SFC<ButtonProps> = ({
  href,
  to,
  onClick,
  children
}) => {
  const Element = href ? 'a' : to ? Link : 'button';

  return (
    <Element className={styles.button} onClick={onClick} href={href} to={to}>
      {children}
    </Element>
  );
};
