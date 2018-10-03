import * as React from 'react';
import * as styles from './App.scss';
import { ControlPanel } from './ControlPanel';
import { Sequencer } from './Sequencer';

export default class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className={styles.app}>
                <ControlPanel />
                <Sequencer />
            </div>
        );
    }
}
