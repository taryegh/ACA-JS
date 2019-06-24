'use strict';


// 1. Is it possible to create functions A and B such as new A()==new B()?

let obj = {};

function A() { return obj; }
function B() { return obj; }

// console.log( new A() == new B() ); // true




// 2. Create a constructor function Calculator that creates objects with 3 methods:

/* read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance: */

function Calc() {
  this.a =  null;
  this.b =  null;
  
  this.read = function() {
    a = +prompt('Enter a');
    b = +prompt('Enter b');
  };

  this.sum = function() {
    return this.a + this.b;
  }

  this.mul = function() {
    return this.a * this.b;
  }
}