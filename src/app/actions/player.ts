import { createAction } from 'typesafe-actions';

export const start = createAction('[PLAYER] START', resolve => resolve);
export const stop = createAction('[PLAYER] STOP', resolve => resolve);

