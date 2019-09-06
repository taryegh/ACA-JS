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
// -------- 2.8 INTERACTION --------------
//////////////////////////////////////////

// Question 1
// Create a web-page that asks for a name and outputs it.

const name = prompt("Enter name");
alert(`Name is ${name}`);

*/

/*
///////////////////////////////////////////
// -------- 2.8 CONDITIONALS --------------
///////////////////////////////////////////

// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

// Question 1
// Will alert be shown?
if ("0") {
  alert( 'Hello' ); // Yes
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
