import * as React from 'react';
import * as styles from './StepControl.scss';

export interface Props {
  steps: number;
  onChange: (steps) => void;
}

export const StepControl: React.SFC<Props> = props => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => props.onChange(parseInt(e.target.value, 10));

    return (
      <label className={styles.label}>
        Steps:
        <input
          type='number'
          min="1"
          value={props.steps}
          onChange={handleOnChange}
          className={styles.input}
        />
      </label>
    );
  };

