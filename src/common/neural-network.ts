import { NeuralNetwork } from 'brain.js';
import { createPaletteHsl } from './color';
import { flatten } from './util';

const net = new NeuralNetwork({
  activation: 'leaky-relu'
});

export function train(data: any): Promise<any> {
  return net.trainAsync(data);
}

export function run(iterations: number, limit: number) {
  const predictions = [];

  for (let i = 0; i < iterations; i++) {
    const p = createPaletteHsl();

    predictions[i] = {
      theme: p,
      score: net.run(
        flatten(p).map((num: number, index: number) =>
          index % 3 === 0 ? num / 360 : num / 100
        )
      )[0]
    };
  }

  return predictions
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, limit);
}
