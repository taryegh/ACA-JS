import React, { Component } from "react";
import "./App.css";
import Booklist from "./components/Booklist";

class App extends Component {
  render() {
    return (
      <div>
        hello from App
        <Booklist />
      </div>
    );
  }
}

export default App;
