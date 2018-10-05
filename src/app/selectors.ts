import { createSelector } from 'reselect';
import { State } from './reducers';

const getSequenceState = (state: State) => state.sequence;
const getPlayerState = (state: State) => state.player;

export const getSteps = createSelector([getSequenceState], state => state.steps);
export const getTempo = createSelector([getPlayerState], state => state.tempo);
export const getPlaying = createSelector([getPlayerState], state => state.playing);