import * as React from 'react';
import * as styles from './ControlPanelComponent.scss';
import { ValueControl } from './ValueControl';

export interface Props {
  steps: number;
  tempo: number;
  onStepsChange: (steps: number) => void;
  onTempoChange: (steps: number) => void;
}

export class ControlPanel extends React.Component<Props, {}> {
  public render() {
    return (
      <div className={styles.controlPanel}>
        <div>Play/Stop</div>
        <div>
          <span className={styles.tempoControl}>
            <ValueControl
              label="Tempo"
              value={this.props.tempo}
              onChange={tempo => this.props.onTempoChange(tempo)}
            />
          </span>
          <span>
            <ValueControl
              label="Steps"
              value={this.props.steps}
              onChange={steps => this.props.onStepsChange(steps)}
            />
          </span>
        </div>
      </div>
    );
  };
}
