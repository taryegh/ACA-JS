'use strict';


// ------ The old "var" ------

// “var” has no block scope
// 1. var variables are either function-wide or global, they are visible through blocks.

if (true) {
  var test = true; // use "var" instead of "let"
}

console.log(test); // true





// 2. If a code block is inside a function, then var becomes a function-level variable:

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  console.log(phrase); // works
}

sayHi();
//console.log(phrase); // Error: phrase is not defined



// this will work
function sayHi2() {
  phrase = "Hello";
  
  console.log(phrase);
  
  var phrase;
}

sayHi2();


// this will work as well
function sayHi3() {
  phrase = "Hello3";

  if (false) { // in case of var, block scopes are ignored
    var phrase;
  }

  console.log(phrase);
}

sayHi3();



// another example
function sayHi4() {
  console.log(phrase);

  var phrase = "Hello";
}

sayHi4();


// the same example with let
function sayHi4() {
  console.log(phrase);

  // let phrase = "Hello"; // ReferenceError: Cannot access 'phrase' before initialization
}

sayHi4();




