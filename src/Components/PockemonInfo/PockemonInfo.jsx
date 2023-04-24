import { Component } from "react";

export class PockemonInfo extends Component {
  state = { pockemon: null };

  componentDidUpdate(prevProps, prevState) {
    const { pockemonName } = this.props;
    console.log("prevProps.pockemonName", prevProps.pockemonName);
    console.log("this.props.pockemonName", pockemonName);
    if (prevProps.pockemonName !== pockemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`)
        .then((res) => res.json())
        .then((pockemon) => this.setState({ pockemon }));
    }
  }
  render() {
    const { pockemon } = this.state;
    const { pockemonName } = this.props;
    return (
      <div>
        {!pockemonName && <div>Enter the Pokemon's name</div>}
        {pockemon && <div>{pockemon.name}</div>}
      </div>
    );
  }
}
