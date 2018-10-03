import { connect } from 'react-redux';
import { State } from '../reducers';
import { Sequencer } from './SequencerComponent';

const mapStateToProps = (state: State) => ({
  steps: state.steps,
});

export default connect(mapStateToProps, () => ({}))(Sequencer);
