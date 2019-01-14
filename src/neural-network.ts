import { NeuralNetwork } from 'brain.js';
import { createPalette, decimalToHex } from './common/helpers';

const net = new NeuralNetwork({
  activation: 'leaky-relu'
});

export function train(input: any[]): any {
  return net.train(input);
}

export function run() {
  const predictions = [];

  for (let i = 0; i < 10000; i++) {
    const p = createPalette(true)
      .reduce((acc: number[], cur: number[]) => [...acc, ...cur], [])
      .map((num: number) => Math.abs(Math.round(num / 2.55) / 100));

    predictions[i] = {
      theme: decimalToHex(p),
      score: net.run(p)[0]
    };
  }

  return predictions.sort((a: any, b: any) => b.score - a.score).slice(0, 5);
}
