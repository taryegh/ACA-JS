import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        style={{ backgroundColor: "red", color: "white", fontSize: "1.5rem" }}
        onClick={handleClick}
      >
        I'm lower button
      </button>
    );
  }
}
