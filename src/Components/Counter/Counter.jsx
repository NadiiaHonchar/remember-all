import React from "react";
import {
  CounterWrapper,
  CounterValue,
  CounterControls,
  CounterButton,
} from "./Counter.styled";
export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 10,
  };
  state = { value: this.props.initialValue };
  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <CounterWrapper>
        <CounterValue>{this.state.value}</CounterValue>
        <CounterControls>
          <CounterButton onClick={this.handleIncrement}>+1</CounterButton>
          <CounterButton onClick={this.handleDecrement}>-1</CounterButton>
        </CounterControls>
      </CounterWrapper>
    );
  }
}
