import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

function People() {
  const friends = [
    { name: "John", job: "developer", age: 23, company: "apple" },
    { name: "Bob", job: "economist", age: 27, company: "facebook" },
    { name: "Suzy", job: "designer", age: 21, company: "twitter" }
  ];

  return (
    <section>
      <Person person={friends[0]} />
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = props => {
  const { name, job, age, company } = props.person;

  return (
    <div>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </div>
  );
};

/*
// PROJECT PERSON
/* function Person() {
  const btn = "search button";
  const firstName = "John";
  const lastName = "Smith";

  return (
    <section>
      <button>{btn}</button>
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{10 + 20}</p>
    </section>
  );
} */

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

ReactDOM.render(<People />, document.getElementById("root"));
