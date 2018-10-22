import { debounce } from 'lodash-es';
import * as React from 'react';
import * as styles from './ValueControl.scss';

export interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export interface State {
  inputValue: number;
}

export class ValueControl extends React.Component<Props, State> {
  private callChangeHandlerDebounced = debounce(value => {
    this.props.onChange(value)
  }, 400);

  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: props.value
    };
  }

  public render() {
    return (
      <label className={styles.label}>
        {this.props.label}:
        <input
          type='number'
          min='1'
          value={this.state.inputValue}
          onChange={this.handleOnChange}
          className={styles.input}
          style={{ width: this.calculatewidth(this.state.inputValue), }}
        />
      </label>
    );
  }
  
  private handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    this.setState({
      inputValue: value
    });
    this.callChangeHandlerDebounced(value);
  };


  private calculatewidth(value: number) {
    const text = value.toString();
    return text ? `${text.length + 1.5}em` : '2em';
  }
}