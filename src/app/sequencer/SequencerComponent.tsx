import * as React from 'react';
import * as styles from './SequencerComponent.scss';

interface Props {
  steps: number;
}

export class Sequencer extends React.Component<Props, undefined> {
  public render() {
    const steps = this.props.steps 
      ? Array(this.props.steps).fill(null).map(() => (
        <div className={styles.step} />
      ))
      : null;

    return (
      <div className={styles.sequencer}>
        {steps}
      </div>
    );
  }
}
