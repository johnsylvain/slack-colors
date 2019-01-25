export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((acc: T[], cur: T[]) => [...acc, ...cur], []);
}
