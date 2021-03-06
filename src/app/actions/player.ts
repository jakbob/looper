import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionType, createAction } from 'typesafe-actions';
import { State } from '../reducers';

let beatInterval: number;

function startBeatDispatch(dispatch: Dispatch, tempo: number) {
  beatInterval = window.setInterval(() => {
    dispatch(beat());
  }, 60000 / tempo);
}

export const setPlaying = createAction('[PLAYER] START', resolve => (playing: boolean) => resolve(playing));
export const setTempo = createAction('[PLAYER] SET_TEMPO', resolve => {
  return (tempo: number) => resolve(tempo);
});
export const beat = createAction('[PLAYER] BEAT');
export const reset = createAction('[PLAYER] RESET');

export const start = (): ThunkAction<void, State, void, ActionType<typeof setPlaying | typeof beat>> => {
  return (dispatch, getState) => {
    dispatch(setPlaying(true));
    const tempo = getState().player.tempo;
    startBeatDispatch(dispatch, tempo);
  }
}

export const stop = (): ThunkAction<void, State, void, ActionType<typeof setPlaying | typeof reset>> => {
  return dispatch => {
    dispatch(setPlaying(false));
    dispatch(reset());
    clearInterval(beatInterval);
  }
}

export const changeTempo = (tempo: number): ThunkAction<void, State, void, ActionType<typeof setTempo>> => {
  return dispatch => {
    dispatch(setTempo(tempo));
    clearInterval(beatInterval);
    startBeatDispatch(dispatch, tempo);
  }
}