import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './button.styles';

type ButtonProps = {
  href?: string;
  to?: string;
  onClick?: (e: any) => void;
  secondary?: boolean;
  children?: React.ReactNode;
};

export const Button: React.SFC<ButtonProps> = ({
  children,
  secondary,
  ...rest
}) => {
  const Element: any = rest.href ? 'a' : rest.to ? Link : 'button';

  return (
    <Element
      className={classNames(styles.button, {
        [styles.buttonOutline]: secondary
      })}
      {...rest}
    >
      {children}
    </Element>
  );
};
