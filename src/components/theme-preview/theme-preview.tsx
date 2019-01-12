import * as React from 'react';
import stylesFn from './theme-preview.styles'

export const ThemePreview: React.SFC<{ palette: string[] }> = ({ palette }) => {
  const styles = stylesFn(palette)

  return <div className={styles.window}>
    <div className={styles.sidebar}>
      <span className={styles.teamMenuName}>Company</span>
      <span className={styles.teamMenuUser}>You</span>
    </div>
    <div className={styles.content}>
      <span className={styles.channelName}>#general</span>
    </div>
  </div>;
};
