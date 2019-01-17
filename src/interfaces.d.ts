export interface IAction {
  type: string;
  payload?: any;
}

export interface ILink {
  to: string;
  text: any;
}

export interface IContextState {
  maxVotingLimit: number;
  votingDisabled: boolean;
  palettes: number[][];
  trainingData: any[];
  generatedThemes: any[];
  actions: {
    [key: string]: (data?: any) => void;
  };
}
