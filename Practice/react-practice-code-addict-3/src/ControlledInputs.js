import React, { Component } from "react";

export default class ControlledInputs extends Component {
  render() {
    return (
      <form style={{ margin: "3rem" }}>
        <input type="text" name="firstname" />
        <button type="submit">sumbit</button>
      </form>
    );
  }
}
