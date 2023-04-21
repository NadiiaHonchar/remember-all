import { Component } from "react";
import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";

export class PockemonForm extends Component {
  state = { pockemonName: "" };

  handleNameChange = (e) => {
    this.setState({ pockemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { pockemonName } = this.state;
    if (pockemonName.trim() === "") {
      toast("Enter the pokemon's name, please", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    this.props.onSubmit(pockemonName);
    this.setState({ pockemonName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pockemonName"
          value={this.state.pockemonName}
          onChange={this.handleNameChange}
        ></input>
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Search
        </button>
      </form>
    );
  }
}
