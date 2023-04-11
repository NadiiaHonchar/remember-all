import React from "react";
import { Controls } from "./Controls";
import { CounterWrapper, CounterValue } from "./Counter.styled";
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
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </CounterWrapper>
    );
  }
}
