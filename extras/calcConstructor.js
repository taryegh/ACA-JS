'use strict';


// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  this.read = function() {
    this.a = +prompt('Enter a');
    this.b = +prompt('Enter b');
    
  }

  this.sum = function() {
    return `Sum equals ${this.a + this.b}`;
  }

  this.mul = function() {
    return `Product equals ${this.a * this.b}`;
  }
}

let calc = new Calculator();
calc.read();
console.log(calc.sum());
console.log(calc.mul());
