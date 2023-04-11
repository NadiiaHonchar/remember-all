import React from "react";

import {
  DropDownWrapper,
  DropDownButton,
  DropDownMenu,
} from "./Dropdown.styled";
export class Dropdown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };
  render() {
    return (
      <DropDownWrapper>
        <DropDownButton onClick={this.toggle}>
          {this.state.visible ? "hide" : "show"}
        </DropDownButton>
        {this.state.visible && <DropDownMenu>Drop down menu</DropDownMenu>}
      </DropDownWrapper>
    );
  }
}
