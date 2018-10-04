import { createAction } from 'typesafe-actions';

export const setNumberOfSteps = createAction('[SEQUENCE] SET_NUM_STEPS', resolve => {
  return (steps: number) => resolve(steps);
});
export const incrementStep = createAction('[SEQUENCE] INCREMENT_STEP', resolve => {
  return (stepIndex: number) => resolve(stepIndex);
});