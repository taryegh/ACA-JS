import React, { Component } from "react";
import Button from "./Button";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "tick"
    };
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
      name: this.state.name === "tick" ? "tock" : "tick",
      age: 23
    });
  };

  // handleClick = () => {
  //   this.setState(prev => {
  //     return {
  //       count: prev.count + 1
  //     };
  //   });
  // };

  render() {
    const { img, title, author } = this.props.info;
    const { handleClick } = this.props;

    return (
      <div className="book">
        <img src={img} width="150px" alt="" />
        <div>
          <h4>TITLE: {title}</h4>
          <h6>BY: {author}</h6>
          <button onClick={this.addCount}>Add count</button>

          <h1>count: {this.state.count}</h1>
          <Button handleClick={handleClick} />
          <h4>{this.state.name}</h4>
        </div>
      </div>
    );
  }
}
