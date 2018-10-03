import * as React from 'react';
import * as styles from './ControlPanelComponent.scss';
import { StepControl } from './StepControl';

export interface Props {
  steps: number;
  onStepsChange: (steps: number) => void;
}

export class ControlPanel extends React.Component<Props, {}> {
  public render() {
    return (
      <div className={styles.controlPanel}>
        <div>Play/Stop</div>
        <div>
          <StepControl
            steps={this.props.steps}
            onChange={steps => this.props.onStepsChange(steps)}
          />
        </div>
      </div>
    );
  };
}
