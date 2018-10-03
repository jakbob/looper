import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as styles from './App.scss';
import ControlPanelContainer from './control-panel/ControlPanelContainer';
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

export default hot(module)(App);
