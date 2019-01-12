export interface IAction {
  type: string;
  payload?: any;
}

export interface ILink {
  to: string;
  text: any;
}

export interface IContextState {
  dispatch: (action: IAction) => IContextState;
  [key: string]: any;
}
