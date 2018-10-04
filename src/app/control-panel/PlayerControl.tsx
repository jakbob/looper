import classnames from "classnames";
import * as React from 'react';
import { connect } from 'react-redux';
import { start, stop } from '../actions/player';
import { State } from '../reducers';
import { getPlaying } from '../selectors';
import * as styles from './PlayerControl.scss';

export interface Props {
  playing: boolean;
  start: () => void;
  stop: () => void;
}

class PlayerControl extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        <button 
          onClick={() => this.props.start()}
          className={
            classnames(styles.controlButton, {
              [styles.active]: this.props.playing
            })
          }
          title="Play"
        >▸</button>
        <button 
          onClick={() => this.props.stop()}
          className={styles.controlButton}
          title="Stop"
        >▪</button>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  playing: getPlaying(state)
});

const mapDispatchToProps = {
  start: start,
  stop: stop
};
export default connect(mapStateToProps, mapDispatchToProps)(PlayerControl);