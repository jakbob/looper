import { combineReducers } from 'redux';
import * as player from './player';
import * as sequence from './sequence';

export interface State {
  player: player.State;
  sequence: sequence.State;
}

export const initialState: State = {
  player: player.initialState,
  sequence: sequence.initialState
};

export const reducer = combineReducers<State>({
  player: player.reducer,
  sequence: sequence.reducer
})