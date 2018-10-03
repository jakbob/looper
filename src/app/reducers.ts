import { ActionType, getType } from 'typesafe-actions';
import * as actions from './actions';

export type AppAction = ActionType<typeof actions>;

export type State = Readonly<{
  steps: number;
  tempo: number;
}>;

const initialState = {
  steps: 8,
  tempo: 120,
};

export default (state: State = initialState, action: AppAction) => {
  switch (action.type) {
    case getType(actions.setSteps):
      return {
        ...state,
        steps: action.payload,
      };
    default:
      return state;
  }
};
