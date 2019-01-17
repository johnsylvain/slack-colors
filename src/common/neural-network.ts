import { NeuralNetwork } from 'brain.js';
import { createPalette, flatten } from './helpers';

const net = new NeuralNetwork({
  activation: 'leaky-relu'
});

export function train(input: any[]): Promise<any> {
  return net.trainAsync(input);
}

export function run(iterations: number, limit: number) {
  const predictions = [];

  for (let i = 0; i < iterations; i++) {
    const palette = createPalette();

    predictions[i] = {
      theme: palette,
      score: net.run(
        flatten(palette.map((num: number[]) => [num[0] / 360, ...num.slice(1)]))
      )[0]
    };
  }

  return predictions
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, limit);
}
