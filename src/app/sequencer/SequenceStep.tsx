import classnames from 'classnames';
import * as React from 'react';
import * as styles from './SequenceStep.scss';

const notes = [
  null,
  'C4',
  'D4',
  'E4',
  'F4',
  'G4',
  'A4',
  'B4',
];

export interface Props {
  step: string;
  isActive: boolean;
  onStepChange: (step: string) => void 
}

export class SequenceStep extends React.Component<Props, {}> {
  public render() {
    return (
      <div 
        className={classnames(styles.step, {
          [styles.active]: this.props.isActive
        })}
        onClick={() => this.incrementStep()}
      >{this.props.step}</div>
    )
  }

  private incrementStep() {
    const stepIndex = notes.indexOf(this.props.step);
    const newNote = notes[(stepIndex + 1) % notes.length];
    this.props.onStepChange(newNote);
  }
}