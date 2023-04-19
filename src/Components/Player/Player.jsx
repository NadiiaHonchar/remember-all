import { Component } from "react";

import { PlayerWrapper, StyledPlayer } from "./Player.styled";

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };
  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    return (
      <>
        {!isVideoLoaded && <h2>Loading...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer url={url} controls />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
