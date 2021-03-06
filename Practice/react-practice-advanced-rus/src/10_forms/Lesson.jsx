import React, { Component, Fragment } from "react";

const POSITIONS = [
  {
    id: "fd",
    value: "Front-end Developer",
    title: "Front-end Developer"
  },
  {
    id: "bd",
    value: "Back-end Developer",
    title: "Back-end Developer"
  }
];

export default class Lesson extends Component {
  state = {
    inputText: "",
    textAreaText: "",
    selectText: "",
    showData: {
      name: "",
      text: "",
      position: ""
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

  handleSelectChange = ({ target: { value } }) => {
    this.setState({
      selectText: value
    });
  };

  handleShow = e => {
    e.preventDefault();
    const { inputText, textAreaText, selectText } = this.state;

    this.setState({
      inputText: "",
      textAreaText: "",
      selectText: "",
      showData: {
        name: inputText,
        text: textAreaText,
        position: selectText
      }
    });
  };

  render() {
    const { inputText, textAreaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

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

          {/* Select */}
          <select value={selectText} onChange={this.handleSelectChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </Fragment>
    );
  }
}
