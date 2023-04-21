import { Component } from "react";

export class PockemonInfo extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps.pockemonName", prevProps.pockemonName);
    console.log("this.props.pockemonName", this.props.pockemonName);
    if (prevProps.pockemonName !== this.props.pockemonName) {
    }
  }
  render() {
    return (
      <div>
        <h2>PockemonInfo</h2>
        <p>{this.props.pockemonName}</p>
      </div>
    );
  }
}
