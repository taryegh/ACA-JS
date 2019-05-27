'use strict';

// some exercises from javascript.info

// ------ Functions ------

// 1. The following function returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result.
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// Using a question mark operator ?
function checkAge(age) {
  return age > 18 ? true : confirm('Do you have your parents permission to access this page?');
}

// console.log(checkAge(14));


// Using OR ||
function checkAge(age) {
  return age > 18 || confirm('Do you have your parents permission to access this page?');
}

// console.log(checkAge(19));







// 2. Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
  return a <= b ? a : b;
}

// console.log(min(3, 2));








// 3. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }

  return res;
}

// console.log(pow(2, 3));











// ------ Function Expressions and arrows ------

// 4. Replace Function Expressions with arrow functions in the code:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   'Do you agree?',
//   () => alert('You agreed'),
//   () => alert('You canceled the execution')
// );











// ------ Recursion and stack ------

// 5. Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Make 3 solution variants:
// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

// loop
function sumTo(n) {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    res += i;
  }

  return res;
}

// console.log(sumTo(100));


// recursion
function sumToR(n) {
  if (n === 0) {
    return 0;
  }

  return n + sumToR(n - 1);
}

// console.log(sumToR(100));



// arithmetic progression formula
function sumToAP(n) {
  return (1 + n) / 2 * n;
}

// console.log(sumToAP(100));









// 6. Write a function factorial(n) that calculates n! using recursive calls.

function calcFacR(n) {
  if (n === 1) {
    return n;
  }

  return n * calcFacR(n - 1);
}

// console.log(calcFacR(5));








// 7. Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n) {
  if (n <= 1) {
    return n;
  }

  return fib(n - 2) + fib(n - 1);
}

// console.log(fib(7));








// ------ Closure ------

// 8. Here we make two counters: counter and counter2 using the same makeCounter function. Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();
const counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // 0
// console.log(counter2()); // 1






// 9. Here a counter object is made with the help of the constructor function. Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

const counter1 = new Counter();

// console.log(counter1.up()); // 1
// console.log(counter1.up()); // 2
// console.log(counter1.down()); // 1









// 10. Look at the code. What will be result of the call at the last line?

const phrase = 'Hello';

if (true) {
  const user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// sayHi(); // will not be called because of being in the outer scope








// 11. Sum with closures - Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// console.log(sum(5)(6));








// 12. We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.
// Make a set of “ready to use” filters:
// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.

const array = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x > a && x < b;
  };
}

// console.log(array.filter(inBetween(3, 7)));


function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

// console.log(array.filter(inArray([1, 5, 10])));






// ------ Function Object, NFE ------

function sayHi() {
  const name = 'a';
  console.log(pr);
}

// sayHi(); //undefined

const sayHi2 = () => {
  console.log(this);
};
// a() //window





// counting function calls

function sayHi3() {
  console.log('Hi');
  sayHi3.counter++;
}

sayHi3.counter = 0;

sayHi3();
sayHi3();
console.log(sayHi3.counter);





// call

function sayHi4() {
  console.log(this.name);
}

const user = { name: 'John' };
const admin = { name: 'Admin' };


sayHi4.call(user); // this = John
sayHi4.call(admin); // this = Admin
