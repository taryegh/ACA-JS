"use strict";
/*
////////////////////////////////////////
// -------- 2.4 VARIABLES ------------
///////////////////////////////////////

// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

// Question 1.
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin;
let name;
name = "John";
admin = name;
console.log(admin);

// Question 2.
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

const planet = "Earth";
let currentUser = "John";

*/

/*
////////////////////////////////////////
// -------- 2.5 DATA TYPES ------------
///////////////////////////////////////

// There are 7 basic data types in JavaScript.

// number for numbers of any kind: integer or floating-point.
// string for strings. A string may have one or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// object for more complex data structures.
// symbol for unique identifiers.

// Question 1
//What is the output of the script?

let name = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name}`); // hello Ilya

*/

/*
///////////////////////////////////////////////
// -------- 2.6 TYPE CONVERSIONS --------------
///////////////////////////////////////////////

// Question 1
// What are results of these expressions?

console.log("" + 1 + 0); // '10'
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // '9px'
console.log("$" + 4 + 5); // '$45'
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log("  -9  " + 5); // ' - 9 5'
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2

*/

/*
/////////////////////////////////////////
// -------- 2.7 OPERATORS --------------
/////////////////////////////////////////

// Question 1
// What are the final values of all variables a, b, c and d after the code below?

let a = 1,
  b = 1;

let c = ++a;
let d = b++;

console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1

// Question 2
// What are the values of a and x after the code below?

let a = 2;
let x = 1 + (a *= 2);

console.log(a); // 4
console.log(x); // 5

*/

/*
//////////////////////////////////////////
// -------- 2.8 COMPARISONS --------------
//////////////////////////////////////////

// When comparing values of different types, JavaScript converts the values to numbers.

console.log("2" > 1); // true, string '2' becomes a number 2
console.log("01" == 1); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

console.log(true == 1); // true
console.log(false == 0); // true

// Question 1
// What will be the result for these expressions?

console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false

*/

/*
//////////////////////////////////////////
// -------- 2.9 INTERACTION --------------
//////////////////////////////////////////

// Question 1
// Create a web-page that asks for a name and outputs it.

const name = prompt("Enter name");
alert(`Name is ${name}`);

*/

/*
///////////////////////////////////////////
// -------- 2.10 CONDITIONALS --------------
///////////////////////////////////////////

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

// Question 1
// Will alert be shown?
if ("0") {
  alert("Hello"); // Yes
}

// Question 2

let name = prompt("What is name of JavaScript");

if (name === "ECMAScript") {
  console.log("right");
} else {
  console.log("wrong");
}

// Quesiton 3
// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

let num = +prompt("Enter num");

if (num > 0) {
  console.log(1);
} else if (num < 0) {
  console.log(-1);
} else {
  console.log(0);
}

// Question 4
// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result;
result = a + b < 4 ? "Below" : "Over";

// Quesiton 5
// Rewrite if..else using multiple ternary operators '?'.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let message;

message =
  login === "Employee"
    ? "Hello"
    : login === "Director"
    ? "Greetings"
    : login === ""
    ? "No login"
    : "";

*/

/*
/////////////////////////////////////////////////
// -------- 2.11 LOGICAL OPERATORS --------------
/////////////////////////////////////////////////

// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

// Precedence of AND && is higher than OR ||

// Question 1
// What is the code below going to output?

console.log(null || 2 || undefined); // 2

// Question 2
// What will the code below output?

console.log(console.log(1) || 2 || alert(3)); // 1 then 2 because call of console.log does not return a value

// Question 3
// What is this code going to show?

alert(1 && null && 2); // null

// Question 4
// What will the result be?

alert(null || (2 && 3) || 4); // 3

// Question 5
// Write an “if” condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

let age = +prompt("Enter age");

if (age >= 14 && age <= 90) {
  console.log("age is between 14 and 90 inclusively");
} else {
  console.log("not");
}

// Question 6
// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// first variant
let age = +prompt("Enter age");

if (!(age >= 14 && age <= 90)) {
  console.log("age is NOT between 14 and 90 inclusively.");
} else {
  console.log("is");
}

// second variant
let age = +prompt("Enter age");

if (age < 14 || age > 90) {
  console.log("age is NOT between 14 and 90 inclusively.");
} else {
  console.log("is");
}


// Question 7
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); // third


// Question 8
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let login = prompt("Enter login");

if (login === "Admin") {
  let password = prompt("Enter password");
  if (password === "TheMaster") {
    console.log("Welcome");
  } else if (password === "" || password === null) {
    console.log("canceled");
  } else {
    console.log("Wrong password");
  }
} else if (login === "" || login === null) {
  console.log("canceled");
} else {
  console.log("I don't know");
}

*/

/*
/////////////////////////////////////////////////
// ---------------- 2.12 LOOPS -------------------
/////////////////////////////////////////////////

// Syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

// (i > 5) ? alert(i) : continue; // continue isn't allowed here

// instead to use

// if (i > 5) {
//   alert(i);
// } else {
//   continue;
// }

// Question 1
// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert(i--); // 1, because 0 is a falsy value
}


// Question 2
// For every loop iteration, write down which value it outputs and then compare it with the solution.

// The prefix form ++i:

let i = 0;
while (++i < 5) console.log(i); // 1, 2, 3, 4

// The postfix form i++

let i = 0;
while (i++ < 5) console.log(i); // 1, 2, 3, 4, 5




// Question 3
// For each loop write down which values it is going to show. Then compare with the answer.

// The postfix form:

for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4
// The prefix form:

for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4,



// Question 4
// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}



// Question 5
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

//  for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

*/

// Question 6
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

