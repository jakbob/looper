import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './App.scss';
import ControlPanelContainer from './control-panel/ControlPanelContainer';
import * as player from './player';
import SequencerContainer from './sequencer/SequencerContainer';

class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className={styles.app}>
                <ControlPanelContainer />
                <SequencerContainer />
            </div>
        );
    }
}

player.play();

export default hot(module)(App);
