import React, { Component, Fragment } from "react";

export default class Lesson extends Component {
  state = {
    inputText: "",
    textAreaText: "",
    showData: {
      name: "",
      text: ""
    }
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      inputText: value
    });
  };

  handleTextChange = ({ target: { value } }) => {
    this.setState({
      textAreaText: value
    });
  };

  handleShow = e => {
    e.preventDefault();
    const { inputText, textAreaText } = this.state;

    this.setState({
      inputText: "",
      textAreaText: "",
      showData: {
        name: inputText,
        text: textAreaText
      }
    });
  };

  render() {
    const { inputText, textAreaText, showData } = this.state;
    const { name, text } = showData;

    return (
      <Fragment>
        <form>
          {/* Input */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>

          {/* Textarea */}
          <br />
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            value={textAreaText}
            onChange={this.handleTextChange}
          />

          {/* Button */}
          <br />
          <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
      </Fragment>
    );
  }
}
