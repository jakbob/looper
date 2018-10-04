import { ActionType, getType } from "typesafe-actions";
import * as actions from '../actions/player';
import store from "../store";

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
    case getType(actions.start):
      timer = setInterval(() => {
        store.dispatch(actions.beat());
      }, 60000 / state.tempo);
      return {
        ...state,
        playing: true,
      }
    case getType(actions.stop):
      clearInterval(timer);
      return {
        ...state,
        playing: false
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