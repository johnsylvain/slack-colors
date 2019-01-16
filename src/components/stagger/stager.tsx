import * as React from 'react';
import classNames from 'classnames';
import stylesFn from './stager.styles';

type StaggerProps = { children: React.ReactNode };

export const Stagger: React.SFC<StaggerProps> = ({ children }) => {
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
