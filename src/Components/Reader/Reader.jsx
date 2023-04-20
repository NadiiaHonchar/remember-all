import { Component } from "react";

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = (value) => {
    this.setState((state) => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };

  render() {
    const activePublication = this.props.items[this.state.publicationIndex];
    return (
      <div>
        <section>
          <button
            type="button"
            disabled={this.state.publicationIndex === 0}
            onClick={() => this.changeIndex(-1)}
          >
            Back
          </button>
          <button
            type="button"
            disabled={
              this.state.publicationIndex === this.props.items.length - 1
            }
            onClick={() => this.changeIndex(1)}
          >
            Next
          </button>
        </section>
        <p>
          {this.state.publicationIndex + 1}/{this.props.items.length}
        </p>
        <article>
          <h2>{activePublication.title}</h2>
          <p>{activePublication.text}</p>
        </article>
      </div>
    );
  }
}
