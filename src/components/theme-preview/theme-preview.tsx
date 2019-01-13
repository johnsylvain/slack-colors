import * as React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import subMinutes from 'date-fns/sub_minutes';
import stylesFn from './theme-preview.styles';
// @ts-ignore
import avatar from '../../assets/avatar.jpg';

export const ThemePreview: React.SFC<{ palette: string[] }> = ({ palette }) => {
  const styles = stylesFn(palette);

  return (
    <div className={styles.window}>
      <div className={styles.sidebar}>
        <span className={styles.teamMenuName}>Dunder Mifflin</span>
        <span className={styles.teamMenuUser}>Michael Scott</span>

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
          <div className={styles.dateDivider}>
            <span>{format(new Date(), 'MMMM Do, YYYY')}</span>
          </div>
          <div className={styles.message}>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <span className={styles.messageUser}>
                Toby Flenderson{' '}
                <span className={styles.messageTime}>
                  {format(subMinutes(new Date(), 10), 'h:mm A')}
                </span>
              </span>
              <span className={styles.messageContent}>Rid dit dit di do!</span>
            </div>
          </div>
          <div className={styles.message}>
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <span className={styles.messageUser}>
                Andrew Bernard{' '}
                <span className={styles.messageTime}>
                  {format(subMinutes(new Date(), 7), 'h:mm A')}
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
};
