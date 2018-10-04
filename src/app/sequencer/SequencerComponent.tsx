import classnames from "classnames";
import * as React from 'react';
import * as styles from './SequencerComponent.scss';

interface Props {
  steps: number;
  activeStep: number;
}

export class Sequencer extends React.Component<Props, undefined> {
  public render() {
    const steps = this.props.steps 
      ? Array(this.props.steps).fill(null).map((_, i) => (
        <div className={classnames(styles.step, {
          [styles.active]: this.props.activeStep === i + 1
        })} />
      ))
      : null;

    return (
      <div className={styles.sequencer}>
        {steps}
      </div>
    );
  }
}
