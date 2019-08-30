import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        style={{ backgroundColor: "red", color: "white", fontSize: "1.5rem" }}
        onClick={this.props.handleClick}
      >
        I'm lower button
      </button>
    );
  }
}
