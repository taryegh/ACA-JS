'use strict';


// --------- FUNCTIONS EXPRESSIONS, ARROW FUNCTIONS ---------


// 1. Function expressions can be copied like this
function sayHi() {
  console.log("Hello");
}

let func = sayHi;

func(); // Hello
sayHi(); // Hello





// 2. Passing functions as values and using function expressions.
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}


ask("Do you agree?", showOk, showCancel);




// the same with anonymous functions
function ask2(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask2(
  "Do you agree?",
  function() { console.log("You agreed."); },
  function() { console.log("You canceled the execution."); }
);





// 3. Function declaration vs function expression
console.log(sum(5, 6)); // 11

// console.log(sub(5, 6)); // ReferenceError: Cannot access 'sub' before initialization

function sum(a, b) {
  return a + b;
}


let sub = function (a, b) {
  return a - b;
}





// 4. When a Function Declaration is made within a code block, it is visible everywhere inside that block. But not outside of it.
let age = 18;

if (age < 18) {
  function welcome() {
    return "Hello!";
  }
} else {
  function welcome() {
    return "Greetings!";
  }
}

// console.log(welcome()); // Error: welcome is not defined


// to make it work
let age2 = 18;

let welcome2;

if (age < 18) {

  welcome2 = function () {
    console.log("Hello!");
  };
} else {

  welcome2 = function () {
    console.log("Greetings!");
  };
}

welcome2();




// with arrow function
function ask3(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask3(
  "Do you agree?",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
);

