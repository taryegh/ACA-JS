import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Book() {
  return (
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
}


/* // PROJECT - BOOK
function Book() {
  return (
    <section className="book">
      <CoverImage />
      <Title />
      <Author />
    </section>
  );
}

const CoverImage = () => (
  <img
    width="250"
    src="https://m.media-amazon.com/images/I/41T53nRtyoL._AC_UY218_.jpg"
    alt="book"
  />
);

const Title = () => (
  <h1>Web Design with HTML, CSS, JavaScript and jQuery Set</h1>
);

const Author = () => (
  <p style={{ backgroundColor: "black", color: "white" }}>Jon Duckett</p>
); */

// NESTED COMPONENTS
/* function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>john</h1>;
const Message = () => <p>it's a message</p>; */

// React.createElement syntax - 3 arguments
// element, propsObject, children
// converter compiler - Babel
/* function Greeting() {
  return React.createElement("div", {}, "hello world");
} 
*/

ReactDOM.render(<Book />, document.getElementById("root"));
