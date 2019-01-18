import { NeuralNetwork } from 'brain.js';
import { createPalette, flatten } from './helpers';

const net = new NeuralNetwork({
  activation: 'leaky-relu'
});

export function train(data: any): Promise<any> {
  return net.trainAsync(data);
}

export function run(iterations: number, limit: number) {
  const predictions = [];

  for (let i = 0; i < iterations; i++) {
    const p = createPalette();

    predictions[i] = {
      theme: p,
      score: net.run(
        flatten(p).map((num: number) => Math.abs(Math.round(num / 2.55) / 100))
      )[0]
    };
  }

  return predictions
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, limit);
}
