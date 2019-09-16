import React, { Component, Fragment } from "react";

export default class Lesson extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <button data-name={1} onClick={this.handleTab}>
          Tab1
        </button>
        <button data-name={2} onClick={this.handleTab}>
          Tab2
        </button>
        <button data-name={3} onClick={this.handleTab}>
          Tab3
        </button>
      </Fragment>
    );
  }
}
