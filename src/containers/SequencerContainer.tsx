import { connect } from 'react-redux';
import { Sequencer } from '../app/sequencer/SequencerComponent';
import { State } from '../reducers';

const mapStateToProps = (state: State) => ({
  steps: state.steps,
});

export default connect(mapStateToProps, () => ({}))(Sequencer);
