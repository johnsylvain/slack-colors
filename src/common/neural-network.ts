import { NeuralNetwork } from 'brain.js';
import { createPalette, formatPalette } from './helpers';

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
      score: net.run(formatPalette(palette))[0]
    };
  }

  return predictions
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, limit);
}
