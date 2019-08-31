import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "tick"
    };
  }

  render() {
    const { img, title, author } = this.props.info;

    return (
      <div className="book">
        <img src={img} width="150px" alt="" />
        <div>
          <h4>TITLE: {title}</h4>
          <h6>BY: {author}</h6>
        </div>
      </div>
    );
  }
}
