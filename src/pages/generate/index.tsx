import * as React from 'react';
import { NeuralNetwork } from 'brain.js';
import { Page } from '../../components/page';
import { Consumer, Context } from '../../context';
import { createPalette } from '../../common/helpers';
import { css } from 'emotion';
import { theme } from '../../theme';

const styles = {
  headline: css({
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.lg
  })
};

export class Generate extends React.Component {
  static contextType = Context;

  componentDidMount() {
    const net = new NeuralNetwork();
    net.trainAsync(this.context.trainingData);
    const predictions = [];
    const themes = {
      love: [],
      like: []
    };

    for (let i = 0; i < 10; i++) {
      predictions[i] = createPalette(true)
        .reduce((acc: number[], cur: number[]) => [...acc, ...cur], [])
        .map((num: number) => Math.abs(Math.round(num / 2.55) / 100));
    }
  }

  render() {
    return (
      <Consumer>
        {(state: any) => (
          <Page>
            <h2 className={styles.headline}>You'll love these.</h2>
            <h2 className={styles.headline}>Try something different.</h2>
          </Page>
        )}
      </Consumer>
    );
  }
}
