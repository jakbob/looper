import { connect } from 'react-redux';
import { State } from '../reducers';
import { getSteps } from '../selectors';
import { Sequencer } from './SequencerComponent';

const mapStateToProps = (state: State) => ({
  steps: getSteps(state),
});

export default connect(mapStateToProps, () => ({}))(Sequencer);
