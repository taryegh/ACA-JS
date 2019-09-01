"use strict";

// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

// Solving with if statement
function isEven(n) {
  if (n % 2) {
    return "odd";
  }

  return "even";
}

console.log(isEven(123));
console.log(isEven(35));
console.log(isEven(70));

// Solving with Ternary operator
function isEvenT(n) {
  return n % 2 ? "odd" : "even";
}

console.log(isEven(123));
console.log(isEven(35));
console.log(isEven(70));
