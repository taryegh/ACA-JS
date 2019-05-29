'use strict';


// 1. Function objects contain a few useable properties. For instance, a function’s name is accessible as the “name” property:

function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name); // sayHi




// 2. Object methods have names too:

let user = {
  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  }
}

console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye






// 3. There is another built-in property “length” that returns the number of function parameters, for instance: Rest parameters are not counted!

function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2





// 4. Here we add the counter property to track the total calls count:

function sayHi() {
  console.log("Hi");

  sayHi.counter++;
}

sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

console.log(`Called ${sayHi.counter} times`); // Called 2 times
