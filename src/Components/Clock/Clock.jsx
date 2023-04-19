import { Component } from "react";
import { ClockFase } from "./Clock.styled";

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalID = null;

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return <ClockFase>{this.state.time}</ClockFase>;
  }
}
