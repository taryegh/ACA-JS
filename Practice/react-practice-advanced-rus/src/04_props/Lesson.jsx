import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = ({ counter, func, number, string }) => {
  console.log(counter, func, number, string);
  return <h1>{`Counter Component. Counter value is: ${counter}`}</h1>;
};

// Props Validation
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  func: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string
};

Counter.defaultProps = {
  func: () => {},
  number: 1,
  string: ""
};

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
        <Counter counter={counter} />
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
