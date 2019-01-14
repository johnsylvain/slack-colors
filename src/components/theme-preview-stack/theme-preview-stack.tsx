import * as React from 'react';
import classNames from 'classnames';
import styles from './theme-preview-stack.styles';
import { ThemePreview } from '../theme-preview';

export class ThemePreviewStack extends React.Component<
  { palettes: string[][] },
  {}
> {
  render() {
    return (
      <div>
        <div className={styles.stack}>
          {this.props.palettes.map((p: any, index: number) => (
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
      </div>
    );
  }
}
