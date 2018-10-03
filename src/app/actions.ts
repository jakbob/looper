import { createAction } from 'typesafe-actions';

export const setSteps = createAction('SET_STEPS', resolve => {
  return (steps: number) => resolve(steps);
});

export const setTempo = createAction('SET_TEMPO', resolve => {
  return (tempo: number) => resolve(tempo);
});
