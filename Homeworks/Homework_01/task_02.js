"use strict";

// 2. Given two numbers. Print 1 if one of them is divisible by the other one, otherwise print 0.

function isDivisible(a, b) {
  if (a % b === 0 || b % a === 0) {
    return 1;
  }

  return 0;
}

console.log(isDivisible(3, 14));
console.log(isDivisible(18, 2));
console.log(isDivisible(7, 21));

// Solving with Ternary operator
function isDivisibleT(a, b) {
  return a % b && b % a ? 0 : 1;
}

console.log(isDivisibleT(3, 14));
console.log(isDivisibleT(18, 2));
console.log(isDivisibleT(7, 21));