import * as React from 'react';
import * as styles from './StepControl.scss';

export interface Props {
  label: string;
  value: number;
  onChange: (value) => void;
}

export const ValueControl: React.SFC<Props> = props => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange(parseInt(e.target.value, 10));

    return (
      <label className={styles.label}>
        {props.label}:
        <input
          type='number'
          min="1"
          value={props.value}
          onChange={handleOnChange}
          className={styles.input}
        />
      </label>
    );
  };

