import * as React from 'react';
import * as ReactDOM from 'react-dom';
// tslint:disable-next-line:no-submodule-imports
import * as TestUtils from 'react-dom/test-utils';
import { SequenceStep } from '../../src/app/sequencer/SequenceStep';


describe('SequenceStep', () => {
  let inputNode: HTMLInputElement;
  let onStepChange: jest.Mock<void>;

  beforeEach(() => {
    onStepChange = jest.fn();
    const step = TestUtils.renderIntoDocument(
      <SequenceStep step='C4' isActive={false} onStepChange={onStepChange} />
    ) as SequenceStep;
    const stepNode = ReactDOM.findDOMNode(step) as HTMLElement;
    inputNode = stepNode.querySelector('input');
  })

  it('should display the step value', () => {
    expect(inputNode.value).toEqual('C4');
  });

  it('should handle call onStepChange on step increment', () => {
    TestUtils.Simulate.keyDown(inputNode, {
      key: 'ArrowUp'
    });

    expect(onStepChange).toHaveBeenCalledWith('D4');
  });

  
  it('should handle call onStepChange on key change', () => {
    TestUtils.Simulate.keyDown(inputNode, {
      key: 'G'
    });
    expect(onStepChange).toHaveBeenCalledWith('G4');
  });

  it('should handle call onStepChange on octave change', () => {
    TestUtils.Simulate.keyDown(inputNode, {
      key: '6'
    });
    expect(onStepChange).toHaveBeenCalledWith('C6');
  });

  it('should handle delete', () => {
    TestUtils.Simulate.keyDown(inputNode, {
      key: 'Delete'
    });
    expect(onStepChange).toHaveBeenCalledWith('');
  });

  it('should allow normal behaviour of tab', () => {
    const preventDefault = jest.fn();
    TestUtils.Simulate.keyDown(inputNode, {
      key: 'Tab',
      preventDefault
    });
    expect(preventDefault).not.toHaveBeenCalled();
  });
})

