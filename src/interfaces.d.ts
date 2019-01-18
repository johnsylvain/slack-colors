export interface IAction {
  type: string;
  payload?: any;
}

export interface ILink {
  to: string;
  text: any;
}

export interface IContextState {
  [key: string]: any;
}

export type IRgbPalette = number[][];
