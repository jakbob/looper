import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions/sequence';

export type AppAction = ActionType<typeof actions>;

export type State = Readonly<{
  steps: number;
  tempo: number;
}>;

export const initialState = {
  steps: 8,
  tempo: 120,
};

export const reducer = (state: State = initialState, action: AppAction) => {
  switch (action.type) {
    case getType(actions.setSteps):
      return {
        ...state,
        steps: action.payload,
      };
    case getType(actions.setTempo):
      return {
        ...state,
        tempo: action.payload,
      };
    default:
      return state;
  }
};
