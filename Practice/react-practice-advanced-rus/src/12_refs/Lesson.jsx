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

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  componentWillMount() {
    console.log("cwm", this.inputRef);
  }

  componentDidMount() {
    console.log("cdm", this.inputRef);
  }

  handleChange = () => {
    this.setState({
      inputText: this.inputRef.current.value,
      textAreaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value
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
              ref={this.inputRef}
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleChange}
            />
          </label>

          {/* Textarea */}
          <br />
          <label htmlFor="text">Text:</label>
          <textarea
            ref={this.textareaRef}
            id="text"
            value={textAreaText}
            onChange={this.handleChange}
          />

          {/* Button */}
          <br />
          <button onClick={this.handleShow}>Show</button>

          {/* Select */}
          <select
            ref={this.selectRef}
            value={selectText}
            onChange={this.handleChange}
          >
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
