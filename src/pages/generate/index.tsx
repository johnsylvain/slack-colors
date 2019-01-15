import * as React from 'react';
import { css } from 'emotion';
import { Page } from '../../components/page';
import { ThemePreview } from '../../components/theme-preview';
import { Loader } from '../../components/loader';
import { Stagger } from '../../components/stagger';
import { train } from '../../common/neural-network';
import { Consumer, Context } from '../../context';
// @ts-ignore
import refresh from '../../assets/refresh.svg';
import { theme } from '../../theme';

const styles = {
  button: css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    fontSize: theme.fontSizes.xl,
    color: theme.colors.primary,
    border: 0,
    outline: 0,
    borderRadius: '50%',

    img: {
      position: 'relative',
      transformOrigin: 'center',
      width: 15,
      height: 15,
      pointerEvents: 'none',
      transition: '0.3s ease'
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
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.3
    },

    '&:hover': {
      img: {
        transform: 'rotate(360deg)'
      }
    }
  }),

  header: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.gutters.md,

    h2: {
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.lg
    },

    div: {
      display: 'flex',
      alignItems: 'center',
      color: theme.colors.subtext
    },

    button: {
      display: 'inline-flex',
      marginLeft: theme.gutters.md,
      position: 'relative',

      span: {
        position: 'absolute',
        color: theme.colors.subtext,
        fontFamily: theme.fonts.sansSerif,
        fontSize: theme.fontSizes.sm,
        fontWeight: theme.fontWeights.bold,
        opacity: 0,
        transition: '0.2s ease',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: -1000,
        transform: 'translateX(-40px)'
      },

      '&:hover span': {
        transform: 'translateX(-70px)',
        opacity: 1
      }
    }
  })
};

export class Generate extends React.Component {
  static contextType = Context;

  componentDidMount() {
    if (!this.context.generatedThemes.length) {
      train(this.context.trainingData).then(() => {
        this.context.actions.generateThemes();
      });
    }
  }

  refresh = () => {
    this.context.actions.refreshThemes();
    train(this.context.trainingData).then(() => {
      this.context.actions.generateThemes();
    });
  };

  render() {
    return (
      <Page>
        {this.context.generatedThemes.length ? (
          <div>
            <div className={styles.header}>
              <h2>Your themes.</h2>
              <div>
                <button className={styles.button} onClick={this.refresh}>
                  <span>Refresh themes</span>
                  <img src={refresh} alt="" />
                </button>
              </div>
            </div>
            <Stagger>
              {this.context.generatedThemes.map(palette => (
                <div
                  key={palette.theme.join()}
                  style={{ marginBottom: theme.gutters.lg }}
                >
                  <ThemePreview showPaletteColors palette={palette.theme} />
                </div>
              ))}
            </Stagger>
          </div>
        ) : (
          <Loader>Generating your themes.</Loader>
        )}
      </Page>
    );
  }
}
