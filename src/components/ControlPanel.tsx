import * as React from 'react';
import * as styles from './ControlPanel.scss';

export class ControlPanel extends React.Component {
  public render() {
    return (
      <div className={styles.controlPanel}>Play/Stop</div>
    );
  }
}
