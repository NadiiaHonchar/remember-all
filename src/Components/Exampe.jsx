import { Component } from "react";

import videos from "./videos.json";
import { VideoList } from "./VideoList";
import { Player } from "./Player";

export class Example extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = (link) => {
    this.setState({ selectedVideo: link });
  };

  render() {
    return (
      <div>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}
