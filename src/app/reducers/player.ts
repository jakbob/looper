import { ActionType, getType } from "typesafe-actions";
import * as actions from '../actions/player';

export type PlayerAction = ActionType<typeof actions>;

export interface State {
  playing: boolean;
  tempo: number;
}

export const initialState: State = {
  playing: false,
  tempo: 120
}

let timer;

export const reducer = (state: State = initialState, action: PlayerAction) => {
  switch (action.type) {
    case getType(actions.setPlaying):
      return {
        ...state,
        playing: action.payload,
      }
    case getType(actions.setTempo):
      return {
        ...state,
        tempo: action.payload,
      };
    default: 
      return state;
  }
}