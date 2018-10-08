import classnames from 'classnames';
import * as React from 'react';
import ReactDOM = require('react-dom');
import * as styles from './SequenceStep.scss';

const validKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
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
        />
      </div>
    )
  }
  
  public componentDidMount() {
    const input = ReactDOM.findDOMNode(this.inputRef.current);
    input.addEventListener('keydown', this.handleInput);
  }

  public componentWillUnmount() {
    const input = ReactDOM.findDOMNode(this.inputRef.current);
    input.removeEventListener('keydown', this.handleInput);
  }

  private handleInput = (e: KeyboardEvent) => {
    e.preventDefault();
    const value = e.key.toUpperCase();

    if (validKeys.some(tone => value === tone)) {
      this.props.onStepChange(value + 4);
      return;
    }
    if (validOctaves.some(oct => value === oct)) { 
      this.props.onStepChange(this.props.step.slice(0, 1) + value);
      return;
    }
    if (e.key === 'Backspace' || e.key === 'Delete') {
      this.props.onStepChange('');
      return;
    }
  }
}