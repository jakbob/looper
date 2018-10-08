import * as React from 'react';
import * as styles from './SequencerComponent.scss';
import { SequenceStep } from './SequenceStep';

interface Props {
  steps: string[];
  activeStep: number;
  changeStep: (stepIndex: number, stepValue: string) => void
}

export class Sequencer extends React.Component<Props, undefined> {
  public render() {
    const steps = this.props.steps
      ? this.props.steps.map((step, i) => (
        <SequenceStep
          key={i}
          step={step}
          isActive={this.props.activeStep === i + 1}
          onStepChange={val => this.props.changeStep(i, val)}
        />
      ))
      : null;

    return (
      <div className={styles.sequencer}>
        {steps}
      </div>
    );
  }
}
