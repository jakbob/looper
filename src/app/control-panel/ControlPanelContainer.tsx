import { connect } from 'react-redux';
import { setSteps } from '../actions';
import { State } from '../reducers';
import { ControlPanel } from './ControlPanelComponent';

const mapStateToProps = (state: State) => ({
  steps: state.steps,
});

const mapDispatchtoProps = {
  onStepsChange: setSteps,
};

export default connect(mapStateToProps, mapDispatchtoProps)(ControlPanel);
