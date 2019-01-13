import * as React from 'react';
import classNames from 'classnames';
import { Page } from '../../components/page';
import { ThemePreviewStack } from '../../components/theme-preview-stack';
import { Consumer, Context } from '../../context';
import { IContextState } from '../../interfaces';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { css, keyframes } from 'emotion';
import { theme } from '../../theme';

const thumbsUp = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }

  20% {
    transform: translateY(6px) rotate(5deg) scale(0.9);
  }

  40% {
    transform: translateY(-6px) rotate(-5deg) scale(1.1);
  }

  80% {
    transform: translateY(-6px) rotate(-5deg) scale(1.1);
  }
`;

const thumbsDown = keyframes`
  0% {
    transform: rotateY(180deg) translateY(0px) rotate(0deg);
  }

  20% {
    transform: rotateY(180deg) translateY(-6px) rotate(-5deg) scale(0.9);
  }

  40% {
    transform: rotateY(180deg) translateY(6px) rotate(5deg) scale(1.1);
  }

  80% {
    transform: rotateY(180deg) translateY(6px) rotate(5deg) scale(1.1);
  }
`;

const styles = {
  button: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '70px',
    height: '70px',
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    border: 0,
    outline: 0,
    borderRadius: '50%',

    svg: {
      position: 'relative',
      transformOrigin: 'center'
    },

    '&:before': {
      content: "''",
      backgroundColor: theme.colors.primary,
      borderRadius: '50%',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      opacity: 0.2
    }
  }),

  buttonYes: css({
    '&:focus svg': {
      animation: `${thumbsUp} 0.7s ease-out`
    }
  }),

  buttonNo: css({
    svg: {
      transform: 'rotateY(180deg)'
    },

    '&:focus svg': {
      animation: `${thumbsDown} 0.7s ease-out`
    }
  }),

  buttonGroup: css({
    display: 'flex',
    justifyContent: 'space-around'
  })
};

export class Train extends React.Component {
  static contextType = Context;

  vote = (rating: number) => () => {
    this.context.dispatch({
      type: 'CYCLE_THEMES',
      payload: {
        palette: this.context.palettes[0],
        userRating: rating
      }
    });
  };

  render() {
    return (
      <Consumer>
        {(state: IContextState) => (
          <Page>
            <ThemePreviewStack palettes={state.palettes} />
            <div className={styles.buttonGroup}>
              <button
                onClick={this.vote(0)}
                className={classNames(styles.button, styles.buttonNo)}
              >
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
              <button
                onClick={this.vote(1)}
                className={classNames(styles.button, styles.buttonYes)}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </div>
          </Page>
        )}
      </Consumer>
    );
  }
}
