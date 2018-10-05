import * as Tone from 'tone';
import store from './store';

export function play() {
  let stepNum: number = null;

  store.subscribe(() => {
    const state = store.getState();
    const synth = new Tone.Synth().toMaster();

    if (state.player.playing && state.sequence.activeStep !== stepNum) {
      const noteToPlay = state.sequence.steps[state.sequence.activeStep - 1];

      if (noteToPlay) {
        synth.triggerAttackRelease(noteToPlay, '8n');
      }
      stepNum = state.sequence.activeStep;
    } else if (!state.player.playing && stepNum !== null) {
      stepNum = null;
    }
  })
}