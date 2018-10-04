import { connect } from 'react-redux';
import { changeTempo } from '../actions/player';
import { setNumberOfSteps } from '../actions/sequence';
import { State } from '../reducers';
import { getSteps, getTempo } from '../selectors';
import { ControlPanel } from './ControlPanelComponent';

const mapStateToProps = (state: State) => ({
  steps: getSteps(state),
  tempo: getTempo(state)
});

const mapDispatchtoProps = {
  onStepsChange: setNumberOfSteps,
  onTempoChange: changeTempo
};

export default connect(mapStateToProps, mapDispatchtoProps)(ControlPanel);
