import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

// STORE -> GLOBALIZED STATE
let store = createStore(counter);

// ACTION (INCREMENT) (I go to store and say I am hungry - mainly describing)
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// REDUCER -> STORE MODIFIER
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
  }
};



// Display it in the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH -> EXECUTION
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
