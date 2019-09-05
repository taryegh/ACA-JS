import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import ControlledInputs from "./ControlledInputs";

const Person = ({ img, name, age, info }) => {
  return (
    <div>
      <img src={img} alt="person" />
      <h2>name : {name}</h2>
      <h2>age : {age}</h2>
      <h6>info: {info}</h6>
    </div>
  );
};

/* 
Validators for standard JavaScript files
  PropTypes.array
  PropTypes.bool
  PropTypes.func
  PropTypes.number
  PropTypes.object
  PropTypes.string
*/

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired
};

Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
  name: "unknown person",
  age: 18,
  info: "N/A info"
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        name: "john",
        age: 24,
        info: "some info"
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
        name: "locke",
        age: 44
      },
      {
        id: 3
        // img: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
        // name: "bob",
        // age: 44
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.people.map(person => {
          return (
            <Person
              key={person.id}
              img={person.img}
              name={person.name}
              age={person.age}
              info={person.info}
            />
          );
        })}
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ControlledInputs />
      </div>
    );
  }
}
