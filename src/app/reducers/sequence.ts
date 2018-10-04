import { ActionType, getType } from 'typesafe-actions';
import * as playerActions from '../actions/player';
import * as sequenceActions from '../actions/sequence';

export type Action = ActionType<typeof sequenceActions | typeof playerActions>;

export type State = Readonly<{
  steps: number;
  activeStep?: number;
}>;

export const initialState = {
  steps: 8,
  activeStep: null
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case getType(sequenceActions.setSteps):
      return {
        ...state,
        steps: action.payload,
      };
    case getType(playerActions.start): 
      return {
        ...state,
        activeStep: 1
      }
    case getType(playerActions.stop): 
      return {
        ...state,
        activeStep: null
      }
    case getType(playerActions.beat): 
      return {
        ...state,
        activeStep: (state.activeStep % state.steps) + 1
      }
    default:
      return state;
  }
};
