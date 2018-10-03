import { connect } from 'react-redux';
import { setSteps, setTempo } from '../actions';
import { State } from '../reducers';
import { ControlPanel } from './ControlPanelComponent';

const mapStateToProps = (state: State) => ({
  steps: state.steps,
  tempo: state.tempo
});

const mapDispatchtoProps = {
  onStepsChange: setSteps,
  onTempoChange: setTempo
};

export default connect(mapStateToProps, mapDispatchtoProps)(ControlPanel);
