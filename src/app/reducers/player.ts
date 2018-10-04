import { ActionType, getType } from "typesafe-actions";
import * as actions from '../actions/player';

export type PlayerAction = ActionType<typeof actions>;

export interface State {
  playing: boolean;
  activeStep?: number;
}

export const initialState: State = {
  playing: false
}

export const reducer = (state: State = initialState, action: PlayerAction) => {
  switch (action.type) {
    case getType(actions.start):
      return {
        ...state,
        playing: true,
        activeStep: 1
      }
    case getType(actions.stop):
      return {
        ...state,
        playing: false,
        activeStep: null
      }
    default: 
      return state;
  }
}