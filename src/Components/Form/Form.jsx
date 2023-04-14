import { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    lastName: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: "",
      lastName: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}
