import * as React from 'react';
import classNames from 'classnames';
import stylesFn from './stager.styles';

export const Stagger: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => {
  const styles = stylesFn(React.Children.count(children));

  return (
    <div>
      {React.Children.map(children, (child, index: number) => (
        <div className={classNames(styles.item, styles.itemDelay[index])}>
          {child}
        </div>
      ))}
    </div>
  );
};
