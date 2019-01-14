import { NeuralNetwork } from 'brain.js';
import { createPalette, decimalToHex } from './helpers';

const net = new NeuralNetwork({
  activation: 'leaky-relu'
});

export function train(input: any[]): Promise<any> {
  return net.trainAsync(input);
}

export function run(iterations: number, limit: number) {
  const predictions = [];

  for (let i = 0; i < iterations; i++) {
    const p = createPalette(true)
      .reduce((acc: number[], cur: number[]) => [...acc, ...cur], [])
      .map((num: number) => Math.abs(Math.round(num / 2.55) / 100));

    predictions[i] = {
      theme: decimalToHex(p),
      score: net.run(p)[0]
    };
  }

  return predictions
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, limit);
}
