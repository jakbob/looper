import classnames from 'classnames';
import * as React from 'react';
import * as styles from './SequencerComponent.scss';

interface Props {
  steps: string[];
  activeStep: number;
  incrementStep: (stepIndex: number) => void
}

export class Sequencer extends React.Component<Props, undefined> {
  public render() {
    const steps = this.props.steps 
      ? this.props.steps.map((step, i) => (
        <div 
          className={classnames(styles.step, {
            [styles.active]: this.props.activeStep === i + 1
          })}
          onClick={() => this.props.incrementStep(i)}
        >{step}</div>
      ))
      : null;

    return (
      <div className={styles.sequencer}>
        {steps}
      </div>
    );
  }
}
