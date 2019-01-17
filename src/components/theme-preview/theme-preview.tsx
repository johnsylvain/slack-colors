import * as React from 'react';
import classNames from 'classnames';
import { Overlay } from './theme-preview.overlay';
import stylesFn from './theme-preview.styles';
// @ts-ignore
import avatar from '../../assets/avatar.jpg';
import { hslToHex } from '../../common/helpers';

type ThemePreviewProps = {
  palette: number[][];
  showPaletteColors?: boolean;
  children?: React.ReactNode;
};

export class ThemePreview extends React.Component<ThemePreviewProps, {}> {
  static Overlay = Overlay;

  render(): React.ReactNode {
    const styles = stylesFn(this.props.palette);
    const formatDate = (date: Date): string =>
      `${date.getHours() % 12 || 12}:${('0' + date.getMinutes()).slice(-2)} ${
        date.getHours() >= 12 ? 'PM' : 'AM'
      }`;

    return (
      <div
        className={classNames(styles.window, {
          [styles.windowHover]: this.props.showPaletteColors
        })}
      >
        {this.props.children}
        <div className={styles.sidebar}>
          <div className={styles.teamMenu}>
            <span className={styles.teamMenuName}>Dunder Mifflin</span>
            <span className={styles.teamMenuUser}>Michael Scott</span>
          </div>

          <div className={styles.list}>
            <div className={classNames(styles.listItem, styles.listHeading)}>
              Channels
            </div>
            <div className={classNames(styles.listItem, styles.listItemActive)}>
              <span className={styles.listItemLabel}>#</span>general
            </div>
            <div className={styles.listItem}>
              <span className={styles.listItemLabel}>#</span>party-planning
            </div>
          </div>

          <div className={styles.list}>
            <div className={classNames(styles.listItem, styles.listHeading)}>
              Direct Messages
            </div>
            <div
              className={classNames(
                styles.listItem,
                styles.listItemUser,
                styles.listItemUserActive
              )}
            >
              Dwight Schrute
            </div>
            <div className={classNames(styles.listItem, styles.listItemUser)}>
              Stanley Hudson
            </div>
            <div
              className={classNames(
                styles.listItem,
                styles.listItemUser,
                styles.listItemUserActive
              )}
            >
              <span>Toby Flenderson</span>
              <span className={styles.mentionBadge}>2</span>
            </div>
          </div>
        </div>
        <div className={styles.client}>
          <div className={styles.clientHeader}>
            <span className={styles.channelName}>#general</span>
          </div>
          <div className={styles.clientBody}>
            {this.props.showPaletteColors && (
              <div className={styles.paletteColors}>
                <span>
                  Copy and paste these values into your Slack{' '}
                  <a
                    href="https://get.slack.help/hc/en-us/articles/205166337-Customizing-your-Slack-theme"
                    target="_blank"
                  >
                    Sidebar
                  </a>{' '}
                  settings.
                </span>
                <div>{this.props.palette.map(hslToHex).join(', ')}</div>
              </div>
            )}
            <div className={styles.dateDivider}>
              <span>Today</span>
            </div>
            <div className={styles.message}>
              <div>
                <img src={avatar} alt="" />
              </div>
              <div>
                <span className={styles.messageUser}>
                  Andrew Bernard{' '}
                  <span className={styles.messageTime}>
                    {formatDate(new Date())}
                  </span>
                </span>
                <span className={styles.messageContent}>Rid dit dit di do</span>
              </div>
            </div>
          </div>
          <div className={styles.clientFooter}>
            <input
              className={styles.messageForm}
              type="text"
              placeholder="Message #general"
            />
          </div>
        </div>
      </div>
    );
  }
}
