import { ActionType, getType } from 'typesafe-actions';
import * as playerActions from '../actions/player';
import * as sequenceActions from '../actions/sequence';


const notes = [
  null,
  'C4',
  'D4',
  'E4',
  'F4',
  'G4',
  'A4',
  'B4',
];

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

function incrementStep(steps, stepToInc) {
  const currentValue = steps[stepToInc];
  const currentValueIndex = notes.indexOf(currentValue);
  const nextValue = notes[(currentValueIndex + 1) % notes.length];

  return steps.map((s, index) => index === stepToInc ? nextValue : s);
}

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case getType(sequenceActions.setNumberOfSteps):
      return {
        ...state,
        steps: setNumberOfSteps(state.steps, action.payload),
      };
    case getType(sequenceActions.incrementStep):
      return {
        ...state,
        steps: incrementStep(state.steps, action.payload)
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
