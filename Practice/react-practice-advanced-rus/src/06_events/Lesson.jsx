import React, { Component } from "react";
import PropTypes from "prop-types";

const MyLink = ({ text, onClick }) => (
  <a href="/test" onClick={onClick}>
    {text}
  </a>
);

MyLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

MyLink.defaultProps = {
  text: "link",
  onClick: () => {}
};

export default class Lesson extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  render() {
    return <MyLink onClick={this.handleClick} />;
  }
}
