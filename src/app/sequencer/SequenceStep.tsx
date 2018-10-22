import classnames from 'classnames';
import * as React from 'react';
import * as styles from './SequenceStep.scss';

const validKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const validOctaves = ['1', '2', '3', '4', '5', '6', '7'];

export interface Props {
  step: string;
  isActive: boolean;
  onStepChange: (step: string) => void
}

export class SequenceStep extends React.Component<Props, {}> {
  private inputRef = React.createRef<HTMLInputElement>();
  public render() {
    return (
      <div
        className={classnames(styles.step, {
          [styles.active]: this.props.isActive
        })}
      >
        <input
          ref={this.inputRef}
          value={this.props.step}
          className={styles.stepInput}
          onKeyDown={e => this.handleInput(e)}
        />
      </div>
    )
  }

  private handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^([A-Z]|[0-9])$/i.test(e.key)) {
      this.handleSetValue(e);
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      this.handleDelete(e);
    }

    if (e.key.startsWith('Arrow')) {
      this.handleIncrementStep(e);
    }
  }

  private handleSetValue(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const value = e.key.toUpperCase();
    if (validKeys.some(tone => value === tone)) {
      this.props.onStepChange(value + 4);
      return;
    }
    if (validOctaves.some(oct => value === oct) && this.props.step) {
      this.props.onStepChange(this.props.step.slice(0, 1) + value);
      return;
    }
  }

  private handleDelete(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.onStepChange('');
  }

  private handleIncrementStep(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();

    if (e.key === 'ArrowUp') {
      this.incrementStep(1);
    }
    if (e.key === 'ArrowDown') {
      this.incrementStep(-1);
    }
  }

  private incrementStep(direction: 1 | -1) {
    if (!this.props.step) {
      this.props.onStepChange('C4');
      return;
    }

    const currentKey = this.props.step.slice(0, 1);
    const currentOctave = this.props.step.slice(1, 2);
    const keyIndex = validKeys.indexOf(currentKey);
    const octaveIndex = validOctaves.indexOf(currentOctave);

    if ((keyIndex + direction) >= 0 && (keyIndex + direction) < validKeys.length) {
      const nextKey = validKeys[keyIndex + direction];
      this.props.onStepChange(nextKey + currentOctave);
    } else if ((octaveIndex + direction) >= 0 && (octaveIndex + direction) < validOctaves.length) {
      const nextKeyIndex = (((keyIndex + direction) % validKeys.length) + validKeys.length) % validKeys.length;
      const nextKey = validKeys[nextKeyIndex];
      const nextOctave = validOctaves[octaveIndex + direction];
      this.props.onStepChange(nextKey + nextOctave);
    }
  }
}