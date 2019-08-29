import React from "react";
import "./App.css";

import { name, age } from "./components/data";
import Booklist from "./components/Booklist";

function App() {
  return (
    <div>
      hello from App
      <Booklist />
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}

export default App;
