'use strict';


// ------- CLOSURE ---------

// 1. The function sayHi uses an external variable name. When the function runs, which value is it going to use?
let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // Pete



// 2. The function makeWorker makes another function and returns it. That new function can be called from somewhere else. Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name2 = "Pete";

  return function () {
    console.log(name);
  };
}

let name2 = "John";

// create a function
let work = makeWorker();

// call it
work(); // Pete





// 3. A function is called “nested” when it is created inside another function. It is easily possible to do this with JavaScript.

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

sayHiBye('John', 'Smith');





// 4. Closure counter function

function makeCounter() {
  let count = 0;

  return function () {
    return count++; // has access to the outer "count"
  };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2









// 5. For every call to makeCounter() a new function Lexical Environment is created, with its own count. So the resulting counter functions are independent.

function makeCounter2() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter1 = makeCounter2();
let counter2 = makeCounter2();

console.log(counter1()); // 0
console.log(counter1()); // 1

console.log(counter2()); // 0 (independent)
