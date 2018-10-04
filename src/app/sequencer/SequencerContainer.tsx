import { connect } from 'react-redux';
import { incrementStep } from '../actions/sequence';
import { State } from '../reducers';
import { getSteps } from '../selectors';
import { Sequencer } from './SequencerComponent';

const mapStateToProps = (state: State) => ({
  steps: getSteps(state),
  activeStep: state.sequence.activeStep
});

const mapDispatchToProps = {
  incrementStep
};

export default connect(mapStateToProps, mapDispatchToProps)(Sequencer);
