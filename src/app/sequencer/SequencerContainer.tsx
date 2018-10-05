import { connect } from 'react-redux';
import { incrementStep } from '../actions/sequence';
import { State } from '../reducers';
import { getSteps } from '../selectors';
import { Sequencer } from './SequencerComponent';

const mapStateToProps = (state: State) => ({
  activeStep: state.sequence.activeStep,
  steps: getSteps(state),
});

const mapDispatchToProps = {
  incrementStep
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
