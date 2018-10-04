import { createAction } from 'typesafe-actions';

export const start = createAction('[PLAYER] START', resolve => resolve);
export const stop = createAction('[PLAYER] STOP', resolve => resolve);

export const setTempo = createAction('[PLAYER] SET_TEMPO', resolve => {
  return (tempo: number) => resolve(tempo);
});

export const beat = createAction('[PLAYER] BEAT');
