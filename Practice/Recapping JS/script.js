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



// Question 6
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);



// Question 7

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let num = +prompt("Enter number to count primes");
let o = "";
outer: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue outer;
  }
  o += `${i}, `;
}
console.log(o);

*/

/*
/////////////////////////////////////////////////
// -------------- 2.13 SWITCH -------------------
/////////////////////////////////////////////////

// Question 1
// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if (browser === "Edge") {
  console.log("You have got the Edge");
} else if (
  browser === "Chrome" ||
  browser === "Firebox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}



// Rewrite the code below using a single switch statement:

let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}


switch (a) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log("2, 3");
    break;
}

*/

/*
/////////////////////////////////////////////////////
// -------------- 2.14 FUNCTIONS -------------------
/////////////////////////////////////////////////////

// Question 1
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

// No Difference

// Question 2
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||

function checkAgeT(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAgeL(age) {
  return age > 18 || confirm("Did parents allow you?");
}


// Question 3
// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  return a < b ? a : b;
}



// Question 4
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x, n) {
  let num = 1;
  for (let i = 0; i < n; i++) {
    num *= x;
  }
  return num;
}
console.log(pow(2, 3));

*/

/*
//////////////////////////////////////////////////////////////////////////
// -------------- 2.15 FUNCTION EXPRESSIONS AND ARROWS -------------------
//////////////////////////////////////////////////////////////////////////

// Question 1
// Replace Function Expressions with arrow functions in the code:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() {
    alert("You agreed.");
  },
  function() {
    alert("You canceled the execution.");
  }
);

ask("Do you agree", () => alert("You agreed"), () => alert("You canceled"));

*/

/*
//////////////////////////////////////////////////////////////////////////
// -------------- 3.2 CODING STYLE -------------------
//////////////////////////////////////////////////////////////////////////

//Question 1
// What’s wrong with the code style below?
//fixed!
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else {
  alert(pow(x, n));
}



/////////////////////////////////////////////////////
// -------------- 4.1 OBJECTS ----------------------
/////////////////////////////////////////////////////

// We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true // multiword property name must be quoted
};

console.log(user.age);
console.log(user['likes birds']);
console.log(user['name']);

let someKey = 'age';
console.log(user[someKey]);



// looping with for
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}



const obj1 = {
  num: 1
};

const obj2 = {
  num: 2
};


// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.




// Question 1
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

const user = {};
user.name = 'John';
user['surname'] = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);




// Question 2
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const someObj = {};
console.log(isEmpty(someObj));

someObj['age'] = 27;
console.log(isEmpty(someObj));


// Question 3
// Is it possible to change an object declared with const? What do you think?


const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

// Yes, since we are changing the reference not the variable itself



// Question 4
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

function sum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum+=obj[key];
  }
  obj.sum = sum;
}

sum(salaries);

console.log(salaries);



// Question 5
// Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// multiplyNumeric(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.


function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);



/////////////////////////////////////////////////////
// -------------- 4.3 SYMBOL ----------------------
/////////////////////////////////////////////////////

let id = Symbol("id1");

let user = {
  name: "Taron",
  [id]: 1
};

console.log(user);




let user = {
  name: "Taron",
  sayHi() {
    console.log(name);
  }
};


*/

/*
/////////////////////////////////////////////////////////////////
// -------------- 4.4 OBJECT METHODS, THIS ----------------------
/////////////////////////////////////////////////////////////////

// Question 1
// What is the result of this code?

let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
}(user.go)(); // error, because of semicolon missing
// P.S. There’s a pitfall :)



// Question 2
// In the code below we intend to call user.go() method 4 times in a row.

// But calls (1) and (2) works differently from (3) and (4). Why?

let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined // this attachment lost

(obj.go || obj.stop)(); // (4) undefined // this attachment lost



// Question 3
// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref); // What's the result? // would not work because theire is no object calling a method



// Question 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calc = {
  read() {
    this.val1 = +prompt("Enter val1");
    this.val2 = +prompt("Enter val2");
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    this.prod = this.val1 * this.val2;
    return this.prod;
  }
};



// Question 5
// There’s a ladder object that allows to go up and down:

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };
// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep(); // 1

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

*/

/*
//////////////////////////////////////////////////////////////////////
// -------------- 4.6 CONSTRUCTOR, OPERATOR NEW ----------------------
//////////////////////////////////////////////////////////////////////

// Question 1
// Is it possible to create functions A and B such as new A()==new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true // yes

const obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(new A() === new B());



// Question 2
// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function() {
    this.val1 = +prompt("Enter value 1");
    this.val2 = +prompt("Enter value 2");
  };
  this.sum = function() {
    return this.val1 + this.val2;
  };
  this.mul = function() {
    return this.val1 * this.val2;
  };
}

let calc = new Calculator();



// Question 3
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Enter number');
  }
}

*/

///////////////////////////////////////////////////////////////////
// -------------- 4.6 METHODS OF PRIMITIVES ----------------------
///////////////////////////////////////////////////////////////////

// Consider the following code:

// let str = "Hello";

// str.test = 5;

// alert(str.test);
// How do you think, will it work? What will be shown? - Error

/////////////////////////////////////////////////////
// -------------- 5.2 NUMBERS ----------------------
/////////////////////////////////////////////////////

/*
// Question 1
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// P.S. There is a gotcha with types.

function sum() {
  const a = +prompt("Enter a");
  const b = +prompt("Enter b");
  alert(a + b);
}
sum();



// Question 2
// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

// For instance:

//  alert( 1.35.toFixed(1) ); // 1.4
// In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

//  alert( 6.35.toFixed(1) ); // 6.3
// How to round 6.35 the right way?

console.log(Math.round(6.35 * 10) / 10);





// Question 3
// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

// The resulting value must be returned as a number.

// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber() {
  let n = prompt('Enter number');
  if (isFinite(n)) {
    return n;
  }
  readNumber();
}
console.log(readNumber());



// Question 4
// This loop is infinite. It never ends. Why?

let i = 0;
while (i != 10) {
  i += 0.2;
}

// never becomes 10 actually because of precision losses, it should be written while i < 10



// Question 5
// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:

function random(min, max) {
  return min + Math.random() * (max - min);
}
console.log(random(3, 10));

*/

// Question 6
// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

console.log(randomInteger(1, 3));
