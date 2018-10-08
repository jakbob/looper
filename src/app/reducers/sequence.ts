import { ActionType, getType } from 'typesafe-actions';
import * as playerActions from '../actions/player';
import * as sequenceActions from '../actions/sequence';

export type Action = ActionType<typeof sequenceActions | typeof playerActions>;

export type State = Readonly<{
  steps: string[];
  activeStep?: number;
}>;


export const initialState = {
  activeStep: null,
  steps: Array(8).fill(null),
};

function setNumberOfSteps(steps: string[], numSteps) {
  return steps.slice(0, numSteps).concat(
    steps.length < numSteps 
      ? Array(numSteps - steps.length).fill(null) 
      : []
  );
}

function updateStep(steps: string[], stepToUpdate: number, newValue: string) {
  return steps.map((s, index) => index === stepToUpdate ? newValue : s);
}

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case getType(sequenceActions.setNumberOfSteps):
      return {
        ...state,
        steps: setNumberOfSteps(state.steps, action.payload),
      };
    case getType(sequenceActions.updateStep):
      return {
        ...state,
        steps: updateStep(state.steps, action.payload.stepIndex, action.payload.stepValue)
      }
    case getType(playerActions.setPlaying): 
      return {
        ...state,
        activeStep: 1
      }
    case getType(playerActions.reset): 
      return {
        ...state,
        activeStep: null
      }
    case getType(playerActions.beat):
      return {
        ...state,
        activeStep: (state.activeStep % state.steps.length) + 1
      }
    default:
      return state;
  }
};
