'use strict'



let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

sayHi(); // what will it show: "John" or "Pete"?

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?





// 1. Here we make two counters: counter and counter2 using the same makeCounter function. Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;
  
  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());






// 2. Here a counter object is made with the help of the constructor function. Will it work? What will it show?

function Counter() {
  let count = 0;
  
  this.up = function () {
    return ++count;
  };
  
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());






// 3. Look at the code. What will be result of the call at the last line?
let phrase = "Hello";

if (true) {
  let user = "John";
  
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // The result is an error. The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.







// Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(1)(2));
console.log(sum(10)(2));







// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.


function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));



function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  }
}
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.filter(inArray([1, 2, 9])));
