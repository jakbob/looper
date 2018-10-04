import { createAction } from 'typesafe-actions';

export const setSteps = createAction('[SEQUENCE] Set steps', resolve => {
  return (steps: number) => resolve(steps);
});