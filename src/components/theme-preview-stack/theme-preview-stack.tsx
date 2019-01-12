import * as React from 'react';
import classNames from 'classnames';
import styles from './theme-preview-stack.styles';
import { ThemePreview } from '../theme-preview';

export const ThemePreviewStack = ({ palettes }) => {
  return (
    <div className={styles.stack}>
      {palettes.map((p: any, index: number) => (
        <div
          key={p.join()}
          className={classNames(
            styles.stackItem,
            styles.stackItemPositions[index]
          )}
        >
          <ThemePreview palette={p} />
        </div>
      ))}
    </div>
  );
};
