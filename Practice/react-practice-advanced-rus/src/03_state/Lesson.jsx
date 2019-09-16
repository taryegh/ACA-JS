import React, { Component } from "react";

export default class CounterButton extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        {counter}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
