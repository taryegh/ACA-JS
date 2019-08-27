import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>hello from React</h1>
      <h1>it's me</h1>
    </div>
  );
}

// React.createElement syntax - 3 arguments
// element, propsObject, children
// converter compiler - Babel
/* function Greeting() {
  return React.createElement("div", {}, "hello world");
}

ReactDOM.render(<Greeting />, document.getElementById("root")); */