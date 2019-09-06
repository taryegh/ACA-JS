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


///////////////////////////////////////////////
// -------- 2.6 TYPE CONVERSIONS --------------
///////////////////////////////////////////////