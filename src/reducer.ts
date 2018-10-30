import { IAction } from './interfaces';

const UPDATE_NAME = 'UPDATE_NAME';

export function reducer<T extends object>(action: IAction, state: T): T {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
}
