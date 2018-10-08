import { createAction } from 'typesafe-actions';

export const setNumberOfSteps = createAction('[SEQUENCE] SET_NUM_STEPS', resolve => {
  return (steps: number) => resolve(steps);
});
export const updateStep = createAction('[SEQUENCE] UPDATE STEP', resolve => {
  return (stepIndex: number, stepValue: string) => resolve({
    stepIndex, stepValue
  });
});