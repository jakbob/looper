import { connect } from 'react-redux';
import { updateStep } from '../actions/sequence';
import { State } from '../reducers';
import { getSteps } from '../selectors';
import { Sequencer } from './SequencerComponent';

const mapStateToProps = (state: State) => ({
  activeStep: state.sequence.activeStep,
  steps: getSteps(state),
});

const mapDispatchToProps = {
  changeStep: updateStep
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
