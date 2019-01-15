import * as React from 'react';
import { css } from 'emotion';
import { theme } from '../../theme';

const styles = {
  overlay: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
    backgroundColor: 'rgba(255,255,255,0.8)',
    color: theme.colors.text,
    fontFamily: theme.fonts.sansSerif,
    padding: theme.gutters.md
  })
};

export const Overlay: React.SFC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <div className={styles.overlay}>{children}</div>;
};
