import * as Tone from "tone";
import store from "./store";

export function play() {
  let step: number = null;

  store.subscribe(() => {
    const state = store.getState();
    const synth = new Tone.Synth().toMaster();

    if (state.player.playing && state.sequence.activeStep !== step) {
      console.log(state.sequence.activeStep, step)
      synth.triggerAttackRelease('C4', '8n');
      step = state.sequence.activeStep;
    } else if (!state.player.playing && step !== null) {
      step = null;
    }
  })
}